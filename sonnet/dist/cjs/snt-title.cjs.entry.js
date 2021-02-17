'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-b8997649.js');
const _commonjsHelpers = require('./_commonjsHelpers-fc53004f.js');

var TitleTypeEnum;
(function (TitleTypeEnum) {
    TitleTypeEnum["h1"] = "h1";
    TitleTypeEnum["h2"] = "h2";
    TitleTypeEnum["h3"] = "h3";
    TitleTypeEnum["h4"] = "h4";
})(TitleTypeEnum || (TitleTypeEnum = {}));

var clamp = _commonjsHelpers.createCommonjsModule(function (module, exports) {
/*!
 * Clamp.js 0.11.5
 *
 * Now Maintained by Josh English http://joshengish.com
 * Joseph Schmitt http://joe.sh
 * Released under the WTFPL license
 * http://sam.zoy.org/wtfpl/
 */

(function(root, factory) {
  {
    // Node, CommonJS-like
    module.exports = {clamp: factory()};
  }
}(_commonjsHelpers.commonjsGlobal, function() {
  /**
   * Clamps a text node.
   * @param {HTMLElement} element. Element containing the text node to clamp.
   * @param {Object} options. Options to pass to the clamper.
   */
  function clamp(element, options) {
    options = options || {};

    var win = window,
      opt = {
        clamp: options.clamp || 2,
        useNativeClamp: typeof(options.useNativeClamp) != 'undefined' ? options.useNativeClamp : true,
        splitOnChars: options.splitOnChars || ['.', '-', '–', '—', ' '], //Split on sentences (periods), hypens, en-dashes, em-dashes, and words (spaces).
        animate: options.animate || false,
        truncationChar: options.truncationChar || '…',
        truncationHTML: options.truncationHTML
      },

      sty = element.style,
      originalText = element.innerHTML,

      supportsNativeClamp = typeof(element.style.webkitLineClamp) != 'undefined',
      clampValue = opt.clamp,
      isCSSValue = clampValue.indexOf && (clampValue.indexOf('px') > -1 || clampValue.indexOf('em') > -1),
      truncationHTMLContainer;

    if (opt.truncationHTML) {
      truncationHTMLContainer = document.createElement('span');
      truncationHTMLContainer.innerHTML = opt.truncationHTML;
    }


    // UTILITY FUNCTIONS __________________________________________________________

    /**
     * Return the current style for an element.
     * @param {HTMLElement} elem The element to compute.
     * @param {string} prop The style property.
     * @returns {number}
     */
    function computeStyle(elem, prop) {
      if (!win.getComputedStyle) {
        win.getComputedStyle = function(el, pseudo) {
          this.el = el;
          this.getPropertyValue = function(prop) {
            var re = /(\-([a-z]){1})/g;
            if (prop == 'float') prop = 'styleFloat';
            if (re.test(prop)) {
              prop = prop.replace(re, function() {
                return arguments[2].toUpperCase();
              });
            }
            return el.currentStyle && el.currentStyle[prop] ? el.currentStyle[prop] : null;
          };
          return this;
        };
      }

      return win.getComputedStyle(elem, null).getPropertyValue(prop);
    }

    /**
     * Returns the maximum number of lines of text that should be rendered based
     * on the current height of the element and the line-height of the text.
     */
    function getMaxLines(height) {
      var availHeight = height || element.clientHeight,
        lineHeight = getLineHeight(element);

      return Math.max(Math.floor(availHeight / lineHeight), 0);
    }

    /**
     * Returns the maximum height a given element should have based on the line-
     * height of the text and the given clamp value.
     */
    function getMaxHeight(clmp) {
      var lineHeight = getLineHeight(element);
      // console.log(lineHeight * clmp);
      return lineHeight * clmp;
    }

    /**
     * Returns the line-height of an element as an integer.
     */
    function getLineHeight(elem) {
      var lh = computeStyle(elem, 'line-height');
      if (lh == 'normal') {
        // Normal line heights vary from browser to browser. The spec recommends
        // a value between 1.0 and 1.2 of the font size. Using 1.1 to split the diff.
        lh = parseInt(computeStyle(elem, 'font-size')) * 1.187;
      }
      return Math.ceil(parseFloat(lh));
    }


    // MEAT AND POTATOES (MMMM, POTATOES...) ______________________________________
    var splitOnChars = opt.splitOnChars.slice(0),
      splitChar = splitOnChars[0],
      chunks,
      lastChunk;

    /**
     * Gets an element's last child. That may be another node or a node's contents.
     */
    function getLastChild(elem) {
      if (!elem.lastChild) {
        return;
      }
      //Current element has children, need to go deeper and get last child as a text node
      if (elem.lastChild.childNodes && elem.lastChild.childNodes.length > 0) {
        return getLastChild(Array.prototype.slice.call(elem.childNodes).pop());
      }
      //This is the absolute last child, a text node, but something's wrong with it. Remove it and keep trying
      else if (!elem.lastChild || !elem.lastChild.nodeValue || elem.lastChild.nodeValue === '' || elem.lastChild.nodeValue == opt.truncationChar) {
        elem.lastChild.parentNode.removeChild(elem.lastChild);
        return getLastChild(element);
      }
      //This is the last child we want, return it
      else {
        return elem.lastChild;
      }
    }

    /**
     * Removes one character at a time from the text until its width or
     * height is beneath the passed-in max param.
     */
    function truncate(target, maxHeight) {
      if (!target || !maxHeight) {
        return;
      }

      /**
       * Resets global variables.
       */
      function reset() {
        splitOnChars = opt.splitOnChars.slice(0);
        splitChar = splitOnChars[0];
        chunks = null;
        lastChunk = null;
      }
      // console.log(splitOnChars);

      var nodeValue = target.nodeValue.replace(opt.truncationChar, '');

      //Grab the next chunks
      if (!chunks) {
        //If there are more characters to try, grab the next one
        if (splitOnChars.length > 0) {
          splitChar = splitOnChars.shift();
        }
        //No characters to chunk by. Go character-by-character
        else {
          splitChar = '';
        }

        chunks = nodeValue.split(splitChar);
      }

      //If there are chunks left to remove, remove the last one and see if
      // the nodeValue fits.
      if (chunks.length > 1) {
        // console.log('chunks', chunks);
        lastChunk = chunks.pop();
        // console.log('lastChunk', lastChunk);
        applyEllipsis(target, chunks.join(splitChar));
      }
      //No more chunks can be removed using this character
      else {
        chunks = null;
      }

      //Insert the custom HTML before the truncation character
      if (truncationHTMLContainer) {
        target.nodeValue = target.nodeValue.replace(opt.truncationChar, '');
        element.innerHTML = target.nodeValue + ' ' + truncationHTMLContainer.innerHTML + opt.truncationChar;
      }

      //Search produced valid chunks
      if (chunks) {
        //It fits
        if (element.clientHeight <= maxHeight) {
          // console.log(element.clientHeight, maxHeight);
          //There's still more characters to try splitting on, not quite done yet
          if (splitOnChars.length >= 0 && splitChar !== '') {
            applyEllipsis(target, chunks.join(splitChar) + splitChar + lastChunk);
            chunks = null;
          }
          //Finished!
          else {
            return element.innerHTML;
          }
        }
      }
      //No valid chunks produced
      else {
        //No valid chunks even when splitting by letter, time to move
        //on to the next node
        if (splitChar === '') {
          applyEllipsis(target, '');
          target = getLastChild(element);

          reset();
        }
      }

      //If you get here it means still too big, let's keep truncating
      if (opt.animate) {
        setTimeout(function() {
          truncate(target, maxHeight);
        }, opt.animate === true ? 10 : opt.animate);
      } else {
        return truncate(target, maxHeight);
      }
    }

    function applyEllipsis(elem, str) {
      elem.nodeValue = str + opt.truncationChar;
    }


    // CONSTRUCTOR ________________________________________________________________

    if (clampValue == 'auto') {
      clampValue = getMaxLines();
    } else if (isCSSValue) {
      clampValue = getMaxLines(parseInt(clampValue));
    }

    var clampedText;
    if (supportsNativeClamp && opt.useNativeClamp) {
      sty.overflow = 'hidden';
      sty.textOverflow = 'ellipsis';
      sty.webkitBoxOrient = 'vertical';
      sty.display = '-webkit-box';
      sty.webkitLineClamp = clampValue;

      if (isCSSValue) {
        sty.height = opt.clamp + 'px';
      }
    } else {
      var height = getMaxHeight(clampValue);
      if (height < element.clientHeight) {
        clampedText = truncate(getLastChild(element), height);
      }
    }

    return {
      'original': originalText,
      'clamped': clampedText
    };
  }

  return clamp;
}));
});

const titleComponentCss = "snt-title .header{text-align:center}.light-fill snt-title,snt-title.light-fill{display:block;background-color:#d9f0f4;color:#323232}.neutral-fill snt-title,snt-title.neutral-fill{display:block;background-color:#f8f8f8;color:#323232}.dark-fill snt-title,snt-title.dark-fill{display:block;background-color:#147582;color:#ffffff}.white-fill snt-title,snt-title.white-fill{display:block;background-color:#ffffff;color:#323232}.error-fill snt-title,snt-title.error-fill{display:block;background-color:#d9f0f4;background-image:none;color:#323232}snt-title.left .header,.left snt-title .header{text-align:left}snt-title.right .header,.right snt-title .header{text-align:right}snt-title.center .header,.center snt-title .header{text-align:center}@media (max-width: 767px){snt-title.left-mobile .header,.left-mobile snt-title .header{text-align:left}snt-title.right-mobile .header,.right-mobile snt-title .header{text-align:right}snt-title.center-mobile .header,.center-mobile snt-title .header{text-align:center}}snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-top snt-layout .spacings,.title-combined-top snt-title snt-layout .spacings,snt-title.title-combined-top snt-layout .spacings{padding-top:0.938em !important}}snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.813em !important}@media (min-width: 1024px){snt-title .title-combined-bottom snt-layout .spacings,.title-combined-bottom snt-title snt-layout .spacings,snt-title.title-combined-bottom snt-layout .spacings{padding-bottom:0.938em !important}}";

var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try {
            step(generator.next(value));
        }
        catch (e) {
            reject(e);
        } }
        function rejected(value) { try {
            step(generator["throw"](value));
        }
        catch (e) {
            reject(e);
        } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const TitleComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.clampLines = 0;
        this.truncationString = "...";
    }
    getContent(titleType) {
        switch (titleType) {
            case TitleTypeEnum.h1: return (index.h("h1", { ref: (el) => { this.titleElement = el; }, class: "header" }, index.h("slot", null)));
            case TitleTypeEnum.h2: return (index.h("h2", { ref: (el) => { this.titleElement = el; }, class: "header" }, index.h("slot", null)));
            case TitleTypeEnum.h3: return (index.h("h3", { ref: (el) => { this.titleElement = el; }, class: "header" }, index.h("slot", null)));
            case TitleTypeEnum.h4: return (index.h("h4", { ref: (el) => { this.titleElement = el; }, class: "header" }, index.h("slot", null)));
            default: return "";
        }
    }
    componentDidRender() {
        if (this.clampLines > 0) {
            clamp.clamp(this.titleElement, { clamp: this.clampLines, truncationChar: this.truncationString, useNativeClamp: false });
        }
    }
    clampTitle(clampLines = this.clampLines) {
        return __awaiter(this, void 0, void 0, function* () {
            clamp.clamp(this.titleElement, { clamp: clampLines, truncationChar: this.truncationString, useNativeClamp: false });
        });
    }
    setTitle(title) {
        return __awaiter(this, void 0, void 0, function* () {
            this.titleElement.innerHTML = title;
        });
    }
    render() {
        let content = this.getContent(this.titleType);
        return [
            index.h("snt-layout", null, content)
        ];
    }
};
TitleComponent.TAG_NAME = "snt-title";
TitleComponent.style = titleComponentCss;

exports.snt_title = TitleComponent;
