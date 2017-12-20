import {Component, OnInit, ElementRef, Input, ViewEncapsulation, NgModule} from '@angular/core';
import {VgCoreModule, VgAPI} from "videogular2/core";
import {FormsModule} from '@angular/forms';

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

@NgModule({
  imports: [VgCoreModule, FormsModule],
  declarations: [VgCustomLogo],
  exports: [VgCustomLogo]
})
export class VgCustomLogoModule {}
