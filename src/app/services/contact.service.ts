import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private baseUrl: string = 'http://localhost:3000/users/send-email-contact';

  constructor(private http: HttpClient) {}

  setEmail(pName: string, pContact: string, pComment: string): Promise<any> {
    let datos = 'Prueba';
   
    return lastValueFrom(
      this.http.post<any>(
        `${this.baseUrl}/${pName}/${pContact}/${pComment}`,
        datos      
      )
    );
  }
}
