import { NgModule } from '@angular/core';

import { CapitalizePipe } from './capitalize.pipe'

@NgModule({
    declarations: [ CapitalizePipe ],
    exports: [ CapitalizePipe ] // Exporting the pipe to make possible to other modules import the CapitalizePipe
})

export class SharedModule { }