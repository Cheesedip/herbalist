import { Component, inject } from '@angular/core';
import { DialogRef } from '@ngneat/dialog';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrl: './about-modal.component.scss',
})
export class AboutModalComponent {
  private dialogRef = inject(DialogRef<AboutModalComponent>);

  public closeDialog(): void {
    this.dialogRef.close();
  }
}
