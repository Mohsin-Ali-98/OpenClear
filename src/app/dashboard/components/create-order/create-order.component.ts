import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RowClassRules } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { OrderDocumentType } from 'src/app/Shared/Enums';
import { SharedServiceService } from '../../shared_services/shared-service.service';
// import { ModalComponent } from './modal/modal.component';
 



//  ETA MUST BE GREATER THAN ETD 




@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {
  [x: string]: any;


  MainOrderForm:any={ }
  
      // SHIPMENT DETAILS
  shipmentmodeArr: any ;
  selectedshipmentmode :any

  // ChangeShipmentmode = (e:any) =>{
  //   console.log(e.target.value )
  //   // this.selectedshipmentmode=e.target.value
  //   this.shipmentmode?.setValue(e.target.value,{
  //     onlySelf: true,
  //   })
  //   // console.log(this.shipmentmode)
  // }


  // MAT DETAILS

  Materials: any ;
  selectedMaterials :any
  Matdescriptions :any
  
  ChangeMaterials =(e:any) =>{
  this.selectedMaterials=e.target.value
  // console.log(e.target.value)
  }


  mianArr = [{description : null, qty : null,code:null , matid:null}];
setValue(obj:any , event:any){
  // debugger;
  obj.description = event.target.value;
  let findCode = this.Materials.filter((item:any) => item.matdesc == event.target.value)
  obj.code = findCode.length > 0 ? findCode[0].matcode : 0;
  obj.matid =findCode.length > 0 ? findCode[0].matid : 0;
  // console.log(this.mianArr)
}

addNewRow(){
  // console.log(this.mianArr)
  // console.log(this.dropdownArr)
  this.mianArr.push({description : null, qty : null,code : null, matid:null})
}

removeRow(index:number){
  this.mianArr.splice(index,1);
}


// LC/BC DETAILS
paymentmethod: any ;
selectedpaymentmethod :any

Changepaymentmethod = (e:any) =>{
  // console.log(e.target.value )
  this.selectedshipmentmode=e.target.value
}


// CONTAINER DETAILS

ContainerSize: any ;
ContainerType: any ;


// mianArr = [{description : null, qty : null,code:null , matid:null}];
// setValue(obj:any , event:any){
//   // debugger;
//   obj.description = event.target.value;
//   let findCode = this.Materials.filter((item:any) => item.matdesc == event.target.value)
//   obj.code = findCode.length > 0 ? findCode[0].matcode : 0;
//   obj.matid =findCode.length > 0 ? findCode[0].matid : 0;
//   console.log(this.mianArr)
// }


ContainerDetails = [{conttype : null, contid : null , containernum:null}];

setContValue(obj:any , event:any){
  // console.log(this.ContainerDetails)
}


  addContainers = () =>{
    // console.log(e.target.value)
    // this.selectedcontainersize=e.target.value
    // console.log(this.ContainerDetails)
    // console.log(this.dropdownArr)
    this.ContainerDetails.push({conttype : null, contid : null , containernum:null})
  }

  removeContainerDetails = (index:number) =>{
    // var index : number = this.containers.indexOf(i)
    // if(index ! = -1 ){
    //   this.containers.splice(i ,1)
    // }
    this.ContainerDetails.splice(index,1);
  }



  // BANKS DETAILS

  Banks: any;
selectedBank :any

ChangeBank = (e:any) =>{
  // console.log(e.target.value)
  this.selectedBank=e.target.value
}
  


// SUPPLIER DETAILS

Supplier: any;
selectedSupplier :any

ChangeSupplier = (e:any) =>{
  // console.log(e.target.value)
  this.selectedSupplier=e.target.value
}
  


// CLEARING AGENT DETAILS

Agent: any;
selectedAgent :any

ChangeAgent = (e:any) =>{
  // console.log(e.target.value)
  this.selectedAgent=e.target.value
}



// SHIPMENT DETAILS 
        // ORIGIN COUNTRY

        OriginCountry: any;
        selectedOriginCountry :any
        
        ChangeOriginCountry= (e:any) =>{
          // console.log(e.target.value)
          this.selectedOriginCountry=e.target.value
        }

        // DESTINATION COUNTRY

        DestinationCountry: any;
        selectedDestinationCountry :any
        
        ChangeDestinationCountry= (e:any) =>{
          // console.log(e.target.value)
          this.selectedDestinationCountry=e.target.value
        }

        // Origin port

        OriginPort: any;
        selectedOriginPort :any
        
        ChangeOriginPort= (e:any) =>{
          // console.log(e.target.value)
          // if(this.selectedDestinationPort != e.target.value ){
          //   this.selectedOriginPort=e.target.value
          // }
          if(this.selectedOriginPort=e.target.value ){
            this.selectedDestinationPort != e.target.value
          }
        }

        // destination port

        DestinationPort: any;
        selectedDestinationPort :any
        
        ChangeDestinationPort= (e:any) =>{
          // console.log(e.target.value)
          if(this.selectedDestinationPort=e.target.value ){
            this.selectedDestinationPort != e.target.value
          }
        }


        // SHIPPING LINE

        ShippingLine: any;
        selectedShippingLine :any
        
        ChangeShippingLine= (e:any) =>{
          // console.log(e.target.value)
          this.selectedShippingLine=e.target.value
        }
  dummydata: any;



//  FILE UPLOAD


DocumentType:any



BLArr!: any[];  

BLFileUpload($event : any  ) {

  // console.log($event.target.files , "event tagetfile"); // outputs the first file
   let extensionAllowed = { "png": true, "jpeg": true ,"pdf":true , "txt":true};
    let BLfile = [];
    for (let file of $event.target.files) {
      BLfile.push(file ,  $event.target.id);
    }
    // console.log(BLfile);
    // console.log("rhis is packing file log")
    // console.log($event.target.id)
   
    this.BLArr=BLfile;
    this.MainOrderForm.bl = this.BLArr
    console.log(this.MainOrderForm.bl , "BL FORM")
}

  selectedFiles!: FileList |any;
  currentFile: File | any;
  currentFileid:  any;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;



  // selectFile(event:any , id:any): void {
  //   this.selectedFiles = event.target.files;
  //   id = OrderDocumentType.BL
  // }


  // upload(): void {
  //   this.progress = 0;

  //   this.currentFile = this.selectedFiles.item(0);
  //   this.currentFileid = OrderDocumentType.BL
  //   this
  //   this.service.upload(this.currentFile , this.currentFileid).subscribe(
  //     event => {
  //       if (event.type === HttpEventType.UploadProgress) {
  //         // this.progress = Math.round(100 * event.loaded / event.total);
  //         console.log(event.type , "TYPE EVENT LOG")
  //       } 
  //     },
  //     err => {
  //       this.progress = 0;
  //       this.message = 'Could not upload the file!';
  //       this.currentFile = undefined;
  //     });

  //   this.selectedFiles = undefined;
  // }



  
UploadFile(event:any , id:any){
  //  debugger
  for(let file of event.target.files)
  {
    // console.log(file)
    // console.log(this.url)
    var url= this.service.upload(file , id)

    if(id = OrderDocumentType.BL){
    this.MainOrderForm.bl={}
    this.MainOrderForm.bl.id = OrderDocumentType.BL
    this.MainOrderForm.bl.fileurl=file;
    // console.log("upload" ,  this.MainOrderForm.bl)
    }


    if(id = OrderDocumentType.Packing_ist){
       this.MainOrderForm.packinglist={}
    this.MainOrderForm.packinglist.fileurl=url;
    this.MainOrderForm.packinglist.id = OrderDocumentType.Packing_ist
      }

      if(id = OrderDocumentType.Invoice){
        this.MainOrderForm.invoice={}
     this.MainOrderForm.invoice.fileurl=url;
     this.MainOrderForm.invoice.id = OrderDocumentType.Invoice
       }
      if(id = OrderDocumentType.LCBC){
        this.MainOrderForm.LCBCdoc={}
     this.MainOrderForm.LCBCdoc.fileurl=url;
     this.MainOrderForm.LCBCdoc.id = OrderDocumentType.LCBC
       }
    
    //    if(id = OrderDocumentType.FTA){
    //     this.MainOrderForm.LCBCdoc={}
    //  this.MainOrderForm.fta.fileurl=url;
    //  this.MainOrderForm.fta.id = OrderDocumentType.FTA
    //    }


       if(id = OrderDocumentType.COO){
        this.MainOrderForm.coo={}
     this.MainOrderForm.coo.fileurl=url;
     this.MainOrderForm.coo.id = OrderDocumentType.COO
       }

       if(id = OrderDocumentType.COA){
        this.MainOrderForm.coa={}
     this.MainOrderForm.coa.fileurl=url;
     this.MainOrderForm.coa.id = OrderDocumentType.COA
       }

       if(id = OrderDocumentType.MSDS){
        this.MainOrderForm.msds={}
     this.MainOrderForm.msds.fileurl=url;
     this.MainOrderForm.msds.id = OrderDocumentType.MSDS
       }

       
       if(id = OrderDocumentType.Others){
        this.MainOrderForm.others={}
     this.MainOrderForm.others.fileurl=url;
     this.MainOrderForm.others.id = OrderDocumentType.Others
       }



  }

}





//       // if (file.size / 1024 / 1024 > 20) {
//       //   alert("File size should be less than 20MB")
//       //   return;
//       // }
//       // if (extensionAllowed) {
//         var val = file.name.split('.').pop();
//       //   console.log(nam , "here is nam");
//       let allowedExtensions=['png','pdf','xlsx' , 'txt'];

// // if(allowedExtensions.filter(function(val){    
// //   console.log("Val:" + val); }))  {
    
// //   } 
//         // allowedExtensions.filter(function(val){    
//         //   console.log("Val:" + val);
//         //   });
     
// // let extensionAllowed = { "png": true, "jpeg": true ,"pdf":true,"txt":true};

// // if (extensionAllowed) {
// //   var nam = file.name.split('.').pop();
// //   if (!extensionAllowed?[{nam}]:"any") {
// //     alert("Please upload " + Object.keys(extensionAllowed) + " file.")
// //     return;
// //   }
// // }






// 2 PACKING FILE UPLOAD
PackingfileArr!: any[];

PackingFileUpload($event : any ) {
  // console.log($event.target.files); 

  debugger
    //let extensionAllowed = { "png": true, "jpeg": true ,"pdf":true};
    let Packingfile = [];
    for (let file of $event.target.files) {
      if (file.size / 1024 / 1024 > 20) {
        alert("File size should be less than 20MB")
        return;
      }
      // if (extensionAllowed) {
      //   var nam = file.name.split('.').pop();
      //   console.log(nam , "here is nam");

      //   ['png','pdf','xlsx'].filter(function(val){
      //     if (val == 'doctor') {
      //       return val;
      //     }   
      //   });
      // }
      Packingfile.push(file);

    }
    // console.log(Packingfile);
    // console.log(this.PackingfileArr)
    console.log("rhis is packing file log")
   
    // this.PackingfileArr=Packingfile;
    this.MainOrderForm.packinglist=Packingfile
}


InvoiceFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}

LCBCFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}

FTAFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}

COOFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}

COAFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}
MSDSFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}

OtherFileUpload($event : any) {
  // console.log($event.target.files[0]); 
}






isSumbitted = false
// OrderInsertionForm !:FormGroup

  constructor(private service:SharedServiceService ) { }



 
dropdownArr = [
  // {description : "description 1", code : "code 1"},
  // {description : "description 2", code : "code 2"},
  // {description : "description 3", code : "code 3"},
  // {description : "description 4", code : "code 4"},
  // {description : "description 5", code : "code 5"},
  // {description : "description 6", code : "code 6"},
]


// FILES INTO ARRAY THEN IN  MAIN ORDERFORM



// 1.BL FILE

//   BLArr!: any[];
// setBLValue(event:any) {

//     //let extensionAllowed = { "png": true, "jpeg": true ,"pdf":true};
//     let BLfile = [];
//     for (let file of event.target.files) {
//       if (file.size / 1024 / 1024 > 20) {
//         alert("File size should be less than 20MB")
//         return;
//       }
//       // if (extensionAllowed) {
//       //   var nam = file.name.split('.').pop();
//       //   console.log(nam , "here is nam");

//       //   ['png','pdf','xlsx'].filter(function(val){
//       //     if (val == 'doctor') {
//       //       return val;
//       //     }   
//       //   });
//       // }
//       BLfile.push(file);
//     }
//     // console.log(BLfile);
   
//     this.BLArr=BLfile;
//     this.MainOrderForm.bl = this.BLArr
//   }



  // 2 PACKING FILE
  // PackingfileArr!: any[];
  // setpackingflieValue(event:any) {
  
  //     //let extensionAllowed = { "png": true, "jpeg": true ,"pdf":true};
  //     let Packingfile = [];
  //     for (let file of event.target.files) {
  //       if (file.size / 1024 / 1024 > 20) {
  //         alert("File size should be less than 20MB")
  //         return;
  //       }
  //       // if (extensionAllowed) {
  //       //   var nam = file.name.split('.').pop();
  //       //   console.log(nam , "here is nam");
  
  //       //   ['png','pdf','xlsx'].filter(function(val){
  //       //     if (val == 'doctor') {
  //       //       return val;
  //       //     }   
  //       //   });
  //       // }
  //       Packingfile.push(file);
  //     }
  //     console.log(Packingfile);
  //     console.log(this.PackingfileArr)
  //     console.log(FileList)
     
  //     this.PackingfileArr=Packingfile;
  //     this.MainOrderForm.packinglist=this.PackingfileArr
  //   }


onSubmit(): void {
//   console.log("pressed")

  this.MainOrderForm.matdetails = this.mianArr;
  this.MainOrderForm.ContainerDetails = this.ContainerDetails

if(this.mianArr[this.mianArr.length -1].description) 
{

}

  // console.log(this.MainOrderForm);
  // let Data = this.MainOrderForm
  
  this.service.PostOrder(this.MainOrderForm)
  .pipe(first())
  .subscribe(
      _data => {
          console.log("ORDER INSTERED")
          alert("Order has been inserted")
          this.MainOrderForm={}
      },
      error => {
          this.error = error;
          this.loading = false;
      });

}


  ngOnInit(): void {
   

  






    // GET APIS
    
    this.service.getShimpentMode().subscribe((res:any)=>{
      this.shipmentmodeArr = res.data.shippershipmentmode
      // console.log(res.data.shippershipmentmode)

    })

    this.service.getPayment().subscribe((res:any)=>{
      this.paymentmethod=res.data.contract
      // console.log(res.data.contract)
    })

    this.service.getContainertype().subscribe((res:any)=>{
      this.ContainerType=res.data.containertype
      // console.log(this.ContainerType)
    })

    this.service.getContainerSize().subscribe((res:any)=>{
      this.ContainerSize=res.data.containersize
      // console.log(this.ContainerSize)
    })

    this.service.getMatDetails().subscribe((res:any)=>{
      this.Materials=res.data.materails
      // console.log(this.Materials)
    })

    this.service.getBanks().subscribe((res:any)=>{
      this.Banks=res.data.banks
      // console.log(this.Banks)
    })

    this.service.getSuppliers().subscribe((res:any)=>{
      this.Supplier=res.data.supplier
      // console.log(this.Supplier)
    })

    this.service.getClearingAgent().subscribe((res:any)=>{
      this.Agent=res.data.clearingagent
      // console.log(this.Agent)
    })


    this.service.getOriginCountry().subscribe((res:any)=>{
      this.OriginCountry=res.data.orgcountry
      // console.log(this.OriginCountry)
    })

    this.service.getDestinationCountry().subscribe((res:any)=>{
      this.DestinationCountry=res.data.destlocation
    console.log(this.DestinationCountry)
    })


    this.service.getOriginPort().subscribe((res:any)=>{
      this.OriginPort=res.data.orgport
      // console.log(this.OriginPort)
    })

    this.service.getDestinationPort().subscribe((res:any)=>{
      this.DestinationPort=res.data.destport
      console.log(this.DestinationPort)
    })

    this.service.getShippingLine().subscribe((res:any)=>{
      this.ShippingLine=res.data.shippingline
      // console.log(this.ShippingLine)
      
    })

    this.service.Documenttype().subscribe((res:any) =>{
      this.DocumentType = res.data.documenttype
      // console.log(this.DocumentType)
    })


    // this.service.dummyApi().subscribe((data:any)=>{
    //   this.dummydata=data
    //   console.log(data )
    // })



  }


}



