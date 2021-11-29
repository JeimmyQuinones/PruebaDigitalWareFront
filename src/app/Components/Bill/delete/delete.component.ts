import { Component, OnInit,Input ,Output, EventEmitter  } from '@angular/core';
import { Appservice } from 'src/app/Services/Appservice.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  @Input() BillId: string;
  @Output() CloseEvent = new EventEmitter<any>();
  constructor(private Modelservice:Appservice) { }

  ngOnInit(): void {
  }
  DeleteBill(){
    this.Modelservice.DeleteBill( this.BillId)
    .subscribe(()=>{
      this.CloseEvent.emit(true);
    },(error)=>{
      console.log(error);
    });
  }
  Close(){
    this.CloseEvent.emit(false);
  }
}
