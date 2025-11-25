import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-clients',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.sass'
})
export class ClientsComponent {
  clients = [
    { logo: 'assets/1.jpg' },
    { logo: 'assets/2.jpg' },
    { logo: 'assets/3.jpg' },
    { logo: 'assets/5.jpg' },
    { logo: 'assets/6.jpg' },
    { logo: 'assets/7.jpg' },
    { logo: 'assets/8.jpg' },
    { logo: 'assets/11.jpg' },
    { logo: 'assets/12.jpg' },
    { logo: 'assets/13.jpg' }
  ];

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.src = 'https://via.placeholder.com/200x80/B1411F/FFFFFF?text=CLIENT+LOGO';
  }
}