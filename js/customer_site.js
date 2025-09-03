const CUSTOMER_SITES = {
    dyttzy: {
        api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
        name: 'DYTT',
    }
    mym3u8: {
        api: 'https://api.maoyanapi.top/api.php/provide/vod',
        name: 'MY',
    }
    MZ: {
        api: 'https://mozhuazy.com/api.php/provide/vod/?ac=list',
        name: 'MZ',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
