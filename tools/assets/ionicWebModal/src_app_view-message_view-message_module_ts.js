"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_view-message_view-message_module_ts"],{

/***/ 7981:
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/view-message/view-message.page.html ***!
  \***************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button [text]=\"getBackButtonText()\" defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" *ngIf=\"message\">\n  <ion-item>\n    <ion-icon name=\"person-circle\" color=\"primary\"></ion-icon>\n    <ion-label class=\"ion-text-wrap\">\n      <h2>\n        {{ message.fromName }}\n        <span class=\"date\">\n          <ion-note>{{ message.date }}</ion-note>\n        </span>\n      </h2>\n      <h3>To: <ion-note>Me</ion-note></h3>\n    </ion-label>\n  </ion-item>\n  \n  <div class=\"ion-padding\">\n    <h1>{{ message.subject }}</h1>\n    <p>\n      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n    </p>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ 7054:
/*!*************************************************************!*\
  !*** ./src/app/view-message/view-message-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMessagePageRoutingModule": () => (/* binding */ ViewMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-message.page */ 3820);




const routes = [
    {
        path: '',
        component: _view_message_page__WEBPACK_IMPORTED_MODULE_0__.ViewMessagePage
    }
];
let ViewMessagePageRoutingModule = class ViewMessagePageRoutingModule {
};
ViewMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ViewMessagePageRoutingModule);



/***/ }),

/***/ 6497:
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMessagePageModule": () => (/* binding */ ViewMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _view_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-message.page */ 3820);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 8058);
/* harmony import */ var _view_message_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-message-routing.module */ 7054);







let ViewMessagePageModule = class ViewMessagePageModule {
};
ViewMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _view_message_routing_module__WEBPACK_IMPORTED_MODULE_1__.ViewMessagePageRoutingModule
        ],
        declarations: [_view_message_page__WEBPACK_IMPORTED_MODULE_0__.ViewMessagePage]
    })
], ViewMessagePageModule);



/***/ }),

/***/ 3820:
/*!***************************************************!*\
  !*** ./src/app/view-message/view-message.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewMessagePage": () => (/* binding */ ViewMessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 8111);
/* harmony import */ var _Users_nstudio_Documents_github_NativeScript_tmp_ionicWebModal_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_message_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@angular-devkit/build-angular/node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./view-message.page.html */ 7981);
/* harmony import */ var _view_message_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view-message.page.scss */ 2569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ 558);






let ViewMessagePage = class ViewMessagePage {
    constructor(data, activatedRoute) {
        this.data = data;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.message = this.data.getMessageById(parseInt(id, 10));
    }
    getBackButtonText() {
        const win = window;
        const mode = win && win.Ionic && win.Ionic.mode;
        return mode === 'ios' ? 'Inbox' : '';
    }
};
ViewMessagePage.ctorParameters = () => [
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute }
];
ViewMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-view-message',
        template: _Users_nstudio_Documents_github_NativeScript_tmp_ionicWebModal_node_modules_angular_devkit_build_angular_node_modules_ngtools_webpack_src_loaders_direct_resource_js_view_message_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_view_message_page_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ViewMessagePage);



/***/ }),

/***/ 2569:
/*!*****************************************************!*\
  !*** ./src/app/view-message/view-message.page.scss ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = "ion-item {\n  --inner-padding-end: 0;\n  --background: transparent;\n}\n\nion-label {\n  margin-top: 12px;\n  margin-bottom: 12px;\n}\n\nion-item h2 {\n  font-weight: 600;\n}\n\nion-item .date {\n  float: right;\n  align-items: center;\n  display: flex;\n}\n\nion-item ion-icon {\n  font-size: 42px;\n  margin-right: 8px;\n}\n\nion-item ion-note {\n  font-size: 15px;\n  margin-right: 12px;\n  font-weight: normal;\n}\n\nh1 {\n  margin: 0;\n  font-weight: bold;\n  font-size: 22px;\n}\n\np {\n  line-height: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXctbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7QUFDRiIsImZpbGUiOiJ2aWV3LW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuXG5pb24tbGFiZWwge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG5pb24taXRlbSBoMiB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbmlvbi1pdGVtIC5kYXRlIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5pb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNDJweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbmlvbi1pdGVtIGlvbi1ub3RlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDIycHg7XG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_view-message_view-message_module_ts.js.map