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
import { ConfirmationService, MessageService } from 'primeng/api';
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
import { BasicComponent } from './Moduller/Tables/basic/basic.component';
import {TableModule} from 'primeng/table';
import { DynamicComponent } from './Moduller/Tables/dynamic/dynamic.component';
import { TemplatingComponent } from './Moduller/Tables/templating/templating.component';
import { SizeComponent } from './Moduller/Tables/size/size.component';
import { GridlinesComponent } from './Moduller/Tables/gridlines/gridlines.component';
import { StripedComponent } from './Moduller/Tables/striped/striped.component';
import { ColGroupComponent } from './Moduller/Tables/col-group/col-group.component';
import { PageTableComponent } from './Moduller/Tables/page-table/page-table.component';
import { CustomerService } from './Servicess/customer.service';
import { SortTableComponent } from './Moduller/Tables/sort-table/sort-table.component';
import { FilterTableComponent } from './Moduller/Tables/filter-table/filter-table.component';
import { SelectionComponent } from './Moduller/Tables/selection/selection.component';
import { LazyTableComponent } from './Moduller/Tables/lazy-table/lazy-table.component';
import { ScrollTableComponent } from './Moduller/Tables/scroll-table/scroll-table.component';
import { VirtualScrollComponent } from './Moduller/Tables/virtual-scroll/virtual-scroll.component';
import { RowExpandComponent } from './Moduller/Tables/row-expand/row-expand.component';
import { EditTableComponent } from './Moduller/Tables/edit-table/edit-table.component';
import { ToggleTableComponent } from './Moduller/Tables/toggle-table/toggle-table.component';
import { ExportTableComponent } from './Moduller/Tables/export-table/export-table.component';
import { StateTableComponent } from './Moduller/Tables/state-table/state-table.component';
import { StickyTableComponent } from './Moduller/Tables/sticky-table/sticky-table.component';
import { CrudTableComponent } from './Moduller/Tables/crud-table/crud-table.component';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmPopupModule} from 'primeng/confirmpopup';
import {FileUploadModule} from 'primeng/fileupload';
import {TimelineModule} from 'primeng/timeline';
import { TimelineComponent } from './Moduller/otherss/timeline/timeline.component';
import {TreeModule} from 'primeng/tree';
import {DialogModule} from 'primeng/dialog';
import {ContextMenuModule} from 'primeng/contextmenu';
import {TreeTableModule} from 'primeng/treetable';
import { TreeTableComponent } from './Moduller/otherss/tree-table/tree-table.component';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { VirtualScrollerComponent } from './Moduller/otherss/virtual-scroller/virtual-scroller.component';
import {ScrollerModule} from 'primeng/scroller';
import { ScrollerComponent } from './Moduller/otherss/scroller/scroller.component';
import {AccordionModule} from 'primeng/accordion';
import { AccordionComponent } from './Moduller/Panel/accordion/accordion.component';
import { CardComponent } from './Moduller/Panel/card/card.component';
import {CardModule} from 'primeng/card';
import { DividerComponent } from './Moduller/Panel/divider/divider.component';
import { FieldsetComponent } from './Moduller/Panel/fieldset/fieldset.component';
import {FieldsetModule} from 'primeng/fieldset';
import {PanelModule} from 'primeng/panel';
import { PanelComponent } from './Moduller/Panel/panel/panel.component';
import {SplitterModule} from 'primeng/splitter';
import { SplitterComponent } from './Moduller/Panel/splitter/splitter.component';
import { ScroolPanelComponent } from './Moduller/Panel/scrool-panel/scrool-panel.component';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import { TabviewComponent } from './Moduller/Panel/tabview/tabview.component';
import {ToolbarModule} from 'primeng/toolbar';
import { ToolbarComponent } from './Moduller/Panel/toolbar/toolbar.component';
import { ConfirmDialogComponent } from './Moduller/Overlayy/confirm-dialog/confirm-dialog.component';
import { ConfirmPopupComponent } from './Moduller/Overlayy/confirm-popup/confirm-popup.component';
import { DialogComponent } from './Moduller/Overlayy/dialog/dialog.component';
import {DialogService, DynamicDialogModule} from 'primeng/dynamicdialog';
import { DynamicDialogComponent } from './Moduller/Overlayy/dynamic-dialog/dynamic-dialog.component';
import { ProductList } from './Moduller/Overlayy/dynamic-dialog/productlist';

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
    PickListComponent,
    BasicComponent,
    DynamicComponent,
    TemplatingComponent,
    SizeComponent,
    GridlinesComponent,
    StripedComponent,
    ColGroupComponent,
    PageTableComponent,
    SortTableComponent,
    FilterTableComponent,
    SelectionComponent,
    LazyTableComponent,
    ScrollTableComponent,
    VirtualScrollComponent,
    RowExpandComponent,
    EditTableComponent,
    ToggleTableComponent,
    ExportTableComponent,
    StateTableComponent,
    StickyTableComponent,
    CrudTableComponent,
    TimelineComponent,
    TreeTableComponent,
    VirtualScrollerComponent,
    ScrollerComponent,
    AccordionComponent,
    CardComponent,
    DividerComponent,
    FieldsetComponent,
    PanelComponent,
    SplitterComponent,
    ScroolPanelComponent,
    TabviewComponent,
    ToolbarComponent,
    ConfirmDialogComponent,
    ConfirmPopupComponent,
    DialogComponent,
    DynamicDialogComponent,
    ProductList
    
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
    PickListModule,
    TableModule,
    ConfirmDialogModule,
    ConfirmPopupModule,
    FileUploadModule,
    TimelineModule,
    TreeModule,
    DialogModule,
    ContextMenuModule,
    TreeTableModule,
    VirtualScrollerModule,
    ScrollerModule,
    AccordionModule,
    CardModule,
    FieldsetModule,
    PanelModule,
    SplitterModule,
    ScrollPanelModule,
    ToolbarModule,
    DynamicDialogModule
  ],
  providers: [HttpClient,
              NodeService,
              CountryService,
              MessageService,
              ProductService,
              EventService,
              CustomerService,
              ConfirmationService,
              DialogService,

            ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
