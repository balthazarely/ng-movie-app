import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
} from '@angular/animations';

export const loadStagger = {
  loadStaggerTrigger: trigger('listAnimation', [
    transition('* <=> *', [
      query(':enter', style({ opacity: 0, transform: 'translateY(30px)' }), {
        optional: true,
      }),
      query(
        ':enter',
        stagger('40ms', [
          animate(
            '0.5s 0.1s ease-in-out',
            keyframes([
              style({ opacity: 0, transform: 'translateY(30px)', offset: 0 }),
              style({ opacity: 1, transform: 'translateY(0px)', offset: 1 }),
            ])
          ),
        ]),
        { optional: true }
      ),
    ]),
  ]),
};
