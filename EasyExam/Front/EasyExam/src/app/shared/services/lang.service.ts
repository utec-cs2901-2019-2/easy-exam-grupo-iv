import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  act: any;
  constructor(private http: HttpService) { }
  getActual() {}
  change(val: string) {}
}
