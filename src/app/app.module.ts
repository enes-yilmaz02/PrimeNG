import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
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
    DropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
