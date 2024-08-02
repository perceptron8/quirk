import { Component } from '@angular/core';
import { OverlayModule } from 'primeng/overlay';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ OverlayModule ],
	templateUrl: './app.component.html'
})
export class AppComponent {
}
