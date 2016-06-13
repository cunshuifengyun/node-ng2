/**
 * Created by dell6 on 2016/5/30.
 */
import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Routes, Router } from '@angular/router';

import { HomePage } from './pages/home';


@Component({
    selector: 'my-app',
    template: require('./app.html'),
    styles: [require('./app.css')],
    directives: [ROUTER_DIRECTIVES]
})
@Routes([
    {path: '/home', component: HomePage}
])
export class AppComponent implements OnInit{
    constructor(private _router: Router) {}
    ngOnInit() {
        this._router.navigate(['/home']);
    }
}
