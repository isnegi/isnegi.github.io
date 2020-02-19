(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-contact-form/app-contact-form.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-contact-form/app-contact-form.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n  <div class=\"form-container\">\n    <h2>Convinced To Work With Us?</h2>\n    <p>Company has helped agencies keep their promises to clients since 2005.</p>\n    <form action=\"\">\n      <div>\n        <label for=\"f-name\">Fullname</label>\n        <input id=\"f-name\" type=\"text\" placeholder=\"Fullname\">\n        <label for=\"e-mail\">Email Address</label>\n        <input id=\"e-mail\" type=\"text\" placeholder=\"Email Address\">\n        <label for=\"phone\">Phone Number</label>\n        <input id=\"phone\" type=\"text\" placeholder=\"Phone Number\">\n      </div>\n      <div>\n        <label for=\"message\">Message in brief</label>\n        <textarea name=\"\" id=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Message in brief\"></textarea>\n      </div>\n      <button>Submit</button>\n\n    </form>\n  </div>\n</section>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-footer/app-footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-footer/app-footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-wrapper\">\n  <div class=\"copyright\">\n    <span>© 2017 Company. All Rights Reserved.</span>\n  </div>\n  <div class=\"social-links\">\n    <span>Follow us on: </span>\n    <nav title=\"external: social links\">\n    <a *ngFor=\"let element of socialLinks\" href=\"{{element.src}}\"><img src=\"{{element.logo}}\" alt=\"{{element.alt}}\"></a>\n    </nav>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app-header/app-header.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app-header/app-header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header-wrapper\">\n  <span>COMPANY <span>LOGO</span></span>\n  <nav title=\"main navigation panel\">\n    <ul id=\"navList\">\n      <li><a href=\"#\">About</a></li>\n      <li><a href=\"#\">Services</a></li>\n      <li><a href=\"#\">Solutions</a></li>\n      <li><a href=\"#\">Blog</a></li>\n    </ul>\n    <button><span>ICON</span> Get In Touch</button>\n  </nav>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <header>\n    <app-header></app-header>\n  </header>\n  <main>\n    <section>\n      <div class=\"app-banner\">\n        <h1>Integer bibendum sit amet arcu vel egestas.</h1>\n        <div>\n          <app-service-icon [service]=\"element\" *ngFor=\"let element of serviceList\"></app-service-icon>\n        </div>\n      </div>\n    </section>\n    <section>\n      <div class=\"main-content\">\n        <div>\n          <h2>Mauris id bibendum est. Proin dapibus sollicitudin iaculis, Mae</h2>\n          <p>In maximus euismod egestas. Fusce tincidunt posuere est non elementum. In maximus euismod egestas. Fusce\n            tincidunt posuere est non elementum. In maximus euismod egestas. Fusce tincidunt posuere est non elementum.\n            In maximus euismod egestas. Fusce tincidunt posuere est non elementum. In maximus euismod egestas. Fusce\n            tincidunt posuere est non elementum.</p>\n        </div>\n        <img src=\"../assets/images/people-on-globe.png\" alt=\"this images contains a picture of globe with peoples pinned on it.\">\n      </div>\n    </section>\n    <section>\n      <div class=\"user-feedback\">\n        <h1>TESTIMONIALS</h1>\n        <div class=\"feedback-box\">\n          <app-feedback-thumbnail *ngFor=\"let i of [1, 2, 3]\"></app-feedback-thumbnail>\n        </div>\n      </div>\n    </section>\n    <app-contact-form></app-contact-form>\n  </main>\n  <footer>\n    <app-footer></app-footer>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.html ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <div class=\"bubble\">\n    <p>Mauris at quam at mauris venenatis eleifend. Nullam eleifend o Mauris at quam at mauris venenatis eleifend.\n      Nullam eleifend o</p>\n  </div>\n  <div class=\"user-icon\">\n    <div>\n      <!-- <span class=\"user-avatar\"></span> -->\n      <img src=\"../../../assets/icons/user-avatar.png\" alt=\"user icon\">\n    </div>\n    <div>\n      <p>CLIENT NAME</p>\n      <p>Position, ORG</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/service-icon/service-icon.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/service-icon/service-icon.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <img src=\"{{service.url}}\" alt=\"{{service.alt}}\">\n  <span>{{service.name}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/app-contact-form/app-contact-form.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/app-contact-form/app-contact-form.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\ndiv.form-container {\n  width: 100%;\n  background-size: cover !important;\n  color: #FFF;\n}\n/* Header & Footer both shares almost identical layout */\n/* standards hyperlins */\ndiv.form-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* layout as column */\ndiv.form-container {\n  flex-direction: column;\n}\ndiv.form-container {\n  background: url('form-bg-banner.png') no-repeat center center;\n  min-height: 536px;\n}\ndiv.form-container form div label {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\ndiv.form-container form div > input, div.form-container form textarea {\n  border-radius: 0.2rem;\n  height: 2rem;\n  border: none;\n  padding-left: 0.6rem;\n  margin: 0.8rem 1.2rem;\n  min-width: 18rem;\n}\ndiv.form-container form div > textarea {\n  min-width: 95%;\n  height: inherit;\n  padding-top: 0.8rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbnRhY3QtZm9ybS9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zcmNcXGFwcFxcYXBwLWNvbnRhY3QtZm9ybVxcYXBwLWNvbnRhY3QtZm9ybS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWNvbnRhY3QtZm9ybS9hcHAtY29udGFjdC1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAtY29udGFjdC1mb3JtL0Q6XFxfY29kZV9wcmFjdGljZVxcQXhlbGVyYW50L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDhCQUFBO0FBSUEsMEJBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxpQ0FBQTtFQUNBLFdBQUE7QUNQSjtBRFdBLHdEQUFBO0FBVUEsd0JBQUE7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDdEJKO0FEeUJBLHFCQUFBO0FBQ0E7RUFFSSxzQkFBQTtBQ3ZCSjtBQ2pCQTtFQUVJLDZEQUFBO0VBQ0EsaUJBQUE7QURtQko7QUNqQlE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FEbUJaO0FDakJRO0VBQ0kscUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBRG1CWjtBQ2pCUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QURtQloiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29udGFjdC1mb3JtL2FwcC1jb250YWN0LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3RhbmRhcmQtcGFkZGluZzogMSUgNiU7O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VlM2IwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc0NmQ2YjtcclxuJHByaW1hcnktZm9udHM6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXHJcbiRsZXR0ZXItc3BhY2UtaW46IDAuNHB4O1xyXG4kd29yZC1zcGFjZS1pbjogMS4ycHg7XHJcblxyXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cclxuJWZ1bGwtd2lkdGgtYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlci1hcy1jb2w7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xyXG4lY29tbW9uLWZvb3QtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAkc3RhbmRhcmQtcGFkZGluZztcclxuICAgIGJhY2tncm91bmQ6ICMxNzE1MTM7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFuZGFyZHMgaHlwZXJsaW5zICovXHJcbiVjb21tb24tbGlua3Mge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiVmbGV4LWluLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBsYXlvdXQgYXMgY29sdW1uICovXHJcbiVmbGV4LWluLWNlbnRlci1hcy1jb2wge1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4iLCIvKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cbmRpdi5mb3JtLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGO1xufVxuXG4vKiBIZWFkZXIgJiBGb290ZXIgYm90aCBzaGFyZXMgYWxtb3N0IGlkZW50aWNhbCBsYXlvdXQgKi9cbi8qIHN0YW5kYXJkcyBoeXBlcmxpbnMgKi9cbmRpdi5mb3JtLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4vKiBsYXlvdXQgYXMgY29sdW1uICovXG5kaXYuZm9ybS1jb250YWluZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5kaXYuZm9ybS1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmctYmFubmVyLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcbiAgbWluLWhlaWdodDogNTM2cHg7XG59XG5kaXYuZm9ybS1jb250YWluZXIgZm9ybSBkaXYgbGFiZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IC0xcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJvcmRlcjogMDtcbn1cbmRpdi5mb3JtLWNvbnRhaW5lciBmb3JtIGRpdiA+IGlucHV0LCBkaXYuZm9ybS1jb250YWluZXIgZm9ybSB0ZXh0YXJlYSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMC42cmVtO1xuICBtYXJnaW46IDAuOHJlbSAxLjJyZW07XG4gIG1pbi13aWR0aDogMThyZW07XG59XG5kaXYuZm9ybS1jb250YWluZXIgZm9ybSBkaXYgPiB0ZXh0YXJlYSB7XG4gIG1pbi13aWR0aDogOTUlO1xuICBoZWlnaHQ6IGluaGVyaXQ7XG4gIHBhZGRpbmctdG9wOiAwLjhyZW07XG59IiwiQGltcG9ydCBcIi4uL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuZGl2LmZvcm0tY29udGFpbmVyIHtcclxuICAgIEBleHRlbmQgJWZ1bGwtd2lkdGgtYmFubmVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2Zvcm0tYmctYmFubmVyLnBuZycpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNTM2cHg7XHJcbiAgICBmb3JtIHtcclxuICAgICAgICBkaXYgbGFiZWwge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IC0xcHg7XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIGNsaXA6IHJlY3QoMCwwLDAsMCk7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2ID4gaW5wdXQsIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwLjZyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC44cmVtIDEuMnJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGl2ID4gdGV4dGFyZWEge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDk1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBpbmhlcml0O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMC44cmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app-contact-form/app-contact-form.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-contact-form/app-contact-form.component.ts ***!
  \****************************************************************/
/*! exports provided: AppContactFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppContactFormComponent", function() { return AppContactFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppContactFormComponent = class AppContactFormComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppContactFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-form',
        template: __webpack_require__(/*! raw-loader!./app-contact-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-contact-form/app-contact-form.component.html"),
        styles: [__webpack_require__(/*! ./app-contact-form.component.scss */ "./src/app/app-contact-form/app-contact-form.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppContactFormComponent);



/***/ }),

/***/ "./src/app/app-footer/app-footer.component.scss":
/*!******************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\n/* Header & Footer both shares almost identical layout */\ndiv.footer-wrapper {\n  padding: 1% 6%;\n  background: #171513;\n  color: #746d6b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/* standards hyperlins */\ndiv.footer-wrapper div.social-links nav a {\n  color: inherit;\n  text-decoration: none;\n}\ndiv.footer-wrapper div.social-links {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* layout as column */\ndiv.footer-wrapper {\n  /* overriding padding as footer has more gutter space than header */\n  padding: 2% 6%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWZvb3Rlci9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zcmNcXGFwcFxcYXBwLWZvb3RlclxcYXBwLWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWZvb3Rlci9hcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAtZm9vdGVyL0Q6XFxfY29kZV9wcmFjdGljZVxcQXhlbGVyYW50L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDhCQUFBO0FBSUEsMEJBQUE7QUFRQSx3REFBQTtBQUNBO0VBQ0ksY0FuQmU7RUFvQmYsbUJBQUE7RUFDQSxjQW5CYztFQW9CZCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2RKO0FEaUJBLHdCQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNkSjtBRGlCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZEo7QURpQkEscUJBQUE7QUVyQ0E7RUFFSSxtRUFBQTtFQUNBLGNBQUE7QUR1QkoiLCJmaWxlIjoic3JjL2FwcC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3RhbmRhcmQtcGFkZGluZzogMSUgNiU7O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VlM2IwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc0NmQ2YjtcclxuJHByaW1hcnktZm9udHM6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXHJcbiRsZXR0ZXItc3BhY2UtaW46IDAuNHB4O1xyXG4kd29yZC1zcGFjZS1pbjogMS4ycHg7XHJcblxyXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cclxuJWZ1bGwtd2lkdGgtYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlci1hcy1jb2w7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xyXG4lY29tbW9uLWZvb3QtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAkc3RhbmRhcmQtcGFkZGluZztcclxuICAgIGJhY2tncm91bmQ6ICMxNzE1MTM7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFuZGFyZHMgaHlwZXJsaW5zICovXHJcbiVjb21tb24tbGlua3Mge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiVmbGV4LWluLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBsYXlvdXQgYXMgY29sdW1uICovXHJcbiVmbGV4LWluLWNlbnRlci1hcy1jb2wge1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4iLCIvKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xuZGl2LmZvb3Rlci13cmFwcGVyIHtcbiAgcGFkZGluZzogMSUgNiU7XG4gIGJhY2tncm91bmQ6ICMxNzE1MTM7XG4gIGNvbG9yOiAjNzQ2ZDZiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qIHN0YW5kYXJkcyBoeXBlcmxpbnMgKi9cbmRpdi5mb290ZXItd3JhcHBlciBkaXYuc29jaWFsLWxpbmtzIG5hdiBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuZGl2LmZvb3Rlci13cmFwcGVyIGRpdi5zb2NpYWwtbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbGF5b3V0IGFzIGNvbHVtbiAqL1xuZGl2LmZvb3Rlci13cmFwcGVyIHtcbiAgLyogb3ZlcnJpZGluZyBwYWRkaW5nIGFzIGZvb3RlciBoYXMgbW9yZSBndXR0ZXIgc3BhY2UgdGhhbiBoZWFkZXIgKi9cbiAgcGFkZGluZzogMiUgNiU7XG59IiwiQGltcG9ydCBcIi4uL2dsb2JhbHMuc2Nzc1wiO1xyXG5cclxuZGl2LmZvb3Rlci13cmFwcGVyIHtcclxuICAgIEBleHRlbmQgJWNvbW1vbi1mb290LWhlYWQ7XHJcbiAgICAvKiBvdmVycmlkaW5nIHBhZGRpbmcgYXMgZm9vdGVyIGhhcyBtb3JlIGd1dHRlciBzcGFjZSB0aGFuIGhlYWRlciAqL1xyXG4gICAgcGFkZGluZzogMiUgNiU7XHJcbiAgICBkaXYuc29jaWFsLWxpbmtzIHtcclxuICAgICAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlcjtcclxuICAgICAgICBuYXYgYSB7XHJcbiAgICAgICAgICAgIEBleHRlbmQgJWNvbW1vbi1saW5rcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app-footer/app-footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-footer/app-footer.component.ts ***!
  \****************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppFooterComponent = class AppFooterComponent {
    constructor() {
        /* initializes the list with social media references */
        this.socialLinks = [
            { alt: 'facebook logo', src: 'https://facebook.com', logo: '../../assets/icons/icon-fb.png' },
            { alt: 'twitter logo', src: 'https://twitter.com', logo: '../../assets/icons/icon-twtr.png' },
            { alt: 'linkedin logo', src: 'https://linkedin.com', logo: '../../assets/icons/icon-ln.png' },
            { alt: 'email logo', src: 'mailto@shubhamnegi.singh882@gmail.com', logo: '../../assets/icons/icon-mail.png' },
        ];
    }
    ngOnInit() {
    }
};
AppFooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./app-footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-footer/app-footer.component.html"),
        styles: [__webpack_require__(/*! ./app-footer.component.scss */ "./src/app/app-footer/app-footer.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppFooterComponent);



/***/ }),

/***/ "./src/app/app-header/app-header.component.scss":
/*!******************************************************!*\
  !*** ./src/app/app-header/app-header.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\n/* Header & Footer both shares almost identical layout */\ndiv.header-wrapper {\n  padding: 1% 6%;\n  background: #171513;\n  color: #746d6b;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n/* standards hyperlins */\ndiv.header-wrapper nav ul li a {\n  color: inherit;\n  text-decoration: none;\n}\n/* layout as column */\ndiv.header-wrapper nav {\n  display: flex;\n}\ndiv.header-wrapper nav ul {\n  margin: 0;\n  padding: 0;\n}\ndiv.header-wrapper nav ul li {\n  display: inline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWhlYWRlci9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zcmNcXGFwcFxcYXBwLWhlYWRlclxcYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLWhlYWRlci9hcHAtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAtaGVhZGVyL0Q6XFxfY29kZV9wcmFjdGljZVxcQXhlbGVyYW50L3N0ZGluIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLDhCQUFBO0FBSUEsMEJBQUE7QUFRQSx3REFBQTtBQUNBO0VBQ0ksY0FuQmU7RUFvQmYsbUJBQUE7RUFDQSxjQW5CYztFQW9CZCxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQ2RKO0FEaUJBLHdCQUFBO0FBQ0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNkSjtBRHVCQSxxQkFBQTtBRWhDSTtFQUNJLGFBQUE7QURhUjtBQ1pRO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QURjWjtBQ2JZO0VBQ0ksZUFBQTtBRGVoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdGFuZGFyZC1wYWRkaW5nOiAxJSA2JTs7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWUzYjAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzQ2ZDZiO1xyXG4kcHJpbWFyeS1mb250czogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHJcbi8qIHdvcmRzIGFuZCBsZXR0ZXIgc3BhY2luZ3MgKi9cclxuJGxldHRlci1zcGFjZS1pbjogMC40cHg7XHJcbiR3b3JkLXNwYWNlLWluOiAxLjJweDtcclxuXHJcbi8qIGJhbm5lciBjb21tb24gc3R5bGluZyAqL1xyXG4lZnVsbC13aWR0aC1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIEBleHRlbmQgJWZsZXgtaW4tY2VudGVyLWFzLWNvbDtcclxufVxyXG5cclxuLyogSGVhZGVyICYgRm9vdGVyIGJvdGggc2hhcmVzIGFsbW9zdCBpZGVudGljYWwgbGF5b3V0ICovXHJcbiVjb21tb24tZm9vdC1oZWFkIHtcclxuICAgIHBhZGRpbmc6ICRzdGFuZGFyZC1wYWRkaW5nO1xyXG4gICAgYmFja2dyb3VuZDogIzE3MTUxMztcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0YW5kYXJkcyBoeXBlcmxpbnMgKi9cclxuJWNvbW1vbi1saW5rcyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuJWZsZXgtaW4tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIGxheW91dCBhcyBjb2x1bW4gKi9cclxuJWZsZXgtaW4tY2VudGVyLWFzLWNvbCB7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiIsIi8qIHdvcmRzIGFuZCBsZXR0ZXIgc3BhY2luZ3MgKi9cbi8qIGJhbm5lciBjb21tb24gc3R5bGluZyAqL1xuLyogSGVhZGVyICYgRm9vdGVyIGJvdGggc2hhcmVzIGFsbW9zdCBpZGVudGljYWwgbGF5b3V0ICovXG5kaXYuaGVhZGVyLXdyYXBwZXIge1xuICBwYWRkaW5nOiAxJSA2JTtcbiAgYmFja2dyb3VuZDogIzE3MTUxMztcbiAgY29sb3I6ICM3NDZkNmI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogc3RhbmRhcmRzIGh5cGVybGlucyAqL1xuZGl2LmhlYWRlci13cmFwcGVyIG5hdiB1bCBsaSBhIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLyogbGF5b3V0IGFzIGNvbHVtbiAqL1xuZGl2LmhlYWRlci13cmFwcGVyIG5hdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5kaXYuaGVhZGVyLXdyYXBwZXIgbmF2IHVsIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuZGl2LmhlYWRlci13cmFwcGVyIG5hdiB1bCBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbn0iLCJAaW1wb3J0IFwiLi4vZ2xvYmFscy5zY3NzXCI7XHJcblxyXG4vLyAuaGVhZGVyLXdyYXBwZXIge1xyXG4vLyAgICAgcGFkZGluZzogJHN0YW5kYXJkLXBhZGRpbmc7XHJcbi8vIH1cclxuZGl2LmhlYWRlci13cmFwcGVyIHtcclxuICAgIEBleHRlbmQgJWNvbW1vbi1mb290LWhlYWQ7XHJcbiAgICBuYXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgdWwge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgIEBleHRlbmQgJWNvbW1vbi1saW5rcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app-header/app-header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/app-header/app-header.component.ts ***!
  \****************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppHeaderComponent = class AppHeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./app-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/app-header/app-header.component.html"),
        styles: [__webpack_require__(/*! ./app-header.component.scss */ "./src/app/app-header/app-header.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppHeaderComponent);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\ndiv.app-banner {\n  width: 100%;\n  background-size: cover !important;\n  color: #FFF;\n}\n/* Header & Footer both shares almost identical layout */\n/* standards hyperlins */\ndiv.user-feedback div.feedback-box, div.main-content, div.app-banner div, div.user-feedback, div.app-banner {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* layout as column */\ndiv.user-feedback, div.app-banner {\n  flex-direction: column;\n}\ndiv.app-banner {\n  background: url('banner.png') no-repeat center center;\n  min-height: 770px;\n}\ndiv.main-content {\n  padding: 1% 6%;\n  justify-content: normal;\n}\ndiv.main-content div {\n  width: 50%;\n}\ndiv.user-feedback {\n  padding: 1% 6%;\n  background: #f7f7f7;\n}\ndiv.user-feedback div.feedback-box {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXF9jb2RlX3ByYWN0aWNlXFxBeGVsZXJhbnQvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zdGRpbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSw4QkFBQTtBQUlBLDBCQUFBO0FBQ0E7RUFDSSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0FDUEo7QURXQSx3REFBQTtBQVVBLHdCQUFBO0FBTUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3RCSjtBRHlCQSxxQkFBQTtBQUNBO0VBRUksc0JBQUE7QUN2Qko7QUNqQkE7RUFFSSxxREFBQTtFQUNBLGlCQUFBO0FEbUJKO0FDYkE7RUFDSSxjRlplO0VFYWYsdUJBQUE7QURlSjtBQ2JJO0VBQ0ksVUFBQTtBRGVSO0FDWEE7RUFDSSxjRnJCZTtFRXVCZixtQkFBQTtBRGFKO0FDWkk7RUFDSSxXQUFBO0FEY1IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3RhbmRhcmQtcGFkZGluZzogMSUgNiU7O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VlM2IwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc0NmQ2YjtcclxuJHByaW1hcnktZm9udHM6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXHJcbiRsZXR0ZXItc3BhY2UtaW46IDAuNHB4O1xyXG4kd29yZC1zcGFjZS1pbjogMS4ycHg7XHJcblxyXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cclxuJWZ1bGwtd2lkdGgtYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlci1hcy1jb2w7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xyXG4lY29tbW9uLWZvb3QtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAkc3RhbmRhcmQtcGFkZGluZztcclxuICAgIGJhY2tncm91bmQ6ICMxNzE1MTM7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFuZGFyZHMgaHlwZXJsaW5zICovXHJcbiVjb21tb24tbGlua3Mge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiVmbGV4LWluLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBsYXlvdXQgYXMgY29sdW1uICovXHJcbiVmbGV4LWluLWNlbnRlci1hcy1jb2wge1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4iLCIvKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cbmRpdi5hcHAtYmFubmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgY29sb3I6ICNGRkY7XG59XG5cbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xuLyogc3RhbmRhcmRzIGh5cGVybGlucyAqL1xuZGl2LnVzZXItZmVlZGJhY2sgZGl2LmZlZWRiYWNrLWJveCwgZGl2Lm1haW4tY29udGVudCwgZGl2LmFwcC1iYW5uZXIgZGl2LCBkaXYudXNlci1mZWVkYmFjaywgZGl2LmFwcC1iYW5uZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbGF5b3V0IGFzIGNvbHVtbiAqL1xuZGl2LnVzZXItZmVlZGJhY2ssIGRpdi5hcHAtYmFubmVyIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZGl2LmFwcC1iYW5uZXIge1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5wbmdcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDc3MHB4O1xufVxuZGl2Lm1haW4tY29udGVudCB7XG4gIHBhZGRpbmc6IDElIDYlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbn1cbmRpdi5tYWluLWNvbnRlbnQgZGl2IHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuZGl2LnVzZXItZmVlZGJhY2sge1xuICBwYWRkaW5nOiAxJSA2JTtcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbn1cbmRpdi51c2VyLWZlZWRiYWNrIGRpdi5mZWVkYmFjay1ib3gge1xuICB3aWR0aDogMTAwJTtcbn0iLCJAaW1wb3J0IFwiLi9nbG9iYWxzLnNjc3NcIjtcclxuXHJcbmRpdi5hcHAtYmFubmVyIHtcclxuICAgIEBleHRlbmQgJWZ1bGwtd2lkdGgtYmFubmVyO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvaW1hZ2VzL2Jhbm5lci5wbmcnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDc3MHB4O1xyXG4gICAgZGl2IHtcclxuICAgICAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlcjtcclxuICAgIH1cclxuXHJcbn1cclxuZGl2Lm1haW4tY29udGVudCB7XHJcbiAgICBwYWRkaW5nOiAkc3RhbmRhcmQtcGFkZGluZztcclxuICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXI7XHJcbiAgICBkaXYge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICB9XHJcblxyXG59XHJcbmRpdi51c2VyLWZlZWRiYWNrIHtcclxuICAgIHBhZGRpbmc6ICRzdGFuZGFyZC1wYWRkaW5nO1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXItYXMtY29sO1xyXG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcclxuICAgIGRpdi5mZWVkYmFjay1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIEBleHRlbmQgJWZsZXgtaW4tY2VudGVyO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Axelerant';
        this.serviceList = [
            {
                url: '../../../assets/icons/service-icon-a.png',
                alt: 'service icon a',
                name: 'Service Name'
            }, {
                url: '../../../assets/icons/service-icon-b.png',
                alt: 'service icon b',
                name: 'Service Name'
            }, {
                url: '../../../assets/icons/service-icon-c.png',
                alt: 'service icon c',
                name: 'Service Name'
            }
        ];
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-header/app-header.component */ "./src/app/app-header/app-header.component.ts");
/* harmony import */ var _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-footer/app-footer.component */ "./src/app/app-footer/app-footer.component.ts");
/* harmony import */ var _app_contact_form_app_contact_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-contact-form/app-contact-form.component */ "./src/app/app-contact-form/app-contact-form.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");








let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _app_header_app_header_component__WEBPACK_IMPORTED_MODULE_4__["AppHeaderComponent"],
            _app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_5__["AppFooterComponent"],
            _app_contact_form_app_contact_form_component__WEBPACK_IMPORTED_MODULE_6__["AppContactFormComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\n/* Header & Footer both shares almost identical layout */\n/* standards hyperlins */\ndiv div.user-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* layout as column */\n.bubble {\n  background-color: #fff;\n  border-radius: 1.2rem;\n  box-shadow: 0px 0px 6px 0px rgba(255, 255, 255, 0.5), 0px 0px 4px 2px rgba(0, 0, 0, 0.1);\n  color: #887b77;\n  display: inline-block;\n  font: 16px sans-serif;\n  padding: 1.2rem 2.2rem;\n  position: relative;\n  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.5);\n  margin-right: 2rem;\n  line-height: 1.6rem;\n}\n.bubble:after, .bubble:before {\n  border-bottom: 25px solid transparent;\n  border-right: 25px solid #fff;\n  bottom: -25px;\n  content: \"\";\n  position: absolute;\n  right: 80%;\n}\ndiv div.user-icon {\n  justify-content: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ZlZWRiYWNrLXRodW1ibmFpbC9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zcmNcXGFwcFxcc2hhcmVkXFxmZWVkYmFjay10aHVtYm5haWxcXGZlZWRiYWNrLXRodW1ibmFpbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL2ZlZWRiYWNrLXRodW1ibmFpbC9mZWVkYmFjay10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9mZWVkYmFjay10aHVtYm5haWwvRDpcXF9jb2RlX3ByYWN0aWNlXFxBeGVsZXJhbnQvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsOEJBQUE7QUFJQSwwQkFBQTtBQVFBLHdEQUFBO0FBVUEsd0JBQUE7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDNUJKO0FEK0JBLHFCQUFBO0FFckNBO0VBQ0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHdGQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FEVUo7QUNSQTtFQUNJLHFDQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRFdKO0FDUkk7RUFFSSx1QkFBQTtBRFVSIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2ZlZWRiYWNrLXRodW1ibmFpbC9mZWVkYmFjay10aHVtYm5haWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkc3RhbmRhcmQtcGFkZGluZzogMSUgNiU7O1xyXG4kcHJpbWFyeS1jb2xvcjogI2VlM2IwMDtcclxuJHNlY29uZGFyeS1jb2xvcjogIzc0NmQ2YjtcclxuJHByaW1hcnktZm9udHM6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcblxyXG4vKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXHJcbiRsZXR0ZXItc3BhY2UtaW46IDAuNHB4O1xyXG4kd29yZC1zcGFjZS1pbjogMS4ycHg7XHJcblxyXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cclxuJWZ1bGwtd2lkdGgtYmFubmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkY7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlci1hcy1jb2w7XHJcbn1cclxuXHJcbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xyXG4lY29tbW9uLWZvb3QtaGVhZCB7XHJcbiAgICBwYWRkaW5nOiAkc3RhbmRhcmQtcGFkZGluZztcclxuICAgIGJhY2tncm91bmQ6ICMxNzE1MTM7XHJcbiAgICBjb2xvcjogJHNlY29uZGFyeS1jb2xvcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4vKiBzdGFuZGFyZHMgaHlwZXJsaW5zICovXHJcbiVjb21tb24tbGlua3Mge1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbiVmbGV4LWluLWNlbnRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4vKiBsYXlvdXQgYXMgY29sdW1uICovXHJcbiVmbGV4LWluLWNlbnRlci1hcy1jb2wge1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4iLCIvKiB3b3JkcyBhbmQgbGV0dGVyIHNwYWNpbmdzICovXG4vKiBiYW5uZXIgY29tbW9uIHN0eWxpbmcgKi9cbi8qIEhlYWRlciAmIEZvb3RlciBib3RoIHNoYXJlcyBhbG1vc3QgaWRlbnRpY2FsIGxheW91dCAqL1xuLyogc3RhbmRhcmRzIGh5cGVybGlucyAqL1xuZGl2IGRpdi51c2VyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbGF5b3V0IGFzIGNvbHVtbiAqL1xuLmJ1YmJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEuMnJlbTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCA2cHggMHB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgMHB4IDBweCA0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgY29sb3I6ICM4ODdiNzc7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udDogMTZweCBzYW5zLXNlcmlmO1xuICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtc2hhZG93OiAwIDFweCAxcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjZyZW07XG59XG5cbi5idWJibGU6YWZ0ZXIsIC5idWJibGU6YmVmb3JlIHtcbiAgYm9yZGVyLWJvdHRvbTogMjVweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXJpZ2h0OiAyNXB4IHNvbGlkICNmZmY7XG4gIGJvdHRvbTogLTI1cHg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDgwJTtcbn1cblxuZGl2IGRpdi51c2VyLWljb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vZ2xvYmFscy5zY3NzXCI7XHJcblxyXG4uYnViYmxlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxLjJyZW07XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDZweCAwcHggcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCAwcHggMHB4IDRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgY29sb3I6ICM4ODdiNzc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250OiAxNnB4IHNhbnMtc2VyaWY7XHJcbiAgICBwYWRkaW5nOiAxLjJyZW0gMi4ycmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS42cmVtO1xyXG59XHJcbi5idWJibGU6YWZ0ZXIsIC5idWJibGU6YmVmb3JlIHtcclxuICAgIGJvcmRlci1ib3R0b206IDI1cHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmlnaHQ6IDI1cHggc29saWQgI2ZmZjtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4MCU7XHJcbn1cclxuZGl2IHtcclxuICAgIGRpdi51c2VyLWljb24ge1xyXG4gICAgICAgIEBleHRlbmQgJWZsZXgtaW4tY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogbm9ybWFsO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.ts ***!
  \***************************************************************************/
/*! exports provided: FeedbackThumbnailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackThumbnailComponent", function() { return FeedbackThumbnailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedbackThumbnailComponent = class FeedbackThumbnailComponent {
    constructor() { }
    ngOnInit() {
    }
};
FeedbackThumbnailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feedback-thumbnail',
        template: __webpack_require__(/*! raw-loader!./feedback-thumbnail.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.html"),
        styles: [__webpack_require__(/*! ./feedback-thumbnail.component.scss */ "./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], FeedbackThumbnailComponent);



/***/ }),

/***/ "./src/app/shared/service-icon/service-icon.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shared/service-icon/service-icon.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* words and letter spacings */\n/* banner common styling */\n/* Header & Footer both shares almost identical layout */\n/* standards hyperlins */\ndiv {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n/* layout as column */\ndiv {\n  flex-direction: column;\n}\ndiv {\n  margin: 0.8rem;\n  border: 1px solid #47433f;\n  padding: 1.2rem;\n  /* these dimensions are to make icons height equal,  */\n}\ndiv img {\n  height: 62px;\n  width: auto;\n}\ndiv span {\n  margin-top: 0.6rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NlcnZpY2UtaWNvbi9EOlxcX2NvZGVfcHJhY3RpY2VcXEF4ZWxlcmFudC9zcmNcXGFwcFxcc2hhcmVkXFxzZXJ2aWNlLWljb25cXHNlcnZpY2UtaWNvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL3NlcnZpY2UtaWNvbi9zZXJ2aWNlLWljb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9zZXJ2aWNlLWljb24vRDpcXF9jb2RlX3ByYWN0aWNlXFxBeGVsZXJhbnQvc3RkaW4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0EsOEJBQUE7QUFJQSwwQkFBQTtBQVFBLHdEQUFBO0FBVUEsd0JBQUE7QUFNQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDNUJKO0FEK0JBLHFCQUFBO0FBQ0E7RUFFSSxzQkFBQTtBQzdCSjtBQ1hBO0VBRUksY0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHNEQUFBO0FEYUo7QUNaSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FEY1I7QUNaSTtFQUNJLGtCQUFBO0FEY1IiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvc2VydmljZS1pY29uL3NlcnZpY2UtaWNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRzdGFuZGFyZC1wYWRkaW5nOiAxJSA2JTs7XHJcbiRwcmltYXJ5LWNvbG9yOiAjZWUzYjAwO1xyXG4kc2Vjb25kYXJ5LWNvbG9yOiAjNzQ2ZDZiO1xyXG4kcHJpbWFyeS1mb250czogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuXHJcbi8qIHdvcmRzIGFuZCBsZXR0ZXIgc3BhY2luZ3MgKi9cclxuJGxldHRlci1zcGFjZS1pbjogMC40cHg7XHJcbiR3b3JkLXNwYWNlLWluOiAxLjJweDtcclxuXHJcbi8qIGJhbm5lciBjb21tb24gc3R5bGluZyAqL1xyXG4lZnVsbC13aWR0aC1iYW5uZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIEBleHRlbmQgJWZsZXgtaW4tY2VudGVyLWFzLWNvbDtcclxufVxyXG5cclxuLyogSGVhZGVyICYgRm9vdGVyIGJvdGggc2hhcmVzIGFsbW9zdCBpZGVudGljYWwgbGF5b3V0ICovXHJcbiVjb21tb24tZm9vdC1oZWFkIHtcclxuICAgIHBhZGRpbmc6ICRzdGFuZGFyZC1wYWRkaW5nO1xyXG4gICAgYmFja2dyb3VuZDogIzE3MTUxMztcclxuICAgIGNvbG9yOiAkc2Vjb25kYXJ5LWNvbG9yO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIHN0YW5kYXJkcyBoeXBlcmxpbnMgKi9cclxuJWNvbW1vbi1saW5rcyB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuJWZsZXgtaW4tY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIGxheW91dCBhcyBjb2x1bW4gKi9cclxuJWZsZXgtaW4tY2VudGVyLWFzLWNvbCB7XHJcbiAgICBAZXh0ZW5kICVmbGV4LWluLWNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbiIsIi8qIHdvcmRzIGFuZCBsZXR0ZXIgc3BhY2luZ3MgKi9cbi8qIGJhbm5lciBjb21tb24gc3R5bGluZyAqL1xuLyogSGVhZGVyICYgRm9vdGVyIGJvdGggc2hhcmVzIGFsbW9zdCBpZGVudGljYWwgbGF5b3V0ICovXG4vKiBzdGFuZGFyZHMgaHlwZXJsaW5zICovXG5kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLyogbGF5b3V0IGFzIGNvbHVtbiAqL1xuZGl2IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuZGl2IHtcbiAgbWFyZ2luOiAwLjhyZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NzQzM2Y7XG4gIHBhZGRpbmc6IDEuMnJlbTtcbiAgLyogdGhlc2UgZGltZW5zaW9ucyBhcmUgdG8gbWFrZSBpY29ucyBoZWlnaHQgZXF1YWwsICAqL1xufVxuZGl2IGltZyB7XG4gIGhlaWdodDogNjJweDtcbiAgd2lkdGg6IGF1dG87XG59XG5kaXYgc3BhbiB7XG4gIG1hcmdpbi10b3A6IDAuNnJlbTtcbn0iLCJAaW1wb3J0IFwiLi4vLi4vZ2xvYmFscy5zY3NzXCI7XHJcblxyXG5kaXYge1xyXG4gICAgQGV4dGVuZCAlZmxleC1pbi1jZW50ZXItYXMtY29sO1xyXG4gICAgbWFyZ2luOiAwLjhyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDc0MzNmO1xyXG4gICAgcGFkZGluZzogMS4ycmVtO1xyXG4gICAgLyogdGhlc2UgZGltZW5zaW9ucyBhcmUgdG8gbWFrZSBpY29ucyBoZWlnaHQgZXF1YWwsICAqL1xyXG4gICAgaW1nIHtcclxuICAgICAgICBoZWlnaHQ6IDYycHg7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICB9XHJcbiAgICBzcGFuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwLjZyZW07XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/service-icon/service-icon.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/service-icon/service-icon.component.ts ***!
  \***************************************************************/
/*! exports provided: ServiceIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceIconComponent", function() { return ServiceIconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServiceIconComponent = class ServiceIconComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ServiceIconComponent.prototype, "service", void 0);
ServiceIconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-service-icon',
        template: __webpack_require__(/*! raw-loader!./service-icon.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/service-icon/service-icon.component.html"),
        styles: [__webpack_require__(/*! ./service-icon.component.scss */ "./src/app/shared/service-icon/service-icon.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ServiceIconComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_icon_service_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service-icon/service-icon.component */ "./src/app/shared/service-icon/service-icon.component.ts");
/* harmony import */ var _feedback_thumbnail_feedback_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feedback-thumbnail/feedback-thumbnail.component */ "./src/app/shared/feedback-thumbnail/feedback-thumbnail.component.ts");





let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _service_icon_service_icon_component__WEBPACK_IMPORTED_MODULE_3__["ServiceIconComponent"],
            _feedback_thumbnail_feedback_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackThumbnailComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
        ],
        exports: [
            _service_icon_service_icon_component__WEBPACK_IMPORTED_MODULE_3__["ServiceIconComponent"],
            _feedback_thumbnail_feedback_thumbnail_component__WEBPACK_IMPORTED_MODULE_4__["FeedbackThumbnailComponent"]
        ],
        providers: []
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_code_practice\Axelerant\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map