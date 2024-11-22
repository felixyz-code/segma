import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-header',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-header.component.html',
  styleUrl: './dashboard-header.component.css'
})
export class DashboardHeaderComponent implements OnInit {

  redirectUrl: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.url.subscribe(url => {
      const currentPath = url[0]?.path;
      if (currentPath === 'dashboard') {
        this.redirectUrl = '/cotizacion';
      } else if (currentPath === 'cotizacion') {
        this.redirectUrl = '/dashboard';
      }
    });
  }

  navigate(): void {
    this.router.navigate([this.redirectUrl]);
  }

}
