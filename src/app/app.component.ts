import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VatInfoComponent } from "./routes/vat-info/vat-info.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VatInfoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'vatPortal';
}
