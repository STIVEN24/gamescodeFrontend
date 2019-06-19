import { NgModule } from '@angular/core';

import {
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatListModule,
    MatDividerModule,
    MatDialogModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatChipsModule,
    MatSidenavModule
} from '@angular/material';

@NgModule({
    exports: [
        MatInputModule,
        MatButtonModule,
        MatFormFieldModule,
        MatIconModule,
        MatCardModule,
        MatGridListModule,
        MatProgressSpinnerModule,
        MatListModule,
        MatDividerModule,
        MatDialogModule,
        MatProgressBarModule,
        MatBadgeModule,
        MatChipsModule,
        MatSidenavModule
    ]
})

export class MaterialModule { }