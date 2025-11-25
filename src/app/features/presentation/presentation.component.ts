import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.scss'
})
export class PresentationComponent {
  activeSection = 'qui-sommes-nous';

  setActiveSection(section: string) {
    this.activeSection = section;
  }
}

