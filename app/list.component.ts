import { Component } from '@angular/core';

@Component({
  selector: 'list',
  template: `
      <h2>Lists</h2>
      <div class="menu">
      </div>
      <div *ngIf="list">
        <h2>{{list.name}}</h2>
        <ul>
        </ul>
      </div>  
  `,
})
export class ListComponent  {}
