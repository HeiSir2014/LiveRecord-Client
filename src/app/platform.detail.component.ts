import { Component, Input,OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Platform } from './platform';
import { PlatformService } from './platform.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector:'platform-detail',
  templateUrl: './platform.detail.component.html',
})

export class PlatformDetailComponent implements OnInit{
    @Input() platform: Platform = null;

    constructor(
        private platformService: PlatformService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) => this.platformService.getPlatform(+params.get('id')))
            .subscribe(platform => this.platform = platform);
    }

    goBack(): void {
        this.location.back();
    }
}
