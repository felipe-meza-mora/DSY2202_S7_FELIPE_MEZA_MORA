import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pruebas-unitarias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './pruebas-unitarias.component.html',
})
export class PruebasUnitariasComponent {
  form: FormGroup;
  result: number | null = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value1: ['', Validators.required],
      value2: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const value1 = parseInt(this.form.get('value1')?.value, 10);
    const value2 = parseInt(this.form.get('value2')?.value, 10);
    this.result = value1 + value2;
  }
}