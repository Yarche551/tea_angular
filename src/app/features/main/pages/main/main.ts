import { Component, Inject, OnInit, Renderer2 } from '@angular/core';
import { Observable } from 'rxjs';
import { DOCUMENT } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.html',
  styleUrl: './main.scss',
  standalone: false,
})
export class Main implements OnInit {
  private observable: Observable<string>;

  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document,
  ) {
    this.observable = new Observable((observer) => {
      setTimeout(() => {
        observer.next('');
      }, 10000);
    });
  }

  ngOnInit() {
    this.observable.subscribe((value) => {
      const element = this.document.getElementById('popup-to-products');
      if (element) {
        // Безопасное изменение стиля через Renderer2
        this.renderer.setStyle(element, 'right', '30px');
      }
    });
  }
}
