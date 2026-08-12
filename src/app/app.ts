import { Component, signal } from '@angular/core';
import { Main } from './components/pages/main/main';
import { Footer } from './components/common/footer/footer';
import { Header } from './components/common/header/header';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Main, Footer, Header, RouterOutlet],
  templateUrl: './app.html',
  standalone: true,
  styleUrls: ['./app.scss'],
})
export class App {
  protected readonly title = signal('tea-angular');
}
