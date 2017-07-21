import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
   <app-header> </app-header>
   <div class="row">
        <app-left-component></app-left-component>
        <app-right-component></app-right-component> 
   </div>
   <app-footer> </app-footer>
`,
})
export class AppComponent  { name = ' Angular '; }
