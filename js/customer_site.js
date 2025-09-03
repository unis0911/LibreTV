const CUSTOMER_SITES = {
    MZ: {
        api: 'https://mzm3u8jx.com/aliplayer.html?url=',
        name: 'MZ',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
