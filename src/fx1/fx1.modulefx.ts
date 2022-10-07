import { NgModule } from '@angular/core';
import { Comfx } from './fx1.comfx';
import { CommonModule } from '@angular/common';

import { ModuleFx2 } from '../fx2/fx2.modulefx';

@NgModule({
    declarations: [Comfx],
    imports: [CommonModule, ModuleFx2],
    exports: [Comfx]
})
export class ModuleFx1 {}
