import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { UserpageComponent } from './userpage/userpage.component';
import { AdminService } from './services/admin.service';
import { AdminpageComponent } from './adminpage/adminpage.component';
import { CartComponent } from './userpage/cart/cart.component';
import { CartService } from './services/cart.service';
import { MedicineService } from './services/medicines.service';
import { ContactComponent } from './contact/contact.component';


import { BillingComponent } from './userpage/cart/billing/billing.component';
import { ViewcontactusComponent } from './viewcontactus/viewcontactus.component';
import { ContactService } from './services/contact.service';
import { BackButtonDisableModule } from 'angular-disable-browser-back-button';
import { MarkAsteriskDirective } from './directive/mark-asterisk.directive';
import { SearchPipe } from './search.pipe';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    UserComponent,
    RegistrationComponent,
    AboutComponent,
    FooterComponent,
    UserpageComponent,
    AdminpageComponent,
    CartComponent,
    ContactComponent,
  
    BillingComponent,
    ViewcontactusComponent,
    MarkAsteriskDirective,
    SearchPipe,
    ProfileComponent,
    
 
  ],
  imports: [ RouterModule, HttpClientModule,ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BackButtonDisableModule.forRoot()
  ],
  providers: [UserService,AdminService,CartService,MedicineService,ContactService],
  bootstrap: [AppComponent]
})
export class AppModule { }
