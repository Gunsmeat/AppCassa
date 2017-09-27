webpackJsonp([2,4],{

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(678);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(980)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js?{\"sourceMap\":false}!../node_modules/postcss-loader/index.js!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 678:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(679)();
// imports


// module
exports.push([module.i, "@charset \"UTF-8\";\n\n.container {\n  background-color: #FFFFFF;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  border-bottom-width: 0px;\n  padding-left: 0px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n}\n\n.row {\n  width: 100%;\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n  display: inline-block\n}\n\n.row.blockDisplay {\n  display: block;\n}\n\n.column_half {\n  width: 50%;\n  float: left;\n  margin-top: 0px;\n}\n\n.columns {\n  width: 25%;\n  float: left;\n  font-family: \"Source Sans Pro\";\n  color: #A5A5A5;\n  line-height: 24px;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  text-align: justify;\n  margin-top: 15px;\n  margin-bottom: 15px;\n  padding-left: 0px;\n  padding-right: 0px;\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.row .columns p {\n  padding-left: 10%;\n  padding-right: 10%;\n}\n\n.container .columns h4 {\n  text-align: center;\n  color: #01B2D1;\n}\n\n.primary_header {\n  width: 100%;\n  background-color: #52bad5;\n  padding-top: 10px;\n  padding-bottom: 10px;\n  clear: left;\n  border-bottom: 2px solid #2C9AB7;\n  -webkit-box-shadow: 0 0px;\n  border-radius: 0;\n  box-shadow: 0 0px;\n}\n\n.secondary_header {\n  width: 100%;\n  padding-bottom: 10px;\n  background-color: #B3B3B3;\n  clear: left;\n  height: auto;\n  padding-top: 10px;\n}\n\n.container .secondary_header ul {\n  margin-top: 0%;\n  margin-right: auto;\n  margin-bottom: 0px;\n  margin-left: auto;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 15px;\n  padding-left: 0px;\n  width: 100%;\n}\n\n.secondary_header ul li {\n  list-style: none;\n  float: left;\n  margin-right: auto;\n  margin-top: 0px;\n  font-family: \"Source Sans Pro\";\n  font-weight: normal;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  margin-left: auto;\n  text-align: center;\n  width: 14.2%;\n  transition: all 0.3s linear;\n}\n.secondary_header ul li a{\n  text-decoration: none;\n  list-style: none;\n  margin-right: auto;\n  margin-top: 0px;\n  font-family: \"Source Sans Pro\";\n  font-weight: normal;\n  color: #FFFFFF;\n  letter-spacing: 1px;\n  margin-left: auto;\n  text-align: center;\n  width: 16%;\n  transition: all 0.3s linear;\n}\n.secondary_header ul li :hover {\n  color: #717070;\n  cursor: pointer;\n}\n.secondary_header ul li a:hover {\n  color: #717070;\n  cursor: pointer;\n}\n\n.left_article {\n  background-color: #FFFFFF;\n  width: 60%;\n  float: left;\n  font-family: \"Source Sans Pro\";\n  color: #343434;\n  padding-bottom: 15px;\n}\n\n.noDisplay {\n  display: none;\n}\n\n.container .left_article h3 {\n  padding-left: 5%;\n  padding-right: 5%;\n  margin-top: 5%;\n  color: #717070;\n  font-weight: bold;\n  text-transform: uppercase;\n}\n\n.container .left_article p {\n  padding-left: 5%;\n  padding-right: 5%;\n  text-align: justify;\n  line-height: 24px;\n  margin-top: 30px;\n  margin-bottom: 15px;\n  color: #B3B3B3;\n}\n\n.right_article {\n  width: 40%;\n  float: left;\n  background-color: #F6F6F6;\n}\n\n.container .right_article ul {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  padding-top: 0px;\n  padding-right: 0px;\n  padding-bottom: 0px;\n  padding-left: 0px;\n}\n\n.right_article ul li {\n  font-family: \"Source Sans Pro\";\n  list-style: none;\n  text-align: center;\n  background-color: #B3B3B3;\n  width: 90%;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  color: #FFFFFF;\n  font-weight: bold;\n  border-radius: 0px;\n  transition: all 0.3s linear;\n  border-left: 5px solid #717070;\n}\n\n.right_article ul li:hover {\n  background-color: #717070;\n  cursor: pointer;\n}\n\n.footer {\n  background-color: #717070;\n  text-align: center;\n}\n\n.title {\n  font-weight: bold;\n  font-style: normal;\n  font-family: \"Source Sans Pro\";\n  text-align: center;\n  color: #FFFFFF;\n  letter-spacing: 2px;\n  width: auto;\n  height: auto;\n  float: none;\n  clear: none;\n}\n\n.placeholder {\n  /* [disabled]max-width: 400px;\n*/\n  /* [disabled]max-height: 200px;\n*/\n  width: 100%;\n  padding-top: 30px;\n  /* [disabled]padding-left: 19px;\n*/\n  padding-bottom: 30px;\n  height: 100%;\n}\n\n.left_half {\n  background-color: #52BAD5;\n}\n\n.container .column_half.left_half h2 {\n  color: #FFFFFF;\n  font-family: \"Source Sans Pro\";\n  text-align: center;\n}\n\n.right_half {\n  background-color: #01B2D1;\n  color: #FFFFFF;\n  font-family: \"Source Sans Pro\";\n  text-align: center;\n  font-weight: bold;\n}\n\n.column_title {\n  padding-top: 25px;\n  padding-bottom: 25px;\n}\n\n.copyright {\n  text-align: center;\n  background-color: #717070;\n  color: #FFFFFF;\n  text-transform: uppercase;\n  font-weight: lighter;\n  letter-spacing: 2px;\n  border-top-width: 2px;\n  font-family: \"Source Sans Pro\";\n}\n\nbody {\n  margin-top: 0px;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n}\n\n@media (max-width: 320px) {\n  .secondary_header ul li {\n    float: none;\n    margin-top: 28px;\n    margin-left: 0px;\n    width: 100%;\n  }\n\n  .container .secondary_header ul {\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: 0px;\n    height: auto;\n    width: 100%;\n    text-align: center;\n  }\n\n  .secondary_header {\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 1px;\n    padding-bottom: 40px;\n  }\n\n  .left_article {\n    width: 100%;\n    height: auto;\n  }\n\n  .right_article {\n    width: 100%;\n    height: auto;\n  }\n\n  .placeholder {\n    width: 100%;\n    margin-top: 22PX;\n    margin-right: 0px;\n    margin-bottom: 22PX;\n    margin-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: 0px;\n    max-width: 400px;\n    max-height: 200px;\n    height: auto;\n  }\n\n  .columns {\n    width: 100%;\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 0PX;\n    padding-right: 0PX;\n    padding-bottom: 0PX;\n    padding-left: 0PX;\n  }\n\n  .columns p {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n\n  .column_half.left_half {\n    width: 100%;\n  }\n\n  .column_half.right_half {\n    width: 100%;\n  }\n\n  .copyright {\n    padding-top: 25px;\n    padding-bottom: 0px;\n    margin-bottom: 0px;\n  }\n\n  .container .left_article h3 {\n    margin-top: 30px;\n  }\n\n  .social .social_icon img {\n    width: 80%;\n  }\n\n  .container .secondary_header {\n  }\n}\n\n@media (min-width: 321px) and (max-width: 768px) {\n  .secondary_header ul li{\n    float: none;\n    margin-top: 28px;\n    margin-left: 0px;\n    width: 100%;\n  }\n\n  .container .secondary_header ul {\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: 0px;\n    height: auto;\n    width: 100%;\n    text-align: center;\n  }\n\n  .secondary_header {\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 1px;\n    padding-bottom: 40px;\n  }\n\n  .left_article {\n    width: 100%;\n    height: auto;\n  }\n\n  .right_article {\n    width: 100%;\n    height: auto;\n    padding-bottom: 25px;\n  }\n\n  .placeholder {\n    margin-top: 0px;\n    margin-right: 0px;\n    margin-bottom: 0px;\n    margin-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: 0px;\n    width: 100%;\n    max-width: 100%;\n    height: auto;\n    max-height: 100%;\n  }\n\n  .columns {\n    width: 100%;\n    margin-top: 6px;\n    margin-right: 0px;\n    margin-bottom: 6px;\n    margin-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n    padding-left: 0px;\n  }\n\n  .columns p {\n    padding-left: 14px;\n    padding-right: 14px;\n  }\n\n  .column_half.left_half {\n    width: 100%;\n  }\n\n  .column_half.right_half {\n    width: 100%;\n  }\n}\n\n@media (min-width: 769px) and (max-width: 1000px) {\n  .secondary_header {\n    overflow: auto;\n    padding-top: 30px;\n    padding-bottom: 30px;\n  }\n\n  .secondary_header ul li {\n    margin-top: 10px;\n    margin-right: 7%;\n    margin-bottom: 10px;\n    margin-left: 7%;\n  }\n\n  .left_article {\n    height: auto;\n  }\n\n  .right_article {\n    height: auto;\n    padding-bottom: 27px;\n  }\n\n  .placeholder {\n    width: 100%;\n    margin-left: 0px;\n    margin-right: 0px;\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n\n  .columns {\n    width: 50%;\n    float: left;\n    padding-left: 0px;\n    padding-top: 0px;\n    padding-right: 0px;\n    padding-bottom: 0px;\n  }\n\n  .container .columns p {\n    padding-left: 25px;\n    padding-right: 25px;\n  }\n}\n\n@media (min-width: 1001px) {\n}\n\n.thumbnail {\n  width: 100px;\n  border-radius: 200px;\n  height: 100px;\n  margin-left: auto;\n}\n\n.thumbnail_align {\n  text-align: center;\n}\n\n.social {\n  text-align: center;\n  margin-right: 0px;\n  margin-bottom: 0px;\n  margin-left: 0px;\n  width: 100%;\n  background-color: #414141;\n  clear: both;\n  overflow: auto;\n}\n\n.social_icon {\n  width: 25%;\n  text-align: center;\n  float: left;\n  transition: all 0.3s linear;\n  line-height: 0px;\n  padding-top: 7px;\n}\n\n.container .social .social_icon:hover {\n  cursor: pointer;\n  opacity: 0.5;\n}\n\n#menu {\n}\n\n/* Стили модального окна */\n.modal-header h2 {\n  color: #555;\n  font-size: 20px;\n  font-weight: normal;\n  line-height: 1;\n  margin: 0;\n}\n/* кнопка закрытия окна */\n.modal .btn-close {\n  color: #aaa;\n  cursor: pointer;\n  font-size: 30px;\n  text-decoration: none;\n  position: absolute;\n  right: 5px;\n  top: 0;\n}\n.modal .btn-close:hover {\n  color: red;\n}\n/* слой затемнения */\n.modal-wrap:before {\n  content: \"\";\n  display: none;\n  background: rgba(0, 0, 0, .3);\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 101;\n}\n.modal-overlay {\n  bottom: 0;\n  display: none;\n  left: 0;\n  position: fixed;\n  right: 0;\n  top: 0;\n  z-index: 102;\n}\n/* активация слоя затемнения и модального блока */\n.modal-open:checked ~ .modal-wrap:before,\n.modal-open:checked ~ .modal-wrap .modal-overlay {\n  display: block;\n}\n.modal-open:checked ~ .modal-wrap .modal-dialog {\n  -webkit-transform: translate(-50%, 0);\n  transform: translate(-50%, 0);\n  top: 20%;\n}\n/* элементы модального окна */\n.modal-dialog {\n  background: #fefefe;\n  border: none;\n  border-radius: 3px;\n  position: fixed;\n  width: 80%;\n  max-width: 1300px;\n  left: 50%;\n  top: -100%;\n  box-shadow: 0 15px 20px rgba(0,0,0,.22),0 19px 60px rgba(0,0,0,.3);\n  -webkit-transform: translate(-50%, -500%);\n  transform: translate(-50%, -500%);\n  transition: -webkit-transform 0.4s ease-out;\n  transition: transform 0.4s ease-out;\n  transition: transform 0.4s ease-out, -webkit-transform 0.4s ease-out;\n  z-index: 103;\n}\n.modal-body {\n  padding: 20px;\n}\n.modal-body p {\n  margin: 0;\n}\n.modal-header,\n.modal-footer {\n  padding: 20px 20px;\n}\n.modal-header {\n  border-bottom: #eaeaea solid 1px;\n}\n.modal-header h2 {\n  font-size: 20px;\n  margin: 0;\n}\n.modal-footer {\n  border-top: #eaeaea solid 1px;\n  text-align: right;\n}\n/* адаптивные картинки в модальном блоке */\n.modal-body img {\n  max-width: 100%;\n  height: auto;\n}\n/* кнопки */\n.btn {\n  background: #fff;\n  border: #555 solid 1px;\n  border-radius: 3px;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 14px;\n  padding: 8px 15px;\n  text-decoration: none;\n  text-align: center;\n  min-width: 60px;\n  position: relative;\n}\n.btn a, a:visited, a:active {\n  color: black; /* Цвет ссылок */\n}\n.btn:hover, .btn:focus {\n  background: #ff9e6d;\n}\n.btn-primary {\n  background: #428bca;\n  border-color: #357ebd;\n  color: #fff;\n}\n.btn-primary:hover{\n  background: #ff9e6d;\n}\n\n/* Элементы формы контактов */\n.textbox{\n  height:45px;\n  width:100%;\n  border-radius:3px;\n  border:rgba(0,0,0,.3) 1px solid;\n  box-sizing:border-box;\n  font-size:14px;\n  padding:8px;\n  margin-bottom:20px;\n}\n.message:focus,\n.textbox:focus{\n  outline:none;\n  border:rgba(24,149,215,1) 1px solid;\n  color:rgba(24,149,215,1);\n}\n.message{\n  background: rgba(255, 255, 255, 0.4);\n  width:100%;\n  height: 120px;\n  border:rgba(0,0,0,.3) 1px solid;\n  box-sizing:border-box;\n  -moz-border-radius: 3px;\n  font-size:14px;\n  border-radius: 3px;\n  display:block;\n  padding:10px;\n  margin-bottom:20px;\n  overflow:hidden;\n}\n/* кнопка \"отправить\" формы */\n.btn-form{\n  width:100%;\n  height:45px;\n  border:rgba(0,0,0,.2) 1px solid;\n  box-sizing:border-box;\n  background: #dedede;\n  color:#555;\n  transition:background .4s;\n}\n/* Изменение фона кнопки при наведении */\n.btn-form:hover{\n  background: #f2f2f2;\n}\n.c {\n  border: 1px solid #333; /* Рамка */\n  display: inline-block;\n  padding: 5px 15px; /* Поля */\n  text-decoration: none; /* Убираем подчёркивание */\n  color: #000; /* Цвет текста */\n}\n", ""]);

// exports


/***/ }),

/***/ 679:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ 980:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 984:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(413);


/***/ })

},[984]);
//# sourceMappingURL=styles.bundle.map