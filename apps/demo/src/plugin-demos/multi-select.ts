import { Observable, EventData, Page } from '@nativescript/core';
import { DemoSharedMultiSelect } from '@demo/shared';
import {} from '@skhye05/multi-select';

export function navigatingTo(args: EventData) {
	const page = <Page>args.object;
	page.bindingContext = new DemoModel();
}

export class DemoModel extends DemoSharedMultiSelect {}
