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

  text: string = '';
  ngOnInit(): void {
    this.formGroup = this.fb.group({
      inputValue: [this.text],
    });
  }

  onPaste(event: ClipboardEvent): void {
    event.preventDefault();
  }

  public changeText(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    if (!value) {
      return;
    }
    if (value.length > this.text.length) {
      this.text += value[value.length - 1];
    } else {
      this.text = this.text.slice(0, value.length);
    }
    this.formGroup = this.fb.group({
      inputValue: [this.cesarCipher(this.text, 12)],
    });
  }

  cesarCipher(text: string, shift: number): string {
    return text
      .split('')
      .map((char) => {
        const charCode = char.charCodeAt(0);
        if (char >= 'A' && char <= 'Z') {
          return String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        }
        if (char >= 'a' && char <= 'z') {
          return String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        }
        return char;
      })
      .join('');
  }

  //binary keyboard
  //Qwerty to azerty
}
