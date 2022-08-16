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



 requestOptions = { headers: this.headers };



 getShimpentMode(): Observable<any[]> {
  return this.http.get<any>(`${environment.apiUrl}/allShipmentmode` , this.requestOptions)
} 


getPayment( ): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/paymentmethod` , this.requestOptions )
}

getContainertype(): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/containerType` , this.requestOptions)
}

getContainerSize(): Observable<any> {
  return this.http.get<any>(`${environment.apiUrl}/containerSize`,this.requestOptions)
}

getMatDetails () : Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/materails` ,this.requestOptions)
}

getBanks (): Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/banks`,this.requestOptions)
}
getSuppliers (): Observable <any>{
  return this.http.get<any>(`${environment.apiUrl}/supplier` ,this.requestOptions)
}

getClearingAgent (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/clearingagent` , this.requestOptions)
}

getOriginCountry (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/origincountry` , this.requestOptions)
}

getDestinationCountry (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/destinationcountry` , this.requestOptions)
}

getOriginPort (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/originport` , this.requestOptions)
}
getDestinationPort (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/destinationport` , this.requestOptions)
}
getShippingLine (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/shippingline` , this.requestOptions)
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
  return this.http.get<any>(`${environment.apiUrl}/documents`,  this.requestOptions )
}


Orders (): Observable<any>{
  return this.http.get<any>(`${environment.apiUrl}/allReviews`,  this.requestOptions )
}



upload(file: File , id:any): Observable<HttpEvent<any>> {
  debugger
  const formData: FormData = new FormData();
  formData.append('file', file);
  formData.append('id', id);
  console.log(formData)
  console.log(file)
  console.log(id)
  const req = new HttpRequest('POST', `${environment.apiUrl}/uploaddoc`, formData, {
    reportProgress: true,
    responseType: 'json'
  });
  console.log(req)
  return this.http.request(req);
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


