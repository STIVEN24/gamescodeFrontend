import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ConnectionService {

    monitor() {
        return navigator.onLine;;
    }

}