var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { r as registerInstance, h, g as getElement, c as getContext } from './index-79f6678c.js';
import { A as ActiveRouter } from './active-router-fc4d8b07.js';
/**
 * TS adaption of https://github.com/pillarjs/path-to-regexp/blob/master/index.js
 */
/**
 * Default configs.
 */
var DEFAULT_DELIMITER = '/';
var DEFAULT_DELIMITERS = './';
/**
 * The main path matching regexp utility.
 */
var PATH_REGEXP = new RegExp([
    // Match escaped characters that would otherwise appear in future matches.
    // This allows the user to escape special characters that won't transform.
    '(\\\\.)',
    // Match Express-style parameters and un-named parameters with a prefix
    // and optional suffixes. Matches appear as:
    //
    // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?"]
    // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined]
    '(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?'
].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 */
var parse = function (str, options) {
    var tokens = [];
    var key = 0;
    var index = 0;
    var path = '';
    var defaultDelimiter = (options && options.delimiter) || DEFAULT_DELIMITER;
    var delimiters = (options && options.delimiters) || DEFAULT_DELIMITERS;
    var pathEscaped = false;
    var res;
    while ((res = PATH_REGEXP.exec(str)) !== null) {
        var m = res[0];
        var escaped = res[1];
        var offset = res.index;
        path += str.slice(index, offset);
        index = offset + m.length;
        // Ignore already escaped sequences.
        if (escaped) {
            path += escaped[1];
            pathEscaped = true;
            continue;
        }
        var prev = '';
        var next = str[index];
        var name = res[2];
        var capture = res[3];
        var group = res[4];
        var modifier = res[5];
        if (!pathEscaped && path.length) {
            var k = path.length - 1;
            if (delimiters.indexOf(path[k]) > -1) {
                prev = path[k];
                path = path.slice(0, k);
            }
        }
        // Push the current path onto the tokens.
        if (path) {
            tokens.push(path);
            path = '';
            pathEscaped = false;
        }
        var partial = prev !== '' && next !== undefined && next !== prev;
        var repeat = modifier === '+' || modifier === '*';
        var optional = modifier === '?' || modifier === '*';
        var delimiter = prev || defaultDelimiter;
        var pattern = capture || group;
        tokens.push({
            name: name || key++,
            prefix: prev,
            delimiter: delimiter,
            optional: optional,
            repeat: repeat,
            partial: partial,
            pattern: pattern ? escapeGroup(pattern) : '[^' + escapeString(delimiter) + ']+?'
        });
    }
    // Push any remaining characters.
    if (path || index < str.length) {
        tokens.push(path + str.substr(index));
    }
    return tokens;
};
/**
 * Escape a regular expression string.
 */
var escapeString = function (str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
};
/**
 * Escape the capturing group by escaping special characters and meaning.
 */
var escapeGroup = function (group) {
    return group.replace(/([=!:$/()])/g, '\\$1');
};
/**
 * Get the flags for a regexp from the options.
 */
var flags = function (options) {
    return options && options.sensitive ? '' : 'i';
};
/**
 * Pull out keys from a regexp.
 */
var regexpToRegexp = function (path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                pattern: null
            });
        }
    }
    return path;
};
/**
 * Transform an array into a regexp.
 */
var arrayToRegexp = function (path, keys, options) {
    var parts = [];
    for (var i = 0; i < path.length; i++) {
        parts.push(pathToRegexp(path[i], keys, options).source);
    }
    return new RegExp('(?:' + parts.join('|') + ')', flags(options));
};
/**
 * Create a path regexp from string input.
 */
var stringToRegexp = function (path, keys, options) {
    return tokensToRegExp(parse(path, options), keys, options);
};
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
var tokensToRegExp = function (tokens, keys, options) {
    options = options || {};
    var strict = options.strict;
    var end = options.end !== false;
    var delimiter = escapeString(options.delimiter || DEFAULT_DELIMITER);
    var delimiters = options.delimiters || DEFAULT_DELIMITERS;
    var endsWith = [].concat(options.endsWith || []).map(escapeString).concat('$').join('|');
    var route = '';
    var isEndDelimited = false;
    // Iterate over the tokens and create our regexp string.
    for (var i = 0; i < tokens.length; i++) {
        var token = tokens[i];
        if (typeof token === 'string') {
            route += escapeString(token);
            isEndDelimited = i === tokens.length - 1 && delimiters.indexOf(token[token.length - 1]) > -1;
        }
        else {
            var prefix = escapeString(token.prefix || '');
            var capture = token.repeat
                ? '(?:' + token.pattern + ')(?:' + prefix + '(?:' + token.pattern + '))*'
                : token.pattern;
            if (keys)
                keys.push(token);
            if (token.optional) {
                if (token.partial) {
                    route += prefix + '(' + capture + ')?';
                }
                else {
                    route += '(?:' + prefix + '(' + capture + '))?';
                }
            }
            else {
                route += prefix + '(' + capture + ')';
            }
        }
    }
    if (end) {
        if (!strict)
            route += '(?:' + delimiter + ')?';
        route += endsWith === '$' ? '$' : '(?=' + endsWith + ')';
    }
    else {
        if (!strict)
            route += '(?:' + delimiter + '(?=' + endsWith + '))?';
        if (!isEndDelimited)
            route += '(?=' + delimiter + '|' + endsWith + ')';
    }
    return new RegExp('^' + route, flags(options));
};
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
var pathToRegexp = function (path, keys, options) {
    if (path instanceof RegExp) {
        return regexpToRegexp(path, keys);
    }
    if (Array.isArray(path)) {
        return arrayToRegexp(path, keys, options);
    }
    return stringToRegexp(path, keys, options);
};
var hasBasename = function (path, prefix) {
    return (new RegExp('^' + prefix + '(\\/|\\?|#|$)', 'i')).test(path);
};
var stripBasename = function (path, prefix) {
    return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
};
var stripTrailingSlash = function (path) {
    return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
};
var addLeadingSlash = function (path) {
    return path.charAt(0) === '/' ? path : '/' + path;
};
var stripLeadingSlash = function (path) {
    return path.charAt(0) === '/' ? path.substr(1) : path;
};
var parsePath = function (path) {
    var pathname = path || '/';
    var search = '';
    var hash = '';
    var hashIndex = pathname.indexOf('#');
    if (hashIndex !== -1) {
        hash = pathname.substr(hashIndex);
        pathname = pathname.substr(0, hashIndex);
    }
    var searchIndex = pathname.indexOf('?');
    if (searchIndex !== -1) {
        search = pathname.substr(searchIndex);
        pathname = pathname.substr(0, searchIndex);
    }
    return {
        pathname: pathname,
        search: search === '?' ? '' : search,
        hash: hash === '#' ? '' : hash,
        query: {},
        key: ''
    };
};
var createPath = function (location) {
    var pathname = location.pathname, search = location.search, hash = location.hash;
    var path = pathname || '/';
    if (search && search !== '?') {
        path += (search.charAt(0) === '?' ? search : "?" + search);
    }
    if (hash && hash !== '#') {
        path += (hash.charAt(0) === '#' ? hash : "#" + hash);
    }
    return path;
};
var parseQueryString = function (query) {
    if (!query) {
        return {};
    }
    return (/^[?#]/.test(query) ? query.slice(1) : query)
        .split('&')
        .reduce(function (params, param) {
        var _a = param.split('='), key = _a[0], value = _a[1];
        params[key] = value ? decodeURIComponent(value.replace(/\+/g, ' ')) : '';
        return params;
    }, {});
};
var isAbsolute = function (pathname) {
    return pathname.charAt(0) === '/';
};
var createKey = function (keyLength) {
    return Math.random().toString(36).substr(2, keyLength);
};
// About 1.5x faster than the two-arg version of Array#splice()
var spliceOne = function (list, index) {
    for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
        list[i] = list[k];
    }
    list.pop();
};
// This implementation is based heavily on node's url.parse
var resolvePathname = function (to, from) {
    if (from === void 0) { from = ''; }
    var fromParts = from && from.split('/') || [];
    var hasTrailingSlash;
    var up = 0;
    var toParts = to && to.split('/') || [];
    var isToAbs = to && isAbsolute(to);
    var isFromAbs = from && isAbsolute(from);
    var mustEndAbs = isToAbs || isFromAbs;
    if (to && isAbsolute(to)) {
        // to is absolute
        fromParts = toParts;
    }
    else if (toParts.length) {
        // to is relative, drop the filename
        fromParts.pop();
        fromParts = fromParts.concat(toParts);
    }
    if (!fromParts.length) {
        return '/';
    }
    if (fromParts.length) {
        var last = fromParts[fromParts.length - 1];
        hasTrailingSlash = (last === '.' || last === '..' || last === '');
    }
    else {
        hasTrailingSlash = false;
    }
    for (var i = fromParts.length; i >= 0; i--) {
        var part = fromParts[i];
        if (part === '.') {
            spliceOne(fromParts, i);
        }
        else if (part === '..') {
            spliceOne(fromParts, i);
            up++;
        }
        else if (up) {
            spliceOne(fromParts, i);
            up--;
        }
    }
    if (!mustEndAbs) {
        for (; up--; up) {
            fromParts.unshift('..');
        }
    }
    if (mustEndAbs && fromParts[0] !== '' && (!fromParts[0] || !isAbsolute(fromParts[0]))) {
        fromParts.unshift('');
    }
    var result = fromParts.join('/');
    if (hasTrailingSlash && result.substr(-1) !== '/') {
        result += '/';
    }
    return result;
};
var valueEqual = function (a, b) {
    if (a === b) {
        return true;
    }
    if (a == null || b == null) {
        return false;
    }
    if (Array.isArray(a)) {
        return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
            return valueEqual(item, b[index]);
        });
    }
    var aType = typeof a;
    var bType = typeof b;
    if (aType !== bType) {
        return false;
    }
    if (aType === 'object') {
        var aValue = a.valueOf();
        var bValue = b.valueOf();
        if (aValue !== a || bValue !== b) {
            return valueEqual(aValue, bValue);
        }
        var aKeys = Object.keys(a);
        var bKeys = Object.keys(b);
        if (aKeys.length !== bKeys.length) {
            return false;
        }
        return aKeys.every(function (key) {
            return valueEqual(a[key], b[key]);
        });
    }
    return false;
};
var locationsAreEqual = function (a, b) {
    return a.pathname === b.pathname &&
        a.search === b.search &&
        a.hash === b.hash &&
        a.key === b.key &&
        valueEqual(a.state, b.state);
};
var createLocation = function (path, state, key, currentLocation) {
    var location;
    if (typeof path === 'string') {
        // Two-arg form: push(path, state)
        location = parsePath(path);
        if (state !== undefined) {
            location.state = state;
        }
    }
    else {
        // One-arg form: push(location)
        location = Object.assign({ pathname: '' }, path);
        if (location.search && location.search.charAt(0) !== '?') {
            location.search = '?' + location.search;
        }
        if (location.hash && location.hash.charAt(0) !== '#') {
            location.hash = '#' + location.hash;
        }
        if (state !== undefined && location.state === undefined) {
            location.state = state;
        }
    }
    try {
        location.pathname = decodeURI(location.pathname);
    }
    catch (e) {
        if (e instanceof URIError) {
            throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' +
                'This is likely caused by an invalid percent-encoding.');
        }
        else {
            throw e;
        }
    }
    location.key = key;
    if (currentLocation) {
        // Resolve incomplete/relative pathname relative to current location.
        if (!location.pathname) {
            location.pathname = currentLocation.pathname;
        }
        else if (location.pathname.charAt(0) !== '/') {
            location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
        }
    }
    else {
        // When there is no prior location and pathname is empty, set it to /
        if (!location.pathname) {
            location.pathname = '/';
        }
    }
    location.query = parseQueryString(location.search || '');
    return location;
};
var cacheCount = 0;
var patternCache = {};
var cacheLimit = 10000;
// Memoized function for creating the path match regex
var compilePath = function (pattern, options) {
    var cacheKey = "" + options.end + options.strict;
    var cache = patternCache[cacheKey] || (patternCache[cacheKey] = {});
    var cachePattern = JSON.stringify(pattern);
    if (cache[cachePattern]) {
        return cache[cachePattern];
    }
    var keys = [];
    var re = pathToRegexp(pattern, keys, options);
    var compiledPattern = { re: re, keys: keys };
    if (cacheCount < cacheLimit) {
        cache[cachePattern] = compiledPattern;
        cacheCount += 1;
    }
    return compiledPattern;
};
/**
 * Public API for matching a URL pathname to a path pattern.
 */
var matchPath = function (pathname, options) {
    if (options === void 0) { options = {}; }
    if (typeof options === 'string') {
        options = { path: options };
    }
    var _a = options.path, path = _a === void 0 ? '/' : _a, _b = options.exact, exact = _b === void 0 ? false : _b, _c = options.strict, strict = _c === void 0 ? false : _c;
    var _d = compilePath(path, { end: exact, strict: strict }), re = _d.re, keys = _d.keys;
    var match = re.exec(pathname);
    if (!match) {
        return null;
    }
    var url = match[0], values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) {
        return null;
    }
    return {
        path: path,
        url: path === '/' && url === '' ? '/' : url,
        isExact: isExact,
        params: keys.reduce(function (memo, key, index) {
            memo[key.name] = values[index];
            return memo;
        }, {})
    };
};
var matchesAreEqual = function (a, b) {
    if (a == null && b == null) {
        return true;
    }
    if (b == null) {
        return false;
    }
    return a && b &&
        a.path === b.path &&
        a.url === b.url &&
        valueEqual(a.params, b.params);
};
var demoAppCss = "#sidebar-wrapper{min-height:110vh;margin-left:-15rem;-webkit-transition:margin 0.25s ease-out;-moz-transition:margin 0.25s ease-out;-o-transition:margin 0.25s ease-out;transition:margin 0.25s ease-out}#sidebar-wrapper .sidebar-heading{padding:0.75rem 0.75rem;text-align:center;font-size:1.2rem}#sidebar-wrapper .list-group{width:15rem}#page-content-wrapper{background-color:white;min-width:100vw;position:relative}#wrapper.toggled #sidebar-wrapper{margin-left:0}.remove{display:none}@media (min-width: 768px){#sidebar-wrapper{margin-left:0;width:242px;float:left}#page-content-wrapper{min-width:0;width:100%}#wrapper.toggled #sidebar-wrapper{margin-left:-15rem}}@media (max-width: 768px){#sidebar-wrapper{display:none}}.navbar{margin-bottom:2em}.components-panel{padding-right:5%;padding-left:5%}.viewport-size-wrapper{position:absolute;bottom:0;right:0}.viewport-size-wrapper p{font-size:11px;font-family:\"Courier New\"}";
var DemoApp = /** @class */ (function () {
    function DemoApp(hostRef) {
        registerInstance(this, hostRef);
    }
    DemoApp.prototype.componentDidLoad = function () {
        document.querySelector('.close-nav').addEventListener('click', function (e) {
            e.preventDefault();
            document.getElementById('sidebar-wrapper').style.display = "none";
        });
        var viewportSize = function () {
            var sntLayout = document.getElementsByTagName('snt-layout')[0];
            sntLayout ? document.querySelector('.viewport-size').textContent = sntLayout.getAttribute('viewport') : document.querySelector('.viewport-size-wrapper').classList.add('d-none');
        };
        window.addEventListener('resize', viewportSize);
    };
    DemoApp.prototype.render = function () {
        return (h("div", { class: "d-flex", id: "wrapper" }, h("div", { class: "bg-light border-right", id: "sidebar-wrapper" }, h("h3", { class: "sidebar-heading" }, "Components ", h("a", { href: 'javascript:void(0)', class: "close-nav" }, "[X]")), h("div", { class: "list-group list-group-flush" }, h("stencil-route-link", { url: '/' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Home")), h("stencil-route-link", { url: '/multi-column-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Multi Column")), h("stencil-route-link", { url: '/ad-example' }), h("stencil-route-link", { url: '/accordion-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Accordion")), h("stencil-route-link", { url: '/ad-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Ad")), h("stencil-route-link", { url: '/article-list-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Article List")), h("stencil-route-link", { url: '/cta-reminder-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "CTA Reminder")), h("stencil-route-link", { url: '/dropdown-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Dropdown")), h("stencil-route-link", { url: '/form-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Form")), h("stencil-route-link", { url: '/icon-copy-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Icon Copy")), h("stencil-route-link", { url: '/panel-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Panel")), h("stencil-route-link", { url: '/testimonial-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Testimonials")), h("stencil-route-link", { url: '/header-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Header")), h("stencil-route-link", { url: '/footer-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Footer")), h("stencil-route-link", { url: '/common-styles-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Common Styles")), h("stencil-route-link", { url: '/hero-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Hero")), h("stencil-route-link", { url: '/skiptomain-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Skip to main content")), h("stencil-route-link", { url: '/three-column-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Three Column")), h("stencil-route-link", { url: '/tip-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Tip")), h("stencil-route-link", { url: '/title-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Title")), h("stencil-route-link", { url: '/title-copy-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Title Copy")), h("stencil-route-link", { url: '/two-column-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Two Column")), h("stencil-route-link", { url: '/three-column-mixed-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Three Column Mixed ")), h("stencil-route-link", { url: '/two-column-feature-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Two Column Feature")), h("stencil-route-link", { url: '/blog-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Blog")), h("stencil-route-link", { url: '/blog-results-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Blog Results")), h("stencil-route-link", { url: '/blog-feature-articles-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Blog Feature Articles")), h("stencil-route-link", { url: '/button-link-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Button link")), h("stencil-route-link", { url: '/feature-left-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Feature Left")), h("stencil-route-link", { url: '/feature-right-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Feature Right")), h("stencil-route-link", { url: '/faq-filter-slider-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ filter/slider")), h("stencil-route-link", { url: '/faq-block-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ category block")), h("stencil-route-link", { url: '/faq-pagination-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "FAQ pagination")), h("stencil-route-link", { url: '/search-results-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Search results")), h("stencil-route-link", { url: '/treeview-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Treeview")), h("stencil-route-link", { url: '/cta-highlight-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "CTA Highlight")), h("stencil-route-link", { url: '/404-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "404 Error")), h("stencil-route-link", { url: '/search-combobox-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Search Combobox")), h("stencil-route-link", { url: '/responsive-images' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Responsive Images")), h("stencil-route-link", { url: '/source-list-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Source List")), h("stencil-route-link", { url: '/breadcrumb-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Breadcrumb Trail")), h("stencil-route-link", { url: '/side-tabs-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Side Rail Tabs")), h("stencil-route-link", { url: '/image-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Snt Image")), h("stencil-route-link", { url: '/image-icon-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Image Icon")), h("stencil-route-link", { url: '/connect-offers-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Connect Offers")), h("stencil-route-link", { url: '/video-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Video Example")), h("stencil-route-link", { url: '/vertical-tab-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Vertical Tab")), h("stencil-route-link", { url: '/link-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Link Example")), h("stencil-route-link", { url: '/recaptcha-example' }, h("a", { href: "#", class: "list-group-item list-group-item-action bg-light" }, "Recaptcha Example")))), h("main", { id: "page-content-wrapper" }, h("nav", { class: "navbar navbar-expand-lg navbar-light bg-light border-bottom" }, h("h2", { class: "sidebar-heading" }, "Sonnet Design System"), h("div", { class: "collapse navbar-collapse", id: "navbarSupportedContent" }, h("ul", { class: "navbar-nav ml-auto mt-2 mt-lg-0" }, h("li", { class: "nav-item active" }, h("a", { class: "nav-link", href: "https://pasprogram.economicalinsurance.com/secure/RapidBoard.jspa?rapidView=5936&projectKey=SCMS" }, "GIT")), h("li", { class: "nav-item" }, h("a", { class: "nav-link", href: "https://sonnet.invisionapp.com/dsm/sonnet/style-guide" }, "DSM"))))), h("div", { class: " " }, h("stencil-router", null, h("stencil-route-switch", { scrollTopOffset: 0 }, h("stencil-route", { url: '/', component: 'demo-app-home', exact: true }), h("stencil-route", { url: '/multi-column-example', component: 'multi-column-example' }), h("stencil-route", { url: '/accordion-example', component: 'accordion-example' }), h("stencil-route", { url: '/ad-example', component: 'ad-example' }), h("stencil-route", { url: '/article-list-example', component: 'article-list-example' }), h("stencil-route", { url: '/cta-reminder-example', component: 'cta-reminder-example' }), h("stencil-route", { url: '/dropdown-example', component: 'dropdown-example' }), h("stencil-route", { url: '/form-example', component: 'form-example' }), h("stencil-route", { url: '/icon-copy-example', component: 'icon-copy-example' }), h("stencil-route", { url: '/panel-example', component: 'panel-example' }), h("stencil-route", { url: '/testimonial-example', component: 'testimonial-example' }), h("stencil-route", { url: '/header-example', component: 'header-example' }), h("stencil-route", { url: '/footer-example', component: 'footer-example' }), h("stencil-route", { url: '/common-styles-example', component: 'common-styles-example' }), h("stencil-route", { url: '/hero-example', component: 'hero-example' }), h("stencil-route", { url: '/skiptomain-example', component: 'skiptomain-example' }), h("stencil-route", { url: '/tip-example', component: 'tip-example' }), h("stencil-route", { url: '/title-example', component: 'title-example' }), h("stencil-route", { url: '/title-copy-example', component: 'title-copy-example' }), h("stencil-route", { url: '/three-column-example', component: 'three-column-example' }), h("stencil-route", { url: '/three-column-mixed-example', component: 'three-column-mixed-example' }), h("stencil-route", { url: '/two-column-example', component: 'two-column-example' }), h("stencil-route", { url: '/two-column-feature-example', component: 'two-column-feature-example' }), h("stencil-route", { url: '/side-tabs-example', component: 'snt-tabs-example' }), h("stencil-route", { url: '/blog-example', component: 'blog-example' }), h("stencil-route", { url: '/blog-results-example', component: 'blog-results-example' }), h("stencil-route", { url: '/blog-feature-articles-example', component: 'blog-feature-articles-example' }), h("stencil-route", { url: '/button-link-example', component: 'button-link-example' }), h("stencil-route", { url: '/feature-left-example', component: 'feature-left-example' }), h("stencil-route", { url: '/feature-right-example', component: 'feature-right-example' }), h("stencil-route", { url: '/faq-filter-slider-example', component: 'faq-filter-slider-example' }), h("stencil-route", { url: '/faq-block-example', component: 'faq-block-example' }), h("stencil-route", { url: '/faq-pagination-example', component: 'faq-pagination-example' }), h("stencil-route", { url: '/search-results-example', component: 'search-results-example' }), h("stencil-route", { url: '/treeview-example', component: 'treeview-example' }), h("stencil-route", { url: '/cta-highlight-example', component: 'cta-highlight-example' }), h("stencil-route", { url: '/ontario-example', component: 'ontario-example' }), h("stencil-route", { url: '/404-example', component: 'page-not-found-example' }), h("stencil-route", { url: '/getAQuote', component: 'get-a-quote-example' }), h("stencil-route", { url: '/search-combobox-example', component: 'search-combobox-example' }), h("stencil-route", { url: '/responsive-images', component: 'responsive-images-example' }), h("stencil-route", { url: '/breadcrumb-example', component: 'breadcrumb-example' }), h("stencil-route", { url: '/source-list-example', component: 'source-list-example' }), h("stencil-route", { url: '/image-example', component: 'image-example' }), h("stencil-route", { url: '/image-icon-example', component: 'image-icon-example' }), h("stencil-route", { url: '/connect-offers-example', component: 'connect-offers-example' }), h("stencil-route", { url: '/modal-example', component: 'modal-example' }), h("stencil-route", { url: '/video-example', component: 'video-example' }), h("stencil-route", { url: '/vertical-tab-example', component: 'vertical-tab-example' }), h("stencil-route", { url: '/link-example', component: 'link-example' }), h("stencil-route", { url: '/recaptcha-example', component: 'recaptcha-example' })))), h("div", { class: 'viewport-size-wrapper' }, h("p", null, "viewport: ", h("span", { class: "viewport-size" }))))));
    };
    Object.defineProperty(DemoApp.prototype, "element", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return DemoApp;
}());
DemoApp.TAG_NAME = "demo-app";
DemoApp.style = demoAppCss;
var routeCss = "stencil-route.inactive{display:none}";
var Route = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        this.group = null;
        this.match = null;
        this.componentProps = {};
        this.exact = false;
        this.scrollOnNextRender = false;
        this.previousMatch = null;
    }
    // Identify if the current route is a match.
    class_1.prototype.computeMatch = function (newLocation) {
        var isGrouped = this.group != null || (this.el.parentElement != null && this.el.parentElement.tagName.toLowerCase() === 'stencil-route-switch');
        if (!newLocation || isGrouped) {
            return;
        }
        this.previousMatch = this.match;
        return this.match = matchPath(newLocation.pathname, {
            path: this.url,
            exact: this.exact,
            strict: true
        });
    };
    class_1.prototype.loadCompleted = function () {
        return __awaiter(this, void 0, void 0, function () {
            var routeViewOptions;
            return __generator(this, function (_a) {
                routeViewOptions = {};
                if (this.history && this.history.location.hash) {
                    routeViewOptions = {
                        scrollToId: this.history.location.hash.substr(1)
                    };
                }
                else if (this.scrollTopOffset) {
                    routeViewOptions = {
                        scrollTopOffset: this.scrollTopOffset
                    };
                }
                // After all children have completed then tell switch
                // the provided callback will get executed after this route is in view
                if (typeof this.componentUpdated === 'function') {
                    this.componentUpdated(routeViewOptions);
                    // If this is an independent route and it matches then routes have updated.
                    // If the only change to location is a hash change then do not scroll.
                }
                else if (this.match && !matchesAreEqual(this.match, this.previousMatch) && this.routeViewsUpdated) {
                    this.routeViewsUpdated(routeViewOptions);
                }
                return [2 /*return*/];
            });
        });
    };
    class_1.prototype.componentDidUpdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCompleted()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.componentDidLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCompleted()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    class_1.prototype.render = function () {
        // If there is no activeRouter then do not render
        // Check if this route is in the matching URL (for example, a parent route)
        if (!this.match || !this.history) {
            return null;
        }
        // component props defined in route
        // the history api
        // current match data including params
        var childProps = Object.assign({}, this.componentProps, { history: this.history, match: this.match });
        // If there is a routerRender defined then use
        // that and pass the component and component props with it.
        if (this.routeRender) {
            return this.routeRender(Object.assign({}, childProps, { component: this.component }));
        }
        if (this.component) {
            var ChildComponent = this.component;
            return (h(ChildComponent, Object.assign({}, childProps)));
        }
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_1, "watchers", {
        get: function () {
            return {
                "location": ["computeMatch"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_1;
}());
ActiveRouter.injectProps(Route, [
    'location',
    'history',
    'historyType',
    'routeViewsUpdated'
]);
Route.style = routeCss;
var getConfirmation = function (win, message, callback) { return (callback(win.confirm(message))); };
var isModifiedEvent = function (ev) { return (ev.metaKey || ev.altKey || ev.ctrlKey || ev.shiftKey); };
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */
var supportsHistory = function (win) {
    var ua = win.navigator.userAgent;
    if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
        ua.indexOf('Mobile Safari') !== -1 &&
        ua.indexOf('Chrome') === -1 &&
        ua.indexOf('Windows Phone') === -1) {
        return false;
    }
    return win.history && 'pushState' in win.history;
};
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */
var supportsPopStateOnHashChange = function (nav) { return (nav.userAgent.indexOf('Trident') === -1); };
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */
var supportsGoWithoutReloadUsingHash = function (nav) { return (nav.userAgent.indexOf('Firefox') === -1); };
var isExtraneousPopstateEvent = function (nav, event) { return (event.state === undefined &&
    nav.userAgent.indexOf('CriOS') === -1); };
var storageAvailable = function (win, type) {
    var storage = win[type];
    var x = '__storage_test__';
    try {
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch (e) {
        return e instanceof DOMException && (
        // everything except Firefox
        e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            storage.length !== 0;
    }
};
var getUrl = function (url, root) {
    // Don't allow double slashes
    if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
        return root.slice(0, root.length - 1) + url;
    }
    return root + url;
};
var RouteLink = /** @class */ (function () {
    function RouteLink(hostRef) {
        registerInstance(this, hostRef);
        this.unsubscribe = function () { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
          *  Custom tag to use instead of an anchor
          */
        this.custom = 'a';
        this.match = null;
    }
    RouteLink.prototype.componentWillLoad = function () {
        this.computeMatch();
    };
    // Identify if the current route is a match.
    RouteLink.prototype.computeMatch = function () {
        if (this.location) {
            this.match = matchPath(this.location.pathname, {
                path: this.urlMatch || this.url,
                exact: this.exact,
                strict: this.strict
            });
        }
    };
    RouteLink.prototype.handleClick = function (e) {
        if (isModifiedEvent(e) || !this.history || !this.url || !this.root) {
            return;
        }
        e.preventDefault();
        return this.history.push(getUrl(this.url, this.root));
    };
    // Get the URL for this route link without the root from the router
    RouteLink.prototype.render = function () {
        var _a;
        var anchorAttributes = {
            class: (_a = {},
                _a[this.activeClass] = this.match !== null,
                _a),
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex, 'aria-haspopup': this.ariaHaspopup, id: this.anchorId, 'aria-posinset': this.ariaPosinset, 'aria-setsize': this.ariaSetsize, 'aria-label': this.ariaLabel });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes), h("slot", null)));
    };
    Object.defineProperty(RouteLink.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(RouteLink, "watchers", {
        get: function () {
            return {
                "location": ["computeMatch"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return RouteLink;
}());
ActiveRouter.injectProps(RouteLink, [
    'history',
    'location',
    'root'
]);
var getUniqueId = function () {
    return ((Math.random() * 10e16).toString().match(/.{4}/g) || []).join('-');
};
var getMatch = function (pathname, url, exact) {
    return matchPath(pathname, {
        path: url,
        exact: exact,
        strict: true
    });
};
var isHTMLStencilRouteElement = function (elm) {
    return elm.tagName === 'STENCIL-ROUTE';
};
var RouteSwitch = /** @class */ (function () {
    function class_2(hostRef) {
        registerInstance(this, hostRef);
        this.group = getUniqueId();
        this.subscribers = [];
        this.queue = getContext(this, "queue");
    }
    class_2.prototype.componentWillLoad = function () {
        if (this.location != null) {
            this.regenerateSubscribers(this.location);
        }
    };
    class_2.prototype.regenerateSubscribers = function (newLocation) {
        return __awaiter(this, void 0, void 0, function () {
            var newActiveIndex, activeChild;
            var _this = this;
            return __generator(this, function (_a) {
                if (newLocation == null) {
                    return [2 /*return*/];
                }
                newActiveIndex = -1;
                this.subscribers = Array.prototype.slice.call(this.el.children)
                    .filter(isHTMLStencilRouteElement)
                    .map(function (childElement, index) {
                    var match = getMatch(newLocation.pathname, childElement.url, childElement.exact);
                    if (match && newActiveIndex === -1) {
                        newActiveIndex = index;
                    }
                    return {
                        el: childElement,
                        match: match
                    };
                });
                if (newActiveIndex === -1) {
                    return [2 /*return*/];
                }
                // Check if this actually changes which child is active
                // then just pass the new match down if the active route isn't changing.
                if (this.activeIndex === newActiveIndex) {
                    this.subscribers[newActiveIndex].el.match = this.subscribers[newActiveIndex].match;
                    return [2 /*return*/];
                }
                this.activeIndex = newActiveIndex;
                activeChild = this.subscribers[this.activeIndex];
                if (this.scrollTopOffset) {
                    activeChild.el.scrollTopOffset = this.scrollTopOffset;
                }
                activeChild.el.group = this.group;
                activeChild.el.match = activeChild.match;
                activeChild.el.componentUpdated = function (routeViewUpdatedOptions) {
                    // After the new active route has completed then update visibility of routes
                    _this.queue.write(function () {
                        _this.subscribers.forEach(function (child, index) {
                            child.el.componentUpdated = undefined;
                            if (index === _this.activeIndex) {
                                return child.el.style.display = '';
                            }
                            if (_this.scrollTopOffset) {
                                child.el.scrollTopOffset = _this.scrollTopOffset;
                            }
                            child.el.group = _this.group;
                            child.el.match = null;
                            child.el.style.display = 'none';
                        });
                    });
                    if (_this.routeViewsUpdated) {
                        _this.routeViewsUpdated(Object.assign({ scrollTopOffset: _this.scrollTopOffset }, routeViewUpdatedOptions));
                    }
                };
                return [2 /*return*/];
            });
        });
    };
    class_2.prototype.render = function () {
        return (h("slot", null));
    };
    Object.defineProperty(class_2.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(class_2, "watchers", {
        get: function () {
            return {
                "location": ["regenerateSubscribers"]
            };
        },
        enumerable: false,
        configurable: true
    });
    return class_2;
}());
ActiveRouter.injectProps(RouteSwitch, [
    'location',
    'routeViewsUpdated'
]);
var warning = function (value) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (!value) {
        console.warn.apply(console, args);
    }
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var createTransitionManager = function () {
    var prompt;
    var listeners = [];
    var setPrompt = function (nextPrompt) {
        warning(prompt == null, 'A history supports only one prompt at a time');
        prompt = nextPrompt;
        return function () {
            if (prompt === nextPrompt) {
                prompt = null;
            }
        };
    };
    var confirmTransitionTo = function (location, action, getUserConfirmation, callback) {
        // TODO: If another transition starts while we're still confirming
        // the previous one, we may end up in a weird state. Figure out the
        // best way to handle this.
        if (prompt != null) {
            var result = typeof prompt === 'function' ? prompt(location, action) : prompt;
            if (typeof result === 'string') {
                if (typeof getUserConfirmation === 'function') {
                    getUserConfirmation(result, callback);
                }
                else {
                    warning(false, 'A history needs a getUserConfirmation function in order to use a prompt message');
                    callback(true);
                }
            }
            else {
                // Return false from a transition hook to cancel the transition.
                callback(result !== false);
            }
        }
        else {
            callback(true);
        }
    };
    var appendListener = function (fn) {
        var isActive = true;
        var listener = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (isActive) {
                fn.apply(void 0, args);
            }
        };
        listeners.push(listener);
        return function () {
            isActive = false;
            listeners = listeners.filter(function (item) { return item !== listener; });
        };
    };
    var notifyListeners = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        listeners.forEach(function (listener) { return listener.apply(void 0, args); });
    };
    return {
        setPrompt: setPrompt,
        confirmTransitionTo: confirmTransitionTo,
        appendListener: appendListener,
        notifyListeners: notifyListeners
    };
};
var createScrollHistory = function (win, applicationScrollKey) {
    if (applicationScrollKey === void 0) { applicationScrollKey = 'scrollPositions'; }
    var scrollPositions = new Map();
    var set = function (key, value) {
        scrollPositions.set(key, value);
        if (storageAvailable(win, 'sessionStorage')) {
            var arrayData_1 = [];
            scrollPositions.forEach(function (value, key) {
                arrayData_1.push([key, value]);
            });
            win.sessionStorage.setItem('scrollPositions', JSON.stringify(arrayData_1));
        }
    };
    var get = function (key) {
        return scrollPositions.get(key);
    };
    var has = function (key) {
        return scrollPositions.has(key);
    };
    var capture = function (key) {
        set(key, [win.scrollX, win.scrollY]);
    };
    if (storageAvailable(win, 'sessionStorage')) {
        var scrollData = win.sessionStorage.getItem(applicationScrollKey);
        scrollPositions = scrollData ?
            new Map(JSON.parse(scrollData)) :
            scrollPositions;
    }
    if ('scrollRestoration' in win.history) {
        history.scrollRestoration = 'manual';
    }
    return {
        set: set,
        get: get,
        has: has,
        capture: capture
    };
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */
var createBrowserHistory = function (win, props) {
    if (props === void 0) { props = {}; }
    var forceNextPop = false;
    var globalHistory = win.history;
    var globalLocation = win.location;
    var globalNavigator = win.navigator;
    var canUseHistory = supportsHistory(win);
    var needsHashChangeListener = !supportsPopStateOnHashChange(globalNavigator);
    var scrollHistory = createScrollHistory(win);
    var forceRefresh = (props.forceRefresh != null) ? props.forceRefresh : false;
    var getUserConfirmation = (props.getUserConfirmation != null) ? props.getUserConfirmation : getConfirmation;
    var keyLength = (props.keyLength != null) ? props.keyLength : 6;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var getHistoryState = function () {
        try {
            return win.history.state || {};
        }
        catch (e) {
            // IE 11 sometimes throws when accessing window.history.state
            // See https://github.com/ReactTraining/history/pull/289
            return {};
        }
    };
    var getDOMLocation = function (historyState) {
        historyState = historyState || {};
        var key = historyState.key, state = historyState.state;
        var pathname = globalLocation.pathname, search = globalLocation.search, hash = globalLocation.hash;
        var path = pathname + search + hash;
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path, state, key || createKey(keyLength));
    };
    var transitionManager = createTransitionManager();
    var setState = function (nextState) {
        // Capture location for the view before changing history.
        scrollHistory.capture(history.location.key);
        Object.assign(history, nextState);
        // Set scroll position based on its previous storage value
        history.location.scrollPosition = scrollHistory.get(history.location.key);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    var handlePopState = function (event) {
        // Ignore extraneous popstate events in WebKit.
        if (!isExtraneousPopstateEvent(globalNavigator, event)) {
            handlePop(getDOMLocation(event.state));
        }
    };
    var handleHashChange = function () {
        handlePop(getDOMLocation(getHistoryState()));
    };
    var handlePop = function (location) {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            var action_1 = 'POP';
            transitionManager.confirmTransitionTo(location, action_1, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action_1, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function (fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of keys we've seen in sessionStorage.
        // Instead, we just default to 0 for keys we don't know.
        var toIndex = allKeys.indexOf(toLocation.key);
        var fromIndex = allKeys.indexOf(fromLocation.key);
        if (toIndex === -1) {
            toIndex = 0;
        }
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    var initialLocation = getDOMLocation(getHistoryState());
    var allKeys = [initialLocation.key];
    var listenerCount = 0;
    var isBlocked = false;
    // Public interface
    var createHref = function (location) {
        return basename + createPath(location);
    };
    var push = function (path, state) {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to push when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        var action = 'PUSH';
        var location = createLocation(path, state, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.pushState({ key: key, state: state }, '', href);
                if (forceRefresh) {
                    globalLocation.href = href;
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    var nextKeys = allKeys.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                    nextKeys.push(location.key);
                    allKeys = nextKeys;
                    setState({ action: action, location: location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot push state in browsers that do not support HTML5 history');
                globalLocation.href = href;
            }
        });
    };
    var replace = function (path, state) {
        warning(!(typeof path === 'object' && path.state !== undefined && state !== undefined), 'You should avoid providing a 2nd state argument to replace when the 1st ' +
            'argument is a location-like object that already has state; it is ignored');
        var action = 'REPLACE';
        var location = createLocation(path, state, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var href = createHref(location);
            var key = location.key, state = location.state;
            if (canUseHistory) {
                globalHistory.replaceState({ key: key, state: state }, '', href);
                if (forceRefresh) {
                    globalLocation.replace(href);
                }
                else {
                    var prevIndex = allKeys.indexOf(history.location.key);
                    if (prevIndex !== -1) {
                        allKeys[prevIndex] = location.key;
                    }
                    setState({ action: action, location: location });
                }
            }
            else {
                warning(state === undefined, 'Browser history cannot replace state in browsers that do not support HTML5 history');
                globalLocation.replace(href);
            }
        });
    };
    var go = function (n) {
        globalHistory.go(n);
    };
    var goBack = function () { return go(-1); };
    var goForward = function () { return go(1); };
    var checkDOMListeners = function (delta) {
        listenerCount += delta;
        if (listenerCount === 1) {
            win.addEventListener(PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                win.addEventListener(HashChangeEvent, handleHashChange);
            }
        }
        else if (listenerCount === 0) {
            win.removeEventListener(PopStateEvent, handlePopState);
            if (needsHashChangeListener) {
                win.removeEventListener(HashChangeEvent, handleHashChange);
            }
        }
    };
    var block = function (prompt) {
        if (prompt === void 0) { prompt = ''; }
        var unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(1);
            isBlocked = true;
        }
        return function () {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(-1);
            }
            return unblock();
        };
    };
    var listen = function (listener) {
        var unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(1);
        return function () {
            checkDOMListeners(-1);
            unlisten();
        };
    };
    var history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        goBack: goBack,
        goForward: goForward,
        block: block,
        listen: listen,
        win: win
    };
    return history;
};
// Adapted from the https://github.com/ReactTraining/history and converted to TypeScript
var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
    hashbang: {
        encodePath: function (path) { return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path); },
        decodePath: function (path) { return path.charAt(0) === '!' ? path.substr(1) : path; }
    },
    noslash: {
        encodePath: stripLeadingSlash,
        decodePath: addLeadingSlash
    },
    slash: {
        encodePath: addLeadingSlash,
        decodePath: addLeadingSlash
    }
};
var createHashHistory = function (win, props) {
    if (props === void 0) { props = {}; }
    var forceNextPop = false;
    var ignorePath = null;
    var listenerCount = 0;
    var isBlocked = false;
    var globalLocation = win.location;
    var globalHistory = win.history;
    var canGoWithoutReload = supportsGoWithoutReloadUsingHash(win.navigator);
    var keyLength = (props.keyLength != null) ? props.keyLength : 6;
    var _a = props.getUserConfirmation, getUserConfirmation = _a === void 0 ? getConfirmation : _a, _b = props.hashType, hashType = _b === void 0 ? 'slash' : _b;
    var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
    var _c = HashPathCoders[hashType], encodePath = _c.encodePath, decodePath = _c.decodePath;
    var getHashPath = function () {
        // We can't use window.location.hash here because it's not
        // consistent across browsers - Firefox will pre-decode it!
        var href = globalLocation.href;
        var hashIndex = href.indexOf('#');
        return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
    };
    var pushHashPath = function (path) { return (globalLocation.hash = path); };
    var replaceHashPath = function (path) {
        var hashIndex = globalLocation.href.indexOf('#');
        globalLocation.replace(globalLocation.href.slice(0, hashIndex >= 0 ? hashIndex : 0) + '#' + path);
    };
    var getDOMLocation = function () {
        var path = decodePath(getHashPath());
        warning((!basename || hasBasename(path, basename)), 'You are attempting to use a basename on a page whose URL path does not begin ' +
            'with the basename. Expected path "' + path + '" to begin with "' + basename + '".');
        if (basename) {
            path = stripBasename(path, basename);
        }
        return createLocation(path, undefined, createKey(keyLength));
    };
    var transitionManager = createTransitionManager();
    var setState = function (nextState) {
        Object.assign(history, nextState);
        history.length = globalHistory.length;
        transitionManager.notifyListeners(history.location, history.action);
    };
    var handleHashChange = function () {
        var path = getHashPath();
        var encodedPath = encodePath(path);
        if (path !== encodedPath) {
            // Ensure we always have a properly-encoded hash.
            replaceHashPath(encodedPath);
        }
        else {
            var location = getDOMLocation();
            var prevLocation = history.location;
            if (!forceNextPop && locationsAreEqual(prevLocation, location)) {
                return; // A hashchange doesn't always == location change.
            }
            if (ignorePath === createPath(location)) {
                return; // Ignore this change; we already setState in push/replace.
            }
            ignorePath = null;
            handlePop(location);
        }
    };
    var handlePop = function (location) {
        if (forceNextPop) {
            forceNextPop = false;
            setState();
        }
        else {
            var action_2 = 'POP';
            transitionManager.confirmTransitionTo(location, action_2, getUserConfirmation, function (ok) {
                if (ok) {
                    setState({ action: action_2, location: location });
                }
                else {
                    revertPop(location);
                }
            });
        }
    };
    var revertPop = function (fromLocation) {
        var toLocation = history.location;
        // TODO: We could probably make this more reliable by
        // keeping a list of paths we've seen in sessionStorage.
        // Instead, we just default to 0 for paths we don't know.
        var toIndex = allPaths.lastIndexOf(createPath(toLocation));
        var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
        if (toIndex === -1) {
            toIndex = 0;
        }
        if (fromIndex === -1) {
            fromIndex = 0;
        }
        var delta = toIndex - fromIndex;
        if (delta) {
            forceNextPop = true;
            go(delta);
        }
    };
    // Ensure the hash is encoded properly before doing anything else.
    var path = getHashPath();
    var encodedPath = encodePath(path);
    if (path !== encodedPath) {
        replaceHashPath(encodedPath);
    }
    var initialLocation = getDOMLocation();
    var allPaths = [createPath(initialLocation)];
    // Public interface
    var createHref = function (location) { return ('#' + encodePath(basename + createPath(location))); };
    var push = function (path, state) {
        warning(state === undefined, 'Hash history cannot push state; it is ignored');
        var action = 'PUSH';
        var location = createLocation(path, undefined, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var path = createPath(location);
            var encodedPath = encodePath(basename + path);
            var hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a PUSH, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                pushHashPath(encodedPath);
                var prevIndex = allPaths.lastIndexOf(createPath(history.location));
                var nextPaths = allPaths.slice(0, prevIndex === -1 ? 0 : prevIndex + 1);
                nextPaths.push(path);
                allPaths = nextPaths;
                setState({ action: action, location: location });
            }
            else {
                warning(false, 'Hash history cannot PUSH the same path; a new entry will not be added to the history stack');
                setState();
            }
        });
    };
    var replace = function (path, state) {
        warning(state === undefined, 'Hash history cannot replace state; it is ignored');
        var action = 'REPLACE';
        var location = createLocation(path, undefined, createKey(keyLength), history.location);
        transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
            if (!ok) {
                return;
            }
            var path = createPath(location);
            var encodedPath = encodePath(basename + path);
            var hashChanged = getHashPath() !== encodedPath;
            if (hashChanged) {
                // We cannot tell if a hashchange was caused by a REPLACE, so we'd
                // rather setState here and ignore the hashchange. The caveat here
                // is that other hash histories in the page will consider it a POP.
                ignorePath = path;
                replaceHashPath(encodedPath);
            }
            var prevIndex = allPaths.indexOf(createPath(history.location));
            if (prevIndex !== -1) {
                allPaths[prevIndex] = path;
            }
            setState({ action: action, location: location });
        });
    };
    var go = function (n) {
        warning(canGoWithoutReload, 'Hash history go(n) causes a full page reload in this browser');
        globalHistory.go(n);
    };
    var goBack = function () { return go(-1); };
    var goForward = function () { return go(1); };
    var checkDOMListeners = function (win, delta) {
        listenerCount += delta;
        if (listenerCount === 1) {
            win.addEventListener(HashChangeEvent$1, handleHashChange);
        }
        else if (listenerCount === 0) {
            win.removeEventListener(HashChangeEvent$1, handleHashChange);
        }
    };
    var block = function (prompt) {
        if (prompt === void 0) { prompt = ''; }
        var unblock = transitionManager.setPrompt(prompt);
        if (!isBlocked) {
            checkDOMListeners(win, 1);
            isBlocked = true;
        }
        return function () {
            if (isBlocked) {
                isBlocked = false;
                checkDOMListeners(win, -1);
            }
            return unblock();
        };
    };
    var listen = function (listener) {
        var unlisten = transitionManager.appendListener(listener);
        checkDOMListeners(win, 1);
        return function () {
            checkDOMListeners(win, -1);
            unlisten();
        };
    };
    var history = {
        length: globalHistory.length,
        action: 'POP',
        location: initialLocation,
        createHref: createHref,
        push: push,
        replace: replace,
        go: go,
        goBack: goBack,
        goForward: goForward,
        block: block,
        listen: listen,
        win: win
    };
    return history;
};
var getLocation = function (location, root) {
    // Remove the root URL if found at beginning of string
    var pathname = location.pathname.indexOf(root) == 0 ?
        '/' + location.pathname.slice(root.length) :
        location.pathname;
    return Object.assign({}, location, { pathname: pathname });
};
var HISTORIES = {
    'browser': createBrowserHistory,
    'hash': createHashHistory
};
var Router = /** @class */ (function () {
    function Router(hostRef) {
        var _this = this;
        registerInstance(this, hostRef);
        this.root = '/';
        this.historyType = 'browser';
        // A suffix to append to the page title whenever
        // it's updated through RouteTitle
        this.titleSuffix = '';
        this.routeViewsUpdated = function (options) {
            if (options === void 0) { options = {}; }
            if (_this.history && options.scrollToId && _this.historyType === 'browser') {
                var elm = _this.history.win.document.getElementById(options.scrollToId);
                if (elm) {
                    return elm.scrollIntoView();
                }
            }
            _this.scrollTo(options.scrollTopOffset || _this.scrollTopOffset);
        };
        this.isServer = getContext(this, "isServer");
        this.queue = getContext(this, "queue");
    }
    Router.prototype.componentWillLoad = function () {
        var _this = this;
        this.history = HISTORIES[this.historyType](this.el.ownerDocument.defaultView);
        this.history.listen(function (location) {
            location = getLocation(location, _this.root);
            _this.location = location;
        });
        this.location = getLocation(this.history.location, this.root);
    };
    Router.prototype.scrollTo = function (scrollToLocation) {
        var history = this.history;
        if (scrollToLocation == null || this.isServer || !history) {
            return;
        }
        if (history.action === 'POP' && Array.isArray(history.location.scrollPosition)) {
            return this.queue.write(function () {
                if (history && history.location && Array.isArray(history.location.scrollPosition)) {
                    history.win.scrollTo(history.location.scrollPosition[0], history.location.scrollPosition[1]);
                }
            });
        }
        // okay, the frame has passed. Go ahead and render now
        return this.queue.write(function () {
            history.win.scrollTo(0, scrollToLocation);
        });
    };
    Router.prototype.render = function () {
        if (!this.location || !this.history) {
            return;
        }
        var state = {
            historyType: this.historyType,
            location: this.location,
            titleSuffix: this.titleSuffix,
            root: this.root,
            history: this.history,
            routeViewsUpdated: this.routeViewsUpdated
        };
        return (h(ActiveRouter.Provider, { state: state }, h("slot", null)));
    };
    Object.defineProperty(Router.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return Router;
}());
export { DemoApp as demo_app, Route as stencil_route, RouteLink as stencil_route_link, RouteSwitch as stencil_route_switch, Router as stencil_router };
