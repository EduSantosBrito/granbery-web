import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InstitucionalComponent } from './../../institucional/institucional.component';
import { institucionalRouting } from '../../routes/institucional/institucional.route';
import { routing } from '../../routes/route.routing';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        routing
    ],
    exports: [],
    declarations: [InstitucionalComponent],
    providers: [],
})
export class InstitucionalModule { }
