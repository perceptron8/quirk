import { Component } from '@angular/core';
import { OverlayModule } from './overlay';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [ OverlayModule ],
	template:
	`
		@if (true) {
			<form>
				<input id="host" />
				<p-overlay></p-overlay>
			</form>
		}
	`
})
export class AppComponent {
}
