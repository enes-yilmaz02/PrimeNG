import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CalendarComponent } from './Moduller/FormModules/calendar/calendar.component';
import { AutoComplete } from './Moduller/FormModules/auto-complete/auto-complete.component';
import {CalendarModule} from 'primeng/calendar';
import { CascadeselectComponent } from './Moduller/FormModules/cascadeselect/cascadeselect.component';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import { CheckboxComponent } from './Moduller/FormModules/checkbox/checkbox.component';
import {CheckboxModule} from 'primeng/checkbox';
import { ChipsComponent } from './Moduller/FormModules/chips/chips.component';
import {ChipsModule} from 'primeng/chips';
import { ColorpickerComponent } from './Moduller/FormModules/colorpicker/colorpicker.component';
import {ColorPickerModule} from 'primeng/colorpicker';
import { DropdownComponent } from './Moduller/FormModules/dropdown/dropdown.component';
import {DropdownModule} from 'primeng/dropdown';
import { EditorComponent } from './Moduller/FormModules/editor/editor.component';
import {EditorModule} from 'primeng/editor';
import { FloatLabelComponent } from './Moduller/FormModules/float-label/float-label.component';
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { InputGroupComponent } from './Moduller/FormModules/input-group/input-group.component';
import {RadioButtonModule} from 'primeng/radiobutton';
import { InputMaskComponent } from './Moduller/FormModules/input-mask/input-mask.component';
import {InputSwitchModule} from 'primeng/inputswitch';
import { InputSwitchComponent } from './Moduller/FormModules/input-switch/input-switch.component';
import { InputTextComponent } from './Moduller/FormModules/input-text/input-text.component';
import { InputTextareaComponent } from './Moduller/FormModules/input-textarea/input-textarea.component';
import { InputNumberComponent } from './Moduller/FormModules/input-number/input-number.component';
import { InvalidStateComponent } from './Moduller/FormModules/invalid-state/invalid-state.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { PasswordModule } from 'primeng/password';
import { NodeService } from './Servicess/node.service';
import { KnobComponent } from './Moduller/FormModules/knob/knob.component';
import {KnobModule} from 'primeng/knob';
import { KeyFilterComponent } from './Moduller/FormModules/key-filter/key-filter.component';
import {KeyFilterModule} from 'primeng/keyfilter';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ListboxModule} from 'primeng/listbox';
import { ListBoxComponent } from './Moduller/FormModules/list-box/list-box.component';
import { MultiselectComponent } from './Moduller/FormModules/multiselect/multiselect.component';
import { CountryService } from './Servicess/country.service';
import { PasswordComponent } from './Moduller/FormModules/password/password.component';
import {DividerModule} from 'primeng/divider';
import { RadioButtonComponent } from './Moduller/FormModules/radio-button/radio-button.component';
import { RatingComponent } from './Moduller/FormModules/rating/rating.component';
import {RatingModule} from 'primeng/rating';
import { SliderComponent } from './Moduller/FormModules/slider/slider.component';
import {SliderModule} from 'primeng/slider';
import { SelecButtonComponent } from './Moduller/FormModules/selec-button/selec-button.component';
import {SelectButtonModule} from 'primeng/selectbutton';
import { TogglebuttonComponent } from './Moduller/FormModules/togglebutton/togglebutton.component';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { TreeSelectComponent } from './Moduller/FormModules/tree-select/tree-select.component';
import { ThreeChechBoxComponent } from './Moduller/FormModules/three-chech-box/three-chech-box.component';
import {TriStateCheckboxModule} from 'primeng/tristatecheckbox';
import { ButtonComponent } from './Moduller/Button/button/button.component';
import {ButtonModule} from 'primeng/button';
import { SplitButtonComponent } from './Moduller/Button/split-button/split-button.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import { MessageService } from 'primeng/api';
import { SpeedDialComponent } from './Moduller/Button/speed-dial/speed-dial.component';
import {SpeedDialModule} from 'primeng/speeddial';
import {ToastModule} from 'primeng/toast';
import {TabViewModule} from 'primeng/tabview';
import { DataViewComponent } from './Moduller/Datas/data-view/data-view.component';
import {DataViewModule} from 'primeng/dataview';
import { ProductService } from './Servicess/product.service';
import { FullCalendarComponent } from './Moduller/Datas/full-calendar/full-calendar.component';
import { EventService } from './Servicess/event.service';
import {GMapModule} from 'primeng/gmap';
import { GMapComponent } from './Moduller/Datas/g-map/g-map.component';
import {OrderListModule} from 'primeng/orderlist';
import { OrderListComponent } from './Moduller/Datas/order-list/order-list.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { OrgChartComponent } from './Moduller/Datas/org-chart/org-chart.component';
import { PaginatorComponent } from './Moduller/Datas/paginator/paginator.component';
import {PaginatorModule} from 'primeng/paginator';
import { PickListComponent } from './Moduller/Datas/pick-list/pick-list.component';
import {PickListModule} from 'primeng/picklist';
@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    AutoComplete,
    CascadeselectComponent,
    CheckboxComponent,
    ChipsComponent,
    ColorpickerComponent,
    DropdownComponent,
    EditorComponent,
    FloatLabelComponent,
    InputGroupComponent,
    InputMaskComponent,
    InputSwitchComponent,
    InputTextComponent,
    InputTextareaComponent,
    InputNumberComponent,
    InvalidStateComponent,
    KnobComponent,
    KeyFilterComponent,
    ListBoxComponent,
    MultiselectComponent,
    PasswordComponent,
    RadioButtonComponent,
    RatingComponent,
    SliderComponent,
    SelecButtonComponent,
    TogglebuttonComponent,
    TreeSelectComponent,
    ThreeChechBoxComponent,
    ButtonComponent,
    SplitButtonComponent,
    SpeedDialComponent,
    DataViewComponent,
    FullCalendarComponent,
    GMapComponent,
    OrderListComponent,
    OrgChartComponent,
    PaginatorComponent,
    PickListComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoCompleteModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CalendarModule,
    CascadeSelectModule,
    CheckboxModule,
    ChipsModule,
    ColorPickerModule,
    DropdownModule,
    EditorModule,
    InputMaskModule,
    InputNumberModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    RadioButtonModule,
    InputSwitchModule,
    TreeSelectModule,
    PasswordModule,
    KnobModule,
    KeyFilterModule,
    MessagesModule,
    MessageModule,
    ListboxModule,
    DividerModule,
    RatingModule,
    SliderModule,
    SelectButtonModule,
    ToggleButtonModule,
    TriStateCheckboxModule,
    ButtonModule,
    SplitButtonModule,
    SpeedDialModule,
    ToastModule,
    TabViewModule,
    DataViewModule,
    GMapModule,
    OrderListModule,
    OrganizationChartModule,
    PaginatorModule,
    PickListModule
  ],
  providers: [HttpClient,NodeService,CountryService,MessageService,ProductService,EventService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
