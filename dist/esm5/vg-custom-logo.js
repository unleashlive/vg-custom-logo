/**
 * @license vg-custom-logo
 * MIT license
 */

import { Component, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VgAPI, VgCoreModule } from 'videogular2/core';
import { FormsModule } from '@angular/forms';

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
        { type: Component, args: [{
                    selector: 'vg-custom-logo',
                    template: "\n    <div class=\"logo-layer\" *ngIf=\"API.state != 'playing'\">\n      <img [src]=\"src\" />\n    </div>\n  ",
                    styles: ["\n    .logo-layer {\n      position: absolute;\n      display: block;\n      top: 0;\n    }\n    img {\n      width: 150px;\n      margin-left: 20px;\n      margin-top: 20px;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    VgCustomLogo.ctorParameters = function () { return [
        { type: ElementRef, },
        { type: VgAPI, },
    ]; };
    VgCustomLogo.propDecorators = {
        "vgFor": [{ type: Input },],
        "src": [{ type: Input },],
    };
    return VgCustomLogo;
}());
var VgCustomLogoModule = (function () {
    function VgCustomLogoModule() {
    }
    VgCustomLogoModule.decorators = [
        { type: NgModule, args: [{
                    imports: [VgCoreModule, FormsModule, CommonModule],
                    declarations: [VgCustomLogo],
                    exports: [VgCustomLogo]
                },] },
    ];
    /** @nocollapse */
    VgCustomLogoModule.ctorParameters = function () { return []; };
    return VgCustomLogoModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * MIT license
 * https://github.com/robisim74/vg-custom-logo
 */
/**
 * Entry point for all public APIs of the package.
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { VgCustomLogo, VgCustomLogoModule };
//# sourceMappingURL=vg-custom-logo.js.map
