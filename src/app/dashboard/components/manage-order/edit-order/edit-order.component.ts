import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { SharedServiceService } from 'src/app/dashboard/shared_services/shared-service.service';
import { OrderDocumentType } from 'src/app/Shared/Enums';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  [x: string]: any;
  

  // [x: string]: any;



  updatedOrder: any = {}

  url: any

  oid :any

  MainOrderForm: any = {}

  // SHIPMENT DETAILS
  shipmentmodeArr: any;
  selectedshipmentmode: any

  // ChangeShipmentmode = (e:any) =>{
  //   console.log(e.target.value )
  //   // this.selectedshipmentmode=e.target.value
  //   this.shipmentmode?.setValue(e.target.value,{
  //     onlySelf: true,
  //   })
  //   // console.log(this.shipmentmode)
  // }


  // MAT DETAILS

  Materials: any;
  selectedMaterials: any
  Matdescriptions: any

  ChangeMaterials = (e: any) => {
    this.selectedMaterials = e.target.value
    console.log(e.target.value)
  }


  materialDetails :any= [];
  setValue(obj: any, event: any) {
   
  
    let findCode = this.Materials.filter((item: any) => item.matcode == event.target.value)
    obj.matdesc = findCode.length > 0 ? findCode[0].matdesc : '';
    console.log(this.materialDetails)
  }

  addNewRow() {
    // console.log(this.materialDetails)
    // console.log(this.dropdownArr)
    this.materialDetails.push({mat_id:null,quantity:null,matdesc:null})
  }

  removeRow(index: number) {
    this.materialDetails.splice(index, 1);
  }


  // LC/BC DETAILS
  paymentmethod: any;
  selectedpaymentmethod: any

  Changepaymentmethod = (e: any) => {
    // console.log(e.target.value )
    this.selectedshipmentmode = e.target.value
  }


  // CONTAINER DETAILS

  ContainerSize: any;
  ContainerType: any;
  testingvariable = null

  // mianArr = [{description : null, qty : null,code:null , matid:null}];
  // setValue(obj:any , event:any){
  //   // debugger;
  //   obj.description = event.target.value;
  //   let findCode = this.Materials.filter((item:any) => item.matdesc == event.target.value)
  //   obj.code = findCode.length > 0 ? findCode[0].matcode : 0;
  //   obj.matid =findCode.length > 0 ? findCode[0].matid : 0;
  //   console.log(this.mianArr)
  // }


  ContainerDetails:any = [];

  setContValue(obj: any, event: any) {
    console.log(this.ContainerDetails)
  }


  addContainers = () => {
    console.log(this.ContainerDetails)
    this.ContainerDetails.push({container_number : null, container_type_id : null , container_size_id:null})
  }

  removeContainerDetails = (index: number) => {
    
    this.ContainerDetails.splice(index, 1);
  }



  // BANKS DETAILS

  Banks: any;
  selectedBank: any

  ChangeBank = (e: any) => {
    // console.log(e.target.value)
    this.selectedBank = e.target.value
  }



  // SUPPLIER DETAILS

  Supplier: any;
  selectedSupplier: any

  ChangeSupplier = (e: any) => {
    console.log(e.target.value)
    this.selectedSupplier = e.target.value
  }



  // CLEARING AGENT DETAILS

  Agent: any;
  selectedAgent: any

  ChangeAgent = (e: any) => {
    console.log(e.target.value)
    this.selectedAgent = e.target.value
  }



  // SHIPMENT DETAILS 
  // ORIGIN COUNTRY

  OriginCountry: any;
  selectedOriginCountry: any

  ChangeOriginCountry = (e: any) => {
    console.log(e.target.value)
    this.selectedOriginCountry = e.target.value
  }

  // DESTINATION COUNTRY

  DestinationCountry: any;
  selectedDestinationCountry: any

  ChangeDestinationCountry = (e: any) => {
    console.log(e.target.value)
    this.selectedDestinationCountry = e.target.value
  }

  // Origin port

  OriginPort: any;
  selectedOriginPort: any

  ChangeOriginPort = (e: any) => {
    console.log(e.target.value)
    // if(this.selectedDestinationPort != e.target.value ){
    //   this.selectedOriginPort=e.target.value
    // }
    if (this.selectedOriginPort = e.target.value) {
      this.selectedDestinationPort != e.target.value
    }
  }

  // destination port

  DestinationPort: any;
  selectedDestinationPort: any

  ChangeDestinationPort = (e: any) => {
    console.log(e.target.value)
    if (this.selectedDestinationPort = e.target.value) {
      this.selectedDestinationPort != e.target.value
    }
  }


  // SHIPPING LINE

  ShippingLine: any;
  selectedShippingLine: any

  ChangeShippingLine = (e: any) => {
    console.log(e.target.value)
    this.selectedShippingLine = e.target.value
  }
  dummydata: any;



  //  FILE UPLOAD


  DocumentType: any



  BLArr!: any[];

  BLFileUpload($event: any) {

    console.log($event.target.files, "event tagetfile"); // outputs the first file
    let extensionAllowed = { "png": true, "jpeg": true, "pdf": true, "txt": true };
    let BLfile = [];
    for (let file of $event.target.files) {
      BLfile.push(file, $event.target.id);
    }
    // console.log(BLfile);
    console.log("rhis is packing file log")
    console.log($event.target.id)

    this.BLArr = BLfile;
    this.MainOrderForm.bl = this.BLArr
    console.log(this.MainOrderForm.bl, "BL FORM")
  }

  selectedFiles!: FileList | any;
  currentFile: File | any;
  currentFileid: any;
  progress = 0;
  message = '';
  fileInfos!: Observable<any>;



  UploadFile(event: any, id: any) {
    for (let file of event.target.files) {
      console.log(file)
      console.log(this.url)
      var url = this.service.upload(file, id)

      if (id = OrderDocumentType.BL) {
        this.MainOrderForm.bl = {}
        this.MainOrderForm.bl.id = OrderDocumentType.BL
        this.MainOrderForm.bl.fileurl = file;
        console.log("upload", this.MainOrderForm.bl)
      }


      if (id = OrderDocumentType.Packing_ist) {
        this.MainOrderForm.packinglist = {}
        this.MainOrderForm.packinglist.fileurl = url;
        this.MainOrderForm.packinglist.id = OrderDocumentType.Packing_ist
      }

      if (id = OrderDocumentType.Invoice) {
        this.MainOrderForm.invoice = {}
        this.MainOrderForm.invoice.fileurl = url;
        this.MainOrderForm.invoice.id = OrderDocumentType.Invoice
      }
      if (id = OrderDocumentType.LCBC) {
        this.MainOrderForm.LCBCdoc = {}
        this.MainOrderForm.LCBCdoc.fileurl = url;
        this.MainOrderForm.LCBCdoc.id = OrderDocumentType.LCBC
      }

      //    if(id = OrderDocumentType.FTA){
      //     this.MainOrderForm.LCBCdoc={}
      //  this.MainOrderForm.fta.fileurl=url;
      //  this.MainOrderForm.fta.id = OrderDocumentType.FTA
      //    }


      if (id = OrderDocumentType.COO) {
        this.MainOrderForm.coo = {}
        this.MainOrderForm.coo.fileurl = url;
        this.MainOrderForm.coo.id = OrderDocumentType.COO
      }

      if (id = OrderDocumentType.COA) {
        this.MainOrderForm.coa = {}
        this.MainOrderForm.coa.fileurl = url;
        this.MainOrderForm.coa.id = OrderDocumentType.COA
      }

      if (id = OrderDocumentType.MSDS) {
        this.MainOrderForm.msds = {}
        this.MainOrderForm.msds.fileurl = url;
        this.MainOrderForm.msds.id = OrderDocumentType.MSDS
      }


      if (id = OrderDocumentType.Others) {
        this.MainOrderForm.others = {}
        this.MainOrderForm.others.fileurl = url;
        this.MainOrderForm.others.id = OrderDocumentType.Others
      }



    }

  }





  






  // 2 PACKING FILE UPLOAD
  PackingfileArr!: any[];

  PackingFileUpload($event: any) {
    console.log($event.target.files);

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
    console.log(Packingfile);
    // console.log(this.PackingfileArr)
    console.log("rhis is packing file log")

    // this.PackingfileArr=Packingfile;
    this.MainOrderForm.packinglist = Packingfile
  }


  InvoiceFileUpload($event: any) {
    console.log($event.target.files[0]);
  }

  LCBCFileUpload($event: any) {
    console.log($event.target.files[0]);
  }

  FTAFileUpload($event: any) {
    console.log($event.target.files[0]);
  }

  COOFileUpload($event: any) {
    console.log($event.target.files[0]);
  }

  COAFileUpload($event: any) {
    console.log($event.target.files[0]);
  }
  MSDSFileUpload($event: any) {
    console.log($event.target.files[0]);
  }

  OtherFileUpload($event: any) {
    console.log($event.target.files[0]);
  }






  isSumbitted = false
  // OrderInsertionForm !:FormGroup

  constructor(private service: SharedServiceService, private activatedRoute: ActivatedRoute , public router:Router) { }






  ngOnInit(): void {



    this.activatedRoute.paramMap.subscribe(param => {
      console.log(param.get('id'))
       this.oid = param.get('id')

       
      console.log(this.oid)

      this.service.getOrderbyid(this.oid).subscribe(
        (res: any) => {
          
          this.updatedOrder = res.data.order[0]
          console.log(this.updatedOrder)
          var obj :any ={}
          this.updatedOrder.order_shipping_details=this.updatedOrder.order_shipping_details?.length > 0 ? this.updatedOrder.order_shipping_details[0] : obj
          this.updatedOrder.order_contract_details= this.updatedOrder.order_contract_details?.length >0 ? this.updatedOrder.order_contract_details[0] : obj
          
          
          if(this.updatedOrder.order_container_details.length==0)
          {
            this.ContainerDetails.push({container_number : null, container_type_id : null , container_size_id :null})
          }
          else{
            this.ContainerDetails = this.updatedOrder.order_container_details;
          }


          if(this.updatedOrder.order_mat_details.length==0)
          {
            this.materialDetails.push({mat_id:null, quantity:null, matdesc:null})
          }
          else{
            this.materialDetails = this.updatedOrder.order_mat_details
            console.log(this.Materials)
            this.materialDetails.filter((x:any)=>{
              let findCode = this.Materials.filter((item: any) => item.matcode == x.mat_id)
              x.matdesc = findCode.length > 0 ? findCode[0].matdesc : '';
            })
          }
          // this.updatedOrder.create_dt= moment(this.updatedOrder.create_dt).format('MMMM Do YYYY, h:mm:ss a')
          // this.updatedOrder.eif_dt=moment(this.updatedOrder.eif_dt).format('mm/Do/yyyy, h:mm:ss a')
          
          console.log(this.materialDetails)
          // this.updatedOrder.eif_dt=this.toDateString()
          // console.log(this.updatedOrder.eif_dt)
          // console.log(this.updatedOrder)
          // console.log(this.updatedOrder[0].po_line_number)
        }
      )

    })
    // GET APIS
    // this.service


    // this.service.getShimpentMode().subscribe((data: any) => {
    //   this.shipmentmodeArr = data
    //   console.log(this.shipmentmodeArr)
    // })

    // this.service.getPayment().subscribe((data: any) => {
    //   this.paymentmethod = data
    //   // console.log(this.paymentmethod)
    // })

    // this.service.getContainertype().subscribe((data: any) => {
    //   this.ContainerType = data
    //   // console.log(this.ContainerType)
    // })

    // this.service.getContainerSize().subscribe((data: any) => {
    //   this.ContainerSize = data
    //   // console.log(this.ContainerSize)
    // })

    // this.service.getMatDetails().subscribe((data: any) => {
    //   this.Materials = data
    //   console.log(this.Materials)
    // })

    // this.service.getBanks().subscribe((data: any) => {
    //   this.Banks = data
    //   // console.log(this.Banks)
    // })

    // this.service.getSuppliers().subscribe((data: any) => {
    //   this.Supplier = data
    //   console.log(this.Supplier)
    // })

    // this.service.getClearingAgent().subscribe((data: any) => {
    //   this.Agent = data
    //   // console.log(this.Agent)
    // })


    // this.service.getOriginCountry().subscribe((data: any) => {
    //   this.OriginCountry = data
    //   console.log(this.OriginCountry)

    // })

    // this.service.getDestinationCountry().subscribe((data: any) => {
    //   this.DestinationCountry = data
    // })


    // this.service.getOriginPort().subscribe((data: any) => {
    //   this.OriginPort = data
    // })

    // this.service.getDestinationPort().subscribe((data: any) => {
    //   this.DestinationPort = data
    // })

    // this.service.getShippingLine().subscribe((data: any) => {
    //   this.ShippingLine = data
    // })

    // this.service.Documenttype().subscribe((data: any) => {
    //   this.DocumentType = data
    //   // console.log(this.DocumentType)
    // })




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
      console.log(this.ContainerSize)
    })

    this.service.getMatDetails().subscribe((res:any)=>{
      this.Materials=res.data.materails
      console.log(this.Materials)
    })

    this.service.getBanks().subscribe((res:any)=>{
      this.Banks=res.data.banks
      console.log(this.Banks)
    })

    this.service.getSuppliers().subscribe((res:any)=>{
      this.Supplier=res.data.supplier
      console.log(this.Supplier)
    })

    this.service.getClearingAgent().subscribe((res:any)=>{
      this.Agent=res.data.clearingagent
      console.log(this.Agent)
    })


    this.service.getOriginCountry().subscribe((res:any)=>{
      this.OriginCountry=res.data.orgcountry
      console.log(this.OriginCountry)
    })

    this.service.getDestinationCountry().subscribe((res:any)=>{
      this.DestinationCountry=res.data.destlocation
    console.log(this.DestinationCountry)
    })


    this.service.getOriginPort().subscribe((res:any)=>{
      this.OriginPort=res.data.orgport
      console.log(this.OriginPort)
    })

    this.service.getDestinationPort().subscribe((res:any)=>{
      this.DestinationPort=res.data.destport
      console.log(this.DestinationPort)
    })

    this.service.getShippingLine().subscribe((res:any)=>{
      this.ShippingLine=res.data.shippingline
      console.log(this.ShippingLine)
      
    })

    this.service.Documenttype().subscribe((res:any) =>{
      this.DocumentType = res.data.documenttype
      console.log(this.DocumentType)
    })








    // this.service.dummyApi().subscribe((data:any)=>{
    //   this.dummydata=data
    //   console.log(data )
    // })



  }

  onSubmit(): void {
    //   console.log("pressed")
    debugger
    console.log(this.testingvariable)
    console.log(this.updatedOrder)
    console.log(this.oid)
    
    this.updatedOrder.order_container_details = this.ContainerDetails
    this.updatedOrder.order_mat_details = this.materialDetails
   

    // this.MainOrderForm = {}
    //    this.updatedOrder={}

    // console.log(this.MainOrderForm);
    // let Data = this.MainOrderForm

    this.service.UpdateOrder(this.updatedOrder , this.oid)
      .pipe(first())
      .subscribe(
        _data => {
          console.log("ORDER Updated")
          alert("Order has been updated")
          this.router.navigate(['/manageorder' ]); 
        },
        error => {
          this.error = error;
          this.loading = false;
          alert(this.error)
          console.log(error)
        });



  }
}
