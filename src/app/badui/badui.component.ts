import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-badui',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './badui.component.html',
  styleUrl: './badui.component.css',
})
export class BaduiComponent {
  formGroup!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      inputValue: [''],
    });
    this.display();
  }

  private display(): void {
    this.formGroup.get('inputValue')?.valueChanges.subscribe((value) => {
      console.log('value : ' + value);
    });
  }

  encryptField() {
    console.log('test');
  }

  //binary keyboard
  //Qwerty to azerty
}
