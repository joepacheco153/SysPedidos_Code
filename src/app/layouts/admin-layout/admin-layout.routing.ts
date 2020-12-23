import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';

import { NotificationsComponent } from '../../notifications/notifications.component';
import { UsersComponent } from '../../users/users.component';
import { PagosComponent } from '../../pagos/pagos.component';
import { ListpersonaComponent } from '../../components/persona/listpersona/listpersona.component';
import { ListrolComponent } from '../../components/rol/listrol/listrol.component';
import { ListmembresiaComponent } from '../../components/membresia/listmembresia/listmembresia.component';
import { ListusuarioComponent } from '../../components/usuario/listusuario/listusuario.component';
import { ListtrabajadorComponent } from '../../components/trabajador/listtrabajador/listtrabajador.component';
import { AddpersonaComponent } from '../../components/persona/addpersona/addpersona.component';
import { AddusuarioComponent } from '../../components/usuario/addusuario/addusuario.component';
import { AddrolComponent } from '../../components/rol/addrol/addrol.component';
import { AddtrabajadorComponent } from '../../components/trabajador/addtrabajador/addtrabajador.component';
import { AddmembresiaComponent } from '../../components/membresia/addmembresia/addmembresia.component';
import { EditrolComponent } from '../../components/rol/editrol/editrol.component';
import { EdipersonaComponent } from '../../components/persona/edipersona/edipersona.component';
import { EditusuarioComponent } from '../../components/usuario/editusuario/editusuario.component';
import { EditmembresiaComponent } from '../../components/membresia/editmembresia/editmembresia.component';
import { EdittrabajadorComponent } from '../../components/trabajador/edittrabajador/edittrabajador.component';



export const AdminLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'carrito',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'pagos',          component: PagosComponent},
    { path: 'app-listpersona',  component: ListpersonaComponent },
    { path: 'app-listrol',  component: ListrolComponent },
    { path: 'app-listmembresia',  component: ListmembresiaComponent },
    { path: 'app-listusuario',  component: ListusuarioComponent },
    { path: 'app-listtrabajador',  component: ListtrabajadorComponent },
    { path: 'app-addpersona', component: AddpersonaComponent},
    { path: 'app-addusuario', component: AddusuarioComponent},
    { path: 'app-addrol', component: AddrolComponent},
    { path: 'app-addtrabajador', component: AddtrabajadorComponent},
    { path: 'app-addmembresia', component: AddmembresiaComponent},
    { path: 'app-editrol/:id', component:EditrolComponent},
    { path: 'app-edipersona/:id', component:EdipersonaComponent},
    { path: 'app-editusuario/:id', component:EditusuarioComponent},
    { path: 'app-editmembresia/:id', component:EditmembresiaComponent},
    { path: 'app-edittrabajadores/:id', component:EdittrabajadorComponent}

];
export const UserLayoutRoutes: Routes = [
    { path: '',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'carrito',          component: IconsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'users',          component: UsersComponent},
    { path: 'pagos',          component: PagosComponent},
    { path: 'app-listpersona',  component: ListpersonaComponent }
];