import {Injectable} from '@angular/core'

import { Platform, AllPlatforms } from './platform'


@Injectable()
export class PlatformService {
    getPlatforms(): Promise<Platform[]> {
        return Promise.resolve(AllPlatforms);
    }
    getPlatform(id:Number): Promise<Platform> {
        return this.getPlatforms()
            .then(platforms => platforms.find(one => one.id === id));
    }
    getPlatformsWeb(): Promise<Platform[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(this.getPlatforms())
            }, 0);
        });
    }
}

