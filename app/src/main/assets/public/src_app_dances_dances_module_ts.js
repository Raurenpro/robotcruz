"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_dances_dances_module_ts"],{

/***/ 8877:
/*!*************************************************!*\
  !*** ./src/app/dances/dances-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DancesPageRoutingModule": () => (/* binding */ DancesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _dances_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dances.page */ 290);




const routes = [
    {
        path: '',
        component: _dances_page__WEBPACK_IMPORTED_MODULE_0__.DancesPage
    }
];
let DancesPageRoutingModule = class DancesPageRoutingModule {
};
DancesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DancesPageRoutingModule);



/***/ }),

/***/ 9921:
/*!*****************************************!*\
  !*** ./src/app/dances/dances.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DancesPageModule": () => (/* binding */ DancesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _dances_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dances-routing.module */ 8877);
/* harmony import */ var _dances_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dances.page */ 290);







let DancesPageModule = class DancesPageModule {
};
DancesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _dances_routing_module__WEBPACK_IMPORTED_MODULE_0__.DancesPageRoutingModule
        ],
        declarations: [_dances_page__WEBPACK_IMPORTED_MODULE_1__.DancesPage]
    })
], DancesPageModule);



/***/ }),

/***/ 290:
/*!***************************************!*\
  !*** ./src/app/dances/dances.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DancesPage": () => (/* binding */ DancesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _dances_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dances.page.html?ngResource */ 3227);
/* harmony import */ var _dances_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dances.page.scss?ngResource */ 2000);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var cruzrsdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cruzrsdk */ 8603);





let DancesPage = class DancesPage {
    constructor() {
        this.isDancing = false;
    }
    ngOnInit() {
        cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.getDanceList().then((res) => {
            this.danceNames = res.result;
        });
    }
    stopDance() {
        cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.isDancing().then((res) => {
            if (res.result) {
                cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.stopDance();
            }
        });
    }
    changeDance() {
        this.stopDance();
        cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.dance({ danceName: this.selectedDance });
    }
};
DancesPage.ctorParameters = () => [];
DancesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-dances',
        template: _dances_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_dances_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], DancesPage);



/***/ }),

/***/ 2000:
/*!****************************************************!*\
  !*** ./src/app/dances/dances.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYW5jZXMucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 3227:
/*!****************************************************!*\
  !*** ./src/app/dances/dances.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Dances</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Set the Cruzr dance\n      </ion-label>\n    </ion-list-header>\n    <ion-item>\n      <ion-label>Dance name</ion-label>\n      <ion-select *ngIf=\"this.danceNames\" [(ngModel)]=\"selectedDance\" placeholder=\"Select a dance\">\n        <ion-select-option *ngFor=\"let val of danceNames\" [value]=\"val\">{{val}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-button (click)=\"changeDance()\" color=\"success\">Start</ion-button>\n    <ion-button (click)=\"stopDance()\" color=\"danger\">Stop</ion-button>\n  </ion-list>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_dances_dances_module_ts.js.map