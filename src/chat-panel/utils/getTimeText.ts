/**
 * 获取时间解析为字符串文本
 */
import dayjs, { ConfigType } from 'dayjs';

export const SECOND = 1000; // 1秒
export const MINUTE = SECOND * 60; // 1分
export const HOUR = MINUTE * 60; // 1小时
export const DAY = HOUR * 24; // 1天
export const WEEK = DAY * 7; // 1周
export const MONTH = DAY * 30; // 1个月
/**
 * 解析规则
 * 去年：YYYY-MM-DD HH:mm
 * 今年今天： 上午hh:mm、下午hh:mm
 * 今年今天之前： MM-DD HH:mm
 */
export function parser1(time: ConfigType): string {
  const today = dayjs(new Date()).format('YYYY-MM-DD');
  const year = today.split('-')[0];
  const ZERO_HOUR = '00:00:00';
  const todayStart = `${today} ${ZERO_HOUR}`;
  const yearStart = `${year}-01-01 ${ZERO_HOUR}`;
  const parseTime = dayjs(time);

  if (parseTime.isBefore(yearStart)) {
    // 去年
    return parseTime.format('YYYY-MM-DD HH:mm');
  } else if (parseTime.isBefore(todayStart)) {
    // 今年
    // 今年今天之前
    return parseTime.format('MM-DD HH:mm');
  } else {
    const time_hhmm = parseTime.format('hh:mm');
    const todayAfternoon = today + ' 12:00:00';
    if (parseTime.isAfter(todayAfternoon)) {
      return `下午${time_hhmm}`;
    } else {
      return `上午${time_hhmm}`;
    }
  }
}

/**
 * 解析规则
 * 超过1个月，显示 超1个月
 * 1个月内则显示 x周前、x天前、x小时前、x分钟前、1分钟内
 */
export function parser2(time: ConfigType) {
  let resault = '';
  const dateTimeStamp = +dayjs(time);
  const now = +new Date();

  // 计算时间差
  const diffTime = now - dateTimeStamp;
  const monthDiff = diffTime / MONTH;
  const weekDiff = diffTime / WEEK;
  const dayDiff = diffTime / DAY;
  const hourDiff = diffTime / HOUR;
  const minDiff = diffTime / MINUTE;

  switch (true) {
    case monthDiff >= 1:
      // resault = dayjs(time).format('YYYY-MM-DD HH:mm');
      resault = '超1个月';
      break;
    case weekDiff >= 1:
      resault = `${weekDiff.toFixed(0)}周前`;
      break;
    case dayDiff >= 1:
      resault = `${dayDiff.toFixed(0)}天前`;
      break;
    case hourDiff >= 1:
      resault = `${hourDiff.toFixed(0)}小时前`;
      break;
    case minDiff >= 1:
      resault = `${minDiff.toFixed(0)}分钟前`;
      break;
    default:
      resault = '1分钟内';
      break;
  }

  return resault;
}

export function getTimeText(time: ConfigType) {
  return {
    parser1() {
      return parser1(time);
    },
    parser2() {
      return parser2(time);
    },
  };
}

export function getMMDDHHmmss(time: ConfigType) {
  return dayjs(time).format('MM-DD/HH:mm:ss');
}

/**
 * 比较两个时间相差多久
 * @param time1 比较时间1
 * @param time2 比较时间2
 * @param diffTime 相差时间
 * @returns  若diffTime存在，time1和time2相差时间小于diffTIme，则返回true，否则false；
 */
export function compareTime(
  time1: ConfigType,
  time2: ConfigType,
  diffTime?: number,
) {
  const compareDiffTime = dayjs(time1).diff(dayjs(time2));
  if (diffTime === 0 || diffTime) {
    return Math.abs(compareDiffTime) <= diffTime;
  }
  return compareDiffTime;
}
// 相差30分钟
export function diffHalfHour(time1: ConfigType, time2: ConfigType) {
  return compareTime(time1, time2, HOUR / 2);
}
