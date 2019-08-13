// 用作缓存
// sessionStorage存储
const state = 's';// 存储在ses中的state的key
// 存储state到session中
export function sesSetState(originState) {
    var originState = coding(originState);
    window.sessionStorage.setItem(state,originState)
}
// 获取session中state数据
export function sesGetState() {
    if (window.sessionStorage.getItem(state)) {
        return encoding(window.sessionStorage.getItem(state))
    }
}

export function sesRemoveState() {
    window.sessionStorage.removeItem(state)
}

export function sesClear() {
    window.sessionStorage.clear()
}

// 存储state到session中
export function sesSetData(key,originState) {
    let data = coding(originState);
    window.sessionStorage.setItem(key,data)
}
// 获取session中state数据
export function sesGetData(key) {
    let data = window.sessionStorage.getItem(key);
    if (data) {
        return encoding(data)
    }
}

// 编码：——————————

export function coding(permissions) {
    // permissions  需要被编码的url
    // 转换为字符串
    permissions = JSON.stringify(permissions);
    // var permissions=["个人所有银行卡","银行卡设置","我的商户","我是商户","所有商户","审批商户","添加商户","商户管理","我是供码用户","添加供码用户","供码用户管理","我是代理","代理管理","用户信息","用户中心","日志明细","修改通道","运营管理","系统设置","公司所有银行卡","银行卡管理","所有权限查询","某个职位权限查询","分配权限","权限管理","所有岗位","岗位管理","添加管理员","管理员管理","添加团队","团队管理","公司管理","个人银行卡","提现历史"];
    var pointAt = String.prototype.codePointAt || String.prototype.charCodeAt;
    String.prototype.pointAt = pointAt;
    var target = '';
    for(let i = 0; i < permissions.length;i++){
        target += (permissions[i].pointAt()+'&');
    }
    target = target.substr(0,target.length-1);
    target = window.btoa(target);
    return target
}

// 解码：——————————

export function encoding (origin) {
    // 需要被解码的数据  origin
    origin = window.atob(origin);
    var fromCode = String.fromCodePoint || String.fromCharCode;
    var target = '';
    var tempArr = origin.split('&');
    for(let j = 0;j < tempArr.length;j++){
        target += fromCode(tempArr[j])
    }
    return JSON.parse(target)
}

