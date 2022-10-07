import { Component } from '@angular/core';

@Component({
    selector: 'app-root2',
    //templateUrl: './fx1.comfx2.html',
    template: '<h2>Fx2Module : {{ date }}!</h2>',
    styleUrls: ['./fx2.comfx.css']
})
export class Comfx {
    date = '2022-10-06';
}
