"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_speech_speech_module_ts"],{

/***/ 8964:
/*!*************************************************!*\
  !*** ./src/app/speech/speech-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechPageRoutingModule": () => (/* binding */ SpeechPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _speech_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech.page */ 3099);




const routes = [
    {
        path: '',
        component: _speech_page__WEBPACK_IMPORTED_MODULE_0__.SpeechPage
    }
];
let SpeechPageRoutingModule = class SpeechPageRoutingModule {
};
SpeechPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SpeechPageRoutingModule);



/***/ }),

/***/ 1894:
/*!*****************************************!*\
  !*** ./src/app/speech/speech.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechPageModule": () => (/* binding */ SpeechPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 4362);
/* harmony import */ var _speech_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech-routing.module */ 8964);
/* harmony import */ var _speech_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech.page */ 3099);







let SpeechPageModule = class SpeechPageModule {
};
SpeechPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _speech_routing_module__WEBPACK_IMPORTED_MODULE_0__.SpeechPageRoutingModule
        ],
        declarations: [_speech_page__WEBPACK_IMPORTED_MODULE_1__.SpeechPage]
    })
], SpeechPageModule);



/***/ }),

/***/ 3099:
/*!***************************************!*\
  !*** ./src/app/speech/speech.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechPage": () => (/* binding */ SpeechPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _speech_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech.page.html?ngResource */ 5882);
/* harmony import */ var _speech_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./speech.page.scss?ngResource */ 3573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../cruzrsdk */ 8603);





let SpeechPage = class SpeechPage {
    constructor() {
        this.volume = 50;
        this.text = 'test message';
    }
    ngOnInit() {
    }
    speechSetTtsVolume() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.speechSetTtsVolume({ volume: this.volume });
    }
    speechStartTTS() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.speechStartTTS({ text: this.text });
    }
    speechStopTTS() {
        _cruzrsdk__WEBPACK_IMPORTED_MODULE_2__.CruzrSdk.speechStopTTS();
    }
};
SpeechPage.ctorParameters = () => [];
SpeechPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-speech',
        template: _speech_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_speech_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    }),
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [])
], SpeechPage);



/***/ }),

/***/ 3573:
/*!****************************************************!*\
  !*** ./src/app/speech/speech.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcGVlY2gucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 5882:
/*!****************************************************!*\
  !*** ./src/app/speech/speech.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>TTS System</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>Text to say</ion-label>\n    <ion-input [(ngModel)]=\"text\" placeholder=\"Enter text....\"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label>Volume</ion-label>\n\n    <ion-range (ionChange)=\"speechSetTtsVolume()\" [(ngModel)]=\"volume\" [max]=\"100\" [min]=\"0\" step=\"1\">\n    </ion-range>\n  </ion-item>\n\n  <ion-button (click)=\"speechStartTTS()\" color=\"success\" expand=\"block\">Speak</ion-button>\n  <ion-button (click)=\"speechStopTTS()\" color=\"danger\" expand=\"block\">STOP TTS</ion-button>\n\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_speech_speech_module_ts.js.map