import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isCollapsed = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showMenu(): boolean {
    return this.router.url !== '/user/login';
  }


}
