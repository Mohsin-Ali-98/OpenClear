import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/_services';
// import { environment } from 'src/environments/environment';
import { environment } from 'src/environments/environment.prod';
// import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  constructor( private http: HttpClient , ) { }
  
  auth_token = localStorage.getItem('token')

  // auth_token = 'eyJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiYWRtaW4iLCJleHAiOjE2NTkzNDgwNDEsImlhdCI6MTY1OTMzMDA0MSwidXNlcklkIjoxfQ.pggV0SZsqeT1Z7OOMBSQlzQU-hc_brxPQu-4bI9JMK6ZXenipwn4W9lypLd3HCMQ2qgT_gYxXbZti_YPnifZsA'


 headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${this.auth_token}`
});



 requestOptions = { headers: this.headers  };
 UpdaterequestOptions = { headers: this.headers  };
 



 UpdateOrder(Data:any ,id:any ): Observable<any[]> {
  
  let oid= id 

   let orderhead = this.requestOptions + oid
   console.log(oid, 'here is orderhead')
  return this.http.put<any>(`${environment.apiUrl}/orderby/${id}`  , {Data} , this.requestOptions  )
} 

 getOrderbyid(id:any): Observable<any[]> {
  let oid= id 
   let orderhead = this.requestOptions + oid
   console.log(orderhead, 'here is orderhead')
  return this.http.get<any>(`${environment.apiUrl}/orderby/${id}`   , this.requestOptions  )
} 



getEventbyOrder(id:any): Observable<any[]> {
  let oid= id 
   let orderhead = this.requestOptions + oid
   console.log(oid, 'here is event')
  return this.http.get<any>(`${environment.apiUrl}/eventbyorder/${id}`   , this.requestOptions  )
} 


getEventList(id:any): Observable<any[]> {
  return this.http.get<any>(`${environment.apiUrl}/events/${id}` , this.requestOptions)
} 


AddEvent(Event:any): Observable<any[]> {
  return this.http.post<any>(`${environment.apiUrl}/addOrderEvent` ,{Event}, this.requestOptions)
} 


DeleteEvent(order_id:any ,event_id:any ): Observable<any[]> {
  
  let Event ={order_id , event_id }

  return this.http.put<any>(`${environment.apiUrl}/deleteEventOrder`  , {Event} , this.requestOptions  )
} 


UpdateEvent(order_id:any ,event_id:any ,eventdate:any ): Observable<any[]> {
  
  let Event ={order_id , event_id ,eventdate }

  return this.http.put<any>(`${environment.apiUrl}/updateEventOrder`  , {Event} , this.requestOptions  )
} 







 getShimpentMode(): Observable<any[]> {
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperShipmentModes` , this.requestOptions)
} 


getPayment( ): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/getAllContractDetails` , this.requestOptions )
}

getContainertype(): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/getAllContainerTypes` , this.requestOptions)
}

getContainerSize(): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/getAllContainerSizes`,this.requestOptions)
}

getMatDetails () : Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperMaterials` ,this.requestOptions)
}

getBanks (): Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllBanks`,this.requestOptions)
}
getSuppliers (): Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperSupplier` ,this.requestOptions)
}

getClearingAgent (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperClearingAgents` , this.requestOptions)
}

getOriginCountry (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllOriginCountries` , this.requestOptions)
}

getDestinationCountry (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperDestinationLocations` , this.requestOptions)
}

getOriginPort (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperOriginPorts` , this.requestOptions)
}
getDestinationPort (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperDestinationPorts` , this.requestOptions)
}
getShippingLine (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllShipperShippinglines` , this.requestOptions)
}

PostOrder (Data: any): Observable<any>{
  console.log(Data)
  // let datacopy= Data
  // Data.BL= Data.bl + ''
  // console.log(typeof Data.bl)
  return this.http.post<any>(`${environment.apiUrl}/createorder`, {Data}, this.requestOptions )
}
// documenttype

Documenttype (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/getAllDocumentTypes`,  this.requestOptions )
}


Orders (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/allorders`,  this.requestOptions )
}





// upload(file: File , id:any):Observable<any> {
  // const formData: FormData = new FormData();
  // formData.append('file', file);
  // formData.append('id', id);
  // console.log(formData)
  // // console.log(file)
  // // console.log(id)

  // let docheaders = new HttpHeaders();
  // docheaders.append('Content-Type', 'multipart/form-data');
  // docheaders.append('Accept', 'application/json');

// // let requestoptions = new RequestOptions({
// // method: RequestMethod.Post,
// // headers:headers
// //   });

//   const docrequestOptions = { headers: docheaders };

//   // const req = new HttpRequest('POST', `${environment.apiUrl}/uploaddoc`, formData, docrequestOptions )
//   // console.log(req)
//   // return this.http.request(req);
//    return this.http.post(`${environment.apiUrl}/uploaddoc`, formData, docrequestOptions)
//                  .subscribe(
//                      data => console.log('success'),
//                      error => console.log(error)
//                  );


//   // this.http.post<any>(`${environment.apiUrl}/uploaddoc`,  formData )
// }




async upload  (file: File , id:any){
  debugger
const formData: FormData = new FormData();
  formData.append('file', file);
  formData.append('id', id);
  console.log(formData)
  // console.log(file)
  // console.log(id)

  let docheaders = new HttpHeaders();
  docheaders.append('Content-Type', 'multipart/form-data');
  docheaders.append('Accept', 'application/json');

  const docrequestOptions = { headers: docheaders };

  // return this.http.post("http://localhost:8084/uploaddoc", {formData}, docrequestOptions)
  
  var req =  await this.http.post<any>("http://localhost:8084/uploaddoc", {file:file}).toPromise()
  
  return req
}


// getFiles(): Observable<any> {
//   return this.http.get(`${this.apiUrl}/files`);
// }






// upload(file: File ,id:any) {
//   const formData: FormData = new FormData();
//   formData.append('file', file);
//   formData.append('id', id);
//   const req = new HttpRequest('POST', `${environment.apiUrl}/uploaddoc`, {formData}, {
//     reportProgress: true,
//     responseType: 'json'
//   });
//   return this.http.request(req);











// PostOrder(Data: any ) {
//   // console.log(email_address , password)
//   console.log(Data)
  
//   return this.http.post<any>(`${environment.apiUrl}/createorder`,  this.requestOptions ,
//   // {headers: new HttpHeaders({'x-access-token':'tokenvalue'})}
//   )
      

// }




//  OLD APIS


//   getShimpentMode(): Observable<any[]> {
//     return this.http.get<any>(`${environment.apiUrl}/getall_shipment_mode_by_shipper` , this.requestOptions)
//   } 


//   getPayment( ): Observable<any> {
//     return this.http.get<any>(`${environment.apiUrl}/getall_paymentmethod` , this.requestOptions )
//   }

//   getContainertype(): Observable<any> {
//     return this.http.get<any>(`${environment.apiUrl}/get_container_type` , this.requestOptions)
//   }

//   getContainerSize(): Observable<any> {
//     return this.http.get<any>(`${environment.apiUrl}/get_container_size`,this.requestOptions)
//   }

//   getMatDetails () : Observable <any>{
//     return this.http.get<any>(`${environment.apiUrl}/getmatdetails` ,this.requestOptions)
//   }

//   getBanks (): Observable <any>{
//     return this.http.get<any>(`${environment.apiUrl}/getbanks`,this.requestOptions)
//   }
//   getSuppliers (): Observable <any>{
//     return this.http.get<any>(`${environment.apiUrl}/getsupplier` ,this.requestOptions)
//   }

//   getClearingAgent (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getclearingagent` , this.requestOptions)
//   }

//   getOriginCountry (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getorigincountry` , this.requestOptions)
//   }

//   getDestinationCountry (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getdestinationcountry` , this.requestOptions)
//   }

//  getOriginPort (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getoriginport` , this.requestOptions)
//   }
//   getDestinationPort (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getdestinationport` , this.requestOptions)
//   }
//   getShippingLine (): Observable<any>{
//     return this.http.get<any>(`${environment.apiUrl}/getshippingline` , this.requestOptions)
//   }



  // dummyApi (): Observable<any>{
  //   return this.http.get<any>("http://202.61.40.196:8080/bsl-dashboard-portal-api/event/getViolationEventsByVehicleNumberAndDate/20/2021-12-28%2000:00:00" , this.requestOptions)
  // }


}


