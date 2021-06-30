import {
  Component,
  ViewChild,
  ViewContainerRef,
  OnInit,
  ComponentFactoryResolver,
  ChangeDetectorRef,
} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  copyArrayItem,
} from '@angular/cdk/drag-drop';
import { TextBoxComponent } from './text-box/text-box.component';
import { ButttonComponent } from './buttton/buttton.component';
import { HeaderComponent } from './header/header.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TableComponent } from './table/table.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Poc3';
  basket = [];
  @ViewChild('container', { read: ViewContainerRef }) viewContainerRef: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver,
    private chRef: ChangeDetectorRef
  ) { }
  movementCount: number = 0;
  items = [
    { value: 'Textbox', disabled: false },
    { value: 'Button', disabled: false },
    { value: 'Header', disabled: false },
    { value: 'Table', disabled: false },
    { value: 'Footer', disabled: false },
    { value: 'Dropdown', disabled: false },
    { value: 'Spinner', disabled: false },
    { value: 'Divider', disabled: false },
    { value: 'Mask', disabled: false },
  ];
  componetMapper = {
    Textbox: TextBoxComponent,
    Button: ButttonComponent,
    Header: HeaderComponent,
    Table: TableComponent,
    Dropdown: DropdownComponent
  };
  ngOnInit() { }
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      this.basket = [];
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.basket.splice(1, event.previousIndex);
      this.add(event.container.data);
    }

  }
  add(data) {
    this.viewContainerRef.clear();
    let incomingComponent = this.componentExtractor(this.componetMapper, data[0].value);

    //DYNAMIC COMPONENT CREATION

    const factory = this.resolver.resolveComponentFactory(incomingComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    ref.changeDetectorRef.detectChanges();
  }
  componentExtractor(obj, prop) {
    return obj[prop];
  }
}
