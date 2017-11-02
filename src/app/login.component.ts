import { Component,OnInit } from '@angular/core';
import { Platform } from './platform'
import { PlatformService } from './platform.service'

@Component({
    selector: 'login-layout',
    templateUrl: './login.component.html',
    styleUrls:['./login.component.css']
})

export class LoginComponent implements OnInit{
    platforms: Platform[];

    constructor(
        private platformService: PlatformService
      ) {

    }

    ngOnInit(): void {
        this.platformService.getPlatformsWeb().then(platforms => {
            this.platforms = platforms;
        })
    }

}
