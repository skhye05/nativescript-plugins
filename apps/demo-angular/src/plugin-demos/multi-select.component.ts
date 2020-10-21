import { Component, NgZone } from '@angular/core';
import { DemoSharedMultiSelect } from '@demo/shared';
import {} from '@skhye05/multi-select';

@Component({
	selector: 'demo-multi-select',
	templateUrl: 'multi-select.component.html',
})
export class MultiSelectComponent {
	demoShared: DemoSharedMultiSelect;

	constructor(private _ngZone: NgZone) {}

	ngOnInit() {
		this.demoShared = new DemoSharedMultiSelect();
	}
}
