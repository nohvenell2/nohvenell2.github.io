"use strict";(self.webpackChunklearnant=self.webpackChunklearnant||[]).push([[201,748],{9201:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var n=t(5043),s=t(9458),l=t(5351),u=t(579);const r=e=>(new Intl.NumberFormat).format(e),x=e=>{const{value:a,onChange:t}=e;a&&"-"!==a&&r(Number(a));return(0,u.jsx)(l.A,{...e,style:{width:200,fontSize:"15px"},onChange:e=>{const{value:a}=e.target;(/^-?\d*(\.\d*)?$/.test(a)||""===a||"-"===a)&&t(a)},onBlur:()=>{let e=a;a&&("."!==a.charAt(a.length-1)&&"-"!==a||(e=a.slice(0,-1)),t(e.replace(/0*(\d+)/,"$1")))},placeholder:"Input a number",maxLength:8})};var c=t(1748);const h=()=>{const[e,a]=(0,n.useState)(100),[t,l]=(0,n.useState)(100),[r,h]=(0,n.useState)(100),[i,o]=(0,n.useState)(0),[d,j]=(0,n.useState)(0),[m,f]=(0,n.useState)(100),[p,g]=(0,n.useState)(0),[C,b]=(0,n.useState)(100),[A,v]=(0,n.useState)(0),I=(0,c.default)([e,t,r,i,d,m,p,C,A]);return(0,u.jsxs)("div",{style:{paddingLeft:"80px"},children:[(0,u.jsx)("h1",{children:"Genshin Impact Damage Calculator"}),(0,u.jsxs)(s.A,{labelCol:{span:8},wrapperCol:{span:16},layout:"horizontal",style:{maxWidth:600},children:[(0,u.jsx)(s.A.Item,{label:"Base Attack :",children:(0,u.jsx)(x,{value:e,onChange:a})}),(0,u.jsx)(s.A.Item,{label:"Attack Percentage:",children:(0,u.jsx)(x,{value:t,onChange:l,suffix:t?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Flat Attack:",children:(0,u.jsx)(x,{value:r,onChange:h})}),(0,u.jsx)(s.A.Item,{label:"Damage Bonus:",children:(0,u.jsx)(x,{value:i,onChange:o,suffix:i?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Crit Rate:",children:(0,u.jsx)(x,{value:d,onChange:j,suffix:d?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Crit Damage:",children:(0,u.jsx)(x,{value:m,onChange:f,suffix:m?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Enemy Resistance:",children:(0,u.jsx)(x,{value:p,onChange:g,suffix:p?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Reaction Multiplier:",children:(0,u.jsx)(x,{value:C,onChange:b,suffix:C?"%":(0,u.jsx)("span",{})})}),(0,u.jsx)(s.A.Item,{label:"Elemental Mastery:",children:(0,u.jsx)(x,{value:A,onChange:v})})]}),(0,u.jsxs)("h2",{children:["Calculated Damage: ",I.toFixed(2)]})]})}},1748:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});const n=function(e){const a=e[0],t=e[1]/100,n=e[2],s=e[3]/100,l=e[4]/100,u=e[5]/100,r=e[6]/100,x=e[7],c=e[8];let h;return h=r>=0?1-r:1-r/2,(a*(1+t)+n)*(1+s)*(1+l*u)*h*x*(1+16*c/(2e3+c))}}}]);
//# sourceMappingURL=201.bcd7f50b.chunk.js.map