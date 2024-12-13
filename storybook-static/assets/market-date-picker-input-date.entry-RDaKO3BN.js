import{r as K,c as $,h as d,H as J}from"./preview-BLkU8-7b.js";import{g as q}from"./index-2dc281eb-DCayfYZh.js";import{r as S,a as L,t as P,_ as tt,g as et}from"./index-b9ae40c9-Bb5aO-kv.js";import{g as at,s as rt,i as nt,t as W,a as it,m as Q,b as B,d as st,l as ot,c as ut,e as ct,f as dt,h as ft}from"./index-33c9a13b-DS93TaAl.js";import{i as mt,b as Y,a as R}from"./index-61d35e8a-DYv6ppUq.js";import"./jsx-runtime-qGIIFXMu.js";import"./index-CDs2tPxN.js";import"./iframe-BYgjunmg.js";import"../sb-preview/runtime.js";import"./tslib.es6-pJfR_DrR.js";function lt(r){return S(1,arguments),r instanceof Date||tt(r)==="object"&&Object.prototype.toString.call(r)==="[object Date]"}function X(r){if(S(1,arguments),!lt(r)&&typeof r!="number")return!1;var t=L(r);return!isNaN(Number(t))}var ht=864e5;function gt(r){S(1,arguments);var t=L(r),a=t.getTime();t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0);var e=t.getTime(),n=a-e;return Math.floor(n/ht)+1}function o(r,t){for(var a=r<0?"-":"",e=Math.abs(r).toString();e.length<t;)e="0"+e;return a+e}var vt={y:function(t,a){var e=t.getUTCFullYear(),n=e>0?e:1-e;return o(a==="yy"?n%100:n,a.length)},M:function(t,a){var e=t.getUTCMonth();return a==="M"?String(e+1):o(e+1,2)},d:function(t,a){return o(t.getUTCDate(),a.length)},a:function(t,a){var e=t.getUTCHours()/12>=1?"pm":"am";switch(a){case"a":case"aa":return e.toUpperCase();case"aaa":return e;case"aaaaa":return e[0];case"aaaa":default:return e==="am"?"a.m.":"p.m."}},h:function(t,a){return o(t.getUTCHours()%12||12,a.length)},H:function(t,a){return o(t.getUTCHours(),a.length)},m:function(t,a){return o(t.getUTCMinutes(),a.length)},s:function(t,a){return o(t.getUTCSeconds(),a.length)},S:function(t,a){var e=a.length,n=t.getUTCMilliseconds(),i=Math.floor(n*Math.pow(10,e-3));return o(i,a.length)}};const g=vt;var p={am:"am",pm:"pm",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wt={G:function(t,a,e){var n=t.getUTCFullYear()>0?1:0;switch(a){case"G":case"GG":case"GGG":return e.era(n,{width:"abbreviated"});case"GGGGG":return e.era(n,{width:"narrow"});case"GGGG":default:return e.era(n,{width:"wide"})}},y:function(t,a,e){if(a==="yo"){var n=t.getUTCFullYear(),i=n>0?n:1-n;return e.ordinalNumber(i,{unit:"year"})}return g.y(t,a)},Y:function(t,a,e,n){var i=ut(t,n),s=i>0?i:1-i;if(a==="YY"){var u=s%100;return o(u,2)}return a==="Yo"?e.ordinalNumber(s,{unit:"year"}):o(s,a.length)},R:function(t,a){var e=ct(t);return o(e,a.length)},u:function(t,a){var e=t.getUTCFullYear();return o(e,a.length)},Q:function(t,a,e){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(a){case"Q":return String(n);case"QQ":return o(n,2);case"Qo":return e.ordinalNumber(n,{unit:"quarter"});case"QQQ":return e.quarter(n,{width:"abbreviated",context:"formatting"});case"QQQQQ":return e.quarter(n,{width:"narrow",context:"formatting"});case"QQQQ":default:return e.quarter(n,{width:"wide",context:"formatting"})}},q:function(t,a,e){var n=Math.ceil((t.getUTCMonth()+1)/3);switch(a){case"q":return String(n);case"qq":return o(n,2);case"qo":return e.ordinalNumber(n,{unit:"quarter"});case"qqq":return e.quarter(n,{width:"abbreviated",context:"standalone"});case"qqqqq":return e.quarter(n,{width:"narrow",context:"standalone"});case"qqqq":default:return e.quarter(n,{width:"wide",context:"standalone"})}},M:function(t,a,e){var n=t.getUTCMonth();switch(a){case"M":case"MM":return g.M(t,a);case"Mo":return e.ordinalNumber(n+1,{unit:"month"});case"MMM":return e.month(n,{width:"abbreviated",context:"formatting"});case"MMMMM":return e.month(n,{width:"narrow",context:"formatting"});case"MMMM":default:return e.month(n,{width:"wide",context:"formatting"})}},L:function(t,a,e){var n=t.getUTCMonth();switch(a){case"L":return String(n+1);case"LL":return o(n+1,2);case"Lo":return e.ordinalNumber(n+1,{unit:"month"});case"LLL":return e.month(n,{width:"abbreviated",context:"standalone"});case"LLLLL":return e.month(n,{width:"narrow",context:"standalone"});case"LLLL":default:return e.month(n,{width:"wide",context:"standalone"})}},w:function(t,a,e,n){var i=dt(t,n);return a==="wo"?e.ordinalNumber(i,{unit:"week"}):o(i,a.length)},I:function(t,a,e){var n=ft(t);return a==="Io"?e.ordinalNumber(n,{unit:"week"}):o(n,a.length)},d:function(t,a,e){return a==="do"?e.ordinalNumber(t.getUTCDate(),{unit:"date"}):g.d(t,a)},D:function(t,a,e){var n=gt(t);return a==="Do"?e.ordinalNumber(n,{unit:"dayOfYear"}):o(n,a.length)},E:function(t,a,e){var n=t.getUTCDay();switch(a){case"E":case"EE":case"EEE":return e.day(n,{width:"abbreviated",context:"formatting"});case"EEEEE":return e.day(n,{width:"narrow",context:"formatting"});case"EEEEEE":return e.day(n,{width:"short",context:"formatting"});case"EEEE":default:return e.day(n,{width:"wide",context:"formatting"})}},e:function(t,a,e,n){var i=t.getUTCDay(),s=(i-n.weekStartsOn+8)%7||7;switch(a){case"e":return String(s);case"ee":return o(s,2);case"eo":return e.ordinalNumber(s,{unit:"day"});case"eee":return e.day(i,{width:"abbreviated",context:"formatting"});case"eeeee":return e.day(i,{width:"narrow",context:"formatting"});case"eeeeee":return e.day(i,{width:"short",context:"formatting"});case"eeee":default:return e.day(i,{width:"wide",context:"formatting"})}},c:function(t,a,e,n){var i=t.getUTCDay(),s=(i-n.weekStartsOn+8)%7||7;switch(a){case"c":return String(s);case"cc":return o(s,a.length);case"co":return e.ordinalNumber(s,{unit:"day"});case"ccc":return e.day(i,{width:"abbreviated",context:"standalone"});case"ccccc":return e.day(i,{width:"narrow",context:"standalone"});case"cccccc":return e.day(i,{width:"short",context:"standalone"});case"cccc":default:return e.day(i,{width:"wide",context:"standalone"})}},i:function(t,a,e){var n=t.getUTCDay(),i=n===0?7:n;switch(a){case"i":return String(i);case"ii":return o(i,a.length);case"io":return e.ordinalNumber(i,{unit:"day"});case"iii":return e.day(n,{width:"abbreviated",context:"formatting"});case"iiiii":return e.day(n,{width:"narrow",context:"formatting"});case"iiiiii":return e.day(n,{width:"short",context:"formatting"});case"iiii":default:return e.day(n,{width:"wide",context:"formatting"})}},a:function(t,a,e){var n=t.getUTCHours(),i=n/12>=1?"pm":"am";switch(a){case"a":case"aa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"aaa":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"aaaaa":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"aaaa":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},b:function(t,a,e){var n=t.getUTCHours(),i;switch(n===12?i=p.noon:n===0?i=p.midnight:i=n/12>=1?"pm":"am",a){case"b":case"bb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"bbb":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"}).toLowerCase();case"bbbbb":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"bbbb":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},B:function(t,a,e){var n=t.getUTCHours(),i;switch(n>=17?i=p.evening:n>=12?i=p.afternoon:n>=4?i=p.morning:i=p.night,a){case"B":case"BB":case"BBB":return e.dayPeriod(i,{width:"abbreviated",context:"formatting"});case"BBBBB":return e.dayPeriod(i,{width:"narrow",context:"formatting"});case"BBBB":default:return e.dayPeriod(i,{width:"wide",context:"formatting"})}},h:function(t,a,e){if(a==="ho"){var n=t.getUTCHours()%12;return n===0&&(n=12),e.ordinalNumber(n,{unit:"hour"})}return g.h(t,a)},H:function(t,a,e){return a==="Ho"?e.ordinalNumber(t.getUTCHours(),{unit:"hour"}):g.H(t,a)},K:function(t,a,e){var n=t.getUTCHours()%12;return a==="Ko"?e.ordinalNumber(n,{unit:"hour"}):o(n,a.length)},k:function(t,a,e){var n=t.getUTCHours();return n===0&&(n=24),a==="ko"?e.ordinalNumber(n,{unit:"hour"}):o(n,a.length)},m:function(t,a,e){return a==="mo"?e.ordinalNumber(t.getUTCMinutes(),{unit:"minute"}):g.m(t,a)},s:function(t,a,e){return a==="so"?e.ordinalNumber(t.getUTCSeconds(),{unit:"second"}):g.s(t,a)},S:function(t,a){return g.S(t,a)},X:function(t,a,e,n){var i=n._originalDate||t,s=i.getTimezoneOffset();if(s===0)return"Z";switch(a){case"X":return G(s);case"XXXX":case"XX":return w(s);case"XXXXX":case"XXX":default:return w(s,":")}},x:function(t,a,e,n){var i=n._originalDate||t,s=i.getTimezoneOffset();switch(a){case"x":return G(s);case"xxxx":case"xx":return w(s);case"xxxxx":case"xxx":default:return w(s,":")}},O:function(t,a,e,n){var i=n._originalDate||t,s=i.getTimezoneOffset();switch(a){case"O":case"OO":case"OOO":return"GMT"+H(s,":");case"OOOO":default:return"GMT"+w(s,":")}},z:function(t,a,e,n){var i=n._originalDate||t,s=i.getTimezoneOffset();switch(a){case"z":case"zz":case"zzz":return"GMT"+H(s,":");case"zzzz":default:return"GMT"+w(s,":")}},t:function(t,a,e,n){var i=n._originalDate||t,s=Math.floor(i.getTime()/1e3);return o(s,a.length)},T:function(t,a,e,n){var i=n._originalDate||t,s=i.getTime();return o(s,a.length)}};function H(r,t){var a=r>0?"-":"+",e=Math.abs(r),n=Math.floor(e/60),i=e%60;if(i===0)return a+String(n);var s=t;return a+String(n)+s+o(i,2)}function G(r,t){if(r%60===0){var a=r>0?"-":"+";return a+o(Math.abs(r)/60,2)}return w(r,t)}function w(r,t){var a=t||"",e=r>0?"-":"+",n=Math.abs(r),i=o(Math.floor(n/60),2),s=o(n%60,2);return e+i+a+s}const pt=wt;var Dt=/[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g,bt=/P+p+|P+|p+|''|'(''|[^'])+('|$)|./g,Tt=/^'([^]*?)'?$/,St=/''/g,xt=/[a-zA-Z]/;function yt(r,t,a){var e,n,i,s,u,f,l,m,v,k,M,O,E,I;S(2,arguments);var Z=String(t),D=et(),b=(e=(n=void 0)!==null&&n!==void 0?n:D.locale)!==null&&e!==void 0?e:st,N=P((i=(s=(u=(f=void 0)!==null&&f!==void 0?f:void 0)!==null&&u!==void 0?u:D.firstWeekContainsDate)!==null&&s!==void 0?s:(l=D.locale)===null||l===void 0||(m=l.options)===null||m===void 0?void 0:m.firstWeekContainsDate)!==null&&i!==void 0?i:1);if(!(N>=1&&N<=7))throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");var U=P((v=(k=(M=(O=void 0)!==null&&O!==void 0?O:void 0)!==null&&M!==void 0?M:D.weekStartsOn)!==null&&k!==void 0?k:(E=D.locale)===null||E===void 0||(I=E.options)===null||I===void 0?void 0:I.weekStartsOn)!==null&&v!==void 0?v:0);if(!(U>=0&&U<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");if(!b.localize)throw new RangeError("locale must contain localize property");if(!b.formatLong)throw new RangeError("locale must contain formatLong property");var x=L(r);if(!X(x))throw new RangeError("Invalid time value");var j=at(x),z=rt(x,j),V={firstWeekContainsDate:N,weekStartsOn:U,locale:b,_originalDate:x},A=Z.match(bt).map(function(c){var h=c[0];if(h==="p"||h==="P"){var y=ot[h];return y(c,b.formatLong)}return c}).join("").match(Dt).map(function(c){if(c==="''")return"'";var h=c[0];if(h==="'")return Ct(c);var y=pt[h];if(y)return nt(c)&&W(c,t,String(r)),it(c)&&W(c,t,String(r)),y(z,c,b.localize,V);if(h.match(xt))throw new RangeError("Format string contains an unescaped latin alphabet character `"+h+"`");return c}).join("");return A}function Ct(r){var t=r.match(Tt);return t?t[1].replace(St,"'"):r}function kt(r,t){var a;S(1,arguments);var e=P((a=void 0)!==null&&a!==void 0?a:2);if(e!==2&&e!==1&&e!==0)throw new RangeError("additionalDigits must be 0, 1 or 2");if(!(typeof r=="string"||Object.prototype.toString.call(r)==="[object String]"))return new Date(NaN);var n=It(r),i;if(n.date){var s=Nt(n.date,e);i=Ut(s.restDateString,s.year)}if(!i||isNaN(i.getTime()))return new Date(NaN);var u=i.getTime(),f=0,l;if(n.time&&(f=_t(n.time),isNaN(f)))return new Date(NaN);if(n.timezone){if(l=Pt(n.timezone),isNaN(l))return new Date(NaN)}else{var m=new Date(u+f),v=new Date(0);return v.setFullYear(m.getUTCFullYear(),m.getUTCMonth(),m.getUTCDate()),v.setHours(m.getUTCHours(),m.getUTCMinutes(),m.getUTCSeconds(),m.getUTCMilliseconds()),v}return new Date(u+f+l)}var C={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},Mt=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,Ot=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,Et=/^([+-])(\d{2})(?::?(\d{2}))?$/;function It(r){var t={},a=r.split(C.dateTimeDelimiter),e;if(a.length>2)return t;if(/:/.test(a[0])?e=a[0]:(t.date=a[0],e=a[1],C.timeZoneDelimiter.test(t.date)&&(t.date=r.split(C.timeZoneDelimiter)[0],e=r.substr(t.date.length,r.length))),e){var n=C.timezone.exec(e);n?(t.time=e.replace(n[1],""),t.timezone=n[1]):t.time=e}return t}function Nt(r,t){var a=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),e=r.match(a);if(!e)return{year:NaN,restDateString:""};var n=e[1]?parseInt(e[1]):null,i=e[2]?parseInt(e[2]):null;return{year:i===null?n:i*100,restDateString:r.slice((e[1]||e[2]).length)}}function Ut(r,t){if(t===null)return new Date(NaN);var a=r.match(Mt);if(!a)return new Date(NaN);var e=!!a[4],n=T(a[1]),i=T(a[2])-1,s=T(a[3]),u=T(a[4]),f=T(a[5])-1;if(e)return Yt(t,u,f)?Lt(t,u,f):new Date(NaN);var l=new Date(0);return!qt(t,i,s)||!Wt(t,n)?new Date(NaN):(l.setUTCFullYear(t,i,Math.max(n,s)),l)}function T(r){return r?parseInt(r):1}function _t(r){var t=r.match(Ot);if(!t)return NaN;var a=_(t[1]),e=_(t[2]),n=_(t[3]);return Rt(a,e,n)?a*Q+e*B+n*1e3:NaN}function _(r){return r&&parseFloat(r.replace(",","."))||0}function Pt(r){if(r==="Z")return 0;var t=r.match(Et);if(!t)return 0;var a=t[1]==="+"?-1:1,e=parseInt(t[2]),n=t[3]&&parseInt(t[3])||0;return Ht(e,n)?a*(e*Q+n*B):NaN}function Lt(r,t,a){var e=new Date(0);e.setUTCFullYear(r,0,4);var n=e.getUTCDay()||7,i=(t-1)*7+a+1-n;return e.setUTCDate(e.getUTCDate()+i),e}var $t=[31,null,31,30,31,30,31,31,30,31,30,31];function F(r){return r%400===0||r%4===0&&r%100!==0}function qt(r,t,a){return t>=0&&t<=11&&a>=1&&a<=($t[t]||(F(r)?29:28))}function Wt(r,t){return t>=1&&t<=(F(r)?366:365)}function Yt(r,t,a){return t>=1&&t<=53&&a>=0&&a<=6}function Rt(r,t,a){return r===24?t===0&&a===0:a>=0&&a<60&&t>=0&&t<60&&r>=0&&r<25}function Ht(r,t){return t>=0&&t<=59}const Gt=".input-row{display:flex;justify-content:space-around;margin-top:8px}.input-wrapper{display:flex;flex:1;flex-direction:column;align-items:flex-start}.start-input:not(:last-child){margin-right:16px}.time-input,.date-input{box-sizing:border-box;width:100%;margin-top:16px}.market-banner{margin-top:16px}",Qt=Gt,Bt=class{constructor(r){K(this,r),this.marketDatePickerInputDateSet=$(this,"marketDatePickerInputDateSet",7),this.marketDatePickerInputDateInvalidStateChanged=$(this,"marketDatePickerInputDateInvalidStateChanged",7),this.withTime=!1,this.selectedStartDate=void 0,this.selectedEndDate=void 0,this.isDateDisabled=void 0,this.timeframe="present",this.range=!1,this.isRangeInvalid=!1}emitInvalidStateEvent(){this.marketDatePickerInputDateInvalidStateChanged.emit({invalid:this.isRangeInvalid})}formatDate(r,t=!1){if(!r)return"";const a=new Date(r);return X(a)?yt(a,t?"HH:mm":"yyyy-MM-dd"):""}isInvalidDateForTimeframe(r,t=new Date){const a=this.timeframe==="future"&&mt(r,t)&&!Y(r,t),e=this.timeframe==="past"&&R(r,t)&&!Y(r,t);return a||e}updateInvalidState(r=this.selectedStartDate,t=this.selectedEndDate){if(this.isDateInvalid(r)||this.isDateInvalid(t)){this.isRangeInvalid=!0;return}if(t){this.isRangeInvalid=R(new Date(r),new Date(t));return}this.isRangeInvalid=!1}isDateInvalid(r){if(!r)return!1;const t=kt(r);return!!(t.toString()==="Invalid Date"||this.isDateDisabled&&this.isDateDisabled(t)||this.timeframe&&this.isInvalidDateForTimeframe(t))}emitDateSetStart(r){this.emitDateSet(r,"start")}emitDateSetEnd(r){this.emitDateSet(r,"end")}emitDateSetStartTime(r){this.emitDateSet(r,"start",!0)}emitDateSetEndTime(r){this.emitDateSet(r,"end",!0)}emitDateSet(r,t,a=!1){r.preventDefault(),r.stopPropagation();const{value:e}=r.target;let n=e;if(this.withTime)if(a){const s=this.formatDate(t==="start"?this.selectedStartDate:this.selectedEndDate),u=e.slice(0,5);n=`${s}T${u}`}else{const s=this.formatDate(t==="start"?this.selectedStartDate:this.selectedEndDate,!0);n=`${e}T${s}`}const i=n.replace(/^0+/,"").length;(i===10||i===16)&&this.marketDatePickerInputDateSet.emit({date:n,input:t})}componentWillRender(){this.updateInvalidState()}render(){const r=q("market-input-text"),t=q("market-banner"),a=i=>d("div",{key:"b21389daf44f3f7c01c99332c863b3694a5fe3ec",class:`input-wrapper ${i==="start"?"start-input":""}`},i==="start"&&e("start"),i==="start"&&this.withTime&&n("start"),i==="end"&&e("end"),i==="end"&&this.withTime&&n("end")),e=i=>d(r,{key:"f425b7803c14bc28ba82f6ac33c84f2258d2a988",type:"date",class:"date-input",name:`date-picker-date-${i}`,invalid:this.isRangeInvalid,value:this.formatDate(i==="start"?this.selectedStartDate:this.selectedEndDate),onInput:i==="start"?this.emitDateSetStart.bind(this):this.emitDateSetEnd.bind(this)},d("label",{key:"b9049334bb2a711c69327172411d07ba37c1aaaa",htmlFor:`date-picker-${i}`},d("slot",{key:"79396ea901c67d286f81dc132659f3967c8d7d9b",name:`${i}-date`},this.range&&(i==="start"?"Start":"End")," Date"))),n=i=>d(r,{key:"51b47dd0eaa7750109e65e870b028f940cce097b",type:"time",class:"time-input",name:`date-picker-time-${i}`,invalid:this.isRangeInvalid,value:this.formatDate(i==="start"?this.selectedStartDate:this.selectedEndDate,!0),onInput:i==="start"?this.emitDateSetStartTime.bind(this):this.emitDateSetEndTime.bind(this)},d("label",{key:"a0c76ff259384cbe05c43246c8e02219b728e958",htmlFor:`date-picker-time-${i}`},d("slot",{key:"542b72217fe71c460e650ae561151f54c66c331e",name:`${i}-time`},this.range&&(i==="start"?"Start":"End")," Time")));return d(J,{key:"97b4fde78831d10fb483c5ba14c5eb7d5a4ad6dc",class:"market-date-picker-input-date"},this.range?d("div",{class:"input-row"},a("start"),a("end")):d("div",null,a("start")),this.isRangeInvalid&&d(t,{key:"e307642e971df21b7e52d49de81208537955275d",variant:"critical"},d("slot",{key:"573adb7b99baacc96011ba953f785e2fff879ca7",name:"range-error"},"Enter a valid date range")))}static get watchers(){return{isRangeInvalid:["emitInvalidStateEvent"]}}};Bt.style=Qt;export{Bt as market_date_picker_input_date};