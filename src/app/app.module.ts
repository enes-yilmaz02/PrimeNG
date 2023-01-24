import { NgModule } from '@angular/core';
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
    InvalidStateComponent
    
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
    PasswordModule
  ],
  providers: [HttpClient,NodeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
