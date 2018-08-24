import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(private router: Router) {
  }

  navigateToConditions() {
    this.router.navigate(['/conditions']);
  }

  navigateToHome() {
    this.router.navigate(['/home']);
  }

  showToolbarButtons() {
    if (this.router && this.router.url && this.router.url.indexOf("conditions") >= 0) return false;
    return true; 
  }

}
