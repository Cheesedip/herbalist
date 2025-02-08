import {
  Directive,
  Input,
  ElementRef,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDrinkable]',
})
export class DrinkableDirective {
  @Input() hoverImageSrc = '/assets/minus.webp';

  private preview?: HTMLElement;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter')
  onMouseEnter() {
    console.log('mouse enter, yay');
    const hostElementRect = this.el.nativeElement.getBoundingClientRect();

    this.preview = this.renderer.createElement('div');
    const image = this.renderer.createElement('img');
    this.renderer.setAttribute(image, 'src', this.hoverImageSrc);
    this.renderer.appendChild(this.preview, image);

    this.renderer.setStyle(this.preview, 'position', 'relative');
    this.renderer.setStyle(this.preview, 'left', '10%');
    this.renderer.setStyle(this.preview, 'top', '-70%');
    this.renderer.setStyle(this.preview, 'z-index', '99');
    this.renderer.setStyle(this.preview, 'cursor', 'pointer');
    this.renderer.setStyle(image, 'width', `20px`);
    this.renderer.setStyle(image, 'height', `20px`);

    this.renderer.appendChild(this.el.nativeElement, this.preview);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    if (this.preview) {
      this.renderer.removeChild(this.el.nativeElement, this.preview);
      this.preview = undefined;
    }
  }
}
