/**
 * Created by dell6 on 2016/6/3.
 */
import { Component } from '@angular/core';

import { Bookshelf } from '../bookshelf/bookshelf';
@Component({
    selector: 'home-page',
    template: require('./home.html'),
    directives:[Bookshelf]
})
export class HomePage {

}