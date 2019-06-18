import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class IpsUserService {

    constructor(
        private http: HttpClient
    ) { }

    createIpUser(ipUser) {
        return this.http.post('https://gamescodebackend.herokuapp.com/api/ips/createIpUser', ipUser);
    }

    getIpUser() {
        return this.http.get('https://api.ipify.org/?format=jsonp&callback=getIP');
    }

}