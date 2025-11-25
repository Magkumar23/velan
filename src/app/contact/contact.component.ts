import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass'
})
export class ContactComponent {
  contactForm = {
    name: '',
    companyName: '',
    postalAddress: '',
    city: '',
    state: '',
    country: '',
    contactNumber: '',
    email: '',
    query: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.contactForm);
    // Handle form submission here
    alert('Thank you for your inquiry! We will get back to you soon.');
    this.resetForm();
  }

  resetForm() {
    this.contactForm = {
      name: '',
      companyName: '',
      postalAddress: '',
      city: '',
      state: '',
      country: '',
      contactNumber: '',
      email: '',
      query: ''
    };
  }
}