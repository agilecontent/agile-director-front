!function(e){function r(e,r,o){return 4===arguments.length?t.apply(this,arguments):void n(e,{declarative:!0,deps:r,declare:o})}function t(e,r,t,o){n(e,{declarative:!1,deps:r,executingRequire:t,execute:o})}function n(e,r){r.name=e,e in v||(v[e]=r),r.normalizedDeps=r.deps}function o(e,r){if(r[e.groupIndex]=r[e.groupIndex]||[],-1==g.call(r[e.groupIndex],e)){r[e.groupIndex].push(e);for(var t=0,n=e.normalizedDeps.length;n>t;t++){var a=e.normalizedDeps[t],u=v[a];if(u&&!u.evaluated){var d=e.groupIndex+(u.declarative!=e.declarative);if(void 0===u.groupIndex||u.groupIndex<d){if(void 0!==u.groupIndex&&(r[u.groupIndex].splice(g.call(r[u.groupIndex],u),1),0==r[u.groupIndex].length))throw new TypeError("Mixed dependency cycle detected");u.groupIndex=d}o(u,r)}}}}function a(e){var r=v[e];r.groupIndex=0;var t=[];o(r,t);for(var n=!!r.declarative==t.length%2,a=t.length-1;a>=0;a--){for(var u=t[a],i=0;i<u.length;i++){var s=u[i];n?d(s):l(s)}n=!n}}function u(e){return y[e]||(y[e]={name:e,dependencies:[],exports:{},importers:[]})}function d(r){if(!r.module){var t=r.module=u(r.name),n=r.module.exports,o=r.declare.call(e,function(e,r){if(t.locked=!0,"object"==typeof e)for(var o in e)n[o]=e[o];else n[e]=r;for(var a=0,u=t.importers.length;u>a;a++){var d=t.importers[a];if(!d.locked)for(var i=0;i<d.dependencies.length;++i)d.dependencies[i]===t&&d.setters[i](n)}return t.locked=!1,r},{id:r.name});t.setters=o.setters,t.execute=o.execute;for(var a=0,i=r.normalizedDeps.length;i>a;a++){var l,s=r.normalizedDeps[a],c=v[s],f=y[s];f?l=f.exports:c&&!c.declarative?l=c.esModule:c?(d(c),f=c.module,l=f.exports):l=p(s),f&&f.importers?(f.importers.push(t),t.dependencies.push(f)):t.dependencies.push(null),t.setters[a]&&t.setters[a](l)}}}function i(e){var r,t=v[e];if(t)t.declarative?f(e,[]):t.evaluated||l(t),r=t.module.exports;else if(r=p(e),!r)throw new Error("Unable to load dependency "+e+".");return(!t||t.declarative)&&r&&r.__useDefault?r["default"]:r}function l(r){if(!r.module){var t={},n=r.module={exports:t,id:r.name};if(!r.executingRequire)for(var o=0,a=r.normalizedDeps.length;a>o;o++){var u=r.normalizedDeps[o],d=v[u];d&&l(d)}r.evaluated=!0;var c=r.execute.call(e,function(e){for(var t=0,n=r.deps.length;n>t;t++)if(r.deps[t]==e)return i(r.normalizedDeps[t]);throw new TypeError("Module "+e+" not declared as a dependency.")},t,n);c&&(n.exports=c),t=n.exports,t&&t.__esModule?r.esModule=t:r.esModule=s(t)}}function s(r){var t={};if(("object"==typeof r||"function"==typeof r)&&r!==e)if(m)for(var n in r)"default"!==n&&c(t,r,n);else{var o=r&&r.hasOwnProperty;for(var n in r)"default"===n||o&&!r.hasOwnProperty(n)||(t[n]=r[n])}return t["default"]=r,x(t,"__useDefault",{value:!0}),t}function c(e,r,t){try{var n;(n=Object.getOwnPropertyDescriptor(r,t))&&x(e,t,n)}catch(o){return e[t]=r[t],!1}}function f(r,t){var n=v[r];if(n&&!n.evaluated&&n.declarative){t.push(r);for(var o=0,a=n.normalizedDeps.length;a>o;o++){var u=n.normalizedDeps[o];-1==g.call(t,u)&&(v[u]?f(u,t):p(u))}n.evaluated||(n.evaluated=!0,n.module.execute.call(e))}}function p(e){if(I[e])return I[e];if("@node/"==e.substr(0,6))return I[e]=s(D(e.substr(6)));var r=v[e];if(!r)throw"Module "+e+" not present.";return a(e),f(e,[]),v[e]=void 0,r.declarative&&x(r.module.exports,"__esModule",{value:!0}),I[e]=r.declarative?r.module.exports:r.esModule}var v={},g=Array.prototype.indexOf||function(e){for(var r=0,t=this.length;t>r;r++)if(this[r]===e)return r;return-1},m=!0;try{Object.getOwnPropertyDescriptor({a:0},"a")}catch(h){m=!1}var x;!function(){try{Object.defineProperty({},"a",{})&&(x=Object.defineProperty)}catch(e){x=function(e,r,t){try{e[r]=t.value||t.get.call(e)}catch(n){}}}}();var y={},D="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&require.resolve&&"undefined"!=typeof process&&require,I={"@empty":{}};return function(e,n,o,a){return function(u){u(function(u){for(var d={_nodeRequire:D,register:r,registerDynamic:t,get:p,set:function(e,r){I[e]=r},newModule:function(e){return e}},i=0;i<n.length;i++)(function(e,r){r&&r.__esModule?I[e]=r:I[e]=s(r)})(n[i],arguments[i]);a(d);var l=p(e[0]);if(e.length>1)for(var i=1;i<e.length;i++)p(e[i]);return o?l["default"]:l})}}}("undefined"!=typeof self?self:global)

(["1"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
!function(e){function r(e,r){for(var n=e.split(".");n.length;)r=r[n.shift()];return r}function n(n){if("string"==typeof n)return r(n,e);if(!(n instanceof Array))throw new Error("Global exports must be a string or array.");for(var t={},o=!0,f=0;f<n.length;f++){var i=r(n[f],e);o&&(t["default"]=i,o=!1),t[n[f].split(".").pop()]=i}return t}function t(r){if(Object.keys)Object.keys(e).forEach(r);else for(var n in e)a.call(e,n)&&r(n)}function o(r){t(function(n){if(-1==l.call(s,n)){try{var t=e[n]}catch(o){s.push(n)}r(n,t)}})}var f,i=$__System,a=Object.prototype.hasOwnProperty,l=Array.prototype.indexOf||function(e){for(var r=0,n=this.length;n>r;r++)if(this[r]===e)return r;return-1},s=["_g","sessionStorage","localStorage","clipboardData","frames","frameElement","external","mozAnimationStartTime","webkitStorageInfo","webkitIndexedDB","mozInnerScreenY","mozInnerScreenX"];i.set("@@global-helpers",i.newModule({prepareGlobal:function(r,t,i){var a=e.define;e.define=void 0;var l;if(i){l={};for(var s in i)l[s]=e[s],e[s]=i[s]}return t||(f={},o(function(e,r){f[e]=r})),function(){var r;if(t)r=n(t);else{r={};var i,s;o(function(e,n){f[e]!==n&&"undefined"!=typeof n&&(r[e]=n,"undefined"!=typeof i?s||i===n||(s=!0):i=n)}),r=s?r:i}if(l)for(var u in l)e[u]=l[u];return e.define=a,r}}}))}("undefined"!=typeof self?self:global);
$__System.registerDynamic("2", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window) {
    var ua = navigator.userAgent;
    if (window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45)) {
      addEventListener("resize", (function() {
        var timer;
        var dummySrc = document.createElement("source");
        var fixRespimg = function(img) {
          var source,
              sizes;
          var picture = img.parentNode;
          if (picture.nodeName.toUpperCase() === "PICTURE") {
            source = dummySrc.cloneNode();
            picture.insertBefore(source, picture.firstElementChild);
            setTimeout(function() {
              picture.removeChild(source);
            });
          } else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
            img._pfLastSize = img.offsetWidth;
            sizes = img.sizes;
            img.sizes += ",100vw";
            setTimeout(function() {
              img.sizes = sizes;
            });
          }
        };
        var findPictureImgs = function() {
          var i;
          var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
          for (i = 0; i < imgs.length; i++) {
            fixRespimg(imgs[i]);
          }
        };
        var onResize = function() {
          clearTimeout(timer);
          timer = setTimeout(findPictureImgs, 99);
        };
        var mq = window.matchMedia && matchMedia("(orientation: landscape)");
        var init = function() {
          onResize();
          if (mq && mq.addListener) {
            mq.addListener(onResize);
          }
        };
        dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        if (/^[c|i]|d$/.test(document.readyState || "")) {
          init();
        } else {
          document.addEventListener("DOMContentLoaded", init);
        }
        return onResize;
      })());
    }
  })(window);
  (function(window, document, undefined) {
    "use strict";
    document.createElement("picture");
    var warn,
        eminpx,
        alwaysCheckWDescriptor,
        evalId;
    var pf = {};
    var isSupportTestReady = false;
    var noop = function() {};
    var image = document.createElement("img");
    var getImgAttr = image.getAttribute;
    var setImgAttr = image.setAttribute;
    var removeImgAttr = image.removeAttribute;
    var docElem = document.documentElement;
    var types = {};
    var cfg = {algorithm: ""};
    var srcAttr = "data-pfsrc";
    var srcsetAttr = srcAttr + "set";
    var ua = navigator.userAgent;
    var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35);
    var curSrcProp = "currentSrc";
    var regWDesc = /\s+\+?\d+(e\d+)?w/;
    var regSize = /(\([^)]+\))?\s*(.+)/;
    var setOptions = window.picturefillCFG;
    var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
    var fsCss = "font-size:100%!important;";
    var isVwDirty = true;
    var cssCache = {};
    var sizeLengthCache = {};
    var DPR = window.devicePixelRatio;
    var units = {
      px: 1,
      "in": 96
    };
    var anchor = document.createElement("a");
    var alreadyRun = false;
    var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
        regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
        regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
        regexTrailingCommas = /[,]+$/,
        regexNonNegativeInteger = /^\d+$/,
        regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    var on = function(obj, evt, fn, capture) {
      if (obj.addEventListener) {
        obj.addEventListener(evt, fn, capture || false);
      } else if (obj.attachEvent) {
        obj.attachEvent("on" + evt, fn);
      }
    };
    var memoize = function(fn) {
      var cache = {};
      return function(input) {
        if (!(input in cache)) {
          cache[input] = fn(input);
        }
        return cache[input];
      };
    };
    function isSpace(c) {
      return (c === "\u0020" || c === "\u0009" || c === "\u000A" || c === "\u000C" || c === "\u000D");
    }
    var evalCSS = (function() {
      var regLength = /^([\d\.]+)(em|vw|px)$/;
      var replace = function() {
        var args = arguments,
            index = 0,
            string = args[0];
        while (++index in args) {
          string = string.replace(args[index], args[++index]);
        }
        return string;
      };
      var buildStr = memoize(function(css) {
        return "return " + replace((css || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, "") + ";";
      });
      return function(css, length) {
        var parsedLength;
        if (!(css in cssCache)) {
          cssCache[css] = false;
          if (length && (parsedLength = css.match(regLength))) {
            cssCache[css] = parsedLength[1] * units[parsedLength[2]];
          } else {
            try {
              cssCache[css] = new Function("e", buildStr(css))(units);
            } catch (e) {}
          }
        }
        return cssCache[css];
      };
    })();
    var setResolution = function(candidate, sizesattr) {
      if (candidate.w) {
        candidate.cWidth = pf.calcListLength(sizesattr || "100vw");
        candidate.res = candidate.w / candidate.cWidth;
      } else {
        candidate.res = candidate.d;
      }
      return candidate;
    };
    var picturefill = function(opt) {
      if (!isSupportTestReady) {
        return;
      }
      var elements,
          i,
          plen;
      var options = opt || {};
      if (options.elements && options.elements.nodeType === 1) {
        if (options.elements.nodeName.toUpperCase() === "IMG") {
          options.elements = [options.elements];
        } else {
          options.context = options.elements;
          options.elements = null;
        }
      }
      elements = options.elements || pf.qsa((options.context || document), (options.reevaluate || options.reselect) ? pf.sel : pf.selShort);
      if ((plen = elements.length)) {
        pf.setupRun(options);
        alreadyRun = true;
        for (i = 0; i < plen; i++) {
          pf.fillImg(elements[i], options);
        }
        pf.teardownRun(options);
      }
    };
    warn = (window.console && console.warn) ? function(message) {
      console.warn(message);
    } : noop;
    ;
    if (!(curSrcProp in image)) {
      curSrcProp = "src";
    }
    types["image/jpeg"] = true;
    types["image/gif"] = true;
    types["image/png"] = true;
    function detectTypeSupport(type, typeUri) {
      var image = new window.Image();
      image.onerror = function() {
        types[type] = false;
        picturefill();
      };
      image.onload = function() {
        types[type] = image.width === 1;
        picturefill();
      };
      image.src = typeUri;
      return "pending";
    }
    types["image/svg+xml"] = document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1");
    function updateMetrics() {
      isVwDirty = false;
      DPR = window.devicePixelRatio;
      cssCache = {};
      sizeLengthCache = {};
      pf.DPR = DPR || 1;
      units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
      units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);
      units.vw = units.width / 100;
      units.vh = units.height / 100;
      evalId = [units.height, units.width, DPR].join("-");
      units.em = pf.getEmValue();
      units.rem = units.em;
    }
    function chooseLowRes(lowerValue, higherValue, dprValue, isCached) {
      var bonusFactor,
          tooMuch,
          bonus,
          meanDensity;
      if (cfg.algorithm === "saveData") {
        if (lowerValue > 2.7) {
          meanDensity = dprValue + 1;
        } else {
          tooMuch = higherValue - dprValue;
          bonusFactor = Math.pow(lowerValue - 0.6, 1.5);
          bonus = tooMuch * bonusFactor;
          if (isCached) {
            bonus += 0.1 * bonusFactor;
          }
          meanDensity = lowerValue + bonus;
        }
      } else {
        meanDensity = (dprValue > 1) ? Math.sqrt(lowerValue * higherValue) : lowerValue;
      }
      return meanDensity > dprValue;
    }
    function applyBestCandidate(img) {
      var srcSetCandidates;
      var matchingSet = pf.getSet(img);
      var evaluated = false;
      if (matchingSet !== "pending") {
        evaluated = evalId;
        if (matchingSet) {
          srcSetCandidates = pf.setRes(matchingSet);
          pf.applySetCandidate(srcSetCandidates, img);
        }
      }
      img[pf.ns].evaled = evaluated;
    }
    function ascendingSort(a, b) {
      return a.res - b.res;
    }
    function setSrcToCur(img, src, set) {
      var candidate;
      if (!set && src) {
        set = img[pf.ns].sets;
        set = set && set[set.length - 1];
      }
      candidate = getCandidateForSrc(src, set);
      if (candidate) {
        src = pf.makeUrl(src);
        img[pf.ns].curSrc = src;
        img[pf.ns].curCan = candidate;
        if (!candidate.res) {
          setResolution(candidate, candidate.set.sizes);
        }
      }
      return candidate;
    }
    function getCandidateForSrc(src, set) {
      var i,
          candidate,
          candidates;
      if (src && set) {
        candidates = pf.parseSet(set);
        src = pf.makeUrl(src);
        for (i = 0; i < candidates.length; i++) {
          if (src === pf.makeUrl(candidates[i].url)) {
            candidate = candidates[i];
            break;
          }
        }
      }
      return candidate;
    }
    function getAllSourceElements(picture, candidates) {
      var i,
          len,
          source,
          srcset;
      var sources = picture.getElementsByTagName("source");
      for (i = 0, len = sources.length; i < len; i++) {
        source = sources[i];
        source[pf.ns] = true;
        srcset = source.getAttribute("srcset");
        if (srcset) {
          candidates.push({
            srcset: srcset,
            media: source.getAttribute("media"),
            type: source.getAttribute("type"),
            sizes: source.getAttribute("sizes")
          });
        }
      }
    }
    function parseSrcset(input, set) {
      function collectCharacters(regEx) {
        var chars,
            match = regEx.exec(input.substring(pos));
        if (match) {
          chars = match[0];
          pos += chars.length;
          return chars;
        }
      }
      var inputLength = input.length,
          url,
          descriptors,
          currentDescriptor,
          state,
          c,
          pos = 0,
          candidates = [];
      function parseDescriptors() {
        var pError = false,
            w,
            d,
            h,
            i,
            candidate = {},
            desc,
            lastChar,
            value,
            intVal,
            floatVal;
        for (i = 0; i < descriptors.length; i++) {
          desc = descriptors[i];
          lastChar = desc[desc.length - 1];
          value = desc.substring(0, desc.length - 1);
          intVal = parseInt(value, 10);
          floatVal = parseFloat(value);
          if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {
            if (w || d) {
              pError = true;
            }
            if (intVal === 0) {
              pError = true;
            } else {
              w = intVal;
            }
          } else if (regexFloatingPoint.test(value) && (lastChar === "x")) {
            if (w || d || h) {
              pError = true;
            }
            if (floatVal < 0) {
              pError = true;
            } else {
              d = floatVal;
            }
          } else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {
            if (h || d) {
              pError = true;
            }
            if (intVal === 0) {
              pError = true;
            } else {
              h = intVal;
            }
          } else {
            pError = true;
          }
        }
        if (!pError) {
          candidate.url = url;
          if (w) {
            candidate.w = w;
          }
          if (d) {
            candidate.d = d;
          }
          if (h) {
            candidate.h = h;
          }
          if (!h && !d && !w) {
            candidate.d = 1;
          }
          if (candidate.d === 1) {
            set.has1x = true;
          }
          candidate.set = set;
          candidates.push(candidate);
        }
      }
      function tokenize() {
        collectCharacters(regexLeadingSpaces);
        currentDescriptor = "";
        state = "in descriptor";
        while (true) {
          c = input.charAt(pos);
          if (state === "in descriptor") {
            if (isSpace(c)) {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
                currentDescriptor = "";
                state = "after descriptor";
              }
            } else if (c === ",") {
              pos += 1;
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;
            } else if (c === "\u0028") {
              currentDescriptor = currentDescriptor + c;
              state = "in parens";
            } else if (c === "") {
              if (currentDescriptor) {
                descriptors.push(currentDescriptor);
              }
              parseDescriptors();
              return;
            } else {
              currentDescriptor = currentDescriptor + c;
            }
          } else if (state === "in parens") {
            if (c === ")") {
              currentDescriptor = currentDescriptor + c;
              state = "in descriptor";
            } else if (c === "") {
              descriptors.push(currentDescriptor);
              parseDescriptors();
              return;
            } else {
              currentDescriptor = currentDescriptor + c;
            }
          } else if (state === "after descriptor") {
            if (isSpace(c)) {} else if (c === "") {
              parseDescriptors();
              return;
            } else {
              state = "in descriptor";
              pos -= 1;
            }
          }
          pos += 1;
        }
      }
      while (true) {
        collectCharacters(regexLeadingCommasOrSpaces);
        if (pos >= inputLength) {
          return candidates;
        }
        url = collectCharacters(regexLeadingNotSpaces);
        descriptors = [];
        if (url.slice(-1) === ",") {
          url = url.replace(regexTrailingCommas, "");
          parseDescriptors();
        } else {
          tokenize();
        }
      }
    }
    function parseSizes(strValue) {
      var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;
      var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;
      var i;
      var unparsedSizesList;
      var unparsedSizesListLength;
      var unparsedSize;
      var lastComponentValue;
      var size;
      function parseComponentValues(str) {
        var chrctr;
        var component = "";
        var componentArray = [];
        var listArray = [];
        var parenDepth = 0;
        var pos = 0;
        var inComment = false;
        function pushComponent() {
          if (component) {
            componentArray.push(component);
            component = "";
          }
        }
        function pushComponentArray() {
          if (componentArray[0]) {
            listArray.push(componentArray);
            componentArray = [];
          }
        }
        while (true) {
          chrctr = str.charAt(pos);
          if (chrctr === "") {
            pushComponent();
            pushComponentArray();
            return listArray;
          } else if (inComment) {
            if ((chrctr === "*") && (str[pos + 1] === "/")) {
              inComment = false;
              pos += 2;
              pushComponent();
              continue;
            } else {
              pos += 1;
              continue;
            }
          } else if (isSpace(chrctr)) {
            if ((str.charAt(pos - 1) && isSpace(str.charAt(pos - 1))) || !component) {
              pos += 1;
              continue;
            } else if (parenDepth === 0) {
              pushComponent();
              pos += 1;
              continue;
            } else {
              chrctr = " ";
            }
          } else if (chrctr === "(") {
            parenDepth += 1;
          } else if (chrctr === ")") {
            parenDepth -= 1;
          } else if (chrctr === ",") {
            pushComponent();
            pushComponentArray();
            pos += 1;
            continue;
          } else if ((chrctr === "/") && (str.charAt(pos + 1) === "*")) {
            inComment = true;
            pos += 2;
            continue;
          }
          component = component + chrctr;
          pos += 1;
        }
      }
      function isValidNonNegativeSourceSizeValue(s) {
        if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {
          return true;
        }
        if (regexCssCalc.test(s)) {
          return true;
        }
        if ((s === "0") || (s === "-0") || (s === "+0")) {
          return true;
        }
        return false;
      }
      unparsedSizesList = parseComponentValues(strValue);
      unparsedSizesListLength = unparsedSizesList.length;
      for (i = 0; i < unparsedSizesListLength; i++) {
        unparsedSize = unparsedSizesList[i];
        lastComponentValue = unparsedSize[unparsedSize.length - 1];
        if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
          size = lastComponentValue;
          unparsedSize.pop();
        } else {
          continue;
        }
        if (unparsedSize.length === 0) {
          return size;
        }
        unparsedSize = unparsedSize.join(" ");
        if (!(pf.matchesMedia(unparsedSize))) {
          continue;
        }
        return size;
      }
      return "100vw";
    }
    pf.ns = ("pf" + new Date().getTime()).substr(0, 9);
    pf.supSrcset = "srcset" in image;
    pf.supSizes = "sizes" in image;
    pf.supPicture = !!window.HTMLPictureElement;
    if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
      (function(image2) {
        image.srcset = "data:,a";
        image2.src = "data:,a";
        pf.supSrcset = image.complete === image2.complete;
        pf.supPicture = pf.supSrcset && pf.supPicture;
      })(document.createElement("img"));
    }
    if (pf.supSrcset && !pf.supSizes) {
      (function() {
        var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
        var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
        var img = document.createElement("img");
        var test = function() {
          var width = img.width;
          if (width === 2) {
            pf.supSizes = true;
          }
          alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;
          isSupportTestReady = true;
          setTimeout(picturefill);
        };
        img.onload = test;
        img.onerror = test;
        img.setAttribute("sizes", "9px");
        img.srcset = width1 + " 1w," + width2 + " 9w";
        img.src = width1;
      })();
    } else {
      isSupportTestReady = true;
    }
    pf.selShort = "picture>img,img[srcset]";
    pf.sel = pf.selShort;
    pf.cfg = cfg;
    pf.DPR = (DPR || 1);
    pf.u = units;
    pf.types = types;
    pf.setSize = noop;
    pf.makeUrl = memoize(function(src) {
      anchor.href = src;
      return anchor.href;
    });
    pf.qsa = function(context, sel) {
      return ("querySelector" in context) ? context.querySelectorAll(sel) : [];
    };
    pf.matchesMedia = function() {
      if (window.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches) {
        pf.matchesMedia = function(media) {
          return !media || (matchMedia(media).matches);
        };
      } else {
        pf.matchesMedia = pf.mMQ;
      }
      return pf.matchesMedia.apply(this, arguments);
    };
    pf.mMQ = function(media) {
      return media ? evalCSS(media) : true;
    };
    pf.calcLength = function(sourceSizeValue) {
      var value = evalCSS(sourceSizeValue, true) || false;
      if (value < 0) {
        value = false;
      }
      return value;
    };
    pf.supportsType = function(type) {
      return (type) ? types[type] : true;
    };
    pf.parseSize = memoize(function(sourceSizeStr) {
      var match = (sourceSizeStr || "").match(regSize);
      return {
        media: match && match[1],
        length: match && match[2]
      };
    });
    pf.parseSet = function(set) {
      if (!set.cands) {
        set.cands = parseSrcset(set.srcset, set);
      }
      return set.cands;
    };
    pf.getEmValue = function() {
      var body;
      if (!eminpx && (body = document.body)) {
        var div = document.createElement("div"),
            originalHTMLCSS = docElem.style.cssText,
            originalBodyCSS = body.style.cssText;
        div.style.cssText = baseStyle;
        docElem.style.cssText = fsCss;
        body.style.cssText = fsCss;
        body.appendChild(div);
        eminpx = div.offsetWidth;
        body.removeChild(div);
        eminpx = parseFloat(eminpx, 10);
        docElem.style.cssText = originalHTMLCSS;
        body.style.cssText = originalBodyCSS;
      }
      return eminpx || 16;
    };
    pf.calcListLength = function(sourceSizeListStr) {
      if (!(sourceSizeListStr in sizeLengthCache) || cfg.uT) {
        var winningLength = pf.calcLength(parseSizes(sourceSizeListStr));
        sizeLengthCache[sourceSizeListStr] = !winningLength ? units.width : winningLength;
      }
      return sizeLengthCache[sourceSizeListStr];
    };
    pf.setRes = function(set) {
      var candidates;
      if (set) {
        candidates = pf.parseSet(set);
        for (var i = 0,
            len = candidates.length; i < len; i++) {
          setResolution(candidates[i], set.sizes);
        }
      }
      return candidates;
    };
    pf.setRes.res = setResolution;
    pf.applySetCandidate = function(candidates, img) {
      if (!candidates.length) {
        return;
      }
      var candidate,
          i,
          j,
          length,
          bestCandidate,
          curSrc,
          curCan,
          candidateSrc,
          abortCurSrc;
      var imageData = img[pf.ns];
      var dpr = pf.DPR;
      curSrc = imageData.curSrc || img[curSrcProp];
      curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);
      if (curCan && curCan.set === candidates[0].set) {
        abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);
        if (!abortCurSrc) {
          curCan.cached = true;
          if (curCan.res >= dpr) {
            bestCandidate = curCan;
          }
        }
      }
      if (!bestCandidate) {
        candidates.sort(ascendingSort);
        length = candidates.length;
        bestCandidate = candidates[length - 1];
        for (i = 0; i < length; i++) {
          candidate = candidates[i];
          if (candidate.res >= dpr) {
            j = i - 1;
            if (candidates[j] && (abortCurSrc || curSrc !== pf.makeUrl(candidate.url)) && chooseLowRes(candidates[j].res, candidate.res, dpr, candidates[j].cached)) {
              bestCandidate = candidates[j];
            } else {
              bestCandidate = candidate;
            }
            break;
          }
        }
      }
      if (bestCandidate) {
        candidateSrc = pf.makeUrl(bestCandidate.url);
        imageData.curSrc = candidateSrc;
        imageData.curCan = bestCandidate;
        if (candidateSrc !== curSrc) {
          pf.setSrc(img, bestCandidate);
        }
        pf.setSize(img);
      }
    };
    pf.setSrc = function(img, bestCandidate) {
      var origWidth;
      img.src = bestCandidate.url;
      if (bestCandidate.set.type === "image/svg+xml") {
        origWidth = img.style.width;
        img.style.width = (img.offsetWidth + 1) + "px";
        if (img.offsetWidth + 1) {
          img.style.width = origWidth;
        }
      }
    };
    pf.getSet = function(img) {
      var i,
          set,
          supportsType;
      var match = false;
      var sets = img[pf.ns].sets;
      for (i = 0; i < sets.length && !match; i++) {
        set = sets[i];
        if (!set.srcset || !pf.matchesMedia(set.media) || !(supportsType = pf.supportsType(set.type))) {
          continue;
        }
        if (supportsType === "pending") {
          set = supportsType;
        }
        match = set;
        break;
      }
      return match;
    };
    pf.parseSets = function(element, parent, options) {
      var srcsetAttribute,
          imageSet,
          isWDescripor,
          srcsetParsed;
      var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
      var imageData = element[pf.ns];
      if (imageData.src === undefined || options.src) {
        imageData.src = getImgAttr.call(element, "src");
        if (imageData.src) {
          setImgAttr.call(element, srcAttr, imageData.src);
        } else {
          removeImgAttr.call(element, srcAttr);
        }
      }
      if (imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset) {
        srcsetAttribute = getImgAttr.call(element, "srcset");
        imageData.srcset = srcsetAttribute;
        srcsetParsed = true;
      }
      imageData.sets = [];
      if (hasPicture) {
        imageData.pic = true;
        getAllSourceElements(parent, imageData.sets);
      }
      if (imageData.srcset) {
        imageSet = {
          srcset: imageData.srcset,
          sizes: getImgAttr.call(element, "sizes")
        };
        imageData.sets.push(imageSet);
        isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");
        if (!isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x) {
          imageSet.srcset += ", " + imageData.src;
          imageSet.cands.push({
            url: imageData.src,
            d: 1,
            set: imageSet
          });
        }
      } else if (imageData.src) {
        imageData.sets.push({
          srcset: imageData.src,
          sizes: null
        });
      }
      imageData.curCan = null;
      imageData.curSrc = undefined;
      imageData.supported = !(hasPicture || (imageSet && !pf.supSrcset) || (isWDescripor && !pf.supSizes));
      if (srcsetParsed && pf.supSrcset && !imageData.supported) {
        if (srcsetAttribute) {
          setImgAttr.call(element, srcsetAttr, srcsetAttribute);
          element.srcset = "";
        } else {
          removeImgAttr.call(element, srcsetAttr);
        }
      }
      if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) || element.src !== pf.makeUrl(imageData.src))) {
        if (imageData.src === null) {
          element.removeAttribute("src");
        } else {
          element.src = imageData.src;
        }
      }
      imageData.parsed = true;
    };
    pf.fillImg = function(element, options) {
      var imageData;
      var extreme = options.reselect || options.reevaluate;
      if (!element[pf.ns]) {
        element[pf.ns] = {};
      }
      imageData = element[pf.ns];
      if (!extreme && imageData.evaled === evalId) {
        return;
      }
      if (!imageData.parsed || options.reevaluate) {
        pf.parseSets(element, element.parentNode, options);
      }
      if (!imageData.supported) {
        applyBestCandidate(element);
      } else {
        imageData.evaled = evalId;
      }
    };
    pf.setupRun = function() {
      if (!alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio)) {
        updateMetrics();
      }
    };
    if (pf.supPicture) {
      picturefill = noop;
      pf.fillImg = noop;
    } else {
      (function() {
        var isDomReady;
        var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;
        var run = function() {
          var readyState = document.readyState || "";
          timerId = setTimeout(run, readyState === "loading" ? 200 : 999);
          if (document.body) {
            pf.fillImgs();
            isDomReady = isDomReady || regReady.test(readyState);
            if (isDomReady) {
              clearTimeout(timerId);
            }
          }
        };
        var timerId = setTimeout(run, document.body ? 9 : 99);
        var debounce = function(func, wait) {
          var timeout,
              timestamp;
          var later = function() {
            var last = (new Date()) - timestamp;
            if (last < wait) {
              timeout = setTimeout(later, wait - last);
            } else {
              timeout = null;
              func();
            }
          };
          return function() {
            timestamp = new Date();
            if (!timeout) {
              timeout = setTimeout(later, wait);
            }
          };
        };
        var lastClientWidth = docElem.clientHeight;
        var onResize = function() {
          isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
          lastClientWidth = docElem.clientHeight;
          if (isVwDirty) {
            pf.fillImgs();
          }
        };
        on(window, "resize", debounce(onResize, 99));
        on(document, "readystatechange", run);
      })();
    }
    pf.picturefill = picturefill;
    pf.fillImgs = picturefill;
    pf.teardownRun = noop;
    picturefill._ = pf;
    window.picturefillCFG = {
      pf: pf,
      push: function(args) {
        var name = args.shift();
        if (typeof pf[name] === "function") {
          pf[name].apply(pf, args);
        } else {
          cfg[name] = args[0];
          if (alreadyRun) {
            pf.fillImgs({reselect: true});
          }
        }
      }
    };
    while (setOptions && setOptions.length) {
      window.picturefillCFG.push(setOptions.shift());
    }
    window.picturefill = picturefill;
    if (typeof module === "object" && typeof module.exports === "object") {
      module.exports = picturefill;
    } else if (typeof define === "function" && define.amd) {
      define("picturefill", function() {
        return picturefill;
      });
    }
    if (!pf.supPicture) {
      types["image/webp"] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==");
    }
  })(window, document);
  return module.exports;
});

$__System.registerDynamic("3", ["4"], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    var globalInstall = function(initialEvent) {
      factory(window.lazySizes, initialEvent);
      window.removeEventListener('lazyunveilread', globalInstall, true);
    };
    factory = factory.bind(null, window, window.document);
    if (typeof module == 'object' && module.exports) {
      factory($__require('4'));
    } else if (window.lazySizes) {
      globalInstall();
    } else {
      window.addEventListener('lazyunveilread', globalInstall, true);
    }
  }(window, function(window, document, lazySizes, initialEvent) {
    'use strict';
    var style = document.createElement('a').style;
    var fitSupport = 'objectFit' in style;
    var positionSupport = fitSupport && 'objectPosition' in style;
    var regCssFit = /object-fit["']*\s*:\s*["']*(contain|cover)/;
    var regCssPosition = /object-position["']*\s*:\s*["']*(.+?)(?=($|,|'|"|;))/;
    var blankSrc = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
    var regBgUrlEscape = /\(|\)|'/;
    var positionDefaults = {
      center: 'center',
      '50% 50%': 'center'
    };
    function getObject(element) {
      var css = (getComputedStyle(element, null) || {});
      var content = css.fontFamily || '';
      var objectFit = content.match(regCssFit) || '';
      var objectPosition = objectFit && content.match(regCssPosition) || '';
      if (objectPosition) {
        objectPosition = objectPosition[1];
      }
      return {
        fit: objectFit && objectFit[1] || '',
        position: positionDefaults[objectPosition] || objectPosition || 'center'
      };
    }
    function initFix(element, config) {
      var switchClassesAdded;
      var lazysizesCfg = lazySizes.cfg;
      var styleElement = element.cloneNode(false);
      var styleElementStyle = styleElement.style;
      var onChange = function() {
        var src = element.currentSrc || element.src;
        if (src) {
          styleElementStyle.backgroundImage = 'url(' + (regBgUrlEscape.test(src) ? JSON.stringify(src) : src) + ')';
          if (!switchClassesAdded) {
            switchClassesAdded = true;
            lazySizes.rC(styleElement, lazysizesCfg.loadingClass);
            lazySizes.aC(styleElement, lazysizesCfg.loadedClass);
          }
        }
      };
      element._lazysizesParentFit = config.fit;
      element.addEventListener('load', function() {
        lazySizes.rAF(onChange);
      }, true);
      styleElement.addEventListener('load', function() {
        var curSrc = styleElement.currentSrc || styleElement.src;
        if (curSrc && curSrc != blankSrc) {
          styleElement.src = blankSrc;
          styleElement.srcset = '';
        }
      });
      lazySizes.rAF(function() {
        var hideElement = element;
        var container = element.parentNode;
        if (container.nodeName.toUpperCase() == 'PICTURE') {
          hideElement = container;
          container = container.parentNode;
        }
        lazySizes.rC(styleElement, lazysizesCfg.loadedClass);
        lazySizes.rC(styleElement, lazysizesCfg.lazyClass);
        lazySizes.aC(styleElement, lazysizesCfg.loadingClass);
        lazySizes.aC(styleElement, lazysizesCfg.objectFitClass || 'lazysizes-display-clone');
        if (styleElement.getAttribute(lazysizesCfg.srcsetAttr)) {
          styleElement.setAttribute(lazysizesCfg.srcsetAttr, '');
        }
        if (styleElement.getAttribute(lazysizesCfg.srcAttr)) {
          styleElement.setAttribute(lazysizesCfg.srcAttr, '');
        }
        styleElement.src = blankSrc;
        styleElement.srcset = '';
        styleElementStyle.backgroundRepeat = 'no-repeat';
        styleElementStyle.backgroundPosition = config.position;
        styleElementStyle.backgroundSize = config.fit;
        hideElement.style.display = 'none';
        element.setAttribute('data-parent-fit', config.fit);
        element.setAttribute('data-parent-container', 'prev');
        container.insertBefore(styleElement, hideElement);
        if (element._lazysizesParentFit) {
          delete element._lazysizesParentFit;
        }
        if (element.complete) {
          onChange();
        }
      });
    }
    if (!fitSupport || !positionSupport) {
      var onRead = function(e) {
        if (e.detail.instance != lazySizes) {
          return;
        }
        var element = e.target;
        var obj = getObject(element);
        if (obj.fit && (!fitSupport || (obj.position != 'center'))) {
          initFix(element, obj);
        }
      };
      window.addEventListener('lazyunveilread', onRead, true);
      if (initialEvent && initialEvent.detail) {
        onRead(initialEvent);
      }
    }
  }));
  return module.exports;
});

$__System.registerDynamic("4", [], true, function($__require, exports, module) {
  ;
  var define,
      global = this || self,
      GLOBAL = global;
  (function(window, factory) {
    var lazySizes = factory(window, window.document);
    window.lazySizes = lazySizes;
    if (typeof module == 'object' && module.exports) {
      module.exports = lazySizes;
    }
  }(window, function l(window, document) {
    'use strict';
    if (!document.getElementsByClassName) {
      return;
    }
    var lazysizes,
        lazySizesConfig;
    var docElem = document.documentElement;
    var Date = window.Date;
    var supportPicture = window.HTMLPictureElement;
    var _addEventListener = 'addEventListener';
    var _getAttribute = 'getAttribute';
    var addEventListener = window[_addEventListener];
    var setTimeout = window.setTimeout;
    var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
    var requestIdleCallback = window.requestIdleCallback;
    var regPicture = /^picture$/i;
    var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
    var regClassCache = {};
    var forEach = Array.prototype.forEach;
    var hasClass = function(ele, cls) {
      if (!regClassCache[cls]) {
        regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      }
      return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
    };
    var addClass = function(ele, cls) {
      if (!hasClass(ele, cls)) {
        ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
      }
    };
    var removeClass = function(ele, cls) {
      var reg;
      if ((reg = hasClass(ele, cls))) {
        ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
      }
    };
    var addRemoveLoadEvents = function(dom, fn, add) {
      var action = add ? _addEventListener : 'removeEventListener';
      if (add) {
        addRemoveLoadEvents(dom, fn);
      }
      loadEvents.forEach(function(evt) {
        dom[action](evt, fn);
      });
    };
    var triggerEvent = function(elem, name, detail, noBubbles, noCancelable) {
      var event = document.createEvent('CustomEvent');
      if (!detail) {
        detail = {};
      }
      detail.instance = lazysizes;
      event.initCustomEvent(name, !noBubbles, !noCancelable, detail);
      elem.dispatchEvent(event);
      return event;
    };
    var updatePolyfill = function(el, full) {
      var polyfill;
      if (!supportPicture && (polyfill = (window.picturefill || lazySizesConfig.pf))) {
        polyfill({
          reevaluate: true,
          elements: [el]
        });
      } else if (full && full.src) {
        el.src = full.src;
      }
    };
    var getCSS = function(elem, style) {
      return (getComputedStyle(elem, null) || {})[style];
    };
    var getWidth = function(elem, parent, width) {
      width = width || elem.offsetWidth;
      while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
        width = parent.offsetWidth;
        parent = parent.parentNode;
      }
      return width;
    };
    var rAF = (function() {
      var running,
          waiting;
      var firstFns = [];
      var secondFns = [];
      var fns = firstFns;
      var run = function() {
        var runFns = fns;
        fns = firstFns.length ? secondFns : firstFns;
        running = true;
        waiting = false;
        while (runFns.length) {
          runFns.shift()();
        }
        running = false;
      };
      var rafBatch = function(fn, queue) {
        if (running && !queue) {
          fn.apply(this, arguments);
        } else {
          fns.push(fn);
          if (!waiting) {
            waiting = true;
            (document.hidden ? setTimeout : requestAnimationFrame)(run);
          }
        }
      };
      rafBatch._lsFlush = run;
      return rafBatch;
    })();
    var rAFIt = function(fn, simple) {
      return simple ? function() {
        rAF(fn);
      } : function() {
        var that = this;
        var args = arguments;
        rAF(function() {
          fn.apply(that, args);
        });
      };
      ;
    };
    var throttle = function(fn) {
      var running;
      var lastTime = 0;
      var gDelay = 125;
      var RIC_DEFAULT_TIMEOUT = 666;
      var rICTimeout = RIC_DEFAULT_TIMEOUT;
      var run = function() {
        running = false;
        lastTime = Date.now();
        fn();
      };
      var idleCallback = requestIdleCallback ? function() {
        requestIdleCallback(run, {timeout: rICTimeout});
        if (rICTimeout !== RIC_DEFAULT_TIMEOUT) {
          rICTimeout = RIC_DEFAULT_TIMEOUT;
        }
      } : rAFIt(function() {
        setTimeout(run);
      }, true);
      ;
      return function(isPriority) {
        var delay;
        if ((isPriority = isPriority === true)) {
          rICTimeout = 44;
        }
        if (running) {
          return;
        }
        running = true;
        delay = gDelay - (Date.now() - lastTime);
        if (delay < 0) {
          delay = 0;
        }
        if (isPriority || (delay < 9 && requestIdleCallback)) {
          idleCallback();
        } else {
          setTimeout(idleCallback, delay);
        }
      };
    };
    var debounce = function(func) {
      var timeout,
          timestamp;
      var wait = 99;
      var run = function() {
        timeout = null;
        func();
      };
      var later = function() {
        var last = Date.now() - timestamp;
        if (last < wait) {
          setTimeout(later, wait - last);
        } else {
          (requestIdleCallback || run)(run);
        }
      };
      return function() {
        timestamp = Date.now();
        if (!timeout) {
          timeout = setTimeout(later, wait);
        }
      };
    };
    var loader = (function() {
      var preloadElems,
          isCompleted,
          resetPreloadingTimer,
          loadMode,
          started;
      var eLvW,
          elvH,
          eLtop,
          eLleft,
          eLright,
          eLbottom;
      var defaultExpand,
          preloadExpand,
          hFac;
      var regImg = /^img$/i;
      var regIframe = /^iframe$/i;
      var supportScroll = ('onscroll' in window) && !(/glebot/.test(navigator.userAgent));
      var shrinkExpand = 0;
      var currentExpand = 0;
      var isLoading = 0;
      var lowRuns = -1;
      var resetPreloading = function(e) {
        isLoading--;
        if (e && e.target) {
          addRemoveLoadEvents(e.target, resetPreloading);
        }
        if (!e || isLoading < 0 || !e.target) {
          isLoading = 0;
        }
      };
      var isNestedVisible = function(elem, elemExpand) {
        var outerRect;
        var parent = elem;
        var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem, 'visibility') != 'hidden';
        eLtop -= elemExpand;
        eLbottom += elemExpand;
        eLleft -= elemExpand;
        eLright += elemExpand;
        while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
          visible = ((getCSS(parent, 'opacity') || 1) > 0);
          if (visible && getCSS(parent, 'overflow') != 'visible') {
            outerRect = parent.getBoundingClientRect();
            visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
            ;
          }
        }
        return visible;
      };
      var checkElements = function() {
        var eLlen,
            i,
            rect,
            autoLoadElem,
            loadedSomething,
            elemExpand,
            elemNegativeExpand,
            elemExpandVal,
            beforeExpandVal;
        var lazyloadElems = lazysizes.elements;
        if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
          i = 0;
          lowRuns++;
          if (preloadExpand == null) {
            if (!('expand' in lazySizesConfig)) {
              lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
            }
            defaultExpand = lazySizesConfig.expand;
            preloadExpand = defaultExpand * lazySizesConfig.expFactor;
          }
          if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
            currentExpand = preloadExpand;
            lowRuns = 0;
          } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
            currentExpand = defaultExpand;
          } else {
            currentExpand = shrinkExpand;
          }
          for (; i < eLlen; i++) {
            if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
              continue;
            }
            if (!supportScroll) {
              unveilElement(lazyloadElems[i]);
              continue;
            }
            if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
              elemExpand = currentExpand;
            }
            if (beforeExpandVal !== elemExpand) {
              eLvW = innerWidth + (elemExpand * hFac);
              elvH = innerHeight + elemExpand;
              elemNegativeExpand = elemExpand * -1;
              beforeExpandVal = elemExpand;
            }
            rect = lazyloadElems[i].getBoundingClientRect();
            if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && ((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))) {
              unveilElement(lazyloadElems[i]);
              loadedSomething = true;
              if (isLoading > 9) {
                break;
              }
            } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto')))) {
              autoLoadElem = preloadElems[0] || lazyloadElems[i];
            }
          }
          if (autoLoadElem && !loadedSomething) {
            unveilElement(autoLoadElem);
          }
        }
      };
      var throttledCheckElements = throttle(checkElements);
      var switchLoadingClass = function(e) {
        addClass(e.target, lazySizesConfig.loadedClass);
        removeClass(e.target, lazySizesConfig.loadingClass);
        addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
        triggerEvent(e.target, 'lazyloaded');
      };
      var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
      var rafSwitchLoadingClass = function(e) {
        rafedSwitchLoadingClass({target: e.target});
      };
      var changeIframeSrc = function(elem, src) {
        try {
          elem.contentWindow.location.replace(src);
        } catch (e) {
          elem.src = src;
        }
      };
      var handleSources = function(source) {
        var customMedia;
        var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);
        if ((customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')])) {
          source.setAttribute('media', customMedia);
        }
        if (sourceSrcset) {
          source.setAttribute('srcset', sourceSrcset);
        }
      };
      var lazyUnveil = rAFIt(function(elem, detail, isAuto, sizes, isImg) {
        var src,
            srcset,
            parent,
            isPicture,
            event,
            firesLoad;
        if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
          if (sizes) {
            if (isAuto) {
              addClass(elem, lazySizesConfig.autosizesClass);
            } else {
              elem.setAttribute('sizes', sizes);
            }
          }
          srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
          src = elem[_getAttribute](lazySizesConfig.srcAttr);
          if (isImg) {
            parent = elem.parentNode;
            isPicture = parent && regPicture.test(parent.nodeName || '');
          }
          firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));
          event = {target: elem};
          if (firesLoad) {
            addRemoveLoadEvents(elem, resetPreloading, true);
            clearTimeout(resetPreloadingTimer);
            resetPreloadingTimer = setTimeout(resetPreloading, 2500);
            addClass(elem, lazySizesConfig.loadingClass);
            addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
          }
          if (isPicture) {
            forEach.call(parent.getElementsByTagName('source'), handleSources);
          }
          if (srcset) {
            elem.setAttribute('srcset', srcset);
          } else if (src && !isPicture) {
            if (regIframe.test(elem.nodeName)) {
              changeIframeSrc(elem, src);
            } else {
              elem.src = src;
            }
          }
          if (isImg && (srcset || isPicture)) {
            updatePolyfill(elem, {src: src});
          }
        }
        if (elem._lazyRace) {
          delete elem._lazyRace;
        }
        removeClass(elem, lazySizesConfig.lazyClass);
        rAF(function() {
          if (!firesLoad || (elem.complete && elem.naturalWidth > 1)) {
            if (firesLoad) {
              resetPreloading(event);
            } else {
              isLoading--;
            }
            switchLoadingClass(event);
          }
        }, true);
      });
      var unveilElement = function(elem) {
        var detail;
        var isImg = regImg.test(elem.nodeName);
        var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));
        var isAuto = sizes == 'auto';
        if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass)) {
          return;
        }
        detail = triggerEvent(elem, 'lazyunveilread').detail;
        if (isAuto) {
          autoSizer.updateElem(elem, true, elem.offsetWidth);
        }
        elem._lazyRace = true;
        isLoading++;
        lazyUnveil(elem, detail, isAuto, sizes, isImg);
      };
      var onload = function() {
        if (isCompleted) {
          return;
        }
        if (Date.now() - started < 999) {
          setTimeout(onload, 999);
          return;
        }
        var afterScroll = debounce(function() {
          lazySizesConfig.loadMode = 3;
          throttledCheckElements();
        });
        isCompleted = true;
        lazySizesConfig.loadMode = 3;
        throttledCheckElements();
        addEventListener('scroll', function() {
          if (lazySizesConfig.loadMode == 3) {
            lazySizesConfig.loadMode = 2;
          }
          afterScroll();
        }, true);
      };
      return {
        _: function() {
          started = Date.now();
          lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
          preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
          hFac = lazySizesConfig.hFac;
          addEventListener('scroll', throttledCheckElements, true);
          addEventListener('resize', throttledCheckElements, true);
          if (window.MutationObserver) {
            new MutationObserver(throttledCheckElements).observe(docElem, {
              childList: true,
              subtree: true,
              attributes: true
            });
          } else {
            docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
            docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
            setInterval(throttledCheckElements, 999);
          }
          addEventListener('hashchange', throttledCheckElements, true);
          ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function(name) {
            document[_addEventListener](name, throttledCheckElements, true);
          });
          if ((/d$|^c/.test(document.readyState))) {
            onload();
          } else {
            addEventListener('load', onload);
            document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
            setTimeout(onload, 20000);
          }
          if (lazysizes.elements.length) {
            checkElements();
            rAF._lsFlush();
          } else {
            throttledCheckElements();
          }
        },
        checkElems: throttledCheckElements,
        unveil: unveilElement
      };
    })();
    var autoSizer = (function() {
      var autosizesElems;
      var sizeElement = rAFIt(function(elem, parent, event, width) {
        var sources,
            i,
            len;
        elem._lazysizesWidth = width;
        width += 'px';
        elem.setAttribute('sizes', width);
        if (regPicture.test(parent.nodeName || '')) {
          sources = parent.getElementsByTagName('source');
          for (i = 0, len = sources.length; i < len; i++) {
            sources[i].setAttribute('sizes', width);
          }
        }
        if (!event.detail.dataAttr) {
          updatePolyfill(elem, event.detail);
        }
      });
      var getSizeElement = function(elem, dataAttr, width) {
        var event;
        var parent = elem.parentNode;
        if (parent) {
          width = getWidth(elem, parent, width);
          event = triggerEvent(elem, 'lazybeforesizes', {
            width: width,
            dataAttr: !!dataAttr
          });
          if (!event.defaultPrevented) {
            width = event.detail.width;
            if (width && width !== elem._lazysizesWidth) {
              sizeElement(elem, parent, event, width);
            }
          }
        }
      };
      var updateElementsSizes = function() {
        var i;
        var len = autosizesElems.length;
        if (len) {
          i = 0;
          for (; i < len; i++) {
            getSizeElement(autosizesElems[i]);
          }
        }
      };
      var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
      return {
        _: function() {
          autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
          addEventListener('resize', debouncedUpdateElementsSizes);
        },
        checkElems: debouncedUpdateElementsSizes,
        updateElem: getSizeElement
      };
    })();
    var init = function() {
      if (!init.i) {
        init.i = true;
        autoSizer._();
        loader._();
      }
    };
    (function() {
      var prop;
      var lazySizesDefaults = {
        lazyClass: 'lazyload',
        loadedClass: 'lazyloaded',
        loadingClass: 'lazyloading',
        preloadClass: 'lazypreload',
        errorClass: 'lazyerror',
        autosizesClass: 'lazyautosizes',
        srcAttr: 'data-src',
        srcsetAttr: 'data-srcset',
        sizesAttr: 'data-sizes',
        minSize: 40,
        customMedia: {},
        init: true,
        expFactor: 1.5,
        hFac: 0.8,
        loadMode: 2,
        loadHidden: true
      };
      lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};
      for (prop in lazySizesDefaults) {
        if (!(prop in lazySizesConfig)) {
          lazySizesConfig[prop] = lazySizesDefaults[prop];
        }
      }
      window.lazySizesConfig = lazySizesConfig;
      setTimeout(function() {
        if (lazySizesConfig.init) {
          init();
        }
      });
    })();
    lazysizes = {
      cfg: lazySizesConfig,
      autoSizer: autoSizer,
      loader: loader,
      init: init,
      uP: updatePolyfill,
      aC: addClass,
      rC: removeClass,
      hC: hasClass,
      fire: triggerEvent,
      gW: getWidth,
      rAF: rAF
    };
    return lazysizes;
  }));
  return module.exports;
});

$__System.registerDynamic('5', [], false, function ($__require, $__exports, $__module) {
  var _retrieveGlobal = $__System.get("@@global-helpers").prepareGlobal($__module.id, null, null);

  (function ($__global) {
    console.log('hola');
  })(this);

  return _retrieveGlobal();
});
$__System.register('1', ['2', '3', '4', '5'], function (_export, _context) {
  "use strict";

  return {
    setters: [function (_) {}, function (_2) {}, function (_3) {}, function (_4) {}],
    execute: function () {}
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    factory();
});
//# sourceMappingURL=../maps/js/header-54763e115b.js.map
