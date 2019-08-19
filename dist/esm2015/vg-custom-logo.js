/**
 * @license vg-custom-logo
 * MIT license
 */

import { Component, ElementRef, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var VgCoreModule = require( "videogular2/compiled/src/core/core");//";
var VgAPI = require( "videogular2/compiled/src/core/services/vg-api");//";
class VgCustomLogo {
    /**
     * @param {?} ref
     * @param {?} API
     */
    constructor(ref, API) {
        this.API = API;
        this.elem = ref.nativeElement;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.API.isPlayerReady) {
            this.onPlayerReady();
        }
        else {
            this.API.playerReadyEvent.subscribe(() => this.onPlayerReady());
        }
    }
    /**
     * @return {?}
     */
    onPlayerReady() {
        this.target = this.API.getMediaById(this.vgFor);
    }
}
VgCustomLogo.decorators = [
    { type: Component, args: [{
                selector: 'vg-custom-logo',
                template: `
    <div class="logo-layer" *ngIf="API.state != 'playing'">
      <img [src]="src" />
    </div>
  `,
                styles: [`
    .logo-layer {
      position: absolute;
      display: block;
      top: 0;
    }
    img {
      width: 150px;
      margin-left: 20px;
      margin-top: 20px;
    }
  `]
            },] },
];
/** @nocollapse */
VgCustomLogo.ctorParameters = () => [
    { type: ElementRef, },
    { type: VgAPI, },
];
VgCustomLogo.propDecorators = {
    "vgFor": [{ type: Input },],
    "src": [{ type: Input },],
};
class VgCustomLogoModule {
}
VgCustomLogoModule.decorators = [
    { type: NgModule, args: [{
                imports: [VgCoreModule, FormsModule, CommonModule],
                declarations: [VgCustomLogo],
                exports: [VgCustomLogo]
            },] },
];
/** @nocollapse */
VgCustomLogoModule.ctorParameters = () => [];

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
