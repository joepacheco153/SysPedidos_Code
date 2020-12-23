import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { PagosComponent } from '../../pagos/pagos.component';
import { DetailsComponent } from '../../shared/details/details.component';
import { AddpersonaComponent } from '../../components/persona/addpersona/addpersona.component';
import { EdipersonaComponent } from '../../components/persona/edipersona/edipersona.component';
import { ListpersonaComponent } from '../../components/persona/listpersona/listpersona.component';
import { EditrolComponent } from '../../components/rol/editrol/editrol.component';
import { ListrolComponent } from '../../components/rol/listrol/listrol.component';
import { AddmembresiaComponent } from '../../components/membresia/addmembresia/addmembresia.component';
import { EditmembresiaComponent } from '../../components/membresia/editmembresia/editmembresia.component';
import { ListmembresiaComponent } from '../../components/membresia/listmembresia/listmembresia.component';
import { AddtrabajadorComponent } from '../../components/trabajador/addtrabajador/addtrabajador.component';
import { EdittrabajadorComponent } from '../../components/trabajador/edittrabajador/edittrabajador.component';
import { ListtrabajadorComponent } from '../../components/trabajador/listtrabajador/listtrabajador.component';
import { AddusuarioComponent } from '../../components/usuario/addusuario/addusuario.component';
import { EditusuarioComponent } from '../../components/usuario/editusuario/editusuario.component';
import { ListusuarioComponent } from '../../components/usuario/listusuario/listusuario.component';
import { AddrolComponent } from '../../components/rol/addrol/addrol.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ChartsModule,
    NgbModule,
    ToastrModule.forRoot()
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    PagosComponent,
    DetailsComponent,
    AddpersonaComponent,
    EdipersonaComponent,
    ListpersonaComponent,
    AddrolComponent,
    EditrolComponent,
    ListrolComponent,
    AddmembresiaComponent,
    EditmembresiaComponent,
    ListmembresiaComponent,
    AddtrabajadorComponent,
    EdittrabajadorComponent,
    ListtrabajadorComponent,
    AddusuarioComponent,
    EditusuarioComponent,
    ListusuarioComponent
  ]
})

export class AdminLayoutModule {}
