import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Input ,Output, EventEmitter ,TemplateRef } from '@angular/core';
import { BillInterface } from 'src/app/Interface/Bill.interface';
import { Appservice } from 'src/app/Services/Appservice.service';
import { DetailBillInterface } from 'src/app/Interface/DetailBill.interface';
import { CustomerInterface } from 'src/app/Interface/Customer.interface';

@Component({
  selector: 'app-update-or-create',
  templateUrl: './update-or-create.component.html',
  styleUrls: ['./update-or-create.component.css']
})
export class UpdateOrCreateComponent implements OnInit {
  @Input() BillModel: BillInterface;
  @Input() UpdateOrCreate: string;
  @Output() CloseEvent = new EventEmitter<any>();
  DetailBills:DetailBillInterface[];
  loading:boolean=false;
  form:FormGroup;
  constructor(private fb: FormBuilder,private Modelservice:Appservice) { 
    this.CreateForm();
    this.GetInfo();
  }

  ngOnInit(): void {
  }

  CreateForm(){
    this.form= this.fb.group({
      
      authorId:[''],
      name:['',[Validators.required, Validators.minLength(5)]],
      birthdate:['',[Validators.required]],
      town:['',[Validators.required, Validators.minLength(5)]],
      email:['',[Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],

      documentNumber:['',[Validators.required, Validators.minLength(5)]],
      NameCostumer:['',[Validators.required, Validators.minLength(5)]],
      TypeIdent:['',[Validators.required, Validators.minLength(5)]],
      IdentificationNumber:['',[Validators.required, Validators.minLength(5)]],
      CustomerId:['',[Validators.required, Validators.minLength(5)]],
      DetailBillsForm: this.fb.array([])
    });
  }
  GetInfo(){
      if(this.UpdateOrCreate=="Editar"){
        this.GetDetails();
      }
  }
  GetDetails(){
    this.Modelservice.getAllDetailBills(this.BillModel.billId)
    .subscribe((data:DetailBillInterface[])=>{
        this.DetailBills= data;
    },(error)=>{
      console.log("Error");
    });
  }

  GetCustomer(TypeIden:number, DocumentNumber:string){
    this.Modelservice.getCustomer(TypeIden,DocumentNumber)
    .subscribe((data:CustomerInterface)=>{
      this.form.controls['CustomerId'].setValue(data.CustomerId);
      this.form.controls['IdentificationNumber'].setValue(data.IdentificationNumber);
      this.form.controls['TypeIdent'].setValue(data.TypeIdent);
      this.form.controls['NameCostumer'].setValue(data.Name);
      this.form.controls['documentNumber'].setValue(data.IdentificationNumber);
    },(error)=>{
      console.log("Error");
    });
  }
  GetProduct(){
    this.Modelservice.getAllDetailBills(this.BillModel.billId)
    .subscribe((data:DetailBillInterface[])=>{
        this.DetailBills= data;
    },(error)=>{
      console.log("Error");
    });
  }

}
