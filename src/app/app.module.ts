import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgxPaginationModule} from 'ngx-pagination';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LeftmenuComponent } from './layout/leftmenu/leftmenu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CommonService } from './service/common.service';
import { sharedService } from './service/shared.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { CategeryComponent } from './categery/categery.component';
import { RequestComponent } from './request/request.component';
import { CalculatorcategoryComponent } from './calculatorcategory/calculatorcategory.component';
import { CalculatordataComponent } from './calculatordata/calculatordata.component';
import { CouponComponent } from './coupon/coupon.component';
import { DistrictComponent } from './district/district.component';
import { MuncipartiComponent } from './munciparti/munciparti.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { ProductComponent } from './product/product.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LeftmenuComponent,
    DashboardComponent,
    UserComponent,
    CategeryComponent,
    RequestComponent,
    CalculatorcategoryComponent,
    CalculatordataComponent,
    CouponComponent,
    DistrictComponent,
    MuncipartiComponent,
    AddcategoryComponent,
    ProductComponent,
    OrderComponent
  ],
  imports: [
    NgxPaginationModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [HttpClientModule,
    HttpClient,
    sharedService,
    CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
