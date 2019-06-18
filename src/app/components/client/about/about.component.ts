import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.css']
})

export class AboutComponent {

    constructor(private title: Title) {
        this.title.setTitle('Acerca de - Gamescode');
    }

}