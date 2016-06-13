/**
 * Created by dell6 on 2016/6/13.
 */
import { Component } from '@angular/core';

import { Primitive } from '../../models/primitive';

@Component({
    selector: 'shelf',
    template: require('./shelf.html'),
    styles: [require('./shelf.css')],
})
export class Shelf {
    private _women:Array<Primitive> =[new Primitive('xx')];

}