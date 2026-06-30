import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_BASE = 'https://the-dune-productions.onrender.com/api';

export interface ContactMessage {
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  serviceInterest?: string;
}

export interface JobOpening {
  id: number;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  description: string;
  vertical: string;
}

export interface JobApplication {
  fullName: string;
  email: string;
  phone?: string;
  jobId: number;
  resumeLink?: string;
  coverNote?: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  submitContact(payload: ContactMessage): Observable<ContactMessage> {
    return this.http.post<ContactMessage>(`${API_BASE}/contact`, payload);
  }

  getJobs(vertical?: string): Observable<JobOpening[]> {
    const url = vertical ? `${API_BASE}/careers/jobs?vertical=${encodeURIComponent(vertical)}` : `${API_BASE}/careers/jobs`;
    return this.http.get<JobOpening[]>(url);
  }

  applyToJob(payload: JobApplication): Observable<JobApplication> {
    return this.http.post<JobApplication>(`${API_BASE}/careers/apply`, payload);
  }
}
