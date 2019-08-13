

const tools = {
    // 判断是否是图片后缀
    isImg(str) {
        var regs = [/jpg/i, /jpeg/i, /png/i, /gif/i];
        let flag = true;
        for (let i in regs) {
            if (regs[i].test(str)) {
                flag = true;
                break;
            }
        }
        return flag;
    },
    // 验证账号
    isvalidUsername(str) {
        //必须字母开头，可以纯字母可以加数字字符  唯一不可以加的就是汉字
        const reg = /^[a-zA-Z][a-zA-Z0-9!@#$%^&*~`,.+=\-_\<\>\?:;'"{}\[\]|/\\]*$/;
        return reg.test(str)

    },
    // 验证密码
    isvalidPassword(str) {
        const reg = /^(?=.*?[A-Za-z]+)(?=.*?[0-9]+)(.*)$/   // 必须包含字母和数字
        const len = str.length >= 8 //且超过8位
        return reg.test(str) && len
    },
    // 验证是否是合法url
    validateURL(textval) {
        const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
        return urlregex.test(textval)
    }

};
export default tools;
