import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularOpenlayersModule} from "ng-openlayers";

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterOutlet, AngularOpenlayersModule],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css'
})
export class MapComponent {
  title = 'openlayers-demo';
}