'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/******/(function (modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 9);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__PagePresenter_js__ = __webpack_require__(4);

    var Page = function () {
        function Page() {
            _classCallCheck(this, Page);

            Page.pagePath();
            Page.pageBoxName();
            this.render();
            this.addEventsOnButtons();
        }

        _createClass(Page, [{
            key: 'render',
            value: function render() {}
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {}
        }, {
            key: 'addRedirectOnButtons',
            value: function addRedirectOnButtons() {
                for (var _len = arguments.length, buttons = Array(_len), _key = 0; _key < _len; _key++) {
                    buttons[_key] = arguments[_key];
                }

                buttons.forEach(function (button) {
                    document.querySelector("." + button.button).addEventListener("click", function () {
                        __WEBPACK_IMPORTED_MODULE_0__PagePresenter_js__["a" /* default */].showOnlyOnePage(button.nextPage);
                        history.pushState({}, "", button.pagePath);
                    });
                });
            }
        }], [{
            key: 'pagePath',
            value: function pagePath() {}
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {}
        }, {
            key: 'createBoxForPage',
            value: function createBoxForPage(pageBoxName) {
                var pageBox = document.createElement("div");
                pageBox.className = pageBoxName + " page";
                pageBox.hidden = true;
                document.querySelector(".main-box").appendChild(pageBox);
                return pageBox;
            }
        }]);

        return Page;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = Page;

    /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

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
        var classString = '',
            className,
            padding = '',
            escapeEnabled = Array.isArray(escaping);
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
        var classString = '',
            padding = '';
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
        } else if (val && (typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
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
        if ((typeof val === 'undefined' ? 'undefined' : _typeof(val)) === 'object') {
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
            if (val[val.length - 1] !== ';') return val + ';';
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
    function pug_attrs(obj, terse) {
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
    function pug_escape(_html) {
        var html = '' + _html;
        var regexResult = pug_match_html.exec(html);
        if (!regexResult) return _html;

        var result = '';
        var i, lastIndex, escape;
        for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
            switch (html.charCodeAt(i)) {
                case 34:
                    escape = '&quot;';break;
                case 38:
                    escape = '&amp;';break;
                case 60:
                    escape = '&lt;';break;
                case 62:
                    escape = '&gt;';break;
                default:
                    continue;
            }
            if (lastIndex !== i) result += html.substring(lastIndex, i);
            lastIndex = i + 1;
            result += escape;
        }
        if (lastIndex !== i) return result + html.substring(lastIndex, i);else return result;
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
    function pug_rethrow(err, filename, lineno, str) {
        if (!(err instanceof Error)) throw err;
        if ((typeof window != 'undefined' || !filename) && !str) {
            err.message += ' on line ' + lineno;
            throw err;
        }
        try {
            str = str || __webpack_require__(15).readFileSync(filename, 'utf8');
        } catch (ex) {
            pug_rethrow(err, null, lineno);
        }
        var context = 3,
            lines = str.split('\n'),
            start = Math.max(lineno - context, 0),
            end = Math.min(lines.length, lineno + context);

        // Error context
        var context = lines.slice(start, end).map(function (line, i) {
            var curr = i + start + 1;
            return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;
        }).join('\n');

        // Alter exception message
        err.path = filename;
        err.message = (filename || 'Pug') + ':' + lineno + '\n' + context + '\n\n' + err.message;
        throw err;
    };

    /***/
},
/* 2 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var messagesFromHost = {
        HTTP_OK: 200,
        XHR_READY: 4
    };

    /**
     * Класс для запросов на сервер
     */

    var RequestToHost = function () {
        function RequestToHost() {
            _classCallCheck(this, RequestToHost);
        }

        _createClass(RequestToHost, null, [{
            key: 'baseUrl',


            /**
            * Возвращает url backend сервера
             * @returns {string}
             */
            value: function baseUrl() {
                return "https://bubblerise-backend.herokuapp.com/";
                // для тестирования взаимодействия с сервером на localhost
                // return  "http://localhost:8080/";
            }

            /**
            * POST-запрос на сервер
             * @param {string} address
             * @param {object} data
             * @param callback
             */

        }, {
            key: 'requestPost',
            value: function requestPost(address, data, callback) {
                var xhr = new XMLHttpRequest();
                xhr.open("POST", this.baseUrl() + address, true);
                xhr.withCredentials = true; //for cookies

                var body = JSON.stringify(data);

                xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

                xhr.send(body);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== messagesFromHost.XHR_READY) {
                        return;
                    }
                    if (+xhr.status !== messagesFromHost.HTTP_OK) {
                        return callback(xhr, null);
                    }

                    var response = JSON.parse(xhr.responseText);
                    callback(null, response);
                };
            }

            /**
            * GET-запрос на сервер
             * @param {string} address - string with url
             * @param callback
             */

        }, {
            key: 'requestGet',
            value: function requestGet(address, callback) {
                var xhr = new XMLHttpRequest();
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

                    var response = JSON.parse(xhr.responseText);
                    callback(null, response);
                };
            }

            /**
             * PATCH-запрос на сервер
             * @param {string} address
             * @param {object} data
             * @param callback
             */

        }, {
            key: 'requestPatch',
            value: function requestPatch(address, data, callback) {
                var xhr = new XMLHttpRequest();
                xhr.open("PATCH", this.baseUrl() + address, true);
                xhr.withCredentials = true; //for cookies

                var body = JSON.stringify(data);

                xhr.setRequestHeader("Content-Type", "application/json; charset=utf8");

                xhr.send(body);

                xhr.onreadystatechange = function () {
                    if (xhr.readyState !== messagesFromHost.XHR_READY) {
                        return;
                    }
                    if (+xhr.status !== messagesFromHost.HTTP_OK) {
                        return callback(xhr, null);
                    }

                    var response = JSON.parse(xhr.responseText);
                    callback(null, response);
                };
            }

            /**
            * Авторизация пользователя
             * @param login
             * @param password
             * @param callback
             */

        }, {
            key: 'auth',
            value: function auth(login, password, callback) {
                var user = { login: login, password: password };
                RequestToHost.requestPost("api/users/signin", user, callback);
            }

            /**
            * Регистрация пользователя
             * @param login
             * @param password
             * @param email
             * @param callback
             */

        }, {
            key: 'register',
            value: function register(login, password, email, callback) {
                var user = { login: login, password: password, email: email };
                RequestToHost.requestPost("api/users", user, callback);
            }

            /**
            * Узнает информацию о текущем пользователе
             * @param callback
             */

        }, {
            key: 'whoami',
            value: function whoami(callback) {
                RequestToHost.requestGet("api/users/me", callback);
            }

            /**
            * Запрашивает TOP пользователей
             * @param callback
             */

        }, {
            key: 'records',
            value: function records(callback) {
                RequestToHost.requestGet("api/game/records", callback);
            }

            /**
             * Отправляем тему пользователя
             * @param theme - 1 или 0 текущая тема пользователя
             * @param callback
             */

        }, {
            key: 'theme',
            value: function theme(_theme, callback) {
                var userTheme = { theme: _theme };
                RequestToHost.requestPatch("api/users/theme", userTheme, callback);
            }

            /**
             * Отправляем score пользователя в single игре
             * @param localRecord
             * @param callback
             */

        }, {
            key: 'singlescore',
            value: function singlescore(localRecord, callback) {
                var userScore = { localRecord: localRecord };
                RequestToHost.requestPost("api/game/local_record", userScore, callback);
            }
        }]);

        return RequestToHost;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = RequestToHost;

    /***/
},
/* 3 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var DEBUG_MODE = false;

    var Debugger = function () {
        function Debugger() {
            _classCallCheck(this, Debugger);
        }

        _createClass(Debugger, null, [{
            key: 'print',
            value: function print(logString) {
                if (DEBUG_MODE) {
                    console.log(logString);
                }
            }
        }]);

        return Debugger;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = Debugger;

    /***/
},
/* 4 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var PagePresenter = function () {
        function PagePresenter() {
            _classCallCheck(this, PagePresenter);
        }

        _createClass(PagePresenter, null, [{
            key: 'hideAllPages',
            value: function hideAllPages() {
                var pages = document.getElementsByClassName("page");
                for (var i = 0; i < pages.length; i++) {
                    pages[i].hidden = true;
                }
            }
        }, {
            key: 'showOnlyOnePage',
            value: function showOnlyOnePage(pageName) {
                PagePresenter.hideAllPages();
                document.querySelector("." + pageName).hidden = false;
            }
        }]);

        return PagePresenter;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = PagePresenter;

    /***/
},
/* 5 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__RequestToHost_js__ = __webpack_require__(2);

    var messagesWhoAmI = {
        GUEST_HELLO_MESSAGE: "Привет, Гость!",
        USER_HELLO_MESSAGE: "Привет, "
    };

    var whoamiMixin = {
        whoami: function whoami() {
            __WEBPACK_IMPORTED_MODULE_0__RequestToHost_js__["a" /* default */].whoami(function (err, resp) {
                var loginBox = document.querySelector(".main-page__user");
                if (err) {
                    return loginBox.innerHTML = messagesWhoAmI.GUEST_HELLO_MESSAGE;
                }
                loginBox.innerHTML = messagesWhoAmI.USER_HELLO_MESSAGE + ' ' + resp.login + '! \u041B\u0438\u0447\u043D\u044B\u0439 \u0440\u0435\u043A\u043E\u0440\u0434: ' + resp.localRecord;
            });
        }
    };

    /* harmony default export */__webpack_exports__["a"] = whoamiMixin;

    /***/
},
/* 6 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__game_modules_GameManager_js__ = __webpack_require__(16);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__play_page_pug__ = __webpack_require__(19);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__play_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__play_page_pug__);

    var PlayPage = function (_WEBPACK_IMPORTED_MO) {
        _inherits(PlayPage, _WEBPACK_IMPORTED_MO);

        function PlayPage() {
            _classCallCheck(this, PlayPage);

            var _this = _possibleConstructorReturn(this, (PlayPage.__proto__ || Object.getPrototypeOf(PlayPage)).call(this));

            _this.gameManager = new __WEBPACK_IMPORTED_MODULE_1__game_modules_GameManager_js__["a" /* default */](960, 680, ".play-page__play-field");
            return _this;
        }

        _createClass(PlayPage, [{
            key: 'render',
            value: function render() {
                var playPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(PlayPage.pageBoxName());
                playPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__play_page_pug___default()();
            }
        }, {
            key: 'gameMode',
            value: function gameMode(mode) {
                var gameLogo = document.querySelector(".main-box__logo-game");
                gameLogo.hidden = mode;
                mode ? this.gameManager.start() : this.gameManager.stop();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {
                var _this2 = this;

                document.querySelector(".main-menu__button-play").addEventListener("click", function () {
                    _this2.gameMode(true);
                });
                document.querySelector(".panel__button-back").addEventListener("click", function () {
                    _this2.gameMode(false);
                });
                document.querySelector(".panel__button-restart").addEventListener("click", function () {
                    _this2.gameMode(false);
                    _this2.gameMode(true);
                });
            }
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/play";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "play-page";
            }
        }, {
            key: 'printScore',
            value: function printScore(score) {
                document.querySelector(".panel__score-box").innerHTML = score;
            }
        }]);

        return PlayPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = PlayPage;

    /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var messagesToForm = {
        OK_MESSAGE: "ok",
        EMPTY_MESSAGE: "empty",
        INCORRECT_MESSAGE: "incorrect",
        NOT_EMAIL_MESSAGE: "is not email"
    };

    var FormValidator = function () {
        function FormValidator() {
            _classCallCheck(this, FormValidator);
        }

        _createClass(FormValidator, null, [{
            key: 'responseOk',
            value: function responseOk() {
                return messagesToForm.OK_MESSAGE;
            }
        }, {
            key: 'responseEmpty',
            value: function responseEmpty() {
                return messagesToForm.EMPTY_MESSAGE;
            }
        }, {
            key: 'responseIncorrect',
            value: function responseIncorrect() {
                return messagesToForm.INCORRECT_MESSAGE;
            }
        }, {
            key: 'responseIsNotEmail',
            value: function responseIsNotEmail() {
                return messagesToForm.NOT_EMAIL_MESSAGE;
            }
        }, {
            key: 'correctLogin',
            value: function correctLogin(login) {
                if (!login) {
                    return FormValidator.responseEmpty();
                }
                var loginRegexp = /^[\w\d]{3,10}$/;
                return loginRegexp.test(login) ? FormValidator.responseOk() : FormValidator.responseIncorrect();
            }
        }, {
            key: 'correctPassword',
            value: function correctPassword(password) {
                if (!password) {
                    return FormValidator.responseEmpty();
                }
                var passwordRegexp = /\S{3,16}$/;
                return passwordRegexp.test(password) ? FormValidator.responseOk() : FormValidator.responseIncorrect();
            }
        }, {
            key: 'correctEmail',
            value: function correctEmail(email) {
                if (!email) {
                    return FormValidator.responseEmpty();
                }
                var emailRegexp = /^[.a-z0-9_-]+@[a-z0-9_.-]+\.[a-z]{2,6}$/;
                return emailRegexp.test(email) ? FormValidator.responseOk() : FormValidator.responseIsNotEmail();
            }
        }]);

        return FormValidator;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = FormValidator;

    /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var fieldsCleaner = {
        clearFields: function clearFields() {
            for (var _len2 = arguments.length, fields = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                fields[_key2] = arguments[_key2];
            }

            fields.forEach(function (field) {
                var fieldName = "." + field;
                var elem = document.querySelector(fieldName);
                if (elem.nodeName === "INPUT") {
                    elem.value = "";
                } else if (elem.nodeName === "DIV") {
                    elem.innerHTML = "";
                }
            });
        }
    };

    /* harmony default export */__webpack_exports__["a"] = fieldsCleaner;

    /***/
},
/* 9 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__Router_js__ = __webpack_require__(10);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__Debugger_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css__ = __webpack_require__(31);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__views_info_page_info_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css__ = __webpack_require__(32);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__views_login_page_login_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css__ = __webpack_require__(33);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__views_main_page_main_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css__ = __webpack_require__(34);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__views_play_page_play_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css__ = __webpack_require__(35);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__views_records_page_records_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css__ = __webpack_require__(36);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__views_register_page_register_css__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__styles_style_css__ = __webpack_require__(37);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__styles_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_style_css__);

    var MainApp = function MainApp() {
        _classCallCheck(this, MainApp);

        __WEBPACK_IMPORTED_MODULE_1__Debugger_js__["a" /* default */].print("Application was created");

        if ("serviceWorker" in navigator) {
            navigator.serviceWorker.register("service-worker.js").then(function (registration) {
                // при удачной регистрации имеем объект типа ServiceWorkerRegistration
                console.log("ServiceWorker registration", registration);
            }).catch(function (err) {
                // throw new Error('ServiceWorker error: ' + err);
                console.error("Registration err", err);
            });
        }

        var router = new __WEBPACK_IMPORTED_MODULE_0__Router_js__["a" /* default */]();
        router.getMe(router);
        router.sendRouter();
    };

    window.addEventListener("load", function () {
        new MainApp();
    });

    /***/
},
/* 10 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__whoamiMixin_js__ = __webpack_require__(5);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__ThemeChanger_js__ = __webpack_require__(11);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__ = __webpack_require__(13);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__ = __webpack_require__(6);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__ = __webpack_require__(20);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__ = __webpack_require__(22);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__ = __webpack_require__(25);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__ = __webpack_require__(28);

    var Router = function () {
        function Router() {
            var _this3 = this;

            _classCallCheck(this, Router);

            var mainPagePath = __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__["a" /* default */].pagePath();
            var infoPagePath = __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__["a" /* default */].pagePath();
            var playPagePath = __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__["a" /* default */].pagePath();
            var loginPagePath = __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__["a" /* default */].pagePath();
            var registerPagePath = __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__["a" /* default */].pagePath();
            var recordsPagePath = __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__["a" /* default */].pagePath();

            this.themeChanger = new __WEBPACK_IMPORTED_MODULE_3__ThemeChanger_js__["a" /* default */]();

            Object.assign(__WEBPACK_IMPORTED_MODULE_0__Page_js__["a" /* default */].prototype, __WEBPACK_IMPORTED_MODULE_1__whoamiMixin_js__["a" /* default */]);
            var mainPage = new __WEBPACK_IMPORTED_MODULE_6__views_main_page_MainPage_js__["a" /* default */]();
            mainPage.whoami();
            mainPage.addRedirectOnButtons({ button: "main-menu__button-play", nextPage: "play-page", pagePath: playPagePath }, { button: "main-menu__button-login", nextPage: "login-page", pagePath: loginPagePath }, { button: "main-menu__button-records", nextPage: "records-page", pagePath: recordsPagePath }, { button: "main-menu__button-info", nextPage: "info-page", pagePath: infoPagePath });

            var infoPage = new __WEBPACK_IMPORTED_MODULE_4__views_info_page_InfoPage_js__["a" /* default */]();
            infoPage.addRedirectOnButtons({ button: "info-page__button-back", nextPage: "main-page", pagePath: mainPagePath });

            this.playPage = new __WEBPACK_IMPORTED_MODULE_5__views_play_page_PlayPage__["a" /* default */]();
            this.playPage.addRedirectOnButtons({ button: "panel__button-back", nextPage: "main-page", pagePath: mainPagePath });

            this.loginPage = new __WEBPACK_IMPORTED_MODULE_7__views_login_page_LoginPage__["a" /* default */]();
            var registerPage = new __WEBPACK_IMPORTED_MODULE_8__views_register_page_RegisterPage__["a" /* default */]();

            this.loginPage.addRedirectOnButtons({ button: "login-page__button-back", nextPage: "main-page", pagePath: mainPagePath }, { button: "login-page__link-to-register", nextPage: "register-page", pagePath: registerPagePath });

            registerPage.addRedirectOnButtons({ button: "register-page__button-back", nextPage: "login-page", pagePath: loginPagePath }, { button: "register-page__link-to-login", nextPage: "login-page", pagePath: loginPagePath });

            this.recordsPage = new __WEBPACK_IMPORTED_MODULE_9__views_records_page_RecordsPage__["a" /* default */]();
            this.recordsPage.addRedirectOnButtons({ button: "records-page__button-back", nextPage: "main-page", pagePath: mainPagePath });

            this.redirectToPage();

            window.addEventListener("popstate", function () {
                _this3.redirectToPage();
                registerPage.getForm().clearForm();
                _this3.loginPage.getForm().clearForm();
            });
        }

        _createClass(Router, [{
            key: 'getMe',
            value: function getMe(router) {
                this.myRouter = router;
            }
        }, {
            key: 'sendRouter',
            value: function sendRouter() {
                this.loginPage.takeRouter(this.myRouter);
            }
        }, {
            key: 'changeTheme',
            value: function changeTheme() {
                this.themeChanger.sendRequestForTheme();
            }
        }, {
            key: 'redirectToPage',
            value: function redirectToPage() {
                var pathname = window.location.pathname;
                var gameMode = pathname === "/play";
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
        }]);

        return Router;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = Router;

    /***/
},
/* 11 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__ = __webpack_require__(12);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__Debugger__ = __webpack_require__(3);

    var ThemeChanger = function () {
        function ThemeChanger() {
            _classCallCheck(this, ThemeChanger);

            this.styles = "";
            this.generateTheme([__WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["a" /* bodyStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["c" /* mainBoxStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["b" /* buttonLoginStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["d" /* themeChangerStyles */], __WEBPACK_IMPORTED_MODULE_0__themeStyles_js__["e" /* themeChangerStylesHover */]]);
            this.userTheme = false;
            this.sendRequestForTheme();
            this.addEventsOnButtons();
        }

        _createClass(ThemeChanger, [{
            key: 'sendRequestForTheme',
            value: function sendRequestForTheme() {
                var _this4 = this;

                __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].whoami(function (err, resp) {
                    if (err) {
                        return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("not AUTH for GET");
                    } else {
                        __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("YOUR THEME resp = " + resp.theme);
                        _this4.userTheme = resp.theme && true;
                        _this4.applyTheme();
                    }
                });
            }
        }, {
            key: 'sendRequestToSaveTheme',
            value: function sendRequestToSaveTheme() {
                var _this5 = this;

                __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].whoami(function (err) {
                    if (err) {
                        return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("not AUTH for PATCH");
                    } else {
                        __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].theme(+_this5.userTheme, function (err) {
                            if (err) {
                                return __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("Can't add theme");
                            }
                        });
                    }
                });
            }
        }, {
            key: 'generateTheme',
            value: function generateTheme(themeStyles) {
                var createThemeStylesheet = function createThemeStylesheet(styles) {
                    return styles.reduce(function (stylesheet, current) {
                        var properties = Object.entries(current.styles).map(function (prop) {
                            return prop[0] + ":" + prop[1] + ";";
                        });
                        stylesheet += current.selector + ' {' + properties + '}\n';
                        return stylesheet;
                    }, "");
                };
                this.styles = createThemeStylesheet(themeStyles);
            }
        }, {
            key: 'applyTheme',
            value: function applyTheme() {
                __WEBPACK_IMPORTED_MODULE_2__Debugger__["a" /* default */].print("YOUR THEME apply = " + this.userTheme);
                var addThemeStylesheet = function addThemeStylesheet(stylesheet) {
                    var styleTag = document.querySelector(".theme-styles");
                    styleTag.innerHTML = stylesheet;
                };
                var stylesheet = this.userTheme ? this.styles : "";
                addThemeStylesheet(stylesheet);
            }
        }, {
            key: 'changeTheme',
            value: function changeTheme() {
                this.userTheme = !this.userTheme;
                this.applyTheme();
                this.sendRequestToSaveTheme();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {
                var _this6 = this;

                document.querySelector(".main-box__theme-changer").addEventListener("click", function () {
                    _this6.changeTheme();
                });
            }
        }]);

        return ThemeChanger;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = ThemeChanger;

    /***/
},
/* 12 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "a", function () {
        return bodyStyles;
    });
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return mainBoxStyles;
    });
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return buttonLoginStyles;
    });
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
        return themeChangerStyles;
    });
    /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "e", function () {
        return themeChangerStylesHover;
    });

    var bodyStyles = {
        selector: "body",
        styles: {
            "background": "lightsalmon"
        }
    };

    var mainBoxStyles = {
        selector: ".main-box",
        styles: {
            "background": "#ffc3ac"
        }
    };

    var buttonLoginStyles = {
        selector: ".main-menu__button-login",
        styles: {
            "border": "1em solid rgb(89, 145, 255)"
        }
    };

    var themeChangerStyles = {
        selector: ".main-box__theme-changer",
        styles: {
            background: "lavender"
        }
    };

    var themeChangerStylesHover = {
        selector: ".main-box__theme-changer:hover",
        styles: {
            background: "#e0d9fb"
        }
    };

    /***/
},
/* 13 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__info_page_pug__ = __webpack_require__(14);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__info_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__info_page_pug__);

    var InfoPage = function (_WEBPACK_IMPORTED_MO2) {
        _inherits(InfoPage, _WEBPACK_IMPORTED_MO2);

        function InfoPage() {
            _classCallCheck(this, InfoPage);

            return _possibleConstructorReturn(this, (InfoPage.__proto__ || Object.getPrototypeOf(InfoPage)).call(this));
        }

        _createClass(InfoPage, [{
            key: 'render',
            value: function render() {
                var infoPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(InfoPage.pageBoxName());
                infoPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_1__info_page_pug___default()();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {}
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/info";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "info-page";
            }
        }]);

        return InfoPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = InfoPage;

    /***/
},
/* 14 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="info-page__button-back"><img class="play-page__button-back_img" src="./../../img/back_2.png"></div><div class="info-page__info-box"><h3 align="center">About game</h3><div><p>\u041F\u043E\u0434\u0430\u0432\u0438\u0442\u0435 \u0432\u043E\u0441\u0441\u0442\u0430\u043D\u0438\u0435 bubbles\'\u043E\u0432!</p><p>\u0412\u0430\u0448\u0430 \u0437\u0430\u0434\u0430\u0447\u0430, \u0432\u0440\u0430\u0449\u0430\u044F \u043A\u0443\u0431, \u043E\u0447\u0438\u0449\u0430\u0442\u044C \u0435\u0433\u043E \u0433\u0440\u0430\u043D\u0438 \u043E\u0442 bubbles\'\u043E\u0432.</p><p>  \u041A\u043B\u0430\u0432\u0438\u0448\u0438 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F:</p><p>  "A" - \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0432\u043B\u0435\u0432\u043E, "D" - \u0432\u0440\u0430\u0449\u0435\u043D\u0438\u0435 \u0432\u043F\u0440\u0430\u0432\u043E \u0438 \u041B\u041A\u041C \u0434\u043B\u044F \u0430\u0442\u0430\u043A\u0438.</p></div></div>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 15 */
/***/function (module, exports) {

    /* (ignored) */

    /***/},
/* 16 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__SceneRenderer_js__ = __webpack_require__(17);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__ObjectsCreater_js__ = __webpack_require__(18);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__modules_RequestToHost_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__ = __webpack_require__(6);

    var keyCodes = {
        KEY_A_KEY_CODE: 65,
        KEY_D_KEY_CODE: 68
    };

    var cubeSides = {
        FIRST_SIDE: 1,
        SECOND_SIDE: 2,
        THIRD_SIDE: 3,
        FOURTH_SIDE: 4
    };

    var BACKGROUND_COLOR_SCENE = "#ffbe74";

    var GameManager = function () {
        function GameManager(width, height, playFieldName) {
            _classCallCheck(this, GameManager);

            this.width = width;
            this.height = height;
            this.initScene(width, height, playFieldName);
            this.sceneRenderer = new __WEBPACK_IMPORTED_MODULE_0__SceneRenderer_js__["a" /* default */](this.renderer, this.scene, this.camera);
            this.addClicksToBubbles();
            this.addEventsToKey();
            this.score = 0;
        }

        _createClass(GameManager, [{
            key: 'addEventsToKey',
            value: function addEventsToKey() {
                var _this8 = this;

                this.keyA = false;
                this.keyD = false;
                window.onkeydown = function (event) {
                    var k = event.keyCode;

                    switch (k) {
                        case keyCodes.KEY_A_KEY_CODE:
                            _this8.keyA = true;
                            break;
                        case keyCodes.KEY_D_KEY_CODE:
                            _this8.keyD = true;
                            break;
                    }
                };

                window.onkeyup = function (event) {
                    var k = event.keyCode;

                    switch (k) {
                        case keyCodes.KEY_A_KEY_CODE:
                            _this8.keyA = false;
                            break;
                        case keyCodes.KEY_D_KEY_CODE:
                            _this8.keyD = false;
                            break;
                    }
                };
            }
        }, {
            key: 'start',
            value: function start() {
                this.keyA = false;
                this.keyD = false;
                this.sceneRenderer.startRendering();
                this.objectsCreater = new __WEBPACK_IMPORTED_MODULE_1__ObjectsCreater_js__["a" /* default */](this.scene);
                this.addCameraMovement();
                this.addBubblesGeneration();
                this.addBubbleGrowing();
                __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__["a" /* default */].printScore(this.score);
            }
        }, {
            key: 'initScene',
            value: function initScene(width, height, playFieldName) {
                this.scene = new THREE.Scene();
                this.camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
                this.renderer = new THREE.WebGLRenderer();
                this.renderer.setClearColor(BACKGROUND_COLOR_SCENE);
                this.renderer.setSize(width, height);
                this.playField = document.querySelector(playFieldName);
                this.playField.append(this.renderer.domElement);
            }
        }, {
            key: 'setCameraPosition',
            value: function setCameraPosition(xx, yy, zz) {
                var camera = this.camera;
                camera.position.x = xx;
                camera.position.y = yy;
                camera.position.z = zz;
                camera.lookAt(new THREE.Vector3(0, 0, 0));
            }
        }, {
            key: 'addCameraMovement',
            value: function addCameraMovement() {
                var _this9 = this;

                var radius = 20;
                var deltaAngle = 0.05;

                var cameraX = radius;
                var cameraY = 0;
                var cameraZ = 0;
                var angleXZ = 0;

                this.setCameraPosition(cameraX, cameraY, cameraZ);

                this.cameraMoveInterval = setInterval(function () {
                    if (_this9.keyA === true) {
                        angleXZ -= deltaAngle;
                        cameraX = radius * Math.cos(angleXZ);
                        cameraZ = radius * Math.sin(angleXZ);
                        _this9.setCameraPosition(cameraX, cameraY, cameraZ);
                    }
                    if (_this9.keyD === true) {
                        angleXZ += deltaAngle;
                        cameraX = radius * Math.cos(angleXZ);
                        cameraZ = radius * Math.sin(angleXZ);
                        _this9.setCameraPosition(cameraX, cameraY, cameraZ);
                    }
                }, 50);
            }
        }, {
            key: 'addBubblesGeneration',
            value: function addBubblesGeneration() {
                var _this10 = this;

                this.bubbles = [];

                __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);

                function getRandomInteger() {
                    return parseInt(Math.random() * 1000000) % 4 + 1;
                }

                function getRandomPosition() {
                    return parseInt(Math.random() * 1000000) % 9 + Math.random() - 4.5;
                }

                var countNow = 0;
                var maxCount = 20;

                this.generationInterval = setInterval(function () {
                    if (countNow < maxCount) {
                        countNow++;
                    } else {

                        countNow = 0;
                        maxCount > 8 ? maxCount -= 0.1 : "";

                        var side = getRandomInteger();

                        var xx = null;
                        var yy = null;
                        var zz = null;

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

                        var bubble = _this10.objectsCreater.createResultSphere(xx, yy, zz);
                        _this10.bubbles.push(bubble);

                        __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + _this10.bubbles.length);
                        __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + _this10.scene.children.length);
                    }
                }, 50);
            }
        }, {
            key: 'addBubbleGrowing',
            value: function addBubbleGrowing() {
                var _this11 = this;

                var scaleDelta = 0.02;

                this.growingInterval = setInterval(function () {
                    for (var i = 0; i < _this11.bubbles.length; i++) {
                        var bubble = _this11.bubbles[i];
                        bubble.scale.x += scaleDelta;
                        bubble.scale.y += scaleDelta;
                        bubble.scale.z += scaleDelta;

                        if (bubble.scale.x >= 4) {
                            alert("Game over!");
                            _this11.stop();
                        }
                    }
                }, 100);
            }
        }, {
            key: 'addClicksToBubbles',
            value: function addClicksToBubbles() {
                var _this12 = this;

                var raycaster = new THREE.Raycaster();
                var mouse = new THREE.Vector2();

                this.playField.addEventListener("click", function (event) {
                    var width = _this12.width;
                    var height = _this12.height;

                    var xMouse = event.offsetX;
                    var yMouse = event.offsetY;

                    mouse.x = xMouse / width * 2 - 1;
                    mouse.y = -(yMouse / height) * 2 + 1;
                    raycaster.setFromCamera(mouse, _this12.camera);

                    var intersects = raycaster.intersectObjects(_this12.scene.children);

                    if (intersects.length > 0) {
                        var answer = intersects[0];

                        if (answer.object !== _this12.objectsCreater.getCube() && answer.object !== _this12.objectsCreater.getCubeFrame()) {
                            var index = 0;

                            for (var i = 0; i < _this12.bubbles.length; i++) {
                                if (answer.object === _this12.bubbles[i]) {
                                    index = i;
                                    break;
                                }
                            }

                            _this12.scene.remove(answer.object);
                            _this12.bubbles.splice(index, 1);
                            _this12.score += 1;
                            __WEBPACK_IMPORTED_MODULE_4__views_play_page_PlayPage_js__["a" /* default */].printScore(_this12.score);
                        }
                    }
                    __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + _this12.bubbles.length);
                    __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + _this12.scene.children.length);
                });
            }
        }, {
            key: 'sendRequestToSaveScore',
            value: function sendRequestToSaveScore() {
                __WEBPACK_IMPORTED_MODULE_2__modules_RequestToHost_js__["a" /* default */].singlescore(this.score, function (err) {
                    if (err) {
                        return __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("User don't authorise");
                    }
                });
            }
        }, {
            key: 'stop',
            value: function stop() {
                this.sceneRenderer.stopRendering();
                clearInterval(this.cameraMoveInterval);
                clearInterval(this.growingInterval);
                clearInterval(this.generationInterval);

                while (this.scene.children.length > 0) {
                    this.scene.remove(this.scene.children[0]);
                }

                this.bubbles = [];
                this.sendRequestToSaveScore();
                this.score = 0;
                __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Bubbles number: " + this.bubbles.length);
                __WEBPACK_IMPORTED_MODULE_3__modules_Debugger_js__["a" /* default */].print("Scene objects number: " + this.scene.children.length);
            }
        }]);

        return GameManager;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = GameManager;

    /***/
},
/* 17 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var SceneRenderer = function () {
        function SceneRenderer(renderer, scene, camera) {
            _classCallCheck(this, SceneRenderer);

            this.renderer = renderer;
            this.scene = scene;
            this.camera = camera;
        }

        _createClass(SceneRenderer, [{
            key: 'startRendering',
            value: function startRendering() {
                var _this13 = this;

                this.repeatInterval = setInterval(function () {
                    _this13.renderer.render(_this13.scene, _this13.camera);
                }, 50);
            }
        }, {
            key: 'stopRendering',
            value: function stopRendering() {
                clearInterval(this.repeatInterval);
            }
        }]);

        return SceneRenderer;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = SceneRenderer;

    /***/
},
/* 18 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";

    var objectColors = {
        SPHERE_COLOR: "#5b54ff",
        CUBE_COLOR: "#bb2d41",
        CUBE_FRAME_COLOR: "#962536",
        LIGHT_COLOR: "#FFFFFF"
    };

    var objectGeometry = {
        SPHERE: "sphere",
        CUBE: "cube",
        CUBE_FRAME: "cubeFrame"
    };

    var ObjectsCreater = function () {
        function ObjectsCreater(scene) {
            _classCallCheck(this, ObjectsCreater);

            this.scene = scene;
            this.cubeSize = 9;
            this.bubbleRadius = 0.5;
            this.createStaticObjects();
        }

        _createClass(ObjectsCreater, [{
            key: 'getCubeSize',
            value: function getCubeSize() {
                return this.cubeSize;
            }
        }, {
            key: 'getCube',
            value: function getCube() {
                return this.cube;
            }
        }, {
            key: 'getCubeFrame',
            value: function getCubeFrame() {
                return this.cubeFrame;
            }
        }, {
            key: 'createStaticObjects',
            value: function createStaticObjects() {
                this.cube = this.createCube();
                this.cubeFrame = this.createWireFrameCube();

                this.createLight(-70, 0, 0);
                this.createLight(70, 0, 0);
                this.createLight(0, 0, -70);
                this.createLight(0, 0, 70);
                this.createLight(0, -70, 0);
                this.createLight(0, 70, 0);
            }
        }, {
            key: 'createObject',
            value: function createObject(geometry, material, pos) {
                var object = null;
                if (geometry === objectGeometry.SPHERE) {
                    var sphereGeometry = new THREE.SphereGeometry(this.bubbleRadius, 25, 25);
                    var sphereMaterial = new THREE.MeshLambertMaterial(material);
                    object = new THREE.Mesh(sphereGeometry, sphereMaterial);
                } else if (geometry === objectGeometry.CUBE) {
                    var size = this.cubeSize;
                    var cubeGeometry = new THREE.CubeGeometry(size, size, size);
                    var cubeMaterial = new THREE.MeshLambertMaterial(material);
                    object = new THREE.Mesh(cubeGeometry, cubeMaterial);
                }
                object.position.x = pos.xx;
                object.position.y = pos.yy;
                object.position.z = pos.zz;
                this.scene.add(object);
                return object;
            }
        }, {
            key: 'createResultSphere',
            value: function createResultSphere(xx, yy, zz) {
                var material = {
                    color: objectColors.SPHERE_COLOR,
                    opacity: 0.7,
                    transparent: true
                };
                var position = {
                    xx: xx,
                    yy: yy,
                    zz: zz
                };
                return this.createObject(objectGeometry.SPHERE, material, position);
            }
        }, {
            key: 'createCube',
            value: function createCube() {
                var material = {
                    color: objectColors.CUBE_COLOR,
                    opacity: 0.5,
                    transparent: true
                };
                var position = {
                    xx: 0,
                    yy: 0,
                    zz: 0
                };
                return this.createObject(objectGeometry.CUBE, material, position);
            }
        }, {
            key: 'createWireFrameCube',
            value: function createWireFrameCube() {
                var material = {
                    color: objectColors.CUBE_FRAME_COLOR,
                    wireframe: true
                };
                var position = {
                    xx: 0,
                    yy: 0,
                    zz: 0
                };
                return this.createObject(objectGeometry.CUBE, material, position);
            }
        }, {
            key: 'createLight',
            value: function createLight(xx, yy, zz) {
                var pointLight = new THREE.PointLight(objectColors.LIGHT_COLOR, 2);
                pointLight.position.set(xx, yy, zz);
                this.scene.add(pointLight);
            }
        }]);

        return ObjectsCreater;
    }();
    /* harmony export (immutable) */

    __webpack_exports__["a"] = ObjectsCreater;

    /***/
},
/* 19 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="play-page__play-field play-field"></div><div class="play-page__panel-buttons panel"><div class="panel__button-back"><img class="panel__button-back_img" src="./../../img/back_2.png"></div><div class="panel__button-restart"><img class="panel__button-restart_img" src="./../../img/restart.png"></div><div class="panel__score-label"><p>score:</p></div><strong><div class="panel__score-box" align="right"></div></strong></div>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 20 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__main_page_pug__ = __webpack_require__(21);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__main_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_page_pug__);

    var MainPage = function (_WEBPACK_IMPORTED_MO3) {
        _inherits(MainPage, _WEBPACK_IMPORTED_MO3);

        function MainPage() {
            _classCallCheck(this, MainPage);

            return _possibleConstructorReturn(this, (MainPage.__proto__ || Object.getPrototypeOf(MainPage)).call(this));
        }

        _createClass(MainPage, [{
            key: 'render',
            value: function render() {
                var mainPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(MainPage.pageBoxName());
                mainPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_1__main_page_pug___default()();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {}
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/main";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "main-page";
            }
        }]);

        return MainPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = MainPage;

    /***/
},
/* 21 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="main-page__user"><p>\u041F\u0440\u0438\u0432\u0435\u0442, \u0413\u043E\u0441\u0442\u044C!</p></div><div class="main-page__main-menu main-menu"><div class="main-menu__button-play"><img class="main-menu__button-play_img" src="./../../img/button_play.png"></div><div class="main-menu__button-login button-login"><img class="button-login__img" src="./../../img/login.png"></div><div class="main-menu__button-records button-records"><img class="button-records__img" src="./../../img/record.png"></div><div class="main-menu__button-info button-info"><img class="button-info__img" src="./../../img/info.png"></div></div>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 22 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__modules_LoginForm_js__ = __webpack_require__(23);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__login_page_pug__ = __webpack_require__(24);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__login_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__login_page_pug__);

    var LoginPage = function (_WEBPACK_IMPORTED_MO4) {
        _inherits(LoginPage, _WEBPACK_IMPORTED_MO4);

        function LoginPage() {
            _classCallCheck(this, LoginPage);

            return _possibleConstructorReturn(this, (LoginPage.__proto__ || Object.getPrototypeOf(LoginPage)).call(this));
        }

        _createClass(LoginPage, [{
            key: 'takeRouter',
            value: function takeRouter(router) {
                this.form = new __WEBPACK_IMPORTED_MODULE_1__modules_LoginForm_js__["a" /* default */](router);
            }
        }, {
            key: 'getForm',
            value: function getForm() {
                return this.form;
            }
        }, {
            key: 'render',
            value: function render() {
                var loginPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(LoginPage.pageBoxName());
                loginPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__login_page_pug___default()();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {}
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/login";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "login-page";
            }
        }]);

        return LoginPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = LoginPage;

    /***/
},
/* 23 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__ = __webpack_require__(4);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__fieldsCleaner_js__ = __webpack_require__(8);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__whoamiMixin_js__ = __webpack_require__(5);

    var messagesLoginForm = {
        EMPTY_MESSAGE: "Заполнены не все поля",
        INCORRECT_MESSAGE: "Использованы недопустимые символы",
        RESPONSE_MESSAGE: "Некорректный ввод или логина не существует",
        SUCCESS_SIGN_IN_MESSAGE: "Вы вошли на сайт!"
    };

    var LoginForm = function (_WEBPACK_IMPORTED_MO5) {
        _inherits(LoginForm, _WEBPACK_IMPORTED_MO5);

        function LoginForm(router) {
            _classCallCheck(this, LoginForm);

            var _this16 = _possibleConstructorReturn(this, (LoginForm.__proto__ || Object.getPrototypeOf(LoginForm)).call(this));

            Object.assign(LoginForm.prototype, __WEBPACK_IMPORTED_MODULE_4__whoamiMixin_js__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__fieldsCleaner_js__["a" /* default */]);
            _this16.loginValue = "";
            _this16.passwordValue = "";
            _this16.errorBox = null;
            _this16.addEventsToButtons();
            _this16.router = router;
            return _this16;
        }

        _createClass(LoginForm, [{
            key: 'clearForm',
            value: function clearForm() {
                this.clearFields("login-form__input-login", "login-form__input-password", "login-form__error-box");
            }
        }, {
            key: 'sendRequest',
            value: function sendRequest() {
                var _this17 = this;

                __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].auth(this.loginValue, this.passwordValue, function (err) {
                    if (err) {
                        return _this17.errorBox.innerHTML = LoginForm.msgResponseFromHost();
                    }

                    alert(LoginForm.msgSignInSuccess());
                    _this17.clearForm();

                    history.pushState({}, "", "/main");

                    __WEBPACK_IMPORTED_MODULE_2__PagePresenter_js__["a" /* default */].showOnlyOnePage("main-page");
                    _this17.whoami();
                    _this17.router.changeTheme();
                });
            }
        }, {
            key: 'addEventsToButtons',
            value: function addEventsToButtons() {
                var _this18 = this;

                document.querySelector(".login-form__button").addEventListener("click", function () {
                    _this18.loginValue = document.querySelector(".login-form__input-login").value;
                    _this18.passwordValue = document.querySelector(".login-form__input-password").value;
                    _this18.errorBox = document.querySelector(".login-form__error-box");
                    var valid = LoginForm.validate(_this18.loginValue, _this18.passwordValue, _this18.errorBox);

                    if (valid) {
                        _this18.sendRequest();
                    }
                });

                document.querySelector(".login-page__button-back").addEventListener("click", function () {
                    _this18.clearForm();
                });
                document.querySelector(".login-page__link-to-register").addEventListener("click", function () {
                    _this18.clearForm();
                });
            }
        }], [{
            key: 'msgEmptyField',
            value: function msgEmptyField() {
                return messagesLoginForm.EMPTY_MESSAGE;
            }
        }, {
            key: 'msgIncorrectInput',
            value: function msgIncorrectInput() {
                return messagesLoginForm.INCORRECT_MESSAGE;
            }
        }, {
            key: 'msgResponseFromHost',
            value: function msgResponseFromHost() {
                return messagesLoginForm.RESPONSE_MESSAGE;
            }
        }, {
            key: 'msgSignInSuccess',
            value: function msgSignInSuccess() {
                return messagesLoginForm.SUCCESS_SIGN_IN_MESSAGE;
            }
        }, {
            key: 'validate',
            value: function validate(loginValue, passwordValue, errorBox) {
                var login = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctLogin(loginValue);
                var password = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctPassword(passwordValue);

                if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty() || password === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseEmpty()) {
                    errorBox.innerHTML = LoginForm.msgEmptyField();
                    return false;
                }

                if (login === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect() || password === __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].responseIncorrect()) {
                    errorBox.innerHTML = LoginForm.msgIncorrectInput();
                    return false;
                }

                errorBox.innerHTML = "";
                return true;
            }
        }]);

        return LoginForm;
    }(__WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = LoginForm;

    /***/
},
/* 24 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="login-page__button-back"><img class="login-page__button-back_img" src="./../../img/back_2.png"></div><div class="login-page__login-form login-form"><div class="login-form__error-box"></div><p><input class="login-form__input-login" type="text" name="login" placeholder="You login"></p><p><input class="login-form__input-password" type="password" name="password" placeholder="*********"></p><button class="login-form__button">Log In</button></div><p align="center">You haven`t account?<span class="login-page__link-to-register"> Sign Up</span></p>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 25 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__modules_RegisterForm_js__ = __webpack_require__(26);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__register_page_pug__ = __webpack_require__(27);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__register_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__register_page_pug__);

    var RegisterPage = function (_WEBPACK_IMPORTED_MO6) {
        _inherits(RegisterPage, _WEBPACK_IMPORTED_MO6);

        function RegisterPage() {
            _classCallCheck(this, RegisterPage);

            var _this19 = _possibleConstructorReturn(this, (RegisterPage.__proto__ || Object.getPrototypeOf(RegisterPage)).call(this));

            _this19.form = new __WEBPACK_IMPORTED_MODULE_1__modules_RegisterForm_js__["a" /* default */]();
            return _this19;
        }

        _createClass(RegisterPage, [{
            key: 'getForm',
            value: function getForm() {
                return this.form;
            }
        }, {
            key: 'render',
            value: function render() {
                var registerPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(RegisterPage.pageBoxName());
                registerPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_2__register_page_pug___default()();
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {}
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/register";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "register-page";
            }
        }]);

        return RegisterPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = RegisterPage;

    /***/
},
/* 26 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__ = __webpack_require__(7);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__fieldsCleaner_js__ = __webpack_require__(8);

    var messagesRegisterForm = {
        EMPTY_MESSAGE: "Заполнены не все поля",
        INCORRECT_MESSAGE: "Использованы недопустимые символы",
        NOT_EMAIL_MESSAGE: "Некорректный email",
        RESPONSE_MESSAGE: "Некорректный ввод или логин уже существует",
        SUCCESS_SIGN_UP_MESSAGE: "Вы успешо зарегистрировались!"
    };

    var RegisterForm = function (_WEBPACK_IMPORTED_MO7) {
        _inherits(RegisterForm, _WEBPACK_IMPORTED_MO7);

        function RegisterForm() {
            _classCallCheck(this, RegisterForm);

            var _this20 = _possibleConstructorReturn(this, (RegisterForm.__proto__ || Object.getPrototypeOf(RegisterForm)).call(this));

            Object.assign(RegisterForm.prototype, __WEBPACK_IMPORTED_MODULE_2__fieldsCleaner_js__["a" /* default */]);
            _this20.emailValue = "";
            _this20.loginValue = "";
            _this20.passwordValue = "";
            _this20.errorBox = null;
            _this20.addEventsToButtons();
            return _this20;
        }

        _createClass(RegisterForm, [{
            key: 'clearForm',
            value: function clearForm() {
                this.clearFields("register-form__input-email", "register-form__input-login", "register-form__input-password", "register-form__error-box");
            }
        }, {
            key: 'sendRequest',
            value: function sendRequest() {
                var _this21 = this;

                __WEBPACK_IMPORTED_MODULE_1__RequestToHost_js__["a" /* default */].register(this.loginValue, this.passwordValue, this.emailValue, function (err) {
                    if (err) {
                        return _this21.errorBox.innerHTML = RegisterForm.msgResponseFromHost();
                    }

                    alert(RegisterForm.msgSignUpSuccess());
                    _this21.clearForm();

                    document.querySelector(".register-page__button-back").click();
                });
            }
        }, {
            key: 'addEventsToButtons',
            value: function addEventsToButtons() {
                var _this22 = this;

                document.querySelector(".register-form__button").addEventListener("click", function () {
                    _this22.emailValue = document.querySelector(".register-form__input-email").value;
                    _this22.loginValue = document.querySelector(".register-form__input-login").value;
                    _this22.passwordValue = document.querySelector(".register-form__input-password").value;
                    _this22.errorBox = document.querySelector(".register-form__error-box");

                    var valid = RegisterForm.validate(_this22.loginValue, _this22.passwordValue, _this22.emailValue, _this22.errorBox);

                    if (valid) {
                        _this22.sendRequest();
                    }
                });

                document.querySelector(".register-page__button-back").addEventListener("click", function () {
                    _this22.clearForm();
                });
                document.querySelector(".register-page__link-to-login").addEventListener("click", function () {
                    _this22.clearForm();
                });
            }
        }], [{
            key: 'msgEmptyField',
            value: function msgEmptyField() {
                return messagesRegisterForm.EMPTY_MESSAGE;
            }
        }, {
            key: 'msgIncorrectInput',
            value: function msgIncorrectInput() {
                return messagesRegisterForm.INCORRECT_MESSAGE;
            }
        }, {
            key: 'msgResponseFromHost',
            value: function msgResponseFromHost() {
                return messagesRegisterForm.RESPONSE_MESSAGE;
            }
        }, {
            key: 'msgIsNotEmail',
            value: function msgIsNotEmail() {
                return messagesRegisterForm.NOT_EMAIL_MESSAGE;
            }
        }, {
            key: 'msgSignUpSuccess',
            value: function msgSignUpSuccess() {
                return messagesRegisterForm.SUCCESS_SIGN_UP_MESSAGE;
            }
        }, {
            key: 'validate',
            value: function validate(loginValue, passwordValue, emailValue, errorBox) {
                var login = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctLogin(loginValue);
                var password = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctPassword(passwordValue);
                var email = __WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */].correctEmail(emailValue);

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
        }]);

        return RegisterForm;
    }(__WEBPACK_IMPORTED_MODULE_0__FormValidator_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = RegisterForm;

    /***/
},
/* 27 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="register-page__button-back"><img class="register-page__button-back_img" src="./../../img/back_2.png"></div><div class="register-page__register-form register-form"><div class="register-form__error-box"></div><p><input class="register-form__input-email" type="text" name="email" placeholder="You email"></p><p><input class="register-form__input-login" type="text" name="login" placeholder="You login"></p><p><input class="register-form__input-password" type="password" name="password" placeholder="*********"></p><button class="register-form__button">Sign Up</button></div><p align="center">Are you already registred?<span class="register-page__link-to-login"> Log In</span></p>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 28 */
/***/function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    /* harmony import */
    var __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__ = __webpack_require__(0);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__modules_RequestToHost_js__ = __webpack_require__(2);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__modules_Debugger__ = __webpack_require__(3);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__records_page_pug__ = __webpack_require__(29);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__records_page_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__records_page_pug__);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug__ = __webpack_require__(30);
    /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__leaderboard_pug__);

    var RecordsPage = function (_WEBPACK_IMPORTED_MO8) {
        _inherits(RecordsPage, _WEBPACK_IMPORTED_MO8);

        function RecordsPage() {
            _classCallCheck(this, RecordsPage);

            return _possibleConstructorReturn(this, (RecordsPage.__proto__ || Object.getPrototypeOf(RecordsPage)).call(this));
        }

        _createClass(RecordsPage, [{
            key: 'render',
            value: function render() {
                var recordsPageBox = __WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */].createBoxForPage(RecordsPage.pageBoxName());
                recordsPageBox.innerHTML = __WEBPACK_IMPORTED_MODULE_3__records_page_pug___default()();
            }
        }, {
            key: 'sendRequestForRecords',
            value: function sendRequestForRecords() {
                __WEBPACK_IMPORTED_MODULE_1__modules_RequestToHost_js__["a" /* default */].records(function (err, resp) {
                    if (err) {
                        return __WEBPACK_IMPORTED_MODULE_2__modules_Debugger__["a" /* default */].print("Empty TOP");
                    }
                    RecordsPage.renderLeaderBoard(resp);
                });
            }
        }, {
            key: 'addEventsOnButtons',
            value: function addEventsOnButtons() {
                var _this24 = this;

                document.querySelector(".main-menu__button-records").addEventListener("click", function () {
                    _this24.sendRequestForRecords();
                });
            }
        }], [{
            key: 'pagePath',
            value: function pagePath() {
                return "/records";
            }
        }, {
            key: 'pageBoxName',
            value: function pageBoxName() {
                return "records-page";
            }
        }, {
            key: 'leaderBoardName',
            value: function leaderBoardName() {
                return "records-page__table";
            }
        }, {
            key: 'renderLeaderBoard',
            value: function renderLeaderBoard(resp) {
                var leaderBoardBox = document.querySelector("." + RecordsPage.leaderBoardName());
                leaderBoardBox.innerHTML = "";
                // устанавливаем локальные переменные для рендеринга
                var locals = resp;
                // рендерим шаблон
                leaderBoardBox.innerHTML = __WEBPACK_IMPORTED_MODULE_4__leaderboard_pug___default()(locals);
            }
        }]);

        return RecordsPage;
    }(__WEBPACK_IMPORTED_MODULE_0__modules_Page_js__["a" /* default */]);
    /* harmony export (immutable) */

    __webpack_exports__["a"] = RecordsPage;

    /***/
},
/* 29 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<div class="records-page__button-back"><img class="records-page__button-back_img" src="./../../img/back_2.png"></div><table class="records-page__table" align="center"></table>';;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 30 */
/***/function (module, exports, __webpack_require__) {

    var pug = __webpack_require__(1);

    function template(locals) {
        var pug_html = "",
            pug_mixins = {},
            pug_interp;pug_html = pug_html + '<tr><th>User</th><th>Number</th><th>Score</th></tr>';
        // iterate locals
        ;(function () {
            var $$obj = locals;
            if ('number' == typeof $$obj.length) {
                for (var pug_index0 = 0, $$l = $$obj.length; pug_index0 < $$l; pug_index0++) {
                    var user = $$obj[pug_index0];
                    pug_html = pug_html + '<tr><td>' + pug.escape(null == (pug_interp = user.login) ? "" : pug_interp) + '</td><td>' + pug.escape(null == (pug_interp = user.numberOfGames) ? "" : pug_interp) + '</td><td>' + pug.escape(null == (pug_interp = user.record) ? "" : pug_interp) + '</td></tr>';
                }
            } else {
                var $$l = 0;
                for (var pug_index0 in $$obj) {
                    $$l++;
                    var user = $$obj[pug_index0];
                    pug_html = pug_html + '<tr><td>' + pug.escape(null == (pug_interp = user.login) ? "" : pug_interp) + '</td><td>' + pug.escape(null == (pug_interp = user.numberOfGames) ? "" : pug_interp) + '</td><td>' + pug.escape(null == (pug_interp = user.record) ? "" : pug_interp) + '</td></tr>';
                }
            }
        }).call(this);
        ;return pug_html;
    };
    module.exports = template;

    /***/
},
/* 31 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 32 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 33 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 34 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 35 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 36 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/},
/* 37 */
/***/function (module, exports) {

    // removed by extract-text-webpack-plugin

    /***/}]
/******/);