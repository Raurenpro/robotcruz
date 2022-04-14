"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_movejoint_movejoint_module_ts"],{

/***/ 248:
/*!*******************************************************!*\
  !*** ./src/app/movejoint/movejoint-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovejointPageRoutingModule": () => (/* binding */ MovejointPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _movejoint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movejoint.page */ 3320);




const routes = [
    {
        path: '',
        component: _movejoint_page__WEBPACK_IMPORTED_MODULE_0__.MovejointPage
    }
];
let MovejointPageRoutingModule = class MovejointPageRoutingModule {
};
MovejointPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MovejointPageRoutingModule);



/***/ }),

/***/ 3897:
/*!***********************************************!*\
  !*** ./src/app/movejoint/movejoint.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovejointPageModule": () => (/* binding */ MovejointPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _movejoint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movejoint-routing.module */ 248);
/* harmony import */ var _movejoint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movejoint.page */ 3320);







let MovejointPageModule = class MovejointPageModule {
};
MovejointPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _movejoint_routing_module__WEBPACK_IMPORTED_MODULE_0__.MovejointPageRoutingModule
        ],
        declarations: [_movejoint_page__WEBPACK_IMPORTED_MODULE_1__.MovejointPage]
    })
], MovejointPageModule);



/***/ }),

/***/ 3320:
/*!*********************************************!*\
  !*** ./src/app/movejoint/movejoint.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovejointPage": () => (/* binding */ MovejointPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _movejoint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./movejoint.page.html?ngResource */ 4858);
/* harmony import */ var _movejoint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movejoint.page.scss?ngResource */ 9986);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../cruzrsdk */ 8603);





let MovejointPage = class MovejointPage {
    constructor(ngZone) {
        this.ngZone = ngZone;
        // eslint-disable-next-line max-len
        this.partNames = ['LShoulderPitch', 'LShoulderRoll', 'LShoulderYaw', 'LElbowRoll', 'LElbowYaw', 'LWristRoll', 'RShoulderPitch', 'RShoulderRoll', 'RShoulderYaw', 'RElbowRoll', 'RElbowYaw', 'RWristRoll', 'HeadYaw', 'HeadPitch', 'LHand', 'RHand'];
        this.selectedPart = 'LShoulderPitch';
        this.duration = 3;
        this.angle = 0.0;
        // eslint-disable-next-line @typescript-eslint/naming-convention
        this.Math = Math;
        this.currentCallbackId = null;
    }
    ngOnInit() {
        this.getAngle();
    }
    updateAngle() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.moveJoint({ jointName: this.selectedPart, angle: this.angle, time: this.duration }).then((res) => {
            this.resCode = res.result;
        });
    }
    stopJoints() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.stopJoint();
    }
    getAngle() {
        if (this.currentCallbackId) {
            _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.clearWatch({ id: this.currentCallbackId });
        }
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.watchJointAngle({ jointName: this.selectedPart, interval: 10 }, (res) => this.ngZone.run(() => {
            this.currentAngle = res.result;
        })).then((res) => {
            this.currentCallbackId = res;
        });
    }
};
MovejointPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone }
];
MovejointPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-movejoint',
        template: _movejoint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_movejoint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone])
], MovejointPage);



/***/ }),

/***/ 9986:
/*!**********************************************************!*\
  !*** ./src/app/movejoint/movejoint.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb3Zlam9pbnQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 4858:
/*!**********************************************************!*\
  !*** ./src/app/movejoint/movejoint.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Move robot joints</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      <ion-label>\n        Move a joint\n      </ion-label>\n    </ion-list-header>\n\n    <ion-item>\n      <ion-label>Joint name</ion-label>\n      <ion-select [(ngModel)]=\"selectedPart\" placeholder=\"Select a joint\">\n        <ion-select-option *ngFor=\"let val of partNames\" [value]=\"val\">{{val}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Angle move ([-2π, 2π])</ion-label>\n\n      <ion-range (ionChange)=\"updateAngle()\" [(ngModel)]=\"angle\" [max]=\"2 * Math.PI\" [min]=\"-2 * Math.PI\" step=\"0.01\">\n      </ion-range>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Duration (sec)</ion-label>\n      <ion-input [(ngModel)]=\"duration\" type=\"number\" value=\"2\"></ion-input>\n    </ion-item>\n\n    <ion-item button>\n      <ion-label>\n        Current angle : {{ currentAngle }}\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n\n  <h1>Joint move result code : {{ resCode }}</h1>\n\n  <ion-button (click)=\"stopJoints()\" color=\"danger\" expand=\"block\">STOP</ion-button>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_movejoint_movejoint_module_ts.js.map