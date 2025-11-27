import { Directive, ElementRef, HostBinding, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  private observer?: IntersectionObserver;

  @Input() direction: 'left' | 'right' | 'up' = 'up';

  @HostBinding('class.opacity-0') isHidden = true;
  @HostBinding('class.transition-all') transition = true;
  @HostBinding('class.duration-700') duration = true;
  @HostBinding('class.ease-out') easing = true;

  @HostBinding('class.-translate-x-10') get isLeft() { return this.direction === 'left' && this.isHidden; }
  @HostBinding('class.translate-x-10') get isRight() { return this.direction === 'right' && this.isHidden; }
  @HostBinding('class.translate-y-4') get isUp() { return this.direction === 'up' && this.isHidden; }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isHidden = false;
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}


