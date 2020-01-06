import { Injectable } from '@angular/core';
import {Channel, ImageSlider, TopMenu} from 'src/app/shared/components';
import {environment} from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

    constructor(private http: HttpClient) {}
    getBanners() {
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`);
    }
    getChannels() {
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels` );
    }
    getTabs() {
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs` );
    }
}
