import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { Avis, AvisFormData } from '../models/avis.model';

@Injectable({
  providedIn: 'root'
})
export class AvisService {
  constructor(private apiService: ApiService) {}

  envoyerAvis(avisData: AvisFormData): Observable<Avis> {
    return this.apiService.post<Avis>('avis', avisData);
  }

  getAvisApprouves(): Observable<Avis[]> {
    return this.apiService.get<Avis[]>('avis?approuve=true');
  }

  getAllAvis(): Observable<Avis[]> {
    return this.apiService.get<Avis[]>('avis');
  }

  getAvis(params?: { minNote?: number; limit?: number }): Observable<{ success: boolean; data: { avis: Avis[] } }> {
    let endpoint = 'avis?approuve=true';
    if (params?.minNote) {
      endpoint += `&minNote=${params.minNote}`;
    }
    if (params?.limit) {
      endpoint += `&limit=${params.limit}`;
    }
    return this.apiService.get<{ success: boolean; data: { avis: Avis[] } }>(endpoint);
  }
}

