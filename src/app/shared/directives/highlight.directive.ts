import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor: string;

  constructor(private el: ElementRef) {

    console.log('el', el.nativeElement);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  private highlight(color: string) {

    this.el.nativeElement.style.backgroundColor = color;
  }
}
