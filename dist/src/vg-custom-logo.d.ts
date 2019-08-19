import { OnInit, ElementRef } from '@angular/core';

export declare class VgCustomLogo implements OnInit {
    API: any;
    vgFor: string;
    src: string;
    elem: HTMLElement;
    target: any;
    constructor(ref: ElementRef, API: any);
    ngOnInit(): void;
    onPlayerReady(): void;
}
export declare class VgCustomLogoModule {
}
