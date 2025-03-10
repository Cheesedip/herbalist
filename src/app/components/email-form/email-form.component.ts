import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
  output,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-email-form',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailFormComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  public disabledCondition = input<boolean>(false);

  public onSubmit = output<string>();

  protected emailForm: FormGroup<{ email: FormControl<string> }>;

  constructor() {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
