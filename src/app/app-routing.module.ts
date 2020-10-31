import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

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
import { BannerComponent } from './banner/banner.component';
import { ReportComponent } from './report/report.component';
import { EditproductComponent } from './editproduct/editproduct.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path: 'login' , component:LoginComponent},
  {path: 'order' , component:OrderComponent},
  {path: 'report' , component:ReportComponent},
  {path: 'edit' , component:EditproductComponent},
  {path: 'user' , component:UserComponent},
  {path: 'prodcut' , component:ProductComponent},
  {path: 'categrory' , component:AddcategoryComponent},
  {path: 'request' , component:RequestComponent},
  {path: 'cc' , component:CalculatorcategoryComponent},
  {path: 'qc' , component:CalculatordataComponent},
  {path: 'banner' , component:BannerComponent},
  {path: 'coupon' , component:CouponComponent},
  {path: 'district' , component:DistrictComponent},
  {path: 'munci' , component:MuncipartiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
