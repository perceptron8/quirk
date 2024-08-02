import { Component } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ DropdownModule ],
	templateUrl: './app.component.html'
})
export class AppComponent {
}
