import { Component } from '@angular/core';
import { DropdownModule } from './dropdown';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ DropdownModule ],
	templateUrl: './app.component.html'
})
export class AppComponent {
}
