import { OnInit, ElementRef } from '@angular/core';
const VgAPI = require("videogular2/compiled/src/core/services/vg-api");
export declare class VgCustomLogo implements OnInit {
    API: VgAPI;
    vgFor: string;
    src: string;
    elem: HTMLElement;
    target: any;
    constructor(ref: ElementRef, API: VgAPI);
    ngOnInit(): void;
    onPlayerReady(): void;
}
export declare class VgCustomLogoModule {
}
