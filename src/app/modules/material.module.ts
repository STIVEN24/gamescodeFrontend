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
    MatChipsModule
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
        MatChipsModule
    ]
})

export class MaterialModule { }