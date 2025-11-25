import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Contact, ContactFormData } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private apiService: ApiService) {}

  envoyerContact(contactData: ContactFormData): Observable<Contact> {
    return this.apiService.post<Contact>('contact', contactData);
  }

  getContacts(): Observable<Contact[]> {
    return this.apiService.get<Contact[]>('contact');
  }
}

