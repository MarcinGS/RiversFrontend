import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UploadResponse } from './model/uploadResponse';

@Injectable({
  providedIn: 'root'
})
export class AdminRiverImageService {

  constructor(private http: HttpClient) { }

  uploadImage(formData: FormData): Observable<UploadResponse> {
    return this.http.post<UploadResponse>(
      '/api/admin/rivers/upload-image/',
      formData
    );
  }
}
