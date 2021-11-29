import { Component, OnInit , TemplateRef} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { BillInterface } from 'src/app/Interface/Bill.interface';
import { Appservice } from '../../Services/Appservice.service';


@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {
  
  listBills: BillInterface[];
  loading:boolean=false;
  EliminarModal:BsModalRef;
  EditOrUpdateModal:BsModalRef;
  EditarModel:BillInterface;
  IdRemoveBill:string;
  UpdateOrEdit:string;
  constructor( private modalService: BsModalService, private fb: FormBuilder, private Modelservice:Appservice) { 
    this.GetlistBills();
  }
  ngOnInit(): void {
  }
  GetlistBills(){
    this.loading=true;
    this.Modelservice.getAllBills()
    .subscribe((data:BillInterface[])=>{
      console.log(data);
        this.listBills= data;
        this.loading=false;
    },(error)=>{
      console.log("Error");
      this.loading=false;
    });
  }
  openmodalEliminar(template: TemplateRef<any>, id:string){
    this.IdRemoveBill=id;
    this.EliminarModal=this.modalService.show(template);
  }
  RefreshAndCloseDelete(stateDelete:any){
    if(stateDelete){
      this.GetlistBills();
    }
    this.EliminarModal.hide();
  }
  openmodalAgregar(template: TemplateRef<any>){
    this.UpdateOrEdit= "Agregar";
    this.EditOrUpdateModal=this.modalService.show(template);
  }
  openmodalEditar(template: TemplateRef<any>,model:BillInterface){
    this.UpdateOrEdit= "Editar";
    this.EditarModel= model;
    this.EditOrUpdateModal=this.modalService.show(template);
  }
  RefreshAndCloseModalEditOrUptade(stateChangue:any){
    if(stateChangue){
      this.GetlistBills();
    }
    this.EditOrUpdateModal.hide();
  }

}
