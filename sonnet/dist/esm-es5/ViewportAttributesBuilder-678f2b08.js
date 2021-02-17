var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { W as WebUtils } from './WebUtils-eeb89633.js';
import { a as commonjsGlobal, c as createCommonjsModule } from './_commonjsHelpers-7b8ed50b.js';
var AbstractContext = /** @class */ (function () {
    function AbstractContext() {
        this.values = new Map();
    }
    AbstractContext.prototype.getInstance = function (key) {
        return this.values.get(key);
    };
    AbstractContext.prototype.add = function (key, value) {
        this.values.set(key, value);
    };
    AbstractContext.prototype.remove = function (key) {
        this.values.delete(key);
    };
    AbstractContext.prototype.exists = function (key) {
        return this.values.has(key);
    };
    AbstractContext.prototype.getObject = function () {
        var result = {};
        for (var _b = 0, _c = this.values; _b < _c.length; _b++) {
            var prop = _c[_b];
            result[prop[0]] = prop[1];
        }
        return result;
    };
    AbstractContext.prototype.fromObject = function (instance) {
        var _this = this;
        Object.keys(instance).forEach(function (key) {
            _this.values.set(key, instance[key]);
        });
        return this;
    };
    AbstractContext.prototype.getValues = function () {
        return this.values;
    };
    return AbstractContext;
}());
var DefaultContext = /** @class */ (function (_super) {
    __extends(DefaultContext, _super);
    function DefaultContext() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultContext.create = function () {
        return new DefaultContext();
    };
    return DefaultContext;
}(AbstractContext));
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect$1;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof commonjsGlobal === "object" ? commonjsGlobal :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect$1 || (Reflect$1 = {}));
var check = function (it) {
    return it && it.Math == Math && it;
};
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 = 
// eslint-disable-next-line no-undef
check(typeof globalThis == 'object' && globalThis) ||
    check(typeof window == 'object' && window) ||
    check(typeof self == 'object' && self) ||
    check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
    // eslint-disable-next-line no-new-func
    (function () { return this; })() || Function('return this')();
var fails = function (exec) {
    try {
        return !!exec();
    }
    catch (error) {
        return true;
    }
};
// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
    return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});
var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);
// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor(this, V);
    return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;
var objectPropertyIsEnumerable = {
    f: f
};
var createPropertyDescriptor = function (bitmap, value) {
    return {
        enumerable: !(bitmap & 1),
        configurable: !(bitmap & 2),
        writable: !(bitmap & 4),
        value: value
    };
};
var toString = {}.toString;
var classofRaw = function (it) {
    return toString.call(it).slice(8, -1);
};
var split = ''.split;
// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins
    return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
    return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;
// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
    if (it == undefined)
        throw TypeError("Can't call method on " + it);
    return it;
};
// toObject with fallback for non-array-like ES3 strings
var toIndexedObject = function (it) {
    return indexedObject(requireObjectCoercible(it));
};
var isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
};
// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
    if (!isObject(input))
        return input;
    var fn, val;
    if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
        return val;
    if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input)))
        return val;
    if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input)))
        return val;
    throw TypeError("Can't convert object to primitive value");
};
var hasOwnProperty = {}.hasOwnProperty;
var has = function (it, key) {
    return hasOwnProperty.call(it, key);
};
var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);
var documentCreateElement = function (it) {
    return EXISTS ? document$1.createElement(it) : {};
};
// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
    return Object.defineProperty(documentCreateElement('div'), 'a', {
        get: function () { return 7; }
    }).a != 7;
});
var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject(O);
    P = toPrimitive(P, true);
    if (ie8DomDefine)
        try {
            return nativeGetOwnPropertyDescriptor(O, P);
        }
        catch (error) { /* empty */ }
    if (has(O, P))
        return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};
var objectGetOwnPropertyDescriptor = {
    f: f$1
};
var anObject = function (it) {
    if (!isObject(it)) {
        throw TypeError(String(it) + ' is not an object');
    }
    return it;
};
var nativeDefineProperty = Object.defineProperty;
// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (ie8DomDefine)
        try {
            return nativeDefineProperty(O, P, Attributes);
        }
        catch (error) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes)
        throw TypeError('Accessors not supported');
    if ('value' in Attributes)
        O[P] = Attributes.value;
    return O;
};
var objectDefineProperty = {
    f: f$2
};
var createNonEnumerableProperty = descriptors ? function (object, key, value) {
    return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
    object[key] = value;
    return object;
};
var setGlobal = function (key, value) {
    try {
        createNonEnumerableProperty(global_1, key, value);
    }
    catch (error) {
        global_1[key] = value;
    }
    return value;
};
var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});
var sharedStore = store;
var functionToString = Function.toString;
// this helper broken in `3.4.1-3.4.4`, so we can't use `shared` helper
if (typeof sharedStore.inspectSource != 'function') {
    sharedStore.inspectSource = function (it) {
        return functionToString.call(it);
    };
}
var inspectSource = sharedStore.inspectSource;
var WeakMap$1 = global_1.WeakMap;
var nativeWeakMap = typeof WeakMap$1 === 'function' && /native code/.test(inspectSource(WeakMap$1));
var shared = createCommonjsModule(function (module) {
    (module.exports = function (key, value) {
        return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
    })('versions', []).push({
        version: '3.8.1',
        mode: 'global',
        copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
    });
});
var id = 0;
var postfix = Math.random();
var uid = function (key) {
    return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};
var keys = shared('keys');
var sharedKey = function (key) {
    return keys[key] || (keys[key] = uid(key));
};
var hiddenKeys = {};
var WeakMap$2 = global_1.WeakMap;
var set, get, has$1;
var enforce = function (it) {
    return has$1(it) ? get(it) : set(it, {});
};
var getterFor = function (TYPE) {
    return function (it) {
        var state;
        if (!isObject(it) || (state = get(it)).type !== TYPE) {
            throw TypeError('Incompatible receiver, ' + TYPE + ' required');
        }
        return state;
    };
};
if (nativeWeakMap) {
    var store$1 = sharedStore.state || (sharedStore.state = new WeakMap$2());
    var wmget = store$1.get;
    var wmhas = store$1.has;
    var wmset = store$1.set;
    set = function (it, metadata) {
        metadata.facade = it;
        wmset.call(store$1, it, metadata);
        return metadata;
    };
    get = function (it) {
        return wmget.call(store$1, it) || {};
    };
    has$1 = function (it) {
        return wmhas.call(store$1, it);
    };
}
else {
    var STATE = sharedKey('state');
    hiddenKeys[STATE] = true;
    set = function (it, metadata) {
        metadata.facade = it;
        createNonEnumerableProperty(it, STATE, metadata);
        return metadata;
    };
    get = function (it) {
        return has(it, STATE) ? it[STATE] : {};
    };
    has$1 = function (it) {
        return has(it, STATE);
    };
}
var internalState = {
    set: set,
    get: get,
    has: has$1,
    enforce: enforce,
    getterFor: getterFor
};
var redefine = createCommonjsModule(function (module) {
    var getInternalState = internalState.get;
    var enforceInternalState = internalState.enforce;
    var TEMPLATE = String(String).split('String');
    (module.exports = function (O, key, value, options) {
        var unsafe = options ? !!options.unsafe : false;
        var simple = options ? !!options.enumerable : false;
        var noTargetGet = options ? !!options.noTargetGet : false;
        var state;
        if (typeof value == 'function') {
            if (typeof key == 'string' && !has(value, 'name')) {
                createNonEnumerableProperty(value, 'name', key);
            }
            state = enforceInternalState(value);
            if (!state.source) {
                state.source = TEMPLATE.join(typeof key == 'string' ? key : '');
            }
        }
        if (O === global_1) {
            if (simple)
                O[key] = value;
            else
                setGlobal(key, value);
            return;
        }
        else if (!unsafe) {
            delete O[key];
        }
        else if (!noTargetGet && O[key]) {
            simple = true;
        }
        if (simple)
            O[key] = value;
        else
            createNonEnumerableProperty(O, key, value);
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
    })(Function.prototype, 'toString', function toString() {
        return typeof this == 'function' && getInternalState(this).source || inspectSource(this);
    });
});
var path = global_1;
var aFunction = function (variable) {
    return typeof variable == 'function' ? variable : undefined;
};
var getBuiltIn = function (namespace, method) {
    return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
        : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};
var ceil = Math.ceil;
var floor = Math.floor;
// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
    return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};
var min = Math.min;
// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
    return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};
var max = Math.max;
var min$1 = Math.min;
// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
var toAbsoluteIndex = function (index, length) {
    var integer = toInteger(index);
    return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};
// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
        var O = toIndexedObject($this);
        var length = toLength(O.length);
        var index = toAbsoluteIndex(fromIndex, length);
        var value;
        // Array#includes uses SameValueZero equality algorithm
        // eslint-disable-next-line no-self-compare
        if (IS_INCLUDES && el != el)
            while (length > index) {
                value = O[index++];
                // eslint-disable-next-line no-self-compare
                if (value != value)
                    return true;
                // Array#indexOf ignores holes, Array#includes - not
            }
        else
            for (; length > index; index++) {
                if ((IS_INCLUDES || index in O) && O[index] === el)
                    return IS_INCLUDES || index || 0;
            }
        return !IS_INCLUDES && -1;
    };
};
var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.includes
    includes: createMethod(true),
    // `Array.prototype.indexOf` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod(false)
};
var indexOf = arrayIncludes.indexOf;
var objectKeysInternal = function (object, names) {
    var O = toIndexedObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O)
        !has(hiddenKeys, key) && has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i)
        if (has(O, key = names[i++])) {
            ~indexOf(result, key) || result.push(key);
        }
    return result;
};
// IE8- don't enum bug keys
var enumBugKeys = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf'
];
var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');
// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return objectKeysInternal(O, hiddenKeys$1);
};
var objectGetOwnPropertyNames = {
    f: f$3
};
var f$4 = Object.getOwnPropertySymbols;
var objectGetOwnPropertySymbols = {
    f: f$4
};
// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = objectGetOwnPropertyNames.f(anObject(it));
    var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
    return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};
var copyConstructorProperties = function (target, source) {
    var keys = ownKeys(source);
    var defineProperty = objectDefineProperty.f;
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        if (!has(target, key))
            defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
};
var replacement = /#|\.prototype\./;
var isForced = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true
        : value == NATIVE ? false
            : typeof detection == 'function' ? fails(detection)
                : !!detection;
};
var normalize = isForced.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
};
var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';
var isForced_1 = isForced;
var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
        target = global_1;
    }
    else if (STATIC) {
        target = global_1[TARGET] || setGlobal(TARGET, {});
    }
    else {
        target = (global_1[TARGET] || {}).prototype;
    }
    if (target)
        for (key in source) {
            sourceProperty = source[key];
            if (options.noTargetGet) {
                descriptor = getOwnPropertyDescriptor$1(target, key);
                targetProperty = descriptor && descriptor.value;
            }
            else
                targetProperty = target[key];
            FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
            // contained in target
            if (!FORCED && targetProperty !== undefined) {
                if (typeof sourceProperty === typeof targetProperty)
                    continue;
                copyConstructorProperties(sourceProperty, targetProperty);
            }
            // add a flag to not completely full polyfills
            if (options.sham || (targetProperty && targetProperty.sham)) {
                createNonEnumerableProperty(sourceProperty, 'sham', true);
            }
            // extend global
            redefine(target, key, sourceProperty, options);
        }
};
// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
    return classofRaw(arg) == 'Array';
};
// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
    return Object(requireObjectCoercible(argument));
};
var createProperty = function (object, key, value) {
    var propertyKey = toPrimitive(key);
    if (propertyKey in object)
        objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
    else
        object[propertyKey] = value;
};
var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
    // Chrome 38 Symbol has incorrect toString conversion
    // eslint-disable-next-line no-undef
    return !String(Symbol());
});
var useSymbolAsUid = nativeSymbol
    // eslint-disable-next-line no-undef
    && !Symbol.sham
    // eslint-disable-next-line no-undef
    && typeof Symbol.iterator == 'symbol';
var WellKnownSymbolsStore = shared('wks');
var Symbol$1 = global_1.Symbol;
var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
var wellKnownSymbol = function (name) {
    if (!has(WellKnownSymbolsStore, name)) {
        if (nativeSymbol && has(Symbol$1, name))
            WellKnownSymbolsStore[name] = Symbol$1[name];
        else
            WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name);
    }
    return WellKnownSymbolsStore[name];
};
var SPECIES = wellKnownSymbol('species');
// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
    var C;
    if (isArray(originalArray)) {
        C = originalArray.constructor;
        // cross-realm fallback
        if (typeof C == 'function' && (C === Array || isArray(C.prototype)))
            C = undefined;
        else if (isObject(C)) {
            C = C[SPECIES];
            if (C === null)
                C = undefined;
        }
    }
    return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};
var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
var process$1 = global_1.process;
var versions = process$1 && process$1.versions;
var v8 = versions && versions.v8;
var match, version;
if (v8) {
    match = v8.split('.');
    version = match[0] + match[1];
}
else if (engineUserAgent) {
    match = engineUserAgent.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
        match = engineUserAgent.match(/Chrome\/(\d+)/);
        if (match)
            version = match[1];
    }
}
var engineV8Version = version && +version;
var SPECIES$1 = wellKnownSymbol('species');
var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return engineV8Version >= 51 || !fails(function () {
        var array = [];
        var constructor = array.constructor = {};
        constructor[SPECIES$1] = function () {
            return { foo: 1 };
        };
        return array[METHOD_NAME](Boolean).foo !== 1;
    });
};
var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
});
var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
var isConcatSpreadable = function (O) {
    if (!isObject(O))
        return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray(O);
};
var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
    concat: function concat(arg) {
        var O = toObject(this);
        var A = arraySpeciesCreate(O, 0);
        var n = 0;
        var i, k, length, len, E;
        for (i = -1, length = arguments.length; i < length; i++) {
            E = i === -1 ? O : arguments[i];
            if (isConcatSpreadable(E)) {
                len = toLength(E.length);
                if (n + len > MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                for (k = 0; k < len; k++, n++)
                    if (k in E)
                        createProperty(A, n, E[k]);
            }
            else {
                if (n >= MAX_SAFE_INTEGER)
                    throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                createProperty(A, n++, E);
            }
        }
        A.length = n;
        return A;
    }
});
var TO_STRING_TAG = wellKnownSymbol('toStringTag');
var test = {};
test[TO_STRING_TAG] = 'z';
var toStringTagSupport = String(test) === '[object z]';
var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';
// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
    try {
        return it[key];
    }
    catch (error) { /* empty */ }
};
// getting tag from ES6+ `Object.prototype.toString`
var classof = toStringTagSupport ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
            // builtinTag case
            : CORRECT_ARGUMENTS ? classofRaw(O)
                // ES3 arguments fallback
                : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};
// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = toStringTagSupport ? {}.toString : function toString() {
    return '[object ' + classof(this) + ']';
};
// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (!toStringTagSupport) {
    redefine(Object.prototype, 'toString', objectToString, { unsafe: true });
}
// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
    return objectKeysInternal(O, enumBugKeys);
};
// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = objectKeys(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index)
        objectDefineProperty.f(O, key = keys[index++], Properties[key]);
    return O;
};
var html = getBuiltIn('document', 'documentElement');
var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');
var EmptyConstructor = function () { };
var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};
// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
};
// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html.appendChild(iframe);
    // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
};
// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
    try {
        /* global ActiveXObject */
        activeXDocument = document.domain && new ActiveXObject('htmlfile');
    }
    catch (error) { /* ignore */ }
    NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
    var length = enumBugKeys.length;
    while (length--)
        delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
    return NullProtoObject();
};
hiddenKeys[IE_PROTO] = true;
// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
        EmptyConstructor[PROTOTYPE] = anObject(O);
        result = new EmptyConstructor();
        EmptyConstructor[PROTOTYPE] = null;
        // add "__proto__" for Object.getPrototypeOf polyfill
        result[IE_PROTO] = O;
    }
    else
        result = NullProtoObject();
    return Properties === undefined ? result : objectDefineProperties(result, Properties);
};
var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;
var toString$1 = {}.toString;
var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];
var getWindowNames = function (it) {
    try {
        return nativeGetOwnPropertyNames(it);
    }
    catch (error) {
        return windowNames.slice();
    }
};
// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$5 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]'
        ? getWindowNames(it)
        : nativeGetOwnPropertyNames(toIndexedObject(it));
};
var objectGetOwnPropertyNamesExternal = {
    f: f$5
};
var f$6 = wellKnownSymbol;
var wellKnownSymbolWrapped = {
    f: f$6
};
var defineProperty = objectDefineProperty.f;
var defineWellKnownSymbol = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!has(Symbol, NAME))
        defineProperty(Symbol, NAME, {
            value: wellKnownSymbolWrapped.f(NAME)
        });
};
var defineProperty$1 = objectDefineProperty.f;
var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
var setToStringTag = function (it, TAG, STATIC) {
    if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG$2)) {
        defineProperty$1(it, TO_STRING_TAG$2, { configurable: true, value: TAG });
    }
};
var aFunction$1 = function (it) {
    if (typeof it != 'function') {
        throw TypeError(String(it) + ' is not a function');
    }
    return it;
};
// optional / simple context binding
var functionBindContext = function (fn, that, length) {
    aFunction$1(fn);
    if (that === undefined)
        return fn;
    switch (length) {
        case 0: return function () {
            return fn.call(that);
        };
        case 1: return function (a) {
            return fn.call(that, a);
        };
        case 2: return function (a, b) {
            return fn.call(that, a, b);
        };
        case 3: return function (a, b, c) {
            return fn.call(that, a, b, c);
        };
    }
    return function ( /* ...args */) {
        return fn.apply(that, arguments);
    };
};
var push = [].push;
// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterOut }` methods implementation
var createMethod$1 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_OUT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
        var O = toObject($this);
        var self = indexedObject(O);
        var boundFunction = functionBindContext(callbackfn, that, 3);
        var length = toLength(self.length);
        var index = 0;
        var create = specificCreate || arraySpeciesCreate;
        var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_OUT ? create($this, 0) : undefined;
        var value, result;
        for (; length > index; index++)
            if (NO_HOLES || index in self) {
                value = self[index];
                result = boundFunction(value, index, O);
                if (TYPE) {
                    if (IS_MAP)
                        target[index] = result; // map
                    else if (result)
                        switch (TYPE) {
                            case 3: return true; // some
                            case 5: return value; // find
                            case 6: return index; // findIndex
                            case 2: push.call(target, value); // filter
                        }
                    else
                        switch (TYPE) {
                            case 4: return false; // every
                            case 7: push.call(target, value); // filterOut
                        }
                }
            }
        return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
};
var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$1(0),
    // `Array.prototype.map` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.map
    map: createMethod$1(1),
    // `Array.prototype.filter` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.filter
    filter: createMethod$1(2),
    // `Array.prototype.some` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.some
    some: createMethod$1(3),
    // `Array.prototype.every` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.every
    every: createMethod$1(4),
    // `Array.prototype.find` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.find
    find: createMethod$1(5),
    // `Array.prototype.findIndex` method
    // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$1(6),
    // `Array.prototype.filterOut` method
    // https://github.com/tc39/proposal-array-filtering
    filterOut: createMethod$1(7)
};
var $forEach = arrayIteration.forEach;
var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var $stringify = getBuiltIn('JSON', 'stringify');
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore$1 = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;
// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = descriptors && fails(function () {
    return objectCreate(nativeDefineProperty$1({}, 'a', {
        get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
    })).a != 7;
}) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor)
        delete ObjectPrototype[P];
    nativeDefineProperty$1(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
        nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
} : nativeDefineProperty$1;
var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
    setInternalState(symbol, {
        type: SYMBOL,
        tag: tag,
        description: description
    });
    if (!descriptors)
        symbol.description = description;
    return symbol;
};
var isSymbol = useSymbolAsUid ? function (it) {
    return typeof it == 'symbol';
} : function (it) {
    return Object(it) instanceof $Symbol;
};
var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype)
        $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject(O);
    var key = toPrimitive(P, true);
    anObject(Attributes);
    if (has(AllSymbols, key)) {
        if (!Attributes.enumerable) {
            if (!has(O, HIDDEN))
                nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
            O[HIDDEN][key] = true;
        }
        else {
            if (has(O, HIDDEN) && O[HIDDEN][key])
                O[HIDDEN][key] = false;
            Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
        }
        return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty$1(O, key, Attributes);
};
var $defineProperties = function defineProperties(O, Properties) {
    anObject(O);
    var properties = toIndexedObject(Properties);
    var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
    $forEach(keys, function (key) {
        if (!descriptors || $propertyIsEnumerable.call(properties, key))
            $defineProperty(O, key, properties[key]);
    });
    return O;
};
var $create = function create(O, Properties) {
    return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};
var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPrimitive(V, true);
    var enumerable = nativePropertyIsEnumerable$1.call(this, P);
    if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P))
        return false;
    return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject(O);
    var key = toPrimitive(P, true);
    if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key))
        return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
        descriptor.enumerable = true;
    }
    return descriptor;
};
var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames$1(toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
        if (!has(AllSymbols, key) && !has(hiddenKeys, key))
            result.push(key);
    });
    return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames$1(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
    var result = [];
    $forEach(names, function (key) {
        if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
            result.push(AllSymbols[key]);
        }
    });
    return result;
};
// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!nativeSymbol) {
    $Symbol = function Symbol() {
        if (this instanceof $Symbol)
            throw TypeError('Symbol is not a constructor');
        var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
        var tag = uid(description);
        var setter = function (value) {
            if (this === ObjectPrototype)
                setter.call(ObjectPrototypeSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag))
                this[HIDDEN][tag] = false;
            setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
        };
        if (descriptors && USE_SETTER)
            setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
        return wrap(tag, description);
    };
    redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
        return getInternalState(this).tag;
    });
    redefine($Symbol, 'withoutSetter', function (description) {
        return wrap(uid(description), description);
    });
    objectPropertyIsEnumerable.f = $propertyIsEnumerable;
    objectDefineProperty.f = $defineProperty;
    objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
    objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;
    wellKnownSymbolWrapped.f = function (name) {
        return wrap(wellKnownSymbol(name), name);
    };
    if (descriptors) {
        // https://github.com/tc39/proposal-Symbol-description
        nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
            configurable: true,
            get: function description() {
                return getInternalState(this).description;
            }
        });
        {
            redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
        }
    }
}
_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
    Symbol: $Symbol
});
$forEach(objectKeys(WellKnownSymbolsStore$1), function (name) {
    defineWellKnownSymbol(name);
});
_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
    // `Symbol.for` method
    // https://tc39.github.io/ecma262/#sec-symbol.for
    'for': function (key) {
        var string = String(key);
        if (has(StringToSymbolRegistry, string))
            return StringToSymbolRegistry[string];
        var symbol = $Symbol(string);
        StringToSymbolRegistry[string] = symbol;
        SymbolToStringRegistry[symbol] = string;
        return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.github.io/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
        if (!isSymbol(sym))
            throw TypeError(sym + ' is not a symbol');
        if (has(SymbolToStringRegistry, sym))
            return SymbolToStringRegistry[sym];
    },
    useSetter: function () { USE_SETTER = true; },
    useSimple: function () { USE_SETTER = false; }
});
_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
    // `Object.create` method
    // https://tc39.github.io/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.github.io/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});
_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
});
// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
        return objectGetOwnPropertySymbols.f(toObject(it));
    }
});
// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
if ($stringify) {
    var FORCED_JSON_STRINGIFY = !nativeSymbol || fails(function () {
        var symbol = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        return $stringify([symbol]) != '[null]'
            // WebKit converts symbol values to JSON as null
            || $stringify({ a: symbol }) != '{}'
            // V8 throws on boxed symbols
            || $stringify(Object(symbol)) != '{}';
    });
    _export({ target: 'JSON', stat: true, forced: FORCED_JSON_STRINGIFY }, {
        // eslint-disable-next-line no-unused-vars
        stringify: function stringify(it, replacer, space) {
            var args = [it];
            var index = 1;
            var $replacer;
            while (arguments.length > index)
                args.push(arguments[index++]);
            $replacer = replacer;
            if (!isObject(replacer) && it === undefined || isSymbol(it))
                return; // IE8 returns string on undefined
            if (!isArray(replacer))
                replacer = function (key, value) {
                    if (typeof $replacer == 'function')
                        value = $replacer.call(this, key, value);
                    if (!isSymbol(value))
                        return value;
                };
            args[1] = replacer;
            return $stringify.apply(null, args);
        }
    });
}
// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
    createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);
hiddenKeys[HIDDEN] = true;
// `Symbol.asyncIterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.asynciterator
defineWellKnownSymbol('asyncIterator');
var defineProperty$2 = objectDefineProperty.f;
var NativeSymbol = global_1.Symbol;
if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
    // Safari 12 bug
    NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {};
    // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
        var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
        var result = this instanceof SymbolWrapper
            ? new NativeSymbol(description)
            // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
            : description === undefined ? NativeSymbol() : NativeSymbol(description);
        if (description === '')
            EmptyStringDescriptionStore[result] = true;
        return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
    symbolPrototype.constructor = SymbolWrapper;
    var symbolToString = symbolPrototype.toString;
    var native = String(NativeSymbol('test')) == 'Symbol(test)';
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    defineProperty$2(symbolPrototype, 'description', {
        configurable: true,
        get: function description() {
            var symbol = isObject(this) ? this.valueOf() : this;
            var string = symbolToString.call(symbol);
            if (has(EmptyStringDescriptionStore, symbol))
                return '';
            var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
            return desc === '' ? undefined : desc;
        }
    });
    _export({ global: true, forced: true }, {
        Symbol: SymbolWrapper
    });
}
// `Symbol.hasInstance` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.hasinstance
defineWellKnownSymbol('hasInstance');
// `Symbol.isConcatSpreadable` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.isconcatspreadable
defineWellKnownSymbol('isConcatSpreadable');
// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');
// `Symbol.match` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.match
defineWellKnownSymbol('match');
// `Symbol.matchAll` well-known symbol
defineWellKnownSymbol('matchAll');
// `Symbol.replace` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.replace
defineWellKnownSymbol('replace');
// `Symbol.search` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.search
defineWellKnownSymbol('search');
// `Symbol.species` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.species
defineWellKnownSymbol('species');
// `Symbol.split` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.split
defineWellKnownSymbol('split');
// `Symbol.toPrimitive` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');
// `Symbol.toStringTag` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.tostringtag
defineWellKnownSymbol('toStringTag');
// `Symbol.unscopables` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.unscopables
defineWellKnownSymbol('unscopables');
// JSON[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-json-@@tostringtag
setToStringTag(global_1.JSON, 'JSON', true);
// Math[@@toStringTag] property
// https://tc39.github.io/ecma262/#sec-math-@@tostringtag
setToStringTag(Math, 'Math', true);
_export({ global: true }, { Reflect: {} });
// Reflect[@@toStringTag] property
// https://tc39.es/ecma262/#sec-reflect-@@tostringtag
setToStringTag(global_1.Reflect, 'Reflect', true);
var DecoratorUtils = /** @class */ (function () {
    function DecoratorUtils() {
    }
    DecoratorUtils.getPropertyDecorator = function (target, name) {
        return Reflect.getMetadata(name, target);
    };
    return DecoratorUtils;
}());
var ViewportConfiguration = /** @class */ (function () {
    function ViewportConfiguration() {
        this.parameters = new Map();
    }
    ViewportConfiguration.prototype.addParameters = function (key, parameters) {
        if (!(this.parameters.has(key))) {
            this.parameters.set(key, new Array());
        }
        var instance = this.parameters.get(key);
        parameters.forEach(function (el) { return instance.push(el); });
    };
    ViewportConfiguration.prototype.getParametersByKey = function (key) {
        return (this.parameters.has(key)) ? this.parameters.get(key) : new Array();
    };
    ViewportConfiguration.prototype.hasKey = function (key) {
        return this.parameters.has(key);
    };
    ViewportConfiguration.prototype.hasStylesForKey = function (key) {
        var result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(function (parameter) {
                if (parameter.hasStyles()) {
                    result = true;
                }
            });
        }
        return result;
    };
    ViewportConfiguration.prototype.hasClassesForKey = function (key) {
        var result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(function (parameter) {
                if (parameter.hasClasses()) {
                    result = true;
                }
            });
        }
        return result;
    };
    ViewportConfiguration.prototype.hasAttributesForKey = function (key) {
        var result = false;
        if (this.hasKey(key)) {
            this.getParametersByKey(key).forEach(function (parameter) {
                if (parameter.hasAttributes()) {
                    result = true;
                }
            });
        }
        return result;
    };
    ViewportConfiguration.prototype.getStyles = function () {
    };
    return ViewportConfiguration;
}());
var VIEWPORT_PARAMETERS_META_KEY = Symbol('ViewportParameters');
function ViewportParameters(viewports) {
    function register(target, propertyKey) {
        var configuration = Reflect.getMetadata(VIEWPORT_PARAMETERS_META_KEY, target);
        if (!(configuration)) {
            configuration = new ViewportConfiguration();
            Reflect.defineMetadata(VIEWPORT_PARAMETERS_META_KEY, configuration, target);
        }
        configuration.addParameters(propertyKey, viewports);
    }
    return register;
}
var ViewportProcessorTypeEnum;
(function (ViewportProcessorTypeEnum) {
    ViewportProcessorTypeEnum[ViewportProcessorTypeEnum["STYLES"] = 0] = "STYLES";
    ViewportProcessorTypeEnum[ViewportProcessorTypeEnum["CLASSES"] = 1] = "CLASSES";
    ViewportProcessorTypeEnum[ViewportProcessorTypeEnum["ATTRIBUTES"] = 2] = "ATTRIBUTES";
})(ViewportProcessorTypeEnum || (ViewportProcessorTypeEnum = {}));
var TemplateTypeEnum;
(function (TemplateTypeEnum) {
    TemplateTypeEnum[TemplateTypeEnum["MUSTACHE"] = 0] = "MUSTACHE";
    TemplateTypeEnum[TemplateTypeEnum["HANDLEBARS"] = 1] = "HANDLEBARS";
})(TemplateTypeEnum || (TemplateTypeEnum = {}));
var mustache = createCommonjsModule(function (module, exports) {
    // This file has been generated from mustache.mjs
    (function (global, factory) {
        module.exports = factory();
    }(commonjsGlobal, (function () {
        /*!
         * mustache.js - Logic-less {{mustache}} templates with JavaScript
         * http://github.com/janl/mustache.js
         */
        var objectToString = Object.prototype.toString;
        var isArray = Array.isArray || function isArrayPolyfill(object) {
            return objectToString.call(object) === '[object Array]';
        };
        function isFunction(object) {
            return typeof object === 'function';
        }
        /**
         * More correct typeof string handling array
         * which normally returns typeof 'object'
         */
        function typeStr(obj) {
            return isArray(obj) ? 'array' : typeof obj;
        }
        function escapeRegExp(string) {
            return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
        }
        /**
         * Null safe way of checking whether or not an object,
         * including its prototype, has a given property
         */
        function hasProperty(obj, propName) {
            return obj != null && typeof obj === 'object' && (propName in obj);
        }
        /**
         * Safe way of detecting whether or not the given thing is a primitive and
         * whether it has the given property
         */
        function primitiveHasOwnProperty(primitive, propName) {
            return (primitive != null
                && typeof primitive !== 'object'
                && primitive.hasOwnProperty
                && primitive.hasOwnProperty(propName));
        }
        // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
        // See https://github.com/janl/mustache.js/issues/189
        var regExpTest = RegExp.prototype.test;
        function testRegExp(re, string) {
            return regExpTest.call(re, string);
        }
        var nonSpaceRe = /\S/;
        function isWhitespace(string) {
            return !testRegExp(nonSpaceRe, string);
        }
        var entityMap = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            '/': '&#x2F;',
            '`': '&#x60;',
            '=': '&#x3D;'
        };
        function escapeHtml(string) {
            return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap(s) {
                return entityMap[s];
            });
        }
        var whiteRe = /\s*/;
        var spaceRe = /\s+/;
        var equalsRe = /\s*=/;
        var curlyRe = /\s*\}/;
        var tagRe = /#|\^|\/|>|\{|&|=|!/;
        /**
         * Breaks up the given `template` string into a tree of tokens. If the `tags`
         * argument is given here it must be an array with two string values: the
         * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
         * course, the default is to use mustaches (i.e. mustache.tags).
         *
         * A token is an array with at least 4 elements. The first element is the
         * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
         * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
         * all text that appears outside a symbol this element is "text".
         *
         * The second element of a token is its "value". For mustache tags this is
         * whatever else was inside the tag besides the opening symbol. For text tokens
         * this is the text itself.
         *
         * The third and fourth elements of the token are the start and end indices,
         * respectively, of the token in the original template.
         *
         * Tokens that are the root node of a subtree contain two more elements: 1) an
         * array of tokens in the subtree and 2) the index in the original template at
         * which the closing tag for that section begins.
         *
         * Tokens for partials also contain two more elements: 1) a string value of
         * indendation prior to that tag and 2) the index of that tag on that line -
         * eg a value of 2 indicates the partial is the third tag on this line.
         */
        function parseTemplate(template, tags) {
            if (!template)
                return [];
            var lineHasNonSpace = false;
            var sections = []; // Stack to hold section tokens
            var tokens = []; // Buffer to hold the tokens
            var spaces = []; // Indices of whitespace tokens on the current line
            var hasTag = false; // Is there a {{tag}} on the current line?
            var nonSpace = false; // Is there a non-space char on the current line?
            var indentation = ''; // Tracks indentation for tags that use it
            var tagIndex = 0; // Stores a count of number of tags encountered on a line
            // Strips all whitespace tokens array for the current line
            // if there was a {{#tag}} on it and otherwise only space.
            function stripSpace() {
                if (hasTag && !nonSpace) {
                    while (spaces.length)
                        delete tokens[spaces.pop()];
                }
                else {
                    spaces = [];
                }
                hasTag = false;
                nonSpace = false;
            }
            var openingTagRe, closingTagRe, closingCurlyRe;
            function compileTags(tagsToCompile) {
                if (typeof tagsToCompile === 'string')
                    tagsToCompile = tagsToCompile.split(spaceRe, 2);
                if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
                    throw new Error('Invalid tags: ' + tagsToCompile);
                openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
                closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
                closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
            }
            compileTags(tags || mustache.tags);
            var scanner = new Scanner(template);
            var start, type, value, chr, token, openSection;
            while (!scanner.eos()) {
                start = scanner.pos;
                // Match any text between tags.
                value = scanner.scanUntil(openingTagRe);
                if (value) {
                    for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
                        chr = value.charAt(i);
                        if (isWhitespace(chr)) {
                            spaces.push(tokens.length);
                            indentation += chr;
                        }
                        else {
                            nonSpace = true;
                            lineHasNonSpace = true;
                            indentation += ' ';
                        }
                        tokens.push(['text', chr, start, start + 1]);
                        start += 1;
                        // Check for whitespace on the current line.
                        if (chr === '\n') {
                            stripSpace();
                            indentation = '';
                            tagIndex = 0;
                            lineHasNonSpace = false;
                        }
                    }
                }
                // Match the opening tag.
                if (!scanner.scan(openingTagRe))
                    break;
                hasTag = true;
                // Get the tag type.
                type = scanner.scan(tagRe) || 'name';
                scanner.scan(whiteRe);
                // Get the tag value.
                if (type === '=') {
                    value = scanner.scanUntil(equalsRe);
                    scanner.scan(equalsRe);
                    scanner.scanUntil(closingTagRe);
                }
                else if (type === '{') {
                    value = scanner.scanUntil(closingCurlyRe);
                    scanner.scan(curlyRe);
                    scanner.scanUntil(closingTagRe);
                    type = '&';
                }
                else {
                    value = scanner.scanUntil(closingTagRe);
                }
                // Match the closing tag.
                if (!scanner.scan(closingTagRe))
                    throw new Error('Unclosed tag at ' + scanner.pos);
                if (type == '>') {
                    token = [type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace];
                }
                else {
                    token = [type, value, start, scanner.pos];
                }
                tagIndex++;
                tokens.push(token);
                if (type === '#' || type === '^') {
                    sections.push(token);
                }
                else if (type === '/') {
                    // Check section nesting.
                    openSection = sections.pop();
                    if (!openSection)
                        throw new Error('Unopened section "' + value + '" at ' + start);
                    if (openSection[1] !== value)
                        throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
                }
                else if (type === 'name' || type === '{' || type === '&') {
                    nonSpace = true;
                }
                else if (type === '=') {
                    // Set the tags for the next time around.
                    compileTags(value);
                }
            }
            stripSpace();
            // Make sure there are no open sections when we're done.
            openSection = sections.pop();
            if (openSection)
                throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);
            return nestTokens(squashTokens(tokens));
        }
        /**
         * Combines the values of consecutive text tokens in the given `tokens` array
         * to a single token.
         */
        function squashTokens(tokens) {
            var squashedTokens = [];
            var token, lastToken;
            for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
                token = tokens[i];
                if (token) {
                    if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
                        lastToken[1] += token[1];
                        lastToken[3] = token[3];
                    }
                    else {
                        squashedTokens.push(token);
                        lastToken = token;
                    }
                }
            }
            return squashedTokens;
        }
        /**
         * Forms the given array of `tokens` into a nested tree structure where
         * tokens that represent a section have two additional items: 1) an array of
         * all tokens that appear in that section and 2) the index in the original
         * template that represents the end of that section.
         */
        function nestTokens(tokens) {
            var nestedTokens = [];
            var collector = nestedTokens;
            var sections = [];
            var token, section;
            for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
                token = tokens[i];
                switch (token[0]) {
                    case '#':
                    case '^':
                        collector.push(token);
                        sections.push(token);
                        collector = token[4] = [];
                        break;
                    case '/':
                        section = sections.pop();
                        section[5] = token[2];
                        collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
                        break;
                    default:
                        collector.push(token);
                }
            }
            return nestedTokens;
        }
        /**
         * A simple string scanner that is used by the template parser to find
         * tokens in template strings.
         */
        function Scanner(string) {
            this.string = string;
            this.tail = string;
            this.pos = 0;
        }
        /**
         * Returns `true` if the tail is empty (end of string).
         */
        Scanner.prototype.eos = function eos() {
            return this.tail === '';
        };
        /**
         * Tries to match the given regular expression at the current position.
         * Returns the matched text if it can match, the empty string otherwise.
         */
        Scanner.prototype.scan = function scan(re) {
            var match = this.tail.match(re);
            if (!match || match.index !== 0)
                return '';
            var string = match[0];
            this.tail = this.tail.substring(string.length);
            this.pos += string.length;
            return string;
        };
        /**
         * Skips all text until the given regular expression can be matched. Returns
         * the skipped string, which is the entire tail if no match can be made.
         */
        Scanner.prototype.scanUntil = function scanUntil(re) {
            var index = this.tail.search(re), match;
            switch (index) {
                case -1:
                    match = this.tail;
                    this.tail = '';
                    break;
                case 0:
                    match = '';
                    break;
                default:
                    match = this.tail.substring(0, index);
                    this.tail = this.tail.substring(index);
            }
            this.pos += match.length;
            return match;
        };
        /**
         * Represents a rendering context by wrapping a view object and
         * maintaining a reference to the parent context.
         */
        function Context(view, parentContext) {
            this.view = view;
            this.cache = { '.': this.view };
            this.parent = parentContext;
        }
        /**
         * Creates a new context using the given view with this context
         * as the parent.
         */
        Context.prototype.push = function push(view) {
            return new Context(view, this);
        };
        /**
         * Returns the value of the given name in this context, traversing
         * up the context hierarchy if the value is absent in this context's view.
         */
        Context.prototype.lookup = function lookup(name) {
            var cache = this.cache;
            var value;
            if (cache.hasOwnProperty(name)) {
                value = cache[name];
            }
            else {
                var context = this, intermediateValue, names, index, lookupHit = false;
                while (context) {
                    if (name.indexOf('.') > 0) {
                        intermediateValue = context.view;
                        names = name.split('.');
                        index = 0;
                        /**
                         * Using the dot notion path in `name`, we descend through the
                         * nested objects.
                         *
                         * To be certain that the lookup has been successful, we have to
                         * check if the last object in the path actually has the property
                         * we are looking for. We store the result in `lookupHit`.
                         *
                         * This is specially necessary for when the value has been set to
                         * `undefined` and we want to avoid looking up parent contexts.
                         *
                         * In the case where dot notation is used, we consider the lookup
                         * to be successful even if the last "object" in the path is
                         * not actually an object but a primitive (e.g., a string, or an
                         * integer), because it is sometimes useful to access a property
                         * of an autoboxed primitive, such as the length of a string.
                         **/
                        while (intermediateValue != null && index < names.length) {
                            if (index === names.length - 1)
                                lookupHit = (hasProperty(intermediateValue, names[index])
                                    || primitiveHasOwnProperty(intermediateValue, names[index]));
                            intermediateValue = intermediateValue[names[index++]];
                        }
                    }
                    else {
                        intermediateValue = context.view[name];
                        /**
                         * Only checking against `hasProperty`, which always returns `false` if
                         * `context.view` is not an object. Deliberately omitting the check
                         * against `primitiveHasOwnProperty` if dot notation is not used.
                         *
                         * Consider this example:
                         * ```
                         * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
                         * ```
                         *
                         * If we were to check also against `primitiveHasOwnProperty`, as we do
                         * in the dot notation case, then render call would return:
                         *
                         * "The length of a football field is 9."
                         *
                         * rather than the expected:
                         *
                         * "The length of a football field is 100 yards."
                         **/
                        lookupHit = hasProperty(context.view, name);
                    }
                    if (lookupHit) {
                        value = intermediateValue;
                        break;
                    }
                    context = context.parent;
                }
                cache[name] = value;
            }
            if (isFunction(value))
                value = value.call(this.view);
            return value;
        };
        /**
         * A Writer knows how to take a stream of tokens and render them to a
         * string, given a context. It also maintains a cache of templates to
         * avoid the need to parse the same template twice.
         */
        function Writer() {
            this.templateCache = {
                _cache: {},
                set: function set(key, value) {
                    this._cache[key] = value;
                },
                get: function get(key) {
                    return this._cache[key];
                },
                clear: function clear() {
                    this._cache = {};
                }
            };
        }
        /**
         * Clears all cached templates in this writer.
         */
        Writer.prototype.clearCache = function clearCache() {
            if (typeof this.templateCache !== 'undefined') {
                this.templateCache.clear();
            }
        };
        /**
         * Parses and caches the given `template` according to the given `tags` or
         * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
         * that is generated from the parse.
         */
        Writer.prototype.parse = function parse(template, tags) {
            var cache = this.templateCache;
            var cacheKey = template + ':' + (tags || mustache.tags).join(':');
            var isCacheEnabled = typeof cache !== 'undefined';
            var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;
            if (tokens == undefined) {
                tokens = parseTemplate(template, tags);
                isCacheEnabled && cache.set(cacheKey, tokens);
            }
            return tokens;
        };
        /**
         * High-level method that is used to render the given `template` with
         * the given `view`.
         *
         * The optional `partials` argument may be an object that contains the
         * names and templates of partials that are used in the template. It may
         * also be a function that is used to load partial templates on the fly
         * that takes a single argument: the name of the partial.
         *
         * If the optional `tags` argument is given here it must be an array with two
         * string values: the opening and closing tags used in the template (e.g.
         * [ "<%", "%>" ]). The default is to mustache.tags.
         */
        Writer.prototype.render = function render(template, view, partials, tags) {
            var tokens = this.parse(template, tags);
            var context = (view instanceof Context) ? view : new Context(view, undefined);
            return this.renderTokens(tokens, context, partials, template, tags);
        };
        /**
         * Low-level method that renders the given array of `tokens` using
         * the given `context` and `partials`.
         *
         * Note: The `originalTemplate` is only ever used to extract the portion
         * of the original template that was contained in a higher-order section.
         * If the template doesn't use higher-order sections, this argument may
         * be omitted.
         */
        Writer.prototype.renderTokens = function renderTokens(tokens, context, partials, originalTemplate, tags) {
            var buffer = '';
            var token, symbol, value;
            for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
                value = undefined;
                token = tokens[i];
                symbol = token[0];
                if (symbol === '#')
                    value = this.renderSection(token, context, partials, originalTemplate);
                else if (symbol === '^')
                    value = this.renderInverted(token, context, partials, originalTemplate);
                else if (symbol === '>')
                    value = this.renderPartial(token, context, partials, tags);
                else if (symbol === '&')
                    value = this.unescapedValue(token, context);
                else if (symbol === 'name')
                    value = this.escapedValue(token, context);
                else if (symbol === 'text')
                    value = this.rawValue(token);
                if (value !== undefined)
                    buffer += value;
            }
            return buffer;
        };
        Writer.prototype.renderSection = function renderSection(token, context, partials, originalTemplate) {
            var self = this;
            var buffer = '';
            var value = context.lookup(token[1]);
            // This function is used to render an arbitrary template
            // in the current context by higher-order sections.
            function subRender(template) {
                return self.render(template, context, partials);
            }
            if (!value)
                return;
            if (isArray(value)) {
                for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
                    buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
                }
            }
            else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
                buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
            }
            else if (isFunction(value)) {
                if (typeof originalTemplate !== 'string')
                    throw new Error('Cannot use higher-order sections without the original template');
                // Extract the portion of the original template that the section contains.
                value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);
                if (value != null)
                    buffer += value;
            }
            else {
                buffer += this.renderTokens(token[4], context, partials, originalTemplate);
            }
            return buffer;
        };
        Writer.prototype.renderInverted = function renderInverted(token, context, partials, originalTemplate) {
            var value = context.lookup(token[1]);
            // Use JavaScript's definition of falsy. Include empty arrays.
            // See https://github.com/janl/mustache.js/issues/186
            if (!value || (isArray(value) && value.length === 0))
                return this.renderTokens(token[4], context, partials, originalTemplate);
        };
        Writer.prototype.indentPartial = function indentPartial(partial, indentation, lineHasNonSpace) {
            var filteredIndentation = indentation.replace(/[^ \t]/g, '');
            var partialByNl = partial.split('\n');
            for (var i = 0; i < partialByNl.length; i++) {
                if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
                    partialByNl[i] = filteredIndentation + partialByNl[i];
                }
            }
            return partialByNl.join('\n');
        };
        Writer.prototype.renderPartial = function renderPartial(token, context, partials, tags) {
            if (!partials)
                return;
            var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
            if (value != null) {
                var lineHasNonSpace = token[6];
                var tagIndex = token[5];
                var indentation = token[4];
                var indentedValue = value;
                if (tagIndex == 0 && indentation) {
                    indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
                }
                return this.renderTokens(this.parse(indentedValue, tags), context, partials, indentedValue);
            }
        };
        Writer.prototype.unescapedValue = function unescapedValue(token, context) {
            var value = context.lookup(token[1]);
            if (value != null)
                return value;
        };
        Writer.prototype.escapedValue = function escapedValue(token, context) {
            var value = context.lookup(token[1]);
            if (value != null)
                return mustache.escape(value);
        };
        Writer.prototype.rawValue = function rawValue(token) {
            return token[1];
        };
        var mustache = {
            name: 'mustache.js',
            version: '4.0.0',
            tags: ['{{', '}}'],
            clearCache: undefined,
            escape: undefined,
            parse: undefined,
            render: undefined,
            Scanner: undefined,
            Context: undefined,
            Writer: undefined,
            /**
             * Allows a user to override the default caching strategy, by providing an
             * object with set, get and clear methods. This can also be used to disable
             * the cache by setting it to the literal `undefined`.
             */
            set templateCache(cache) {
                defaultWriter.templateCache = cache;
            },
            /**
             * Gets the default or overridden caching object from the default writer.
             */
            get templateCache() {
                return defaultWriter.templateCache;
            }
        };
        // All high-level mustache.* functions use this writer.
        var defaultWriter = new Writer();
        /**
         * Clears all cached templates in the default writer.
         */
        mustache.clearCache = function clearCache() {
            return defaultWriter.clearCache();
        };
        /**
         * Parses and caches the given template in the default writer and returns the
         * array of tokens it contains. Doing this ahead of time avoids the need to
         * parse templates on the fly as they are rendered.
         */
        mustache.parse = function parse(template, tags) {
            return defaultWriter.parse(template, tags);
        };
        /**
         * Renders the `template` with the given `view` and `partials` using the
         * default writer. If the optional `tags` argument is given here it must be an
         * array with two string values: the opening and closing tags used in the
         * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
         */
        mustache.render = function render(template, view, partials, tags) {
            if (typeof template !== 'string') {
                throw new TypeError('Invalid template! Template should be a "string" ' +
                    'but "' + typeStr(template) + '" was given as the first ' +
                    'argument for mustache#render(template, view, partials)');
            }
            return defaultWriter.render(template, view, partials, tags);
        };
        // Export the escaping function so that the user may override it.
        // See https://github.com/janl/mustache.js/issues/244
        mustache.escape = escapeHtml;
        // Export these mainly for testing, but also for advanced usage.
        mustache.Scanner = Scanner;
        mustache.Context = Context;
        mustache.Writer = Writer;
        return mustache;
    })));
});
mustache.escape = function (value) {
    return value;
};
var MustacheTemplateEvaluatorImpl = /** @class */ (function () {
    function MustacheTemplateEvaluatorImpl(template) {
        this.template = template;
    }
    MustacheTemplateEvaluatorImpl.prototype.evaluate = function (context) {
        var result = mustache.render(this.template, this.convert(context));
        return result;
    };
    MustacheTemplateEvaluatorImpl.prototype.convert = function (context) {
        return context.getObject();
    };
    return MustacheTemplateEvaluatorImpl;
}());
var MustacheTemplateParserImpl = /** @class */ (function () {
    function MustacheTemplateParserImpl() {
    }
    MustacheTemplateParserImpl.prototype.parse = function (template) {
        return new MustacheTemplateEvaluatorImpl(template.value);
    };
    return MustacheTemplateParserImpl;
}());
var TemplateParserFactory = /** @class */ (function () {
    function TemplateParserFactory() {
    }
    TemplateParserFactory.getInstance = function (template) {
        switch (template.type) {
            case TemplateTypeEnum.MUSTACHE:
                return new MustacheTemplateParserImpl();
            case TemplateTypeEnum.HANDLEBARS:
                return new MustacheTemplateParserImpl();
            default:
                throw new Error("Unable to locate an expression parser for " + template.type);
        }
    };
    return TemplateParserFactory;
}());
var Template = /** @class */ (function () {
    function Template(type, value) {
        this.type = type;
        this.value = value;
    }
    return Template;
}());
var AbstractViewportProcessor = /** @class */ (function () {
    function AbstractViewportProcessor() {
    }
    AbstractViewportProcessor.prototype.apply = function (value, context) {
        var template = new Template(TemplateTypeEnum.MUSTACHE, value);
        var parser = TemplateParserFactory.getInstance(template).parse(template);
        return parser.evaluate(context);
    };
    return AbstractViewportProcessor;
}());
var StylesViewportProcessor = /** @class */ (function (_super) {
    __extends(StylesViewportProcessor, _super);
    function StylesViewportProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StylesViewportProcessor.prototype.process = function (element, parameters, context) {
        var _this = this;
        parameters.forEach(function (parameter) {
            if (parameter.hasStyles()) {
                parameter.getStyles().getStyles().forEach(function (value, name) {
                    element.style[name] = _this.apply(value, context);
                });
                parameter.getStyles().getExcludedStyles().forEach(function (name) { return element.style.removeProperty(_this.apply(name, context)); });
            }
        });
    };
    return StylesViewportProcessor;
}(AbstractViewportProcessor));
var AttributesViewportProcessor = /** @class */ (function (_super) {
    __extends(AttributesViewportProcessor, _super);
    function AttributesViewportProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AttributesViewportProcessor.prototype.process = function (element, parameters, context) {
        var _this = this;
        parameters.forEach(function (parameter) {
            if (parameter.hasAttributes()) {
                parameter.getAttributes().getAttributes().forEach(function (value, name) {
                    element.setAttribute(name, _this.apply(value, context));
                });
                parameter.getAttributes().getExcludedAttributes().forEach(function (name) { return element.removeAttribute(_this.apply(name, context)); });
            }
        });
    };
    return AttributesViewportProcessor;
}(AbstractViewportProcessor));
var ClassesViewportProcessor = /** @class */ (function (_super) {
    __extends(ClassesViewportProcessor, _super);
    function ClassesViewportProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClassesViewportProcessor.prototype.process = function (element, parameters, context) {
        var _this = this;
        parameters.forEach(function (parameter) {
            if (parameter.hasClasses()) {
                parameter.getClasses().getClasses().forEach(function (value) {
                    element.classList.add(_this.apply(value, context));
                });
                parameter.getClasses().getExcludedClasses().forEach(function (value) { return element.classList.remove(_this.apply(value, context)); });
            }
        });
    };
    return ClassesViewportProcessor;
}(AbstractViewportProcessor));
var ViewportProcessorFactory = /** @class */ (function () {
    function ViewportProcessorFactory() {
    }
    ViewportProcessorFactory.getInstance = function (type) {
        switch (type) {
            case ViewportProcessorTypeEnum.STYLES:
                return new StylesViewportProcessor();
            case ViewportProcessorTypeEnum.ATTRIBUTES:
                return new AttributesViewportProcessor();
            case ViewportProcessorTypeEnum.CLASSES:
                return new ClassesViewportProcessor();
            default:
                throw new Error("Unable to locate an viewport processor for " + type);
        }
    };
    return ViewportProcessorFactory;
}());
var ViewportConfigurationService = /** @class */ (function () {
    function ViewportConfigurationService() {
    }
    ViewportConfigurationService.getInstance = function () {
        if (!ViewportConfigurationService.instance) {
            ViewportConfigurationService.instance = new ViewportConfigurationService();
        }
        return ViewportConfigurationService.instance;
    };
    ViewportConfigurationService.prototype.register = function (target, _nodes, callback) {
        var mediaQueryInstances = WebUtils.getMediaQueryInstances();
        mediaQueryInstances.forEach(function (mediaQueryInstance) {
            mediaQueryInstance.mediaQueryList.addListener(function (e) {
                if (e.matches) {
                    callback.call(target);
                }
            });
        });
        callback.call(target);
    };
    ViewportConfigurationService.prototype.process = function (target, context, properties) {
        var configuration = this.getConfiguration(target);
        var styles = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.STYLES);
        var classes = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.CLASSES);
        var attributes = ViewportProcessorFactory.getInstance(ViewportProcessorTypeEnum.ATTRIBUTES);
        // TODO: Need to add support for a quick check for active view port so we only call process on the element once it changes. Right now we are calling it every time
        properties.forEach(function (entry) {
            var propertyName = entry.getLeft();
            if (configuration.hasKey(propertyName)) {
                var parameters = configuration.getParametersByKey(propertyName).filter(function (parameter) { return parameter.inRange(Math.round(window.innerWidth), Math.round(window.innerHeight)); });
                if (parameters.length > 0) {
                    if (configuration.hasStylesForKey(propertyName)) {
                        styles.process(entry.getRight(), parameters, context);
                    }
                    if (configuration.hasClassesForKey(entry.getLeft())) {
                        classes.process(entry.getRight(), parameters, context);
                    }
                    if (configuration.hasAttributesForKey(entry.getLeft())) {
                        attributes.process(entry.getRight(), parameters, context);
                    }
                }
            }
        });
    };
    ViewportConfigurationService.prototype.getConfiguration = function (target) {
        return DecoratorUtils.getPropertyDecorator(target, VIEWPORT_PARAMETERS_META_KEY);
    };
    return ViewportConfigurationService;
}());
var ViewportParameter = /** @class */ (function () {
    function ViewportParameter(width, height, styles, classes, attributes) {
        this.width = width;
        this.height = height;
        this.styles = styles;
        this.classes = classes;
        this.attributes = attributes;
    }
    ViewportParameter.prototype.hasStyles = function () {
        return ((this.styles) && (this.styles.hasStyles()));
    };
    ViewportParameter.prototype.hasClasses = function () {
        return ((this.classes) && (this.classes.hasClasses()));
    };
    ViewportParameter.prototype.hasAttributes = function () {
        return ((this.attributes) && (this.attributes.hasAttributes()));
    };
    ViewportParameter.prototype.getClasses = function () {
        return this.classes;
    };
    ViewportParameter.prototype.getStyles = function () {
        return this.styles;
    };
    ViewportParameter.prototype.getAttributes = function () {
        return this.attributes;
    };
    ViewportParameter.prototype.getWidth = function () {
        return this.width;
    };
    ViewportParameter.prototype.getHeigth = function () {
        return this.height;
    };
    ViewportParameter.prototype.inRange = function (width, height) {
        return (((!(this.width)) || (this.width.inRange(width))) && ((!(this.height)) || (this.height.inRange(height))));
    };
    return ViewportParameter;
}());
var AbstractViewportDimension = /** @class */ (function () {
    function AbstractViewportDimension(minimum, maximum) {
        this.minimum = minimum;
        this.maximum = maximum;
    }
    AbstractViewportDimension.prototype.inRange = function (value) {
        return (((this.minimum) ? (value >= this.minimum) : true) && ((this.maximum) ? (value <= this.maximum) : true));
    };
    return AbstractViewportDimension;
}());
var HeightViewportDimension = /** @class */ (function (_super) {
    __extends(HeightViewportDimension, _super);
    function HeightViewportDimension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return HeightViewportDimension;
}(AbstractViewportDimension));
var WidthViewportDimension = /** @class */ (function (_super) {
    __extends(WidthViewportDimension, _super);
    function WidthViewportDimension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WidthViewportDimension;
}(AbstractViewportDimension));
var ViewportParameterBuilder = /** @class */ (function () {
    function ViewportParameterBuilder() {
    }
    ViewportParameterBuilder.newInstance = function () {
        return new ViewportParameterBuilder();
    };
    ViewportParameterBuilder.prototype.withWidth = function (minimum, maximum) {
        this.width = ((minimum || maximum) ? new WidthViewportDimension(minimum, maximum) : null);
        return this;
    };
    ViewportParameterBuilder.prototype.withHeight = function (minimum, maximum) {
        this.height = ((minimum || maximum) ? new HeightViewportDimension(minimum, maximum) : null);
        return this;
    };
    ViewportParameterBuilder.prototype.withStyles = function (styles) {
        this.styles = styles;
        return this;
    };
    ViewportParameterBuilder.prototype.withClasses = function (classes) {
        this.classes = classes;
        return this;
    };
    ViewportParameterBuilder.prototype.withAttributes = function (attributes) {
        this.attributes = attributes;
        return this;
    };
    ViewportParameterBuilder.prototype.build = function () {
        return new ViewportParameter(this.width, this.height, this.styles, this.classes, this.attributes);
    };
    return ViewportParameterBuilder;
}());
var ViewportAttributes = /** @class */ (function () {
    function ViewportAttributes(includes, excludes) {
        this.includes = includes;
        this.excludes = excludes;
    }
    ViewportAttributes.prototype.hasAttributes = function () {
        return ((this.includes.size > 0) || (this.excludes.size > 0));
    };
    ViewportAttributes.prototype.getAttributes = function () {
        return this.includes;
    };
    ViewportAttributes.prototype.getExcludedAttributes = function () {
        return this.excludes;
    };
    return ViewportAttributes;
}());
var ViewportAttributesBuilder = /** @class */ (function () {
    function ViewportAttributesBuilder() {
        this.includes = new Map();
        this.excludes = new Set();
    }
    ViewportAttributesBuilder.newInstance = function () {
        return new ViewportAttributesBuilder();
    };
    ViewportAttributesBuilder.prototype.with = function (name, value) {
        this.includes.set(name, value);
        return this;
    };
    ViewportAttributesBuilder.prototype.remove = function (name) {
        this.excludes.add(name);
        return this;
    };
    ViewportAttributesBuilder.prototype.build = function () {
        return new ViewportAttributes(this.includes, this.excludes);
    };
    return ViewportAttributesBuilder;
}());
export { DefaultContext as D, ViewportConfigurationService as V, ViewportParameters as a, ViewportParameterBuilder as b, ViewportAttributesBuilder as c };
