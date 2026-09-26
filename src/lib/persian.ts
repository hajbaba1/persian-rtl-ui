export const PERSIAN_DIGITS='۰۱۲۳۴۵۶۷۸۹'
export const ARABIC_DIGITS='٠١٢٣٤٥٦٧٨٩'
export function toEnglishDigits(value:string){return value.replace(/[۰-۹]/g,c=>String(PERSIAN_DIGITS.indexOf(c))).replace(/[٠-٩]/g,c=>String(ARABIC_DIGITS.indexOf(c)))}
export function toPersianDigits(value:string|number){return String(value).replace(/\d/g,d=>PERSIAN_DIGITS[Number(d)])}
export function normalizeDigits(value:string){return toEnglishDigits(value)}
export function onlyDigits(value:string){return normalizeDigits(value).replace(/\D/g,'')}
export function formatPersianNumber(value:number|string,locale='fa-IR'){const normalized=normalizeDigits(String(value)).replace(/,/g,'');const numeric=Number(normalized);if(!Number.isFinite(numeric))return String(value);return new Intl.NumberFormat(locale).format(numeric)}
export type CurrencyUnit='toman'|'rial'
export function formatIranCurrency(value:number|string,unit:CurrencyUnit='toman',locale='fa-IR'){const numeric=Number(normalizeDigits(String(value)).replace(/,/g,''));if(!Number.isFinite(numeric))return String(value);return `${new Intl.NumberFormat(locale).format(numeric)} ${unit==='toman'?'تومان':'ریال'}`}
export function tomanToRial(value:number){return value*10}
export function rialToToman(value:number){return value/10}
export function normalizeIranPhone(value:string){const digits=onlyDigits(value);if(digits.startsWith('0098'))return `+98${digits.slice(4)}`;if(digits.startsWith('98'))return `+${digits}`;if(digits.startsWith('0'))return `+98${digits.slice(1)}`;if(digits.startsWith('9'))return `+98${digits}`;return digits?`+${digits}`:''}
export function isValidIranMobile(value:string){return /^\+989\d{9}$/.test(normalizeIranPhone(value))}
export function isValidIranNationalId(value:string){const digits=onlyDigits(value);if(!/^\d{10}$/.test(digits)||/^(\d)\1{9}$/.test(digits))return false;const check=Number(digits[9]);const sum=digits.slice(0,9).split('').reduce((t,d,i)=>t+Number(d)*(10-i),0);const r=sum%11;return r<2?check===r:check===11-r}