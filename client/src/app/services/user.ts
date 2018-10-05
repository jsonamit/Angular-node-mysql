import {Injectable} from '@angular/core';
import {HttpHeaders,HttpClient} from '@angular/common/http';

@Injectable()
export class Userservice {
  constructor(private http:HttpClient)
  {

  }
  private apiurl:string="http://localhost:3000/api";
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  params:any;
  userregister(body){
    return this.http.post(this.apiurl+'/user/register',body, { headers: this.headers })
      .toPromise()
      .then(res => res)
      .catch(this.handleError);

  }
  private handleError(error: Response) {
    console.log(error);
    console.log("error with promise");
    //return Observable.throw(error.json().error());
  }
}
