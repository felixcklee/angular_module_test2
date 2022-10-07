import { NgModule } from '@angular/core';
import { Comfx } from './fx2.comfx';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [Comfx],
    imports: [CommonModule],
    exports: [Comfx]
})
export class ModuleFx2 {}
