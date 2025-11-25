import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass'
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'Velan Fabricators';
  currentSlide = 0;
  slides = [
    { image: 'assets/trailer1.jpeg', title: 'Velan: From Design to Fabrication | Innovative Ideas | Superior Solutions' },
    { image: 'assets/hydraulic-trailer.jpeg', title: 'Advanced Hydraulic Trailer Solutions for Heavy Transport' },
    { image: 'assets/telescopic-trailer.jpeg', title: 'Telescopic Trailers for Versatile Cargo Solutions' },
    { image: 'assets/trailer2.jpeg', title: 'Over Dimensional Cargo Transport Excellence' },
    { image: 'assets/trailer3.jpeg', title: 'Modular Trailer Systems for Complex Logistics' }
  ];
  private intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  nextSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    slides[this.currentSlide].classList.add('active');
  }

  previousSlide() {
    const slides = document.querySelectorAll('.hero-slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
    slides[this.currentSlide].classList.add('active');
  }

  goToSlide(index: number) {
    const slides = document.querySelectorAll('.hero-slide');
    slides[this.currentSlide].classList.remove('active');
    this.currentSlide = index;
    slides[this.currentSlide].classList.add('active');
  }
}