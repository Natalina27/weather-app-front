(this["webpackJsonpweather-app-front"]=this["webpackJsonpweather-app-front"]||[]).push([[0],{16:function(e,t,a){e.exports=a(38)},2:function(e,t,a){e.exports={container:"App_container___P6pN",statusCol:"App_statusCol__1SSHm",header:"App_header__1qa1S"}},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(14),r=a.n(o),s=a(3),i=a(15),u=a.n(i),p=a(4),m=a.n(p);var l=function(e){var t=e.temp,a=e.day,n=e.icon,o=Math.round(t-273)+"\xb0",r="https://openweathermap.org/img/wn/"+n+".png";return console.log(r),c.a.createElement("div",{className:m.a.tasks},c.a.createElement("div",{className:m.a.text},a,o,c.a.createElement("img",{src:r,alt:n})))},d=a(40),f=a(2),h=a.n(f),_=["SUN","MON","TUE","WED","THU","FRI","SAT"];var b=function(){var e=Object(n.useState)(new Date),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),p=i[0],m=i[1],f=Object(n.useState)(""),b=Object(s.a)(f,2),v=b[0],E=b[1];return Object(n.useEffect)((function(){u.a.request("https://api.openweathermap.org/data/2.5/forecast?q=London,UKus&cnt=40&mode=json&appid=47e69b822b5de870839d6c8b5b679e56").then((function(e){var t=e.data.list;console.log(e.data);var a=[],n=0;t.map((function(e,t){if(t===n){var c={day:"",temp:"",icon:""};0===t&&E(Math.round(e.main.temp-273)+"\xb0");var o=new Date(e.dt_txt).getDay();c.temp=e.main.temp,c.day=_[o],c.icon=e.weather[0].icon,a.push(c),n+=8}return!0})),m(a)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((function(){var e=setTimeout((function(){o(new Date)}),6e4);return function(){return clearTimeout(e)}})),c.a.createElement("div",{className:h.a.container},c.a.createElement("div",{className:h.a.statusCol},c.a.createElement("div",{className:h.a.header},c.a.createElement("h3",null,"London","                                   ",a.toLocaleTimeString().slice(0,5),"                                   ",v)),p.map((function(e){return c.a.createElement(l,{key:Object(d.a)(),temp:e.temp,day:e.day,icon:e.icon})}))))};r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(b,null)),document.getElementById("root"))},4:function(e,t,a){e.exports={tasks:"Day_tasks__3hkIO",text:"Day_text__20S9g"}}},[[16,1,2]]]);
//# sourceMappingURL=main.0a321cc5.chunk.js.map