import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptRouterModule } from '@nativescript/angular';
import { MultiSelectComponent } from './multi-select.component';

@NgModule({
	imports: [NativeScriptCommonModule, NativeScriptRouterModule.forChild([{ path: '', component: MultiSelectComponent }])],
	declarations: [MultiSelectComponent],
	schemas: [NO_ERRORS_SCHEMA],
})
export class MultiSelectModule {}
