import { from, Observable } from 'rxjs';

const numbers = [1, 12, 40];
const source = from(numbers);

function component() {
  source.subscribe({
    next: (n) => console.log(n)
  })
}

component();


numbers.push(400);

new Observable(subscriber => {
  
});