/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PagePresenter_js__ = __webpack_require__(4);




class Page {

    constructor() {
        Page.pagePath();
        Page.pageBoxName();
        this.render();
        this.addEventsOnButtons();
    }

    static pagePath() {}

    static pageBoxName() {}

    render() {}

    addEventsOnButtons() {}

    static createBoxForPage(pageBoxName) {
        let pageBox = document.createElement("div");
        pageBox.className = pageBoxName + " page";
        pageBox.hidden = true;
        document.querySelector(".main-box").appendChild(pageBox);
        return pageBox;
    }

    addRedirectOnButtons(...buttons) {
        buttons.forEach(button => {
            document.querySelector("." + button.button).addEventListener("click", () => {
                __WEBPACK_IMPORTED_MODULE_0__PagePresenter_js__["a" /* default */].showOnlyOnePage(button.nextPage);
                history.pushState({}, "", button.pagePath);
            });
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Page;



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      var valB = pug_style(b[key]);
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    val += '';
    if (val[val.length - 1] !== ';') 
      return val + ';';
    return val;
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  if (typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || __webpack_require__(15).readFileSync(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const messagesFromHost = {
    HTTP_OK : 200,
    XHR_READY : 4
};

/**
 * Класс для запросов на сервер
 */
class RequestToHost {

    /**
	 * Возвращает url backend сервера
     * @returns {string}
     */
    static baseUrl() {
        return  "https://bubblerise-backend.herokuapp.com/";
        // для тестирования взаимодействия с сервером на localhost
        // return  "http://localhost:8080/";
    }

    /**
	 * POST-запрос на сервер
     * @param {string} address
     * @param {object} data
     * @param callback
     */
    static requestPost(address, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("POST", this.baseUrl() + address, true);
        xhr.withCredentials = true; //for cookies

        const body = JSON.stringify(data);

        xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

        xhr.send(body);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== messagesFromHost.XHR_READY) {
                return;
            }
            if (+xhr.status !== messagesFromHost.HTTP_OK) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };
    }

    /**
	 * GET-запрос на сервер
     * @param {string} address - string with url
     * @param callback
     */
    static requestGet(address, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", this.baseUrl() + address, true);
        xhr.withCredentials = true;

        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== messagesFromHost.XHR_READY) {
                return;
            }
            if (+xhr.status !== messagesFromHost.HTTP_OK) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };
    }

    /**
     * PATCH-запрос на сервер
     * @param {string} address
     * @param {object} data
     * @param callback
     */
    static requestPatch(address, data, callback) {
        const xhr = new XMLHttpRequest();
        xhr.open("PATCH", this.baseUrl() + address, true);
        xhr.withCredentials = true; //for cookies

        const body = JSON.stringify(data);

        xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

        xhr.send(body);

        xhr.onreadystatechange = function () {
            if (xhr.readyState !== messagesFromHost.XHR_READY) {
                return;
            }
            if (+xhr.status !== messagesFromHost.HTTP_OK) {
                return callback(xhr, null);
            }

            const response = JSON.parse(xhr.responseText);
            callback(null, response);
        };
    }

    /**
	 * Авторизация пользователя
     * @param login
     * @param password
     * @param callback
     */
    static auth(login, password, callback) {
        const user = {login, password};
        RequestToHost.requestPost("api/users/signin", user, callback);
    }

    /**
	 * Регистрация пользователя
     * @param login
     * @param password
     * @param email
     * @param callback
     */
    static register(login, password, email, callback) {
        const user = {login, password, email};
        RequestToHost.requestPost("api/users", user, callback);
    }

    /**
	 * Узнает информацию о текущем пользователе
     * @param callback
     */
    static whoami(callback) {
        RequestToHost.requestGet("api/users/me", callback);
    }

    /**
	 * Запрашивает TOP пользователей
     * @param callback
     */
    static records(callback) {
        RequestToHost.requestGet("api/game/records", callback);
    }

    /**
     * Отправляем тему пользователя
     * @param theme - 1 или 0 текущая тема пользователя
     * @param callback
     */
    static theme(theme, callback) {
        const userTheme = {theme};
        RequestToHost.requestPatch("api/users/theme", userTheme, callback);
    }

    /**
     * Отправляем score пользователя в single игре
     * @param localRecord
     * @param callback
     */
    static singlescore(localRecord, callback) {
        const userScore = {localRecord};
        RequestToHost.requestPost("api/game/local_record", userScore, callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RequestToHost;



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const DEBUG_MODE = false;

class Debugger {

    static print(logString) {
        if (DEBUG_MODE) {
            console.log(logString);
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Debugger;



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class PagePresenter {

    static hideAllPages() {
        let pages = document.getElementsByClassName("page");
        for (let i = 0; i < pages.length; i++) {
            pages[i].hidden = true;
        }
    }

    static showOnlyOnePage(pageName) {
        PagePresenter.hideAllPages();
        document.querySelector("." + pageName).hidden = false;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PagePresenter;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RequestToHost_js__ = __webpack_require__(2);




const messagesWhoAmI = {
    GUEST_HELLO_MESSAGE : "Привет, Гость!",
    USER_HELLO_MESSAGE : "Привет, "
};

let whoamiMixin = {
    whoami() {
        __WEBPACK_IMPORTED_MODULE_0__RequestToHost_js__["a" /* default */].whoami((err, resp) => {
            const loginBox = document.querySelector(".main-page__user");
            if (err) {
                return loginBox.innerHTML = messagesWhoAmI.GUEST_HELLO_MESSAGE;
            }
            loginBox.innerHTML = `${messagesWhoAmI.USER_HELLO_MESSAGE} ${resp.login}! Личный рекорд: ${resp.localRecord}`;
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (whoamiMixin);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_modules_GameManager_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_page_pug__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__play_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__play_page_pug__);






class PlayPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
        this.gameManager = new __WEBPACK_IMPORTED_MODULE_1__game_modules_GameManager_js__["a" /* default */](960, 680, ".play-page__play-field");
    }

    static pagePath() {
        return "/play";
    }

    static pageBoxName() {
        return "play-page";
    }

    render() {
        let playPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(PlayPage.pageBoxName());
        playPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__play_page_pug___default()();
    }

    gameMode(mode) {
        let gameLogo = document.querySelector(".main-box__logo-game");
        gameLogo.hidden = mode;
        mode ?
            this.gameManager.start() : this.gameManager.stop();
    }

    static printScore(score) {
        document.querySelector(".panel__score-box").innerHTML = score;
    }

    addEventsOnButtons() {
        document.querySelector(".main-menu__button-play").addEventListener("click", () => {
            this.gameMode(true);
        });
        document.querySelector(".panel__button-back").addEventListener("click", () => {
            this.gameMode(false);
        });
        document.querySelector(".panel__button-restart").addEventListener("click", () => {
            this.gameMode(false);
            this.gameMode(true);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PlayPage;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const messagesToForm = {
    OK_MESSAGE: "ok",
    EMPTY_MESSAGE : "empty",
    INCORRECT_MESSAGE : "incorrect",
    NOT_EMAIL_MESSAGE : "is not email"
};

class FormValidator {

    static responseOk() {
        return messagesToForm.OK_MESSAGE;
    }

    static responseEmpty() {
        return messagesToForm.EMPTY_MESSAGE;
    }

    static responseIncorrect() {
        return messagesToForm.INCORRECT_MESSAGE;
    }

    static responseIsNotEmail() {
        return messagesToForm.NOT_EMAIL_MESSAGE;
    }

    static correctLogin(login) {
        if (!login) {
            return FormValidator.responseEmpty();
        }
        const loginRegexp = /^[\w\d]{3,10}$/;
        return (loginRegexp.test(login)) ? FormValidator.responseOk() : FormValidator.responseIncorrect();
    }

    static correctPassword(password) {
        if (!password) {
            return FormValidator.responseEmpty();
        }
        const passwordRegexp = /\S{3,16}$/;
        return (passwordRegexp.test(password)) ? FormValidator.responseOk() : FormValidator.responseIncorrect();
    }

    static correctEmail(email) {
        if (!email) {
            return FormValidator.responseEmpty();
        }
        const emailRegexp = /^[.a-z0-9_-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
        return (emailRegexp.test(email)) ? FormValidator.responseOk() : FormValidator.responseIsNotEmail();
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FormValidator;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


let fieldsCleaner = {
    clearFields(...fields) {
        fields.forEach(field => {
            const fieldName = "." + field;
            let elem = document.querySelector(fieldName);
            if (elem.nodeName === "INPUT") {
                elem.value = "";
            } else if (elem.nodeName === "DIV") {
                elem.innerHTML = "";
            }
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (fieldsCleaner);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Router_js__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Debugger_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_style_css__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_style_css__);












class MainApp {

    constructor () {
        __WEBPACK_IMPORTED_MODULE_1__Debugger_js__["a" /* default */].print("Application was created");

        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js")
                .then(function (registration) {
                    // при удачной регистрации имеем объект типа ServiceWorkerRegistration
                    console.log("ServiceWorker registration", registration);
                })
                .catch(function (err) {
                    // throw new Error('ServiceWorker error: ' + err);
                    console.error("Registration err", err);
                });
        }

        const router = new __WEBPACK_IMPORTED_MODULE_0__Router_js__["a" /* default */]();
        router.getMe(router);
        router.sendRouter();
    }
}

window.addEventListener("load", function () {
    new MainApp();
});


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__whoamiMixin_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ThemeChanger_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__ = __webpack_require__(28);














class Router {

    constructor() {

        const mainPagePath = __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__["a" /* default */].pagePath();
        const infoPagePath = __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__["a" /* default */].pagePath();
        const playPagePath = __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__["a" /* default */].pagePath();
        const loginPagePath = __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__["a" /* default */].pagePath();
        const registerPagePath = __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__["a" /* default */].pagePath();
        const recordsPagePath = __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__["a" /* default */].pagePath();

        this.themeChanger = new __WEBPACK_IMPORTED_MODULE_3__ThemeChanger_js__["a" /* default */]();

        Object.assign(__WEBPACK_IMPORTED_MODULE_0__Page_js__["a" /* default */].prototype, __WEBPACK_IMPORTED_MODULE_1__whoamiMixin_js__["a" /* default */]);
        const mainPage = new __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__["a" /* default */]();
        mainPage.whoami();
        mainPage.addRedirectOnButtons(
            {button: "main-menu__button-play", nextPage: "play-page", pagePath: playPagePath},
            {button: "main-menu__button-login", nextPage: "login-page", pagePath: loginPagePath},
            {button: "main-menu__button-records", nextPage: "records-page", pagePath: recordsPagePath},
            {button: "main-menu__button-info", nextPage: "info-page", pagePath: infoPagePath}
        );

        const infoPage = new __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__["a" /* default */]();
        infoPage.addRedirectOnButtons(
            {button: "info-page__button-back", nextPage: "main-page", pagePath: mainPagePath}
        );

        this.playPage = new __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__["a" /* default */]();
        this.playPage.addRedirectOnButtons(
            {button: "panel__button-back", nextPage: "main-page", pagePath: mainPagePath}
        );

        this.loginPage = new __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__["a" /* default */]();
        const registerPage = new __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__["a" /* default */]();

        this.loginPage.addRedirectOnButtons(
            {button: "login-page__button-back", nextPage: "main-page", pagePath: mainPagePath},
            {button: "login-page__link-to-register", nextPage: "register-page", pagePath: registerPagePath}
        );

        registerPage.addRedirectOnButtons(
            {button: "register-page__button-back", nextPage: "login-page", pagePath: loginPagePath},
            {button: "register-page__link-to-login", nextPage: "login-page", pagePath: loginPagePath}
        );

        this.recordsPage = new __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__["a" /* default */]();
        this.recordsPage.addRedirectOnButtons(
            {button: "records-page__button-back", nextPage: "main-page", pagePath: mainPagePath}
        );

        this.redirectToPage();

        window.addEventListener("popstate", () => {
            this.redirectToPage();
            registerPage.getForm().clearForm();
            this.loginPage.getForm().clearForm();
        });
    }

    getMe(router) {
        this.myRouter = router;
    }

    sendRouter() {
        this.loginPage.takeRouter(this.myRouter);
    }

    changeTheme() {
        this.themeChanger.sendRequestForTheme();
    }

    redirectToPage() {
        const pathname = window.location.pathname;
        let gameMode = (pathname === "/play");
        this.playPage.gameMode(gameMode);
        switch (pathname) {
        case "/main":
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("main-page");
            break;

        case "/register":
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("register-page");
            break;

        case "/login":
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("login-page");
            break;

        case "/play":
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("play-page");
            break;

        case "/records":
            this.recordsPage.sendRequestForRecords();
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("records-page");
            break;

        case "/info":
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("info-page");
            break;
        default:
            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("main-page");
            break;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Router;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Debugger__ = __webpack_require__(3);






class ThemeChanger {

    constructor() {
        this.styles = "";
        this.generateTheme([__WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["a" /* bodyStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["c" /* mainBoxStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["b" /* buttonLoginStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["d" /* themeChangerStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["e" /* themeChangerStylesHover */]]);
        this.userTheme = false;
        this.sendRequestForTheme();
        this.addEventsOnButtons();
    }

    sendRequestForTheme() {
        __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].whoami((err, resp) => {
            if (err) {
                return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("not AUTH for GET");
            } else {
                __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("YOUR THEME resp = " + resp.theme);
                this.userTheme = resp.theme && true;
                this.applyTheme();
            }
        });
    }

    sendRequestToSaveTheme() {
        __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].whoami((err) => {
            if (err) {
                return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("not AUTH for PATCH");
            } else {
                __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].theme(+this.userTheme, (err) => {
                    if (err) {
                        return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("Can't add theme");
                    }
                });
            }
        });
    }

    generateTheme(themeStyles) {
        const createThemeStylesheet = (styles) => {
            return styles.reduce((stylesheet, current) => {
                const properties = Object.entries(current.styles).map(prop => prop[0] + ":" + prop[1] + ";");
                stylesheet += `${current.selector} {${properties}}\n`;
                return stylesheet;
            }, "");
        };
        this.styles = createThemeStylesheet(themeStyles);
    }

    applyTheme() {
        __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("YOUR THEME apply = " + this.userTheme);
        const addThemeStylesheet = (stylesheet) => {
            let styleTag = document.querySelector(".theme-styles");
            styleTag.innerHTML = stylesheet;
        };
        let stylesheet = this.userTheme ? this.styles : "";
        addThemeStylesheet(stylesheet);
    }

    changeTheme() {
        this.userTheme = !this.userTheme;
        this.applyTheme();
        this.sendRequestToSaveTheme();
    }

    addEventsOnButtons() {
        document.querySelector(".main-box__theme-changer").addEventListener("click", () => {
            this.changeTheme();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ThemeChanger;



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bodyStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mainBoxStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return buttonLoginStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return themeChangerStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return themeChangerStylesHover; });


const bodyStyles = {
    selector: "body",
    styles: {
        "background": "lightsalmon",
    }
};

const mainBoxStyles = {
    selector: ".main-box",
    styles: {
        "background": "#ffc3ac",
    }
};

const buttonLoginStyles = {
    selector: ".main-menu__button-login",
    styles: {
        "border": "1em solid rgb(89, 145, 255)",
    }
};

const themeChangerStyles = {
    selector: ".main-box__theme-changer",
    styles: {
        background: "lavender",
    }
};

const themeChangerStylesHover = {
    selector: ".main-box__theme-changer:hover",
    styles: {
        background: "#e0d9fb",
    }
};




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_page_pug__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__info_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__info_page_pug__);





class InfoPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
    }

    static pagePath() {
        return "/info";
    }

    static pageBoxName() {
        return "info-page";
    }

    render() {
        let infoPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(InfoPage.pageBoxName());
        infoPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_1__info_page_pug___default()();
    }

    addEventsOnButtons() {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = InfoPage;



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"info-page__button-back\"\u003E\u003Cimg class=\"play-page__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"info-page__info-box\"\u003E\u003Ch3 align=\"center\"\u003EAbout game\u003C\u002Fh3\u003E\u003Cdiv\u003E\u003Cp\u003EПодавите восстание bubbles'ов!\u003C\u002Fp\u003E\u003Cp\u003EВаша задача, вращая куб, очищать его грани от bubbles'ов.\u003C\u002Fp\u003E\u003Cp\u003E  Клавиши управления:\u003C\u002Fp\u003E\u003Cp\u003E  \"A\" - вращение влево, \"D\" - вращение вправо и ЛКМ для атаки.\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SceneRenderer_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ObjectsCreater_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_RequestToHost_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__ = __webpack_require__(6);








const keyCodes = {
    KEY_A_KEY_CODE: 65,
    KEY_D_KEY_CODE: 68
};

const cubeSides = {
    FIRST_SIDE: 1,
    SECOND_SIDE: 2,
    THIRD_SIDE: 3,
    FOURTH_SIDE: 4
};

const BACKGROUND_COLOR_SCENE = "#ffbe74";

class GameManager {

    constructor(width, height, playFieldName) {
        this.width = width;
        this.height = height;
        this.initScene(width, height, playFieldName);
        this.sceneRenderer = new __WEBPACK_IMPORTED_MODULE_0__SceneRenderer_js__["a" /* default */](this.renderer, this.scene, this.camera);
        this.addClicksToBubbles();
        this.addEventsToKey();
        this.score = 0;
    }

    addEventsToKey() {
        this.keyA = false;
        this.keyD = false;
        window.onkeydown = (event) => {
            const k = event.keyCode;

            switch(k){
            case keyCodes.KEY_A_KEY_CODE:
                this.keyA = true;
                break;
            case keyCodes.KEY_D_KEY_CODE:
                this.keyD = true;
                break;
            }
        };

        window.onkeyup = (event) => {
            const k = event.keyCode;

            switch(k){
            case keyCodes.KEY_A_KEY_CODE:
                this.keyA = false;
                break;
            case keyCodes.KEY_D_KEY_CODE:
                this.keyD = false;
                break;
            }
        };
    }

    start() {
        this.keyA = false;
        this.keyD = false;
        this.sceneRenderer.startRendering();
        this.objectsCreater = new __WEBPACK_IMPORTED_MODULE_1__ObjectsCreater_js__["a" /* default */](this.scene);
        this.addCameraMovement();
        this.addBubblesGeneration();
        this.addBubbleGrowing();
        __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__["a" /* default */].printScore(this.score);
    }

    initScene(width, height, playFieldName) {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setClearColor(BACKGROUND_COLOR_SCENE);
        this.renderer.setSize(width, height);
        this.playField = document.querySelector(playFieldName);
        this.playField.append(this.renderer.domElement);
    }

    setCameraPosition(xx, yy, zz) {
        const camera = this.camera;
        camera.position.x = xx;
        camera.position.y = yy;
        camera.position.z = zz;
        camera.lookAt(new THREE.Vector3(0, 0, 0));
    }

    addCameraMovement() {
        const radius = 20;
        const deltaAngle = 0.05;

        let cameraX = radius;
        let cameraY = 0;
        let cameraZ = 0;
        let angleXZ = 0;

        this.setCameraPosition(cameraX, cameraY, cameraZ);

        this.cameraMoveInterval = setInterval(() => {
            if (this.keyA === true) {
                angleXZ -= deltaAngle;
                cameraX = radius * Math.cos(angleXZ);
                cameraZ = radius * Math.sin(angleXZ);
                this.setCameraPosition(cameraX, cameraY, cameraZ);
            }
            if (this.keyD === true) {
                angleXZ += deltaAngle;
                cameraX = radius * Math.cos(angleXZ);
                cameraZ = radius * Math.sin(angleXZ);
                this.setCameraPosition(cameraX, cameraY, cameraZ);
            }
        }, 50);
    }

    addBubblesGeneration() {
        this.bubbles = [];

        __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);

        function getRandomInteger() {
            return (parseInt(Math.random() * 1000000) % 4) + 1;
        }

        function getRandomPosition() {
            return (parseInt(Math.random() * 1000000) % 9) + Math.random() - 4.5;
        }

        let countNow = 0;
        let maxCount = 20;

        this.generationInterval = setInterval(() => {
            if (countNow < maxCount) {
                countNow++;
            } else {

                countNow = 0;
                (maxCount > 8) ? maxCount -= 0.1 : "";

                const side = getRandomInteger();

                let xx = null;
                let yy = null;
                let zz = null;

                switch (side) {
                case cubeSides.FIRST_SIDE:
                    xx = getRandomPosition();
                    yy = getRandomPosition();
                    zz = -4.5;
                    break;
                case cubeSides.THIRD_SIDE:
                    xx = getRandomPosition();
                    yy = getRandomPosition();
                    zz = 4.5;
                    break;
                case cubeSides.SECOND_SIDE:
                    xx = 4.5;
                    yy = getRandomPosition();
                    zz = getRandomPosition();
                    break;
                case cubeSides.FOURTH_SIDE:
                    xx = -4.5;
                    yy = getRandomPosition();
                    zz = getRandomPosition();
                    break;
                }

                const bubble = this.objectsCreater.createResultSphere(xx, yy, zz);
                this.bubbles.push(bubble);

                __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + this.bubbles.length);
                __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);
            }

        }, 50);
    }

    addBubbleGrowing() {
        const scaleDelta = 0.02;

        this.growingInterval = setInterval(() => {
            for(let i = 0; i < this.bubbles.length; i++){
                const bubble = this.bubbles[i];
                bubble.scale.x += scaleDelta;
                bubble.scale.y += scaleDelta;
                bubble.scale.z += scaleDelta;

                if (bubble.scale.x >= 4) {
                    alert("Game over!");
                    this.stop();
                }
            }
        }, 100);
    }

    addClicksToBubbles() {
        let raycaster = new THREE.Raycaster();
        let mouse = new THREE.Vector2();

        this.playField.addEventListener("click", (event) => {
            const width = this.width;
            const height = this.height;

            const xMouse = event.offsetX;
            const yMouse = event.offsetY;

            mouse.x = (xMouse / width) * 2 - 1;
            mouse.y = - (yMouse / height) * 2 + 1;
            raycaster.setFromCamera(mouse, this.camera);

            let intersects = raycaster.intersectObjects(this.scene.children);

            if (intersects.length > 0) {
                let answer = intersects[0];

                if (answer.object !== this.objectsCreater.getCube() && answer.object !== this.objectsCreater.getCubeFrame()) {
                    let index = 0;

                    for (let i = 0; i < this.bubbles.length; i++) {
                        if (answer.object === this.bubbles[i]) {
                            index = i;
                            break;
                        }
                    }

                    this.scene.remove(answer.object);
                    this.bubbles.splice(index, 1);
                    this.score += 1;
                    __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__["a" /* default */].printScore(this.score);
                }
            }
            __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + this.bubbles.length);
            __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);
        });
    }

    sendRequestToSaveScore() {
        __WEBPACK_IMPORTED_MODULE_2__modules_RequestToHost_js__["a" /* default */].singlescore(this.score, (err) => {
            if (err) {
                return __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("User don't authorise");
            }
        });
    }

    stop() {
        this.sceneRenderer.stopRendering();
        clearInterval(this.cameraMoveInterval);
        clearInterval(this.growingInterval);
        clearInterval(this.generationInterval);

        while(this.scene.children.length > 0) {
            this.scene.remove(this.scene.children[0]);
        }

        this.bubbles = [];
        this.sendRequestToSaveScore();
        this.score = 0;
        __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + this.bubbles.length);
        __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = GameManager;



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


class SceneRenderer {

    constructor(renderer, scene, camera) {
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    }

    startRendering() {
        this.repeatInterval = setInterval(() => {
            this.renderer.render(this.scene, this.camera);
        }, 50);
    }

    stopRendering() {
        clearInterval(this.repeatInterval);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = SceneRenderer;



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


const objectColors = {
    SPHERE_COLOR: "#5b54ff",
    CUBE_COLOR: "#bb2d41",
    CUBE_FRAME_COLOR: "#962536",
    LIGHT_COLOR: "#FFFFFF"
};

const objectGeometry = {
    SPHERE: "sphere",
    CUBE: "cube",
    CUBE_FRAME: "cubeFrame"
};

class ObjectsCreater {

    constructor(scene) {
        this.scene = scene;
        this.cubeSize = 9;
        this.bubbleRadius = 0.5;
        this.createStaticObjects();
    }

    getCubeSize() {
        return this.cubeSize;
    }

    getCube() {
        return this.cube;
    }

    getCubeFrame() {
        return this.cubeFrame;
    }

    createStaticObjects() {
        this.cube = this.createCube();
        this.cubeFrame = this.createWireFrameCube();

        this.createLight(-70, 0, 0);
        this.createLight(70, 0, 0);
        this.createLight(0, 0, -70);
        this.createLight(0, 0, 70);
        this.createLight(0, -70, 0);
        this.createLight(0, 70, 0);
    }

    createObject(geometry, material, pos) {
        let object = null;
        if (geometry === objectGeometry.SPHERE) {
            let sphereGeometry = new THREE.SphereGeometry(this.bubbleRadius, 25, 25);
            let sphereMaterial = new THREE.MeshLambertMaterial(material);
            object = new THREE.Mesh(sphereGeometry, sphereMaterial);
        } else if (geometry === objectGeometry.CUBE) {
            const size = this.cubeSize;
            let cubeGeometry = new THREE.CubeGeometry(size, size, size);
            let cubeMaterial = new THREE.MeshLambertMaterial(material);
            object = new THREE.Mesh(cubeGeometry, cubeMaterial);
        }
        object.position.x = pos.xx;
        object.position.y = pos.yy;
        object.position.z = pos.zz;
        this.scene.add(object);
        return object;
    }

    createResultSphere(xx, yy, zz) {
        const material = {
            color: objectColors.SPHERE_COLOR,
            opacity: 0.7,
            transparent:true
        };
        const position = {
            xx: xx,
            yy: yy,
            zz: zz
        };
        return this.createObject(objectGeometry.SPHERE, material, position);
    }

    createCube() {
        const material = {
            color: objectColors.CUBE_COLOR,
            opacity: 0.5,
            transparent:true
        };
        const position = {
            xx: 0,
            yy: 0,
            zz: 0
        };
        return this.createObject(objectGeometry.CUBE, material, position);
    }

    createWireFrameCube() {
        const material = {
            color: objectColors.CUBE_FRAME_COLOR,
            wireframe: true
        };
        const position = {
            xx: 0,
            yy: 0,
            zz: 0
        };
        return this.createObject(objectGeometry.CUBE, material, position);
    }

    createLight(xx, yy, zz) {
        const pointLight = new THREE.PointLight(objectColors.LIGHT_COLOR, 2);
        pointLight.position.set(xx, yy, zz);
        this.scene.add(pointLight);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ObjectsCreater;



/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"play-page__play-field play-field\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"play-page__panel-buttons panel\"\u003E\u003Cdiv class=\"panel__button-back\"\u003E\u003Cimg class=\"panel__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel__button-restart\"\u003E\u003Cimg class=\"panel__button-restart_img\" src=\".\u002F..\u002F..\u002Fimg\u002Frestart.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"panel__score-label\"\u003E\u003Cp\u003Escore:\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cstrong\u003E\u003Cdiv class=\"panel__score-box\" align=\"right\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fstrong\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_pug__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_page_pug__);





class MainPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
    }

    static pagePath() {
        return "/main";
    }

    static pageBoxName() {
        return "main-page";
    }

    render() {
        let mainPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(MainPage.pageBoxName());
        mainPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_1__main_page_pug___default()();
    }

    addEventsOnButtons() {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = MainPage;



/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"main-page__user\"\u003E\u003Cp\u003EПривет, Гость!\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-page__main-menu main-menu\"\u003E\u003Cdiv class=\"main-menu__button-play\"\u003E\u003Cimg class=\"main-menu__button-play_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fbutton_play.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-menu__button-login button-login\"\u003E\u003Cimg class=\"button-login__img\" src=\".\u002F..\u002F..\u002Fimg\u002Flogin.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-menu__button-records button-records\"\u003E\u003Cimg class=\"button-records__img\" src=\".\u002F..\u002F..\u002Fimg\u002Frecord.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-menu__button-info button-info\"\u003E\u003Cimg class=\"button-info__img\" src=\".\u002F..\u002F..\u002Fimg\u002Finfo.png\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_LoginForm_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page_pug__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__login_page_pug__);






class LoginPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
    }

    static pagePath() {
        return "/login";
    }

    static pageBoxName() {
        return "login-page";
    }

    takeRouter(router) {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__modules_LoginForm_js__["a" /* default */](router);
    }

    getForm() {
        return this.form;
    }

    render() {
        let loginPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(LoginPage.pageBoxName());
        loginPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__login_page_pug___default()();
    }

    addEventsOnButtons() {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginPage;



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fieldsCleaner_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__whoamiMixin_js__ = __webpack_require__(5);








const messagesLoginForm = {
    EMPTY_MESSAGE : "Заполнены не все поля",
    INCORRECT_MESSAGE : "Использованы недопустимые символы",
    RESPONSE_MESSAGE : "Некорректный ввод или логина не существует",
    SUCCESS_SIGN_IN_MESSAGE : "Вы вошли на сайт!"
};

class LoginForm extends __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */] {

    constructor(router) {
        super();
        Object.assign(LoginForm.prototype, __WEBPACK_IMPORTED_MODULE_4__whoamiMixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__fieldsCleaner_js__["a" /* default */]);
        this.loginValue = "";
        this.passwordValue = "";
        this.errorBox = null;
        this.addEventsToButtons();
        this.router = router;
    }

    static msgEmptyField() {
        return messagesLoginForm.EMPTY_MESSAGE;
    }

    static msgIncorrectInput() {
        return messagesLoginForm.INCORRECT_MESSAGE;
    }

    static msgResponseFromHost() {
        return messagesLoginForm.RESPONSE_MESSAGE;
    }

    static msgSignInSuccess() {
        return messagesLoginForm.SUCCESS_SIGN_IN_MESSAGE;
    }

    static validate(loginValue, passwordValue, errorBox)
    {
        let login = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctLogin(loginValue);
        let password  = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctPassword(passwordValue);

        if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty() || password === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty()) {
            errorBox.innerHTML = LoginForm.msgEmptyField();
            return false;
        }

        if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect() || password  === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect()) {
            errorBox.innerHTML = LoginForm.msgIncorrectInput();
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }

    clearForm() {
        this.clearFields("login-form__input-login", "login-form__input-password", "login-form__error-box");
    }

    sendRequest() {
        __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].auth(this.loginValue, this.passwordValue, (err) => {
            if (err) {
                return this.errorBox.innerHTML = LoginForm.msgResponseFromHost();
            }

            alert(LoginForm.msgSignInSuccess());
            this.clearForm();

            history.pushState({}, "", "/main");

            __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("main-page");
            this.whoami();
            this.router.changeTheme();
        });
    }

    addEventsToButtons() {
        document.querySelector(".login-form__button").addEventListener("click", () => {
            this.loginValue = document.querySelector(".login-form__input-login").value;
            this.passwordValue = document.querySelector(".login-form__input-password").value;
            this.errorBox = document.querySelector(".login-form__error-box");
            const valid = LoginForm.validate(this.loginValue, this.passwordValue, this.errorBox);

            if (valid) {
                this.sendRequest();
            }
        });

        document.querySelector(".login-page__button-back").addEventListener("click", () => {this.clearForm();});
        document.querySelector(".login-page__link-to-register").addEventListener("click", () => {this.clearForm();});
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = LoginForm;



/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"login-page__button-back\"\u003E\u003Cimg class=\"login-page__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"login-page__login-form login-form\"\u003E\u003Cdiv class=\"login-form__error-box\"\u003E\u003C\u002Fdiv\u003E\u003Cp\u003E\u003Cinput class=\"login-form__input-login\" type=\"text\" name=\"login\" placeholder=\"You login\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput class=\"login-form__input-password\" type=\"password\" name=\"password\" placeholder=\"*********\"\u003E\u003C\u002Fp\u003E\u003Cbutton class=\"login-form__button\"\u003ELog In\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cp align=\"center\"\u003EYou haven`t account?\u003Cspan class=\"login-page__link-to-register\"\u003E Sign Up\u003C\u002Fspan\u003E\u003C\u002Fp\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_RegisterForm_js__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page_pug__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__register_page_pug__);






class RegisterPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__modules_RegisterForm_js__["a" /* default */]();
    }

    static pagePath() {
        return "/register";
    }

    static pageBoxName() {
        return "register-page";
    }

    getForm() {
        return this.form;
    }

    render() {
        let registerPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(RegisterPage.pageBoxName());
        registerPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__register_page_pug___default()();
    }

    addEventsOnButtons() {

    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RegisterPage;



/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fieldsCleaner_js__ = __webpack_require__(8);






const messagesRegisterForm = {
    EMPTY_MESSAGE : "Заполнены не все поля",
    INCORRECT_MESSAGE : "Использованы недопустимые символы",
    NOT_EMAIL_MESSAGE : "Некорректный email",
    RESPONSE_MESSAGE : "Некорректный ввод или логин уже существует",
    SUCCESS_SIGN_UP_MESSAGE : "Вы успешо зарегистрировались!"
};

class RegisterForm extends __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */] {

    constructor() {
        super();
        Object.assign(RegisterForm.prototype, __WEBPACK_IMPORTED_MODULE_2__fieldsCleaner_js__["a" /* default */]);
        this.emailValue = "";
        this.loginValue = "";
        this.passwordValue = "";
        this.errorBox = null;
        this.addEventsToButtons();
    }

    static msgEmptyField() {
        return messagesRegisterForm.EMPTY_MESSAGE;
    }

    static msgIncorrectInput() {
        return messagesRegisterForm.INCORRECT_MESSAGE;
    }

    static msgResponseFromHost() {
        return messagesRegisterForm.RESPONSE_MESSAGE;
    }

    static msgIsNotEmail() {
        return messagesRegisterForm.NOT_EMAIL_MESSAGE;
    }

    static msgSignUpSuccess() {
        return messagesRegisterForm.SUCCESS_SIGN_UP_MESSAGE;
    }

    static validate(loginValue, passwordValue, emailValue, errorBox) {
        let login = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctLogin(loginValue);
        let password = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctPassword(passwordValue);
        let email = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctEmail(emailValue);

        if (email === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIsNotEmail()) {
            errorBox.innerHTML = RegisterForm.msgIsNotEmail();
            return false;
        }

        if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty() || password === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty() || email === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty()) {
            errorBox.innerHTML = RegisterForm.msgEmptyField();
            return false;
        }

        if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect() || password === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect()) {
            errorBox.innerHTML = RegisterForm.msgIncorrectInput();
            return false;
        }

        errorBox.innerHTML = "";
        return true;
    }

    clearForm() {
        this.clearFields("register-form__input-email", "register-form__input-login", "register-form__input-password", "register-form__error-box");
    }

    sendRequest() {
        __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].register(this.loginValue, this.passwordValue, this.emailValue, (err) => {
            if (err) {
                return this.errorBox.innerHTML = RegisterForm.msgResponseFromHost();
            }

            alert(RegisterForm.msgSignUpSuccess());
            this.clearForm();

            document.querySelector(".register-page__button-back").click();
        });
    }

    addEventsToButtons() {

        document.querySelector(".register-form__button").addEventListener("click", () => {
            this.emailValue = document.querySelector(".register-form__input-email").value;
            this.loginValue = document.querySelector(".register-form__input-login").value;
            this.passwordValue = document.querySelector(".register-form__input-password").value;
            this.errorBox = document.querySelector(".register-form__error-box");

            const valid = RegisterForm.validate(this.loginValue, this.passwordValue, this.emailValue, this.errorBox);

            if (valid) {
                this.sendRequest();
            }
        });

        document.querySelector(".register-page__button-back").addEventListener("click", () => {this.clearForm();});
        document.querySelector(".register-page__link-to-login").addEventListener("click", () => {this.clearForm();});
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RegisterForm;



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"register-page__button-back\"\u003E\u003Cimg class=\"register-page__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"register-page__register-form register-form\"\u003E\u003Cdiv class=\"register-form__error-box\"\u003E\u003C\u002Fdiv\u003E\u003Cp\u003E\u003Cinput class=\"register-form__input-email\" type=\"text\" name=\"email\" placeholder=\"You email\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput class=\"register-form__input-login\" type=\"text\" name=\"login\" placeholder=\"You login\"\u003E\u003C\u002Fp\u003E\u003Cp\u003E\u003Cinput class=\"register-form__input-password\" type=\"password\" name=\"password\" placeholder=\"*********\"\u003E\u003C\u002Fp\u003E\u003Cbutton class=\"register-form__button\"\u003ESign Up\u003C\u002Fbutton\u003E\u003C\u002Fdiv\u003E\u003Cp align=\"center\"\u003EAre you already registred?\u003Cspan class=\"register-page__link-to-login\"\u003E Log In\u003C\u002Fspan\u003E\u003C\u002Fp\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_RequestToHost_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_Debugger__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__records_page_pug__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__records_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__records_page_pug__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__leaderboard_pug__);








class RecordsPage extends __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */] {

    constructor() {
        super();
    }

    static pagePath() {
        return "/records";
    }

    static pageBoxName() {
        return "records-page";
    }

    static leaderBoardName() {
        return "records-page__table";
    }

    render() {
        let recordsPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(RecordsPage.pageBoxName());
        recordsPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_3__records_page_pug___default()();
    }

    static renderLeaderBoard(resp) {
        let leaderBoardBox = document.querySelector("." + RecordsPage.leaderBoardName());
        leaderBoardBox.innerHTML = "";
        // устанавливаем локальные переменные для рендеринга
        let locals = resp;
        // рендерим шаблон
        leaderBoardBox.innerHTML = __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug___default()(locals);
    }

    sendRequestForRecords() {
        __WEBPACK_IMPORTED_MODULE_1__modules_RequestToHost_js__["a" /* default */].records((err, resp) => {
            if (err) {
                return __WEBPACK_IMPORTED_MODULE_2__modules_Debugger__["a" /* default */].print("Empty TOP");
            }
            RecordsPage.renderLeaderBoard(resp);
        });
    }

    addEventsOnButtons() {
        document.querySelector(".main-menu__button-records").addEventListener("click", () => {
            this.sendRequestForRecords();
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = RecordsPage;



/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Cdiv class=\"records-page__button-back\"\u003E\u003Cimg class=\"records-page__button-back_img\" src=\".\u002F..\u002F..\u002Fimg\u002Fback_2.png\"\u003E\u003C\u002Fdiv\u003E\u003Ctable class=\"records-page__table\" align=\"center\"\u003E\u003C\u002Ftable\u003E";;return pug_html;};
module.exports = template;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var pug = __webpack_require__(1);

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Ctr\u003E\u003Cth\u003EUser\u003C\u002Fth\u003E\u003Cth\u003ENumber\u003C\u002Fth\u003E\u003Cth\u003EScore\u003C\u002Fth\u003E\u003C\u002Ftr\u003E";
// iterate locals
;(function(){
  var $$obj = locals;
  if ('number' == typeof $$obj.length) {
      for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
        var user = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.login) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.numberOfGames) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.record) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
      }
  } else {
    var $$l = 0;
    for (var pug_index0 in $$obj) {
      $$l++;
      var user = $$obj[pug_index0];
pug_html = pug_html + "\u003Ctr\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.login) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.numberOfGames) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003Ctd\u003E" + (pug.escape(null == (pug_interp = user.record) ? "" : pug_interp)) + "\u003C\u002Ftd\u003E\u003C\u002Ftr\u003E";
    }
  }
}).call(this);
;return pug_html;};
module.exports = template;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 35 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 36 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 37 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);