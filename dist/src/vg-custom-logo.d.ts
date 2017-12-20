import { OnInit, ElementRef } from '@angular/core';
import { VgAPI } from "videogular2/core";
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
