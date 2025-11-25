import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
  telephone = '(+225) 27 22 42 37 39 / (+225) 07 08 902 902';
  email = 'pms@pmsinformatique.com';
}

