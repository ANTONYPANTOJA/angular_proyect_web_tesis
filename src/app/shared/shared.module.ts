import { NgModule } from '@angular/core';

//Componentes LOCALES
import { FooterComponent } from './components/footer/footer.component';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

@NgModule({
  declarations: [
    FooterComponent,
    SidebarMenuComponent
  ],
  imports: [],
  exports: [
    SidebarMenuComponent,
    FooterComponent
  ],

  providers: [],
})
export class SharedModule {

 }
