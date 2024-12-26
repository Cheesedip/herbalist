import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appHoverText]',
})
export class HoverTextDirective {
  @Input('appHoverText') hoverText: string = '';

  private tooltip: HTMLElement | null = null;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('mouse enter');
    console.log(this.hoverText);
    if (!this.tooltip) {
      this.tooltip = this.renderer.createElement('span');
      this.renderer.appendChild(
        this.tooltip,
        this.renderer.createText(this.hoverText)
      );
      this.renderer.appendChild(this.el.nativeElement, this.tooltip);
      this.renderer.addClass(this.tooltip, 'tooltip');
      console.log('class added')
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltip) {
      this.renderer.removeChild(this.el.nativeElement, this.tooltip);
      this.tooltip = null;
    }
  }
}
