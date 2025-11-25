import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  animateCounter(target: number, duration: number = 2000): Observable<number> {
    return new Observable(observer => {
      const startTime = Date.now();
      const startValue = 0;

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (target - startValue) * easeOut);
        
        observer.next(currentValue);

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          observer.next(target);
          observer.complete();
        }
      };

      requestAnimationFrame(animate);
    });
  }
}

