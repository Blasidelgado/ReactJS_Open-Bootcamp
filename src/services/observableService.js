import { Observable } from "rxjs";

export const getNumbers = new Observable(suscriber => {
    //We emit values:
    suscriber.next(1) //Emits 1
    suscriber.next(2) //Emits 2
    suscriber.next(3) //Emits 3
    setTimeout(() => {
        suscriber.next(4) //Emits 4
        suscriber.complete() // FInally, the Observable completes and finishes.
    }, 1000) // Waits 1 sec.
})