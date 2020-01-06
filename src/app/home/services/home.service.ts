import { Injectable } from '@angular/core';
import {Channel, ImageSlider, TopMenu, Ad} from 'src/app/shared';
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
    getAdByTab(tab: string) {
        return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
            params: { categories_like: tab }
        });
    }
}
