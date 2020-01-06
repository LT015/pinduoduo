import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ImageSlider, Channel, Ad} from 'src/app/shared';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from '../../services';
import {Observable, Subscription} from 'rxjs';
import {filter, map, switchMap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeDetailComponent implements OnInit, OnDestroy {

    constructor(private route: ActivatedRoute, private service: HomeService) { }

    imageSliders$: Observable<ImageSlider[]>;

    channels$: Observable<Channel[]>;

    selectedTabLink$: Observable<string>;

    sub: Subscription;

    ad$: Observable<Ad>;

    ngOnInit() {
        this.selectedTabLink$ = this.route.paramMap.pipe(
          filter(params => params.has('tabLink')),
          map(params => params.get('tabLink'))
        );
        this.sub = this.route.queryParamMap.subscribe(params => {
            console.log('查询参数', params);
        });
        this.channels$ = this.service.getChannels();
        this.imageSliders$ = this.service.getBanners();
        this.ad$ = this.selectedTabLink$.pipe(
            switchMap(tab => this.service.getAdByTab(tab)),
            filter( ads => ads.length > 0),
            map(ads => ads[0])
        );
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

}
