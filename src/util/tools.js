
// 时间转换秒数
const formatTime = (timeTemp) => {
    let m = Math.floor(timeTemp / 60);
    let s = Math.floor(timeTemp % 60);
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
};
// 数组去重
const unique = (arr) => {
    const res = [];
    const json = {};
    for (let i = 0; i < arr.length; i++) {
        if (!json[arr[i]]) {
            res.push(arr[i]);
            json[arr[i]] = 1;
        }
    }
    return res;
};
export {formatTime, unique};
