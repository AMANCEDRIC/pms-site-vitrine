import { Component } from '@angular/core';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { PageLoaderComponent } from './shared/components/page-loader/page-loader.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MainLayoutComponent, PageLoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'PMS Informatique';
}
