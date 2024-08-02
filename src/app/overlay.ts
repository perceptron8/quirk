import { Component, NgModule } from '@angular/core';

@Component({
	selector: 'p-overlay',
	template: `
		<div>
		</div>
	`,
	animations: [],
})
export class Overlay {
}

@NgModule({
	exports: [Overlay],
	declarations: [Overlay]
})
export class OverlayModule {
}
