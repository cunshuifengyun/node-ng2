/**
 * Created by dell6 on 2016/6/13.
 */
import { Component } from '@angular/core';

import { Shelf } from './shelf';
@Component({
    selector: 'bookshelf',
    template: require('./bookshelf.html'),
    styles: [require('./bookshelf.css')],
    directives: [Shelf]
})
export class Bookshelf {

}