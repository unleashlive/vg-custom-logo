import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {VgAPI} from "videogular2/core";

@Component({
  selector: 'vg-custom-logo',
  encapsulation: ViewEncapsulation.None,
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
})
export class VgCustomLogo implements OnInit {
  @Input() vgFor: string;
  @Input() src: string;

  elem: HTMLElement;
  target: any;

  constructor(ref: ElementRef, public API: VgAPI) {
    this.elem = ref.nativeElement;
  }

  ngOnInit() {
    if (this.API.isPlayerReady) {
      this.onPlayerReady();
    }
    else {
      this.API.playerReadyEvent.subscribe(() => this.onPlayerReady());
    }
  }

  onPlayerReady() {
    this.target = this.API.getMediaById(this.vgFor);
  }

}
