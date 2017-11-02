
export class Platform {
    id: number;
    name: string;
    logo: string;
    url: string;
}

const logopath = 'assets/res/platform/';

export const AllPlatforms: Platform[] = [
    {
        id: 0,
        name: '斗鱼',
        logo: logopath + 'douyu.png',
        url: 'https://www.douyu.com'
    },
    {
        id: 1,
        name: '熊猫',
        logo: logopath + 'panda.png',
        url: 'https://www.panda.tv'
    },
    {
        id: 2,
        name: '龙珠',
        logo: logopath + 'longzhu.png',
        url: 'https://www.longzhu.com'
    },
    {
        id: 3,
        name: '全民',
        logo: logopath + 'quanmin.png',
        url: 'https://www.quanmin.com'
    },
    {
        id: 4,
        name: '虎牙',
        logo: logopath + 'huya.png',
        url: 'https://www.huya.com'
    },
    {
        id: 5,
        name: '哔哩哔哩',
        logo: logopath + 'bilibili.png',
        url: 'https://www.bilibili.com'
    },
    {
        id: 6,
        name: '战旗',
        logo: logopath + 'zhanqi.png',
        url: 'https://www.zhanqi.tv'
    }
];

