/**
 * 获取默认的日期格式化配置
 */
function getDefaultDateFormatConfig() {
    var defaultFormatConfig = {
        /** 年月日的分隔符 */
        separator: "-",
        /** 是否显示毫秒 */
        showMillisecond: false,
        /** 是否填充0 */
        isFillZero: true,
    }
    return defaultFormatConfig;
}

/**
 * 填充 0 
 * @param {number} num 
 */
function fillZero(num) {
    return (num > 10 ? "" : "0") + num;
}
/**
 * 简单的继承实现
 * @param {object} obj 继承的对象
 * @param {object} extendObj 被继承的对象
 */
function extend(obj, extendObj) {
    for (key in extendObj) {
        if (extendObj.hasOwnProperty(key)) {
            obj[key] = extendObj[key];
        }
    }
    return obj;
}

/**
 * 格式化日期对象为字符串，如：1992-1-5 00:00:00
 * @param {Date} date 日期对象
 * @param {object} config 配置对象,支持参数参考defaultFormatConfig
 */
function formatDate(date, config) {
    var defaultConfig = this.defaultConfig;
    var config = extend(defaultConfig, config);

    var separator = config.separator;
    var showMillisecond = config.showMillisecond;
    var isFillZero = config.isFillZero;

    var year = date.getFullYear();
    var month = (date.getMonth() + 1);
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var millisecond = date.getMilliseconds();

    if (isFillZero) {
        month = fillZero(month);
        date = fillZero(day);
        hour = fillZero(hour);
        minute = fillZero(minute);
        second = fillZero(second);
    }

    var formatStr = year + separator + month + separator + day + " " + hour + ":" + minute + ":" + second;

    if (showMillisecond) {
        formatStr += "." + millisecond;
    }
    return formatStr;
}

/**
 * 获取一个时分秒毫秒的值都是00的日期对象
 * @param {number} fullYear 年份 如 2018
 * @param {number} month 月 以0开始
 * @param {number} day 日
 */
function getDateWithFillHMSSZero(fullYear, month, day) {
    var date = new Date();
    if (fullYear) {
        date.setFullYear(fullYear);
    }
    if (month) {
        date.setMonth(month);
    }
    if (day) {
        date.setDate(day);
    }
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

module.exports = {
    formatDate: formatDate,
    defaultConfig: getDefaultDateFormatConfig(),
    /**
     * 获取当前的日期
     */
    getNowDate: function () {
        var date = new Date();
        return date;
    },
    /**
    * 获取昨天的开始日期
    */
    getYesterdayBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() - 1);
        return date;
    },
    /**
     * 获取昨天的结束日期
     */
    getYesterdayEnd: function () {
        return this.getTodayBegin();
    },
    /**
     * 获取今天的开始日期
     */
    getTodayBegin: function () {
        var date = getDateWithFillHMSSZero();
        return date;
    },
    /**
     * 获取今天的结束日期
     */
    getTodayEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() + 1);
        return date;
    },
    /**
    * 获取明天的开始日期
    */
    getTomorrowBegin: function () {
        return this.getTodayEnd();
    },
    /**
     * 获取明天的结束日期
     */
    getTomorrowEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(date.getDate() + 2);
        return date;
    },
    /**
     * 获取上周的开始日期
     * @param {boolean} isStartByMonday 是否以本周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以本周星期日的 00:00:00 刻为开始日期
     */
    getLastWeekBegin: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        //现在通常的做法（也是国际惯例），是把星期日作为一周的开始，而星期六则是周末
        //这里的day表示天，星期用 dayOfWeek 表示
        var day = date.getDate();
        var dayOfWeek = date.getDay();//星期日的值是0

        var dayValue = 0;
        if (isStartByMonday) {
            //如果以星期一为开始，那么星期天应该是7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day - dayOfWeek + 1 - 7;
        } else {
            dayValue = day - dayOfWeek - 7;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
     * 获取上周的结束日期
     * @param {boolean} isStartByMonday 是否以下周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以下周星期日的 00:00:00 刻为开始日期
     */
    getLastWeekEnd: function (isStartByMonday) {
        return this.getThisWeekBegin(isStartByMonday);
    },
    /**
     * 获取本周的开始日期
     * @param {boolean} isStartByMonday 是否以本周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以本周星期日的 00:00:00 刻为开始日期
     */
    getThisWeekBegin: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        //现在通常的做法（也是国际惯例），是把星期日作为一周的开始，而星期六则是周末
        //这里的day表示天，星期用 dayOfWeek 表示
        var day = date.getDate();
        var dayOfWeek = date.getDay();//星期日的值是0

        var dayValue = 0;
        if (isStartByMonday) {
            //如果以星期一为开始，那么星期天应该是7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day - dayOfWeek + 1;
        } else {
            dayValue = day - dayOfWeek;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
     * 获取本周的结束日期
     * @param {boolean} isStartByMonday 是否以下周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以下周星期日的 00:00:00 刻为开始日期
     */
    getThisWeekEnd: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        //现在通常的做法（也是国际惯例），是把星期日作为一周的开始，而星期六则是周末
        //这里的day表示天，星期用 dayOfWeek 表示
        var day = date.getDate();
        var dayOfWeek = date.getDay();//星期日的值是0
        var dayValue = 0;
        if (isStartByMonday) {
            //如果以星期一为开始，那么星期天应该是7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day + (7 - dayOfWeek) + 1;
        } else {
            dayValue = day + (7 - dayOfWeek);
        }
        date.setDate(dayValue);
        return date;
    },
    /**
     * 获取下周的开始日期
     * @param {boolean} isStartByMonday 是否以本周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以本周星期日的 00:00:00 刻为开始日期
     */
    getNextWeekBegin: function (isStartByMonday) {
        return this.getThisWeekEnd(isStartByMonday);
    },
    /**
     * 获取下周的结束日期
     * @param {boolean} isStartByMonday 是否以下周星期一的 00:00:00 刻为开始日期，默认true,如果是false，则以下周星期日的 00:00:00 刻为开始日期
     */
    getNextWeekEnd: function (isStartByMonday) {
        if (isStartByMonday === undefined || isStartByMonday === null) {
            isStartByMonday = true;
        }
        var date = getDateWithFillHMSSZero();
        //现在通常的做法（也是国际惯例），是把星期日作为一周的开始，而星期六则是周末
        //这里的day表示天，星期用 dayOfWeek 表示
        var day = date.getDate();
        var dayOfWeek = date.getDay();//星期日的值是0
        var dayValue = 0;
        if (isStartByMonday) {
            //如果以星期一为开始，那么星期天应该是7
            if (dayOfWeek === 0) {
                dayOfWeek = 7;
            }
            dayValue = day + (7 - dayOfWeek) + 1 + 7;
        } else {
            dayValue = day + (7 - dayOfWeek) + 7;
        }
        date.setDate(dayValue);
        return date;
    },
    /**
     * 获取上月的开始日期
     */
    getLastMonthBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() - 1);
        date.setDate(1)//设置天为1
        return date;
    },
    /**
     * 获取上月的结束日期
     */
    getLastMonthEnd: function () {
        return this.getThisMonthBegin();
    },
    /**
 * 获取本月的开始日期
 */
    getThisMonthBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setDate(1)//设置天为1
        return date;
    },
    /**
     * 获取本月的结束日期
     */
    getThisMonthEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() + 1);
        date.setDate(1)//设置天为1
        return date;
    },
    /**
     * 获取下月的开始日期
     */
    getNextMonthBegin: function () {
        return this.getThisMonthEnd();
    },
    /**
     * 获取下月的结束日期
     */
    getNextMonthEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(date.getMonth() + 2);
        date.setDate(1)//设置天为1
        return date;
    },
    /**
     * 获取去年的开始日期
     */
    getLastYearBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() - 1);
        date.setMonth(0);//月是从0开始算
        date.setDate(1);
        return date;
    },
    /**
     * 获取去年的结束日期
     */
    getLastYearEnd: function () {
        return this.getThisYearBegin();
    },
    /**
     * 获取今年的开始日期
     */
    getThisYearBegin: function () {
        var date = getDateWithFillHMSSZero();
        date.setMonth(0);//月是从0开始算
        date.setDate(1);
        return date;
    },
    /**
     * 获取今年的结束日期
     */
    getThisYearEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() + 1);
        date.setMonth(0);//月是从0开始算
        date.setDate(1);
        return date;
    },
    /**
     * 获取明年的开始日期
     */
    getNextYearBegin: function () {
        return this.getThisYearEnd();
    },
    /**
     * 获取明年的结束日期
     */
    getNextYearEnd: function () {
        var date = getDateWithFillHMSSZero();
        date.setFullYear(date.getFullYear() + 2);
        date.setMonth(0);//月是从0开始算
        date.setDate(1);
        return date;
    }
}

