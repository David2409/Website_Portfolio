function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-general/app-part-general.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-general/app-part-general.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartGeneralAppPartGeneralComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"m2\">\r\n    <div>\r\n        <div class=\"f jC\">\r\n            <h2>Know-How</h2>\r\n        </div>\r\n        <div>\r\n            <ul id=\"tags\" class=\"list-group\">\r\n                <li class=\"list-group-item d-flex just-content-between lh-condensed card p-2\" *ngFor=\"let know of data.knowledge\">\r\n                    <div class=\"row w100\">\r\n                        <h5 class=\"col-sm-2\">{{know.name}}</h5>\r\n                        <div class=\"col-sm-10  if aC\">\r\n                            <div class=\"progress w100\">\r\n                                <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"know.value*10\">{{know.value}} / 10</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"f jC\">\r\n            <h2>Hobbies</h2>\r\n        </div>\r\n        <div class=\"d-flex mCont\">\r\n            <div *ngFor=\"let hobby of data.hobbies\" class=\"cont card p-2\"><h4>{{hobby}}</h4></div>\r\n        </div>\r\n    </div>\r\n    <div>\r\n        <div class=\"f jC\">\r\n            <h2>Attributes</h2>\r\n        </div>\r\n        <div class=\"d-flex mCont\">\r\n            <div *ngFor=\"let attr of data.attributes\" class=\"cont card p-2\"><h4>{{attr}}</h4></div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-me/app-part-me.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-me/app-part-me.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartMeAppPartMeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"jumbotron text-center\">\r\n    <div class=\"container\">\r\n        <h1 class=\"jumbotron-heading\">Portfolio</h1>\r\n        <img src=\"{{aboutMe.picture}}\">\r\n        <h3 id=\"name\">{{aboutMe.name}}</h3>\r\n    </div>\r\n</section>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectPrevAppPartProjectPrevComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main projectPrev\">\r\n  <div class=\"card shadow-sm\">\r\n    <img src=\"{{project.coverpicture}}\">\r\n    <div class=\"card-body\">\r\n      <div class=\"tags\" style=\"height: 2vw; display: flex; flex-wrap: nowrap; align-items: center; overflow: hidden;\">\r\n        <div *ngFor=\"let tag of project.tags\" style=\"font-size: small; padding:0.3vw\">{{tag}}</div>\r\n      </div>\r\n      <p class=\"card-text textarea text\">{{project.description}}</p>\r\n      <div class=\"d-flex justify-content-between align-items-center\">\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\">Download</button>\r\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" (click)=\"View()\">View</button>\r\n        </div>\r\n        <small class=\"text-muted\"></small>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-view/app-part-project-view.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-view/app-part-project-view.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectViewAppPartProjectViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"navbar navbar-dark f jC\">\r\n    <div class=\"container row\">\r\n        <div class=\"col-3\">\r\n           <Button class=\"btn btn-outline-primary\" (click)=\"this.clicked.emit()\">Back</Button>\r\n        </div>\r\n        <div class=\"col-sm-6 f jC\">\r\n            <h1>{{project.name}}</h1>\r\n        </div>\r\n        <div class=\"col-sm-3\">\r\n\r\n        </div>\r\n    </div>\r\n    <div>\r\n\r\n    </div>\r\n</div>\r\n<div>\r\n    <div class=\"f jC\">\r\n        <img src=\"{{project.coverpicture}}\">\r\n    </div>\r\n    <div class=\"\">\r\n        <h3 class=\"tC text\">Description</h3>\r\n        <div class=\"card p-2 text\">\r\n            <p class=\"tC\">{{project.description}}</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"f jC\">\r\n        <br>\r\n        <h3>SourceCode</h3>\r\n        <br>\r\n    </div>\r\n    <div class=\"card p-2 text\" *ngFor=\"let sc of project.sourcecode\">\r\n        <div [innerHTML]=\"sc\"></div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.html":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.html ***!
    \*****************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectsAllTagsAppPartProjectsAllTagsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card p-2\">\r\n    <div class=\"input-group\">\r\n        <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" id=\"inputName\">\r\n        <div class=\"input-group-append\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" id=\"inputSearch\" (click)=\"Search()\">Search</button>\r\n        </div>\r\n    </div>\r\n    <ul id=\"tags\" class=\"list-group\">\r\n        <li class=\"list-group-item d-flex just-content-between lh-condensed\" *ngFor=\"let tag of tags\">\r\n            <div class=\"input-group\">\r\n                <div class=\"input-group-prepend w100\">\r\n                    <span class=\"input-group-text bg-light w100 jcb\">\r\n                        <div>\r\n                            <input id=\"{{tag.name}}\" class=\"inputTag\" type=\"checkbox\">\r\n                            <span class=\"tagNames\"> {{tag.name}}</span>\r\n                        </div>\r\n                        <span>{{tag.entries}}</span>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n        </li>\r\n    </ul>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectsAllAppPartProjectsAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"w100 row p0 m0\">\r\n    <div class=\"col-md-4 w100 m0 p0\">\r\n        <app-part-projects-all-tags class=\"w100\" (outName)=\"this.selectedName = $event\" (outTags)=\"this.selectedTags = $event\" (outClick)=\"this.Search()\"></app-part-projects-all-tags>  \r\n    </div>\r\n    <div class=\"col-md-8 card p-2 main\">\r\n        <div id=\"project-container\">\r\n            <div class=\"row w100\">\r\n                <app-part-project-prev *ngFor=\"let project of projects\" [project]=\"project\" class=\"item\" [ngClass]=\"{'col-4': showSmall}\" (clicked)=\"this.clicked.emit($event)\"></app-part-project-prev>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.html":
  /*!*******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.html ***!
    \*******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectsFavoritesAppPartProjectsFavoritesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n    <div id=\"items\" class=\"carousel-inner mInner\">\r\n      <div *ngFor=\"let package of packages; let i = index\" class=\" carousel-item myRow\" [ngClass]=\"{'active': i == 0}\">\r\n        \r\n          <app-part-project-prev *ngFor=\"let project of package\" class=\"mItem\" [ngClass]=\"{'col-4': this.mode == false}\" [project]=\"project\" (clicked)=\"this.clicked.emit($event)\"></app-part-project-prev>\r\n        \r\n      </div>\r\n    </div>\r\n    <a class=\"carousel-control-prev contr\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Previous</span>\r\n    </a>\r\n    <a class=\"carousel-control-next contr\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n      <span class=\"sr-only\">Next</span>\r\n    </a>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects/app-part-projects.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects/app-part-projects.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppPartProjectsAppPartProjectsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-part-projects-favorites (clicked)=\"this.clicked.emit($event)\"></app-part-projects-favorites>\r\n<app-part-projects-all (clicked)=\"this.clicked.emit($event)\"></app-part-projects-all>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcMainAngularAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row w100 m0\">\r\n    <div class=\"col-1 w100\"></div>\r\n    <div class=\"col-md-10 w100 p0\">\r\n        <div id=\"main\" class=\"w100\">\r\n            <app-part-me></app-part-me>\r\n            <app-part-general class=\"item\"></app-part-general>\r\n            <app-part-projects class=\"item\" (clicked)=\"this.projectViewed = $event; this.projectClick()\"></app-part-projects>\r\n        </div>\r\n        <app-part-project-view id=\"view\" [project]=\"projectViewed\" (clicked)=\"this.viewClick()\" style=\"display: none;\"></app-part-project-view>\r\n    </div>\r\n    <div class=\"col-1 w100 p0\"></div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
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

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/main/angular/app/app-part-general/app-part-general.component.css":
  /*!******************************************************************************!*\
    !*** ./src/main/angular/app/app-part-general/app-part-general.component.css ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartGeneralAppPartGeneralComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".f{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n.if{\r\n    display: -webkit-inline-box;\r\n    display: inline-flex;\r\n}\r\n.jC{\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.aC{\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    width: 100%;\r\n}\r\n.w100{\r\n    width: 100%;\r\n}\r\n.cont{\r\n   margin-right: 1vw;\r\n}\r\n.mCont{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\nh4{\r\n    margin: 0;\r\n}\r\n.m2{\r\n    margin: 2vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LWdlbmVyYWwvYXBwLXBhcnQtZ2VuZXJhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksb0JBQWE7SUFBYixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSwyQkFBb0I7SUFBcEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSx3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7R0FDRyxpQkFBaUI7QUFDcEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7SUFDZix3QkFBdUI7WUFBdkIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxTQUFTO0FBQ2I7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvbWFpbi9hbmd1bGFyL2FwcC9hcHAtcGFydC1nZW5lcmFsL2FwcC1wYXJ0LWdlbmVyYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5me1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG4uaWZ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxufVxyXG4uakN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYUN7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLncxMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udHtcclxuICAgbWFyZ2luLXJpZ2h0OiAxdnc7XHJcbn1cclxuLm1Db250e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbmg0e1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5tMntcclxuICAgIG1hcmdpbjogMnZ3O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-general/app-part-general.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/main/angular/app/app-part-general/app-part-general.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AppPartGeneral */

  /***/
  function srcMainAngularAppAppPartGeneralAppPartGeneralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartGeneral", function () {
      return AppPartGeneral;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartGeneral =
    /*#__PURE__*/
    function () {
      function AppPartGeneral(dataService) {
        _classCallCheck(this, AppPartGeneral);

        this.dataService = dataService;
      }

      _createClass(AppPartGeneral, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["generalURL"].URL).subscribe(function (data) {
            _this.data = data;
          });
        }
      }]);

      return AppPartGeneral;
    }();

    AppPartGeneral.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    AppPartGeneral = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-general',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-general.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-general/app-part-general.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-general.component.css */
      "./src/main/angular/app/app-part-general/app-part-general.component.css")).default]
    })], AppPartGeneral);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-me/app-part-me.component.css":
  /*!********************************************************************!*\
    !*** ./src/main/angular/app/app-part-me/app-part-me.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartMeAppPartMeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\nsection{\r\n    margin: 0;\r\n}\r\n#name{\r\n    padding-top: 1vw;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LW1lL2FwcC1wYXJ0LW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksU0FBUztBQUNiO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL21haW4vYW5ndWxhci9hcHAvYXBwLXBhcnQtbWUvYXBwLXBhcnQtbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbnNlY3Rpb257XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuI25hbWV7XHJcbiAgICBwYWRkaW5nLXRvcDogMXZ3O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-me/app-part-me.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/main/angular/app/app-part-me/app-part-me.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AppPartMe */

  /***/
  function srcMainAngularAppAppPartMeAppPartMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartMe", function () {
      return AppPartMe;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");

    var AppPartMe =
    /*#__PURE__*/
    function () {
      function AppPartMe(dataService) {
        _classCallCheck(this, AppPartMe);

        this.dataService = dataService;
      }

      _createClass(AppPartMe, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_2__["aboutMeURL"].URL).subscribe(function (data) {
            _this2.aboutMe = data;
            _this2.aboutMe.picture = _settings__WEBPACK_IMPORTED_MODULE_2__["imageURL"].URL + _this2.aboutMe.picture;
          });
        }
      }]);

      return AppPartMe;
    }();

    AppPartMe.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    AppPartMe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-me',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-me.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-me/app-part-me.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-me.component.css */
      "./src/main/angular/app/app-part-me/app-part-me.component.css")).default]
    })], AppPartMe);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectPrevAppPartProjectPrevComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "img{\r\n    width: 100%;\r\n}\r\n.textarea{\r\n    overflow-y: auto;\r\n    height: 10vw;\r\n}\r\n.main{\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3QtcHJldi9hcHAtcGFydC1wcm9qZWN0LXByZXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL21haW4vYW5ndWxhci9hcHAvYXBwLXBhcnQtcHJvamVjdC1wcmV2L2FwcC1wYXJ0LXByb2plY3QtcHJldi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRleHRhcmVhe1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGhlaWdodDogMTB2dztcclxufVxyXG4ubWFpbntcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AppPartProjectPrev */

  /***/
  function srcMainAngularAppAppPartProjectPrevAppPartProjectPrevComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjectPrev", function () {
      return AppPartProjectPrev;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartProjectPrev =
    /*#__PURE__*/
    function () {
      function AppPartProjectPrev(dataService) {
        _classCallCheck(this, AppPartProjectPrev);

        this.dataService = dataService; //@Input() mId: string;

        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppPartProjectPrev, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*
          this.dataService.Get(projectsURL.URL + this.mId).subscribe((data:any []) => {
            this.project = data;
            this.project.coverpicture = imageURL.URL + this.project.coverpicture;
          })*/
        }
      }, {
        key: "View",
        value: function View() {
          this.clicked.emit(this.project);
        }
      }]);

      return AppPartProjectPrev;
    }();

    AppPartProjectPrev.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectPrev.prototype, "clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppPartProjectPrev.prototype, "project", void 0);
    AppPartProjectPrev = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-project-prev',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-project-prev.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-project-prev.component.css */
      "./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.css")).default]
    })], AppPartProjectPrev);
    var mode = null;
    window.addEventListener('resize', ResizeAllProjectPrev);

    function ResizeAllProjectPrev() {
      if (window.innerWidth <= _settings__WEBPACK_IMPORTED_MODULE_3__["changeLayout"] && mode != true) {
        var elements = document.getElementsByTagName("app-part-project-prev");

        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.remove("col-4");
        }

        mode = true;
      } else if (window.innerWidth > _settings__WEBPACK_IMPORTED_MODULE_3__["changeLayout"] && mode != false) {
        var elements = document.getElementsByTagName("app-part-project-prev");

        for (var i = 0; i < elements.length; i++) {
          elements[i].classList.add("col-4");
        }

        mode = false;
      }
    }
    /***/

  },

  /***/
  "./src/main/angular/app/app-part-project-view/app-part-project-view.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-project-view/app-part-project-view.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectViewAppPartProjectViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".jC{\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.f{\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\nimg{\r\n    width: calc(100% - 16vw);\r\n}\r\n.text{\r\n    margin: 3vw;\r\n}\r\n.tC{\r\n    text-align: center;\r\n}\r\ntextarea{\r\n    height: 50vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3Qtdmlldy9hcHAtcGFydC1wcm9qZWN0LXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksd0JBQXdCO0FBQzVCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvbWFpbi9hbmd1bGFyL2FwcC9hcHAtcGFydC1wcm9qZWN0LXZpZXcvYXBwLXBhcnQtcHJvamVjdC12aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuakN7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuaW1ne1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2dncpO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgbWFyZ2luOiAzdnc7XHJcbn1cclxuLnRDe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnRleHRhcmVhe1xyXG4gICAgaGVpZ2h0OiA1MHZ3O1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-project-view/app-part-project-view.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-project-view/app-part-project-view.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AppPartProjectView */

  /***/
  function srcMainAngularAppAppPartProjectViewAppPartProjectViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjectView", function () {
      return AppPartProjectView;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");

    var AppPartProjectView =
    /*#__PURE__*/
    function () {
      function AppPartProjectView(dataService) {
        _classCallCheck(this, AppPartProjectView);

        this.dataService = dataService; //@Input() pid;

        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppPartProjectView, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /*
          this.dataService.Get(projectsURL.URL + "/" +  this.pid).subscribe((data:any ) => {
            this.project = data;
            this.project.coverpicture = imageURL.URL + this.project.coverpicture;
          });
          */
        }
      }]);

      return AppPartProjectView;
    }();

    AppPartProjectView.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectView.prototype, "clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], AppPartProjectView.prototype, "project", void 0);
    AppPartProjectView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-project-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-project-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-project-view/app-part-project-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-project-view.component.css */
      "./src/main/angular/app/app-part-project-view/app-part-project-view.component.css")).default]
    })], AppPartProjectView);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.css":
  /*!**************************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.css ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectsAllTagsAppPartProjectsAllTagsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#tags{\r\n    margin-top: 1vw;\r\n    max-height: 60vw;\r\n    overflow-y: auto;\r\n    overflow-x: visible;\r\n}\r\n.tagContainer{\r\n    margin-left: 1vw;\r\n}\r\n.tagNames{\r\n    margin-left: 1vw;\r\n    text-overflow: ellipsis;\r\n}\r\n.w100{\r\n    width: 100%;\r\n}\r\n.jcb{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n            justify-content: space-between;\r\n}\r\n.tags{\r\n    height: 60vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3RzLWFsbC10YWdzL2FwcC1wYXJ0LXByb2plY3RzLWFsbC10YWdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3RzLWFsbC10YWdzL2FwcC1wYXJ0LXByb2plY3RzLWFsbC10YWdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFnc3tcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxuICAgIG1heC1oZWlnaHQ6IDYwdnc7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogdmlzaWJsZTtcclxufVxyXG4udGFnQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcclxufVxyXG4udGFnTmFtZXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuLncxMDB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uamNie1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4udGFnc3tcclxuICAgIGhlaWdodDogNjB2dztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AppPartProjectsAllTags */

  /***/
  function srcMainAngularAppAppPartProjectsAllTagsAppPartProjectsAllTagsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjectsAllTags", function () {
      return AppPartProjectsAllTags;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartProjectsAllTags =
    /*#__PURE__*/
    function () {
      function AppPartProjectsAllTags(dataService) {
        _classCallCheck(this, AppPartProjectsAllTags);

        this.dataService = dataService;
        this.outTags = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.outName = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppPartProjectsAllTags, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.inputName = document.getElementById("inputName");
          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["tagsURL"].URL).subscribe(function (data) {
            _this3.tags = data.tags;
          });
        }
      }, {
        key: "Search",
        value: function Search() {
          var elmTags = document.getElementsByClassName("inputTag");
          var ergT = [];

          for (var i = 0; i < elmTags.length; i++) {
            if (elmTags[i]["checked"]) {
              ergT.push(elmTags[i].id);
            }
          }

          this.outTags.emit(ergT);

          if (this.inputName.value == "") {
            this.outName.emit("%20");
          } else {
            this.outName.emit(this.inputName.value);
          }

          this.outClick.emit();
        }
      }]);

      return AppPartProjectsAllTags;
    }();

    AppPartProjectsAllTags.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectsAllTags.prototype, "outTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectsAllTags.prototype, "outClick", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectsAllTags.prototype, "outName", void 0);
    AppPartProjectsAllTags = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-projects-all-tags',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-projects-all-tags.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-projects-all-tags.component.css */
      "./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.css")).default]
    })], AppPartProjectsAllTags);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectsAllAppPartProjectsAllComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#tags{\r\n    margin-top: 1vw;\r\n}\r\n.tagContainer{\r\n    margin-left: 1vw;\r\n}\r\n.tagNames{\r\n    margin-left: 1vw;\r\n}\r\n.w100{\r\n    width: 100%;\r\n}\r\n#project-container{\r\n    max-height: 90vw;\r\n    overflow-y: auto;\r\n}\r\n.item{\r\n    margin-top: 0.5vw;\r\n    margin-bottom: 0.5vw;\r\n}\r\n.main{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n}\r\n.m0{\r\n    margin: 0px;\r\n}\r\n.p0{\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3RzLWFsbC9hcHAtcGFydC1wcm9qZWN0cy1hbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHdCQUF1QjtZQUF2Qix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvbWFpbi9hbmd1bGFyL2FwcC9hcHAtcGFydC1wcm9qZWN0cy1hbGwvYXBwLXBhcnQtcHJvamVjdHMtYWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFnc3tcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxufVxyXG4udGFnQ29udGFpbmVye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDF2dztcclxufVxyXG4udGFnTmFtZXN7XHJcbiAgICBtYXJnaW4tbGVmdDogMXZ3O1xyXG59XHJcbi53MTAwe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI3Byb2plY3QtY29udGFpbmVye1xyXG4gICAgbWF4LWhlaWdodDogOTB2dztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuLml0ZW17XHJcbiAgICBtYXJnaW4tdG9wOiAwLjV2dztcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXZ3O1xyXG59XHJcbi5tYWlue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi5tMHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcbi5wMHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: AppPartProjectsAll */

  /***/
  function srcMainAngularAppAppPartProjectsAllAppPartProjectsAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjectsAll", function () {
      return AppPartProjectsAll;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartProjectsAll =
    /*#__PURE__*/
    function () {
      function AppPartProjectsAll(dataService) {
        _classCallCheck(this, AppPartProjectsAll);

        this.dataService = dataService;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppPartProjectsAll, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["tagsURL"].URL).subscribe(function (data) {
            _this4.tags = data;
          });
        }
      }, {
        key: "Search",
        value: function Search() {
          var _this5 = this;

          console.log(_settings__WEBPACK_IMPORTED_MODULE_3__["projectsSearch"].URL + this.selectedName + "/" + this.GetTags());
          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["projectsSearch"].URL + this.selectedName + "/" + this.GetTags()).subscribe(function (data) {
            if (window.innerWidth <= _settings__WEBPACK_IMPORTED_MODULE_3__["changeLayout"]) {
              _this5.showSmall = false;
            } else {
              _this5.showSmall = true;
            }

            _this5.projects = data;

            for (var i = 0; i < _this5.projects.length; i++) {
              _this5.projects[i].coverpicture = _settings__WEBPACK_IMPORTED_MODULE_3__["imageURL"].URL + _this5.projects[i].coverpicture;
            }
          });
        }
      }, {
        key: "GetTags",
        value: function GetTags() {
          var erg = "";

          for (var i = 0; i < this.selectedTags.length; i++) {
            erg += this.selectedTags[i] + ",";
          }

          return erg;
        }
      }]);

      return AppPartProjectsAll;
    }();

    AppPartProjectsAll.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectsAll.prototype, "clicked", void 0);
    AppPartProjectsAll = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-projects-all',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-projects-all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-projects-all.component.css */
      "./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.css")).default]
    })], AppPartProjectsAll);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.css":
  /*!****************************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.css ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectsFavoritesAppPartProjectsFavoritesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mInner{\r\n}\r\n.mRow{\r\n    width: 100%;\r\n}\r\n.mItem{\r\n    display: inline-block;\r\n}\r\n#myCarousel{\r\n    background-color: gray;\r\n    padding: 2vw 7vw 2vw 7vw;\r\n}\r\n.contr{\r\n    width: 7vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3RzLWZhdm9yaXRlcy9hcHAtcGFydC1wcm9qZWN0cy1mYXZvcml0ZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC1wYXJ0LXByb2plY3RzLWZhdm9yaXRlcy9hcHAtcGFydC1wcm9qZWN0cy1mYXZvcml0ZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tSW5uZXJ7XHJcbn1cclxuLm1Sb3d7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ubUl0ZW17XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuI215Q2Fyb3VzZWx7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gICAgcGFkZGluZzogMnZ3IDd2dyAydncgN3Z3O1xyXG59XHJcbi5jb250cntcclxuICAgIHdpZHRoOiA3dnc7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.ts":
  /*!***************************************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.ts ***!
    \***************************************************************************************************/

  /*! exports provided: AppPartProjectsFavorites */

  /***/
  function srcMainAngularAppAppPartProjectsFavoritesAppPartProjectsFavoritesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjectsFavorites", function () {
      return AppPartProjectsFavorites;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartProjectsFavorites =
    /*#__PURE__*/
    function () {
      function AppPartProjectsFavorites(dataService) {
        _classCallCheck(this, AppPartProjectsFavorites);

        this.dataService = dataService;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.packages = [];
        this.mode = null;
      }

      _createClass(AppPartProjectsFavorites, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["projectsFavorURL"].URL).subscribe(function (data) {
            _this6.receivedData = data;

            for (var i = 0; i < _this6.receivedData.length; i++) {
              _this6.receivedData[i].coverpicture = _settings__WEBPACK_IMPORTED_MODULE_3__["imageURL"].URL + _this6.receivedData[i].coverpicture;
            }

            _this6.GeneratePackages(3);

            _this6.Resize();
          });
        }
      }, {
        key: "GeneratePackages",
        value: function GeneratePackages(packagesSize) {
          this.packages = [];

          for (var i = 0; i < this.receivedData.length; i += packagesSize) {
            var p = [];

            for (var i2 = 0; i + i2 < this.receivedData.length && i2 < packagesSize; i2++) {
              p.push(this.receivedData[i + i2]);
            }

            this.packages.push(p);
          }
        }
      }, {
        key: "Resize",
        value: function Resize() {
          if (window.innerWidth <= _settings__WEBPACK_IMPORTED_MODULE_3__["changeLayout"] && this.mode != true) {
            this.GeneratePackages(1);
            this.mode = true;
            /*
            this.fav3.style.display = "none";
            this.fav1.style.display = "";
            */
          } else if (window.innerWidth > _settings__WEBPACK_IMPORTED_MODULE_3__["changeLayout"] && this.mode != false) {
            this.GeneratePackages(3);
            this.mode = false;
            /*
            this.fav1.style.display = "none";
            this.fav3.style.display = "";
            */
          }
        }
      }]);

      return AppPartProjectsFavorites;
    }();

    AppPartProjectsFavorites.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjectsFavorites.prototype, "clicked", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], AppPartProjectsFavorites.prototype, "Resize", null);
    AppPartProjectsFavorites = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-projects-favorites',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-projects-favorites.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-projects-favorites.component.css */
      "./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.css")).default]
    })], AppPartProjectsFavorites);
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects/app-part-projects.component.css":
  /*!********************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects/app-part-projects.component.css ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppPartProjectsAppPartProjectsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbWFpbi9hbmd1bGFyL2FwcC9hcHAtcGFydC1wcm9qZWN0cy9hcHAtcGFydC1wcm9qZWN0cy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/main/angular/app/app-part-projects/app-part-projects.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/main/angular/app/app-part-projects/app-part-projects.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: AppPartProjects */

  /***/
  function srcMainAngularAppAppPartProjectsAppPartProjectsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppPartProjects", function () {
      return AppPartProjects;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../data.service */
    "./src/main/angular/app/data.service.ts");
    /* harmony import */


    var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../settings */
    "./src/main/angular/settings.ts");

    var AppPartProjects =
    /*#__PURE__*/
    function () {
      function AppPartProjects(dataService) {
        _classCallCheck(this, AppPartProjects);

        this.dataService = dataService;
        this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(AppPartProjects, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.dataService.Get(_settings__WEBPACK_IMPORTED_MODULE_3__["projectsURL"].URL).subscribe(function (data) {
            _this7.projects = data;
          });
        }
      }]);

      return AppPartProjects;
    }();

    AppPartProjects.ctorParameters = function () {
      return [{
        type: _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], AppPartProjects.prototype, "clicked", void 0);
    AppPartProjects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-part-projects',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app-part-projects.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app-part-projects/app-part-projects.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app-part-projects.component.css */
      "./src/main/angular/app/app-part-projects/app-part-projects.component.css")).default]
    })], AppPartProjects);
    /***/
  },

  /***/
  "./src/main/angular/app/app-routing.module.ts":
  /*!****************************************************!*\
    !*** ./src/main/angular/app/app-routing.module.ts ***!
    \****************************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcMainAngularAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/main/angular/app/app.component.css":
  /*!************************************************!*\
    !*** ./src/main/angular/app/app.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcMainAngularAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".item{\r\n    padding-top: 2vw;\r\n}\r\n.w100{\r\n    width: 100%;\r\n}\r\n.p0{\r\n    padding: 0vw;\r\n}\r\n.m0{\r\n    margin: 0vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluL2FuZ3VsYXIvYXBwL2FwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvbWFpbi9hbmd1bGFyL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pdGVte1xyXG4gICAgcGFkZGluZy10b3A6IDJ2dztcclxufVxyXG4udzEwMHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wMHtcclxuICAgIHBhZGRpbmc6IDB2dztcclxufVxyXG4ubTB7XHJcbiAgICBtYXJnaW46IDB2dztcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/main/angular/app/app.component.ts":
  /*!***********************************************!*\
    !*** ./src/main/angular/app/app.component.ts ***!
    \***********************************************/

  /*! exports provided: AppComponent */

  /***/
  function srcMainAngularAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Davids Website';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.main = document.getElementById("main");
          this.view = document.getElementById("view");
        }
      }, {
        key: "projectClick",
        value: function projectClick() {
          this.main.style.display = "none";
          this.view.style.display = "";
        }
      }, {
        key: "viewClick",
        value: function viewClick() {
          this.main.style.display = "";
          this.view.style.display = "none";
        }
      }]);

      return AppComponent;
    }();

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/main/angular/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/main/angular/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/main/angular/app/app.module.ts":
  /*!********************************************!*\
    !*** ./src/main/angular/app/app.module.ts ***!
    \********************************************/

  /*! exports provided: AppModule */

  /***/
  function srcMainAngularAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/main/angular/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/main/angular/app/app.component.ts");
    /* harmony import */


    var _app_part_me_app_part_me_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app-part-me/app-part-me.component */
    "./src/main/angular/app/app-part-me/app-part-me.component.ts");
    /* harmony import */


    var _app_part_projects_app_part_projects_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-part-projects/app-part-projects.component */
    "./src/main/angular/app/app-part-projects/app-part-projects.component.ts");
    /* harmony import */


    var _app_part_project_prev_app_part_project_prev_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app-part-project-prev/app-part-project-prev.component */
    "./src/main/angular/app/app-part-project-prev/app-part-project-prev.component.ts");
    /* harmony import */


    var _app_part_projects_favorites_app_part_projects_favorites_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-part-projects-favorites/app-part-projects-favorites.component */
    "./src/main/angular/app/app-part-projects-favorites/app-part-projects-favorites.component.ts");
    /* harmony import */


    var _app_part_projects_all_app_part_projects_all_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-part-projects-all/app-part-projects-all.component */
    "./src/main/angular/app/app-part-projects-all/app-part-projects-all.component.ts");
    /* harmony import */


    var _app_part_projects_all_tags_app_part_projects_all_tags_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-part-projects-all-tags/app-part-projects-all-tags.component */
    "./src/main/angular/app/app-part-projects-all-tags/app-part-projects-all-tags.component.ts");
    /* harmony import */


    var _app_part_project_view_app_part_project_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./app-part-project-view/app-part-project-view.component */
    "./src/main/angular/app/app-part-project-view/app-part-project-view.component.ts");
    /* harmony import */


    var _app_part_general_app_part_general_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./app-part-general/app-part-general.component */
    "./src/main/angular/app/app-part-general/app-part-general.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _app_part_me_app_part_me_component__WEBPACK_IMPORTED_MODULE_6__["AppPartMe"], _app_part_projects_app_part_projects_component__WEBPACK_IMPORTED_MODULE_7__["AppPartProjects"], _app_part_project_prev_app_part_project_prev_component__WEBPACK_IMPORTED_MODULE_8__["AppPartProjectPrev"], _app_part_projects_favorites_app_part_projects_favorites_component__WEBPACK_IMPORTED_MODULE_9__["AppPartProjectsFavorites"], _app_part_projects_all_app_part_projects_all_component__WEBPACK_IMPORTED_MODULE_10__["AppPartProjectsAll"], _app_part_projects_all_tags_app_part_projects_all_tags_component__WEBPACK_IMPORTED_MODULE_11__["AppPartProjectsAllTags"], _app_part_project_view_app_part_project_view_component__WEBPACK_IMPORTED_MODULE_12__["AppPartProjectView"], _app_part_general_app_part_general_component__WEBPACK_IMPORTED_MODULE_13__["AppPartGeneral"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/main/angular/app/data.service.ts":
  /*!**********************************************!*\
    !*** ./src/main/angular/app/data.service.ts ***!
    \**********************************************/

  /*! exports provided: DataService */

  /***/
  function srcMainAngularAppDataServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataService", function () {
      return DataService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var DataService =
    /*#__PURE__*/
    function () {
      function DataService(httpClient) {
        _classCallCheck(this, DataService);

        this.httpClient = httpClient;
      }

      _createClass(DataService, [{
        key: "Get",
        value: function Get(url) {
          return this.httpClient.get(url);
        }
      }]);

      return DataService;
    }();

    DataService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DataService);
    /***/
  },

  /***/
  "./src/main/angular/environments/environment.ts":
  /*!******************************************************!*\
    !*** ./src/main/angular/environments/environment.ts ***!
    \******************************************************/

  /*! exports provided: environment */

  /***/
  function srcMainAngularEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main/angular/main.ts":
  /*!**********************************!*\
    !*** ./src/main/angular/main.ts ***!
    \**********************************/

  /*! no exports provided */

  /***/
  function srcMainAngularMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/main/angular/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/main/angular/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/main/angular/settings.ts":
  /*!**************************************!*\
    !*** ./src/main/angular/settings.ts ***!
    \**************************************/

  /*! exports provided: aboutMeURL, projectsURL, projectsSearch, projectsFavorURL, projectsPrevURL, imageURL, sourceCodeURL, tagsURL, generalURL, changeLayout */

  /***/
  function srcMainAngularSettingsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "aboutMeURL", function () {
      return aboutMeURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsURL", function () {
      return projectsURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsSearch", function () {
      return projectsSearch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsFavorURL", function () {
      return projectsFavorURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "projectsPrevURL", function () {
      return projectsPrevURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "imageURL", function () {
      return imageURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "sourceCodeURL", function () {
      return sourceCodeURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tagsURL", function () {
      return tagsURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generalURL", function () {
      return generalURL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changeLayout", function () {
      return changeLayout;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var server = "http://lvps83-169-19-183.dedicated.hosteurope.de:8080/WebsitePortfolio/";
    var aboutMeURL = {
      "URL": server + "aboutme"
    };
    var projectsURL = {
      "URL": server + "projects"
    };
    var projectsSearch = {
      "URL": server + "projects/search/"
    };
    var projectsFavorURL = {
      "URL": server + "projects/fav/9"
    };
    var projectsPrevURL = {
      "URL": server + "projects/",
      "end": "/prev"
    };
    var imageURL = {
      "URL": server + "image/"
    };
    var sourceCodeURL = {
      "URL": server + "sourcecode/"
    };
    var tagsURL = {
      "URL": server + "tags"
    };
    var generalURL = {
      "URL": server + "knowledge"
    };
    var changeLayout = 1170;
    /***/
  },

  /***/
  0:
  /*!****************************************!*\
    !*** multi ./src/main/angular/main.ts ***!
    \****************************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\divad\Documents\GitHub\Website_Portfolio\Website_Portfolio\src\main\angular\main.ts */
    "./src/main/angular/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map