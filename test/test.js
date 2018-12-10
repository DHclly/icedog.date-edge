var dateEdge = require('../src/date-edge');

var dateString = dateEdge.getNowDate();
console.log('当前的时间:', dateEdge.formatDate(dateString));

dateString = dateEdge.getYesterdayBegin();
console.log('昨天的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getYesterdayEnd();
console.log('昨天的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getTodayBegin();
console.log('今天的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getTodayEnd();
console.log('今天的结束日期:', dateEdge.formatDate(dateString));


dateString = dateEdge.getTomorrowBegin();
console.log('明天的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getTomorrowEnd();
console.log('明天的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getLastWeekBegin(true);
console.log('上周的开始日期(星期一为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getLastWeekEnd(true);
console.log('上周的结束日期(星期一为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getThisWeekBegin(true);
console.log('本周的开始日期(星期一为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getThisWeekEnd(true);
console.log('本周的结束日期(星期一为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getNextWeekBegin(true);
console.log('下周的开始日期(星期一为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getNextWeekEnd(true);
console.log('下周的开始日期(星期一为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getLastWeekBegin(false);
console.log('上周的开始日期(星期日为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getLastWeekEnd(false);
console.log('上周的结束日期(星期日为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getThisWeekBegin(false);
console.log('本周的开始日期(星期日为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getThisWeekEnd(false);
console.log('本周的结束日期(星期日为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getNextWeekBegin(false);
console.log('下周的开始日期(星期日为一周开始):', dateEdge.formatDate(dateString));
dateString = dateEdge.getNextWeekEnd(false);
console.log('下周的开始日期(星期日为一周开始):', dateEdge.formatDate(dateString));

dateString = dateEdge.getLastMonthBegin();
console.log('上月的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getLastMonthEnd();
console.log('上月的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getThisMonthBegin();
console.log('本月的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getThisMonthEnd();
console.log('本月的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getNextMonthBegin();
console.log('下月的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getNextMonthEnd();
console.log('下月的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getLastYearBegin();
console.log('去年的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getLastYearEnd();
console.log('去年的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getThisYearBegin();
console.log('今年的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getThisYearEnd();
console.log('今年的结束日期:', dateEdge.formatDate(dateString));

dateString = dateEdge.getNextYearBegin();
console.log('明年的开始日期:', dateEdge.formatDate(dateString));
dateString = dateEdge.getNextYearEnd();
console.log('明年的结束日期:', dateEdge.formatDate(dateString));