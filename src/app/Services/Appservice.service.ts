import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BillInterface } from '../Interface/Bill.interface';
import { CustomerInterface } from '../Interface/Customer.interface';
import { DetailBillInterface } from '../Interface/DetailBill.interface';

@Injectable({
  providedIn: 'root'
})
export class Appservice {

  constructor(private http:HttpClient) {  
  }
  private url='https://localhost:44310/api/Bill/';

  getAllBills(){
    return this.http.get<BillInterface[]>(this.url+'ListBills');
  }
  DeleteBill(billId:string){
    return this.http.delete(this.url+'DeleteBill?billId='+billId);
  }
  getAllDetailBills(billId:string){
    return this.http.get<DetailBillInterface[]>(this.url+'ListDetailBills?billId='+billId);
  }
  getCustomer(TypeIden:number, DocumentNumber:string){
    return this.http.get<CustomerInterface>(this.url+'GetCustomer?identificationType='+TypeIden+'&documentNumber='+DocumentNumber);
  }

}
