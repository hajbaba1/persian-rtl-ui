import { isValidJalaaliDate,jalaaliMonthLength,toGregorian,toJalaali } from 'jalaali-js'
export const JALALI_MONTHS=['فروردین','اردیبهشت','خرداد','تیر','مرداد','شهریور','مهر','آبان','آذر','دی','بهمن','اسفند'] as const
export type JalaliDateValue={jy:number;jm:number;jd:number}
export function todayJalali(date=new Date()):JalaliDateValue{return toJalaali(date)}
export function formatJalali(value:JalaliDateValue,usePersianDigits=true){const raw=`${value.jy}/${String(value.jm).padStart(2,'0')}/${String(value.jd).padStart(2,'0')}`;return usePersianDigits?raw.replace(/\d/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)]):raw}
export function jalaliToDate(value:JalaliDateValue){const g=toGregorian(value.jy,value.jm,value.jd);return new Date(g.gy,g.gm-1,g.gd)}
export function isValidJalali(value:JalaliDateValue){return isValidJalaaliDate(value.jy,value.jm,value.jd)}
export function monthDays(year:number,month:number){return jalaaliMonthLength(year,month)}