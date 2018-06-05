import { RouterModule } from '@angular/router';
import { HamburgerIconComponent } from './../../shared/menu/hamburger-icon/hamburger-icon.component';
import { NgModule } from '@angular/core';
import { MenuComponent } from '../../shared/menu/menu.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        MenuComponent,
        HamburgerIconComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        MenuComponent,
        HamburgerIconComponent
    ],
    providers: [],
})
export class MenuModule { }
