import { Component,OnInit } from '@angular/core';
import { Platform } from './platform';
import { PlatformService } from './platform.service';


@Component({
    selector: 'platform-list',
    templateUrl: './platform.component.html',
    styleUrls: ['./platform.component.css'],
})
 
export class PlatformComponent implements OnInit {
    title = 'LiveRecord';
    platforms = null;
    selectedPlatform: Platform = null;
    onSelectPlatform(platform: Platform): void {
        this.selectedPlatform = platform;
    }

    constructor(private platformService: PlatformService) {

    }

    ngOnInit(): void {
        this.getPlatforms();
    }

    getPlatforms(): void {
        this.platformService.getPlatformsWeb().then(platforms => { this.platforms = platforms });
    }
}

