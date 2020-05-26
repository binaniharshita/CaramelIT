import { trigger, state, style, animate, transition } from '@angular/animations';

export function openClose(){
  return trigger('openClose', [
    // ...
    state('open', style({
      opacity: 1,
    })),
    state('closed', style({
      height: '10px',
      opacity: 0,
    })),
    transition('open => closed', [
      animate('1s')
    ]),
    transition('closed => open', [
      animate('0.5s')
    ]),
    transition('* => closed', [
      animate('1s')
    ]),
    transition('* => open', [
      animate('0.5s')
    ]),
    transition('open <=> closed', [
      animate('0.5s')
    ]),
    transition ('* => open', [
      animate ('1s',
        style ({ opacity: '*' }),
      ),
    ]),
    transition('* => *', [
      animate('1s')
    ]),
  ]);
}

export function flyInOut() {
  return trigger('flyInOut', [
      state('*', style({ opacity: 1, transform: 'translateX(0)'})),
      transition(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }),
          animate('1500ms ease-in')
      ]),
      transition(':leave', [
          animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0}))
      ])
  ]);
}
