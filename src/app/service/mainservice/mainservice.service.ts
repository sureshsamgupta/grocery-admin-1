import { Injectable } from '@angular/core';
import { CommonService } from '../common.service';
import { Observable } from 'rxjs';
import 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
  // public user = new Userlogin();
  constructor(private sevice: CommonService,private _http: HttpClient) { }
  getuser(): Observable<any> {
    return this.sevice.getLogin('getAllUsers', 'GET', 0);
  }

  myreaquest(): Observable<any> {
    return this.sevice.getLogin('findYourRequest', 'GET', 0);
  }

  getcoupon(): Observable<any> {
    return this.sevice.getLogin('findAllCoupon', 'GET', 0);
  }

  country(): Observable<any> {
    return this.sevice.getLogin('getAllCountries', 'GET', 0);
  }

  state(id): Observable<any> {
    return this.sevice.getLogin('getStatesByCountryId/' +id, 'GET', 0);
  }

  city(id): Observable<any> {
    return this.sevice.getLogin('getcityBystateId/' +id, 'GET', 0);
  }

  qcrequest(): Observable<any> {
    return this.sevice.getLogin('getAllQuoteRequest', 'GET', 0);
  }

  uploadcategory(catnem,cattype,file:File): Observable<any> {
    let input = new FormData();
    input.append("catType",catnem)
    input.append("catName",cattype)
    input.append("catImage",file)
    return this.sevice.getLogin('createCategory', 'POST', input);
  }

  createproduccategory(cattype,file:File): Observable<any> {
    let input = new FormData();
    input.append("cat_name",cattype)
    input.append("cat_image",file)
    return this.sevice.getLogin('createCategory', 'POST', input);
  }
  uploadqccategory(catnem,cattype,country,state): Observable<any> {
    let input = new FormData();
    input.append("catType",catnem)
    input.append("catName",cattype)
    input.append("country",country)
    input.append("state",state)
    return this.sevice.getLogin('createCategory', 'POST', input);
  }

  editcategory(catnem,id,file:File): Observable<any> {
    let input = new FormData();
    input.append("catName",catnem)
    input.append("catId",id)
    if(file){
      input.append("catImage",file)
    }
    return this.sevice.getLogin('editCategory', 'POST', input);
  }
  editsubcategory(catnem,id,file:File,price): Observable<any> {
    let input = new FormData();
    input.append("subCatName",catnem)
    input.append("subCatId",id)
      input.append("subCatImage",file)
      if(price){
        input.append("price",price)
      }
    return this.sevice.getLogin('editSubCategory', 'POST', input);
  }

  createproduct(product_name,seller_name,file:File,price,municipalityId,catId): Observable<any> {
    let input = new FormData();
    input.append("product_name",product_name)
    input.append("seller_name",seller_name)
    input.append("product_image",file)
    input.append("municipalityId",municipalityId)
      input.append("price",price)
      input.append("catId",catId)
    return this.sevice.getLogin('createPuduct', 'POST', input);
  }

  getcategorykey(key){
    return this.sevice.getLogin('getStaticDatas/' +key, 'GET',0, );
  }
 
  category(key){
    return this.sevice.getLogin('getStaticDatas/' + key, 'GET',0, );
  }

  getsubcategory(key){
    return this.sevice.getLogin('findAllSubCategoryWithType/' + key, 'GET',0, );
  }

  delcategory(key){
    return this.sevice.getLogin('DeleteCategory/' + key, 'GET',0, );
  }

  delsubcategory(key){
    return this.sevice.getLogin('DeleteSubCategory/' + key, 'GET',0, );
  }

  delcoupon(key){
    return this.sevice.getLogin('DeleteCoupon/' + key +"/", 'DEL',0, );
  }
  statuschnage(data: object){
    return this.sevice.getLogin('updateStatus', 'POST', data);
  }

  createcoupon(data: object){
    return this.sevice.getLogin('createCoupon', 'POST', data);
  }

  bloskuser(data: object){
    return this.sevice.getLogin('blockUser', 'POST', data);
  }

  adddistrict(data: object){
    return this.sevice.getLogin('createDistrict', 'POST', data);
  }


  updateStatus(data: object){
    return this.sevice.getLogin('updateStatus', 'POST', data);
  }

  createMunicipality(data: object){
    return this.sevice.getLogin('createMunicipality', 'POST', data);
  }

  getdistrcit(){
    return this.sevice.getLogin('findAllDistr' , 'GET',0, );
  }


  getallcategory(){
    return this.sevice.getLogin('findAllCategory' , 'GET',0, );
  }


  getproduct(){
    return this.sevice.getLogin('findAllProduct' , 'GET',0, );
  }

  findAllMunicipality(){
    return this.sevice.getLogin('findAllMunicipality' , 'GET',0, );
  }

  findAllOrder(){
    return this.sevice.getLogin('findAllOrder' , 'GET',0, );
  }


  delproductcategory(key){
    return this.sevice.getLogin('DeleteCategory/' + key +"/", 'DEL',0, );
  }

  delproduct(key){
    return this.sevice.getLogin('DeleteProduct/' + key +"/", 'DEL',0, );
  }

  delbanner(key){
    return this.sevice.getLogin('DeleteBanner/' + key +"/", 'DEL',0, );
  }

  getbanner(){
    return this.sevice.getLogin('getAllBanners' , 'GET',0, );
  }

  createbanner(file:File): Observable<any> {
    let input = new FormData();
      input.append("banner_image",file)
      
    return this.sevice.getLogin('createBanner', 'POST', input);
  }


  deletedistrcit(key){
    return this.sevice.getLogin('deleteDistrict/' + key +"/", 'DEL',0, );
  }

  deletemunci(key){
    return this.sevice.getLogin('deleteMunicipality/' + key +"/", 'DEL',0, );
  }

}
