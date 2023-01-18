import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCollapseWhenRouting]'
})
export class CollapseWhenRoutingDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const navLinks = this.elRef.nativeElement.querySelectorAll('.nav-item')
    navLinks.forEach((link: any) => {
      link.addEventListener('click', () => {
        this.renderer.removeClass(this.elRef.nativeElement, 'show')
      })
    });
  }
}
