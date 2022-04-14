"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_actions_actions_module_ts"],{

/***/ 7718:
/*!***************************************************!*\
  !*** ./src/app/actions/actions-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPageRoutingModule": () => (/* binding */ ActionsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.page */ 5548);




const routes = [
    {
        path: '',
        component: _actions_page__WEBPACK_IMPORTED_MODULE_0__.ActionsPage
    }
];
let ActionsPageRoutingModule = class ActionsPageRoutingModule {
};
ActionsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ActionsPageRoutingModule);



/***/ }),

/***/ 8601:
/*!*******************************************!*\
  !*** ./src/app/actions/actions.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPageModule": () => (/* binding */ ActionsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions-routing.module */ 7718);
/* harmony import */ var _actions_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.page */ 5548);







let ActionsPageModule = class ActionsPageModule {
};
ActionsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _actions_routing_module__WEBPACK_IMPORTED_MODULE_0__.ActionsPageRoutingModule
        ],
        declarations: [_actions_page__WEBPACK_IMPORTED_MODULE_1__.ActionsPage]
    })
], ActionsPageModule);



/***/ }),

/***/ 5548:
/*!*****************************************!*\
  !*** ./src/app/actions/actions.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionsPage": () => (/* binding */ ActionsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _actions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions.page.html?ngResource */ 6030);
/* harmony import */ var _actions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.page.scss?ngResource */ 8283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../cruzrsdk */ 8603);





let ActionsPage = class ActionsPage {
    constructor() {
        // eslint-disable-next-line max-len
        this.actionsNames = ['pose1', 'pose2', 'pose3', 'hug', 'shankhand', 'goodbye', 'talk1', 'talk2', 'talk3', 'talk4', 'talk5', 'talk6', 'talk7', 'talk8', 'nod', 'applause', 'zhuatou', 'guideleft', 'guideright', 'cute', 'fendou', 'zhanggao', 'swingarm', 'searching', 'fadai', 'tiaowang', 'longzhuashou', 'baohu', 'surprise', 'zhilu', 'shy', 'command', 'commandover', 'walk', 'reset'];
        this.selectedAction = 'pose1';
    }
    ngOnInit() {
    }
    startAction() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.run({ action: this.selectedAction });
    }
    stopAction() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.stopRun();
    }
};
ActionsPage.ctorParameters = () => [];
ActionsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-actions',
        template: _actions_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_actions_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], ActionsPage);



/***/ }),

/***/ 8283:
/*!******************************************************!*\
  !*** ./src/app/actions/actions.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY3Rpb25zLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6030:
/*!******************************************************!*\
  !*** ./src/app/actions/actions.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Actions</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-header>\n      <ion-label>\n        Do an anction\n      </ion-label>\n    </ion-header>\n    <ion-item>\n      <ion-label>Actions name</ion-label>\n      <ion-select [(ngModel)]=\"selectedAction\" placeholder=\"Select a joint\">\n        <ion-select-option *ngFor=\"let val of actionsNames\" [value]=\"val\">{{val}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button (click)=\"startAction()\" color=\"success\">Start</ion-button>\n    <ion-button (click)=\"stopAction()\" color=\"danger\">Stop</ion-button>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_actions_actions_module_ts.js.map