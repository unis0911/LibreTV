const CUSTOMER_SITES = {
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
