"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_displays_displays_module_ts"],{

/***/ 9416:
/*!*****************************************************!*\
  !*** ./src/app/displays/displays-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplaysPageRoutingModule": () => (/* binding */ DisplaysPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _displays_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displays.page */ 3882);




const routes = [
    {
        path: '',
        component: _displays_page__WEBPACK_IMPORTED_MODULE_0__.DisplaysPage
    }
];
let DisplaysPageRoutingModule = class DisplaysPageRoutingModule {
};
DisplaysPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DisplaysPageRoutingModule);



/***/ }),

/***/ 5284:
/*!*********************************************!*\
  !*** ./src/app/displays/displays.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplaysPageModule": () => (/* binding */ DisplaysPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _displays_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displays-routing.module */ 9416);
/* harmony import */ var _displays_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displays.page */ 3882);







let DisplaysPageModule = class DisplaysPageModule {
};
DisplaysPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _displays_routing_module__WEBPACK_IMPORTED_MODULE_0__.DisplaysPageRoutingModule
        ],
        declarations: [_displays_page__WEBPACK_IMPORTED_MODULE_1__.DisplaysPage]
    })
], DisplaysPageModule);



/***/ }),

/***/ 3882:
/*!*******************************************!*\
  !*** ./src/app/displays/displays.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DisplaysPage": () => (/* binding */ DisplaysPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _displays_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displays.page.html?ngResource */ 1497);
/* harmony import */ var _displays_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displays.page.scss?ngResource */ 672);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var cruzrsdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cruzrsdk */ 8603);





let DisplaysPage = class DisplaysPage {
    constructor() {
    }
    ngOnInit() {
        cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.getCruzrFacesList().then((res) => {
            this.faceNames = res.result;
            console.log(this.faceNames);
            console.log(typeof this.faceNames);
        });
    }
    changeFace() {
        cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.setCruzrFace({ cruzrFaceCallBackImpl: null, faceId: this.selectedFace, playMusic: true, loop: true });
    }
};
DisplaysPage.ctorParameters = () => [];
DisplaysPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-displays',
        template: _displays_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_displays_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], DisplaysPage);



/***/ }),

/***/ 672:
/*!********************************************************!*\
  !*** ./src/app/displays/displays.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXNwbGF5cy5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 1497:
/*!********************************************************!*\
  !*** ./src/app/displays/displays.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Displays</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Set the Cruzr Face\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Face name</ion-label>\n      <ion-select *ngIf=\"faceNames\" [(ngModel)]=\"selectedFace\" placeholder=\"Select a face\">\n        <ion-select-option *ngFor=\"let val of faceNames\" [value]=\"val\">{{val}}</ion-select-option>\n      </ion-select>\n      <ion-button (click)=\"changeFace()\" color=\"success\">Valid</ion-button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_displays_displays_module_ts.js.map