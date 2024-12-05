import { Component } from '@angular/core';
import { CaptchaComponent } from '../captcha/captcha.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CaptchaComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
