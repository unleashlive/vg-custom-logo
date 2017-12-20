(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('videogular2/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'videogular2/core'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.angularLibraryStarter = {}),global.ng.core,global['videogular2/core']));
}(this, (function (exports,core,core$1) { 'use strict';

/**
 * @license vg-custom-logo
 * MIT license
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VgCustomLogo = (function () {
    function VgCustomLogo(ref, API) {
        this.API = API;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    VgCustomLogo.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.API.playerReadyEvent.subscribe(function () { return _this.onPlayerReady(); });
        }
    };
    /**
     * @return {?}
     */
    VgCustomLogo.prototype.onPlayerReady = /**
     * @return {?}
     */
    function () {
        this.target = this.API.getMediaById(this.vgFor);
    };
    VgCustomLogo.decorators = [
        { type: core.Component, args: [{
                    selector: 'vg-custom-logo',
                    encapsulation: core.ViewEncapsulation.None,
                    template: "\n    <div class=\"logo-layer\" *ngIf=\"API.state != 'playing'\">\n      <img [src]=\"src\" />\n    </div>\n  ",
                    styles: ["\n    .logo-layer {\n      position: absolute;\n      display: block;\n      top: 0;\n    }\n    img {\n      width: 150px;\n      margin-left: 20px;\n      margin-top: 20px;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    VgCustomLogo.ctorParameters = function () { return [
        { type: core.ElementRef, },
        { type: core$1.VgAPI, },
    ]; };
    VgCustomLogo.propDecorators = {
        "vgFor": [{ type: core.Input },],
        "src": [{ type: core.Input },],
    };
    return VgCustomLogo;
}());
var VgCustomLogoModule = (function () {
    function VgCustomLogoModule() {
    }
    VgCustomLogoModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [core$1.VgCoreModule],
                    declarations: [VgCustomLogo],
                    exports: [VgCustomLogo]
                },] },
    ];
    /** @nocollapse */
    VgCustomLogoModule.ctorParameters = function () { return []; };
    return VgCustomLogoModule;
}());

exports.VgCustomLogo = VgCustomLogo;
exports.VgCustomLogoModule = VgCustomLogoModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=vg-custom-logo.umd.js.map
