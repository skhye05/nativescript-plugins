import { DemoSharedBase } from '../utils';
import { MultiSelect, AShowType, MSOption } from '@skhye05/multi-select';

export class DemoSharedMultiSelect extends DemoSharedBase {
  private _MSelect = new MultiSelect();
  private predefinedItems: Array<any> = ["moi-a", "moi-b"];
  public selectedItems: Array<any>;

  testIt() {
    console.log('test multi-select!');
  }

  public onSelectTapped(): void {
    const options: MSOption = {
      title: "Please Select",
      selectedItems: this.predefinedItems,
      items: [
        { name: "A", value: "moi-a" },
        { name: "B", value: "moi-b" },
        { name: "C", value: "moi-c" },
        { name: "D", value: "moi-d" },
      ],
      bindValue: 'value',
      displayLabel: 'name',
      onConfirm: selectedItems => {
        // this.zone.run(() => {
        this.selectedItems = selectedItems;
        this.predefinedItems = selectedItems;
        console.log("SELECTED ITEMS => ", selectedItems);
        // })
      },
      onItemSelected: selectedItem => {
        console.log("SELECTED ITEM => ", selectedItem);
      },
      onItemUnselected: selectedItem => {
        console.log("UNSELECTED ITEM => ", selectedItem);
      },
      onCancel: () => {
        console.log('CANCEL');
      },
      android: {
        titleSize: 25,
        cancelButtonTextColor: "#252323",
        confirmButtonTextColor: "#70798C",
      },
      ios: {
        cancelButtonBgColor: "#252323",
        confirmButtonBgColor: "#70798C",
        cancelButtonTextColor: "#ffffff",
        confirmButtonTextColor: "#ffffff",
        showType: AShowType.TypeBounceIn
      }
    };

    this._MSelect.show(options);
  }
}
