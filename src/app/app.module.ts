import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './Components/Shared/footer/footer.component';
import { LoadingComponent } from './Components/Shared/loading/loading.component';
import { NavbarComponent } from './Components/Shared/navbar/navbar.component';
import { BillComponent } from './Pages/bill/bill.component';

import { DevExtremeModule } from 'devextreme-angular';

//Rutas
import { App_routing } from './app.routes';


import { ModalModule } from 'ngx-bootstrap/modal';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//Formularios


//Servicio
import { HttpClientModule} from '@angular/common/http';
import { DeleteComponent } from './Components/Bill/delete/delete.component';
import { UpdateOrCreateComponent } from './Components/Bill/update-or-create/update-or-create.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    LoadingComponent,
    NavbarComponent,
    BillComponent,
    DeleteComponent,
    UpdateOrCreateComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    App_routing,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
