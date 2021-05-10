(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{56:function(t,e,a){},78:function(t,e,a){},79:function(t,e,a){},80:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),s=a(34),c=a.n(s),i=(a(56),a(3)),l=a(4),o=a(6),d=a(5),h=a(16),u={single:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};Object.assign(a,t);var r={monthly:0,payoff:0,total:0,interestPaid:0,schedule:[]};if("object"!==typeof a||"undefined"===typeof a.balance||"undefined"===typeof a.rate||"undefined"===typeof a.minimum)return r;a.balance=parseFloat((a.balance/100).toFixed(2)),r.monthly=a.minimum/100,r.monthly=this.round(r.monthly);var n=this.getSchedule(a,e);return Object.assign(r,n),r.interestPaid=this.round(r.total-a.balance),r},getSchedule:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={payoff:0,total:0,schedule:[]},r=t.balance,n=t.rate/36e3,s=30*n;a.schedule.push({payment:0,interest:0,principal:0,balance:r});for(var c=0;c<240&&!(this.round(r)<=0);c++){var i=t.minimum/100;t.extra&&e&&(i+=parseFloat(t.extra/100));var l=s*r/100;i>r+l&&(i=r+l);var o=(i=this.round(i))-(l=this.round(l));if(o<0&&c>=120)break;r-=o,a.schedule.push({payment:this.round(i),interest:this.round(l),principal:this.round(o),balance:this.round(r)}),a.payoff++,a.total+=i}return a.total=this.round(a.total),a},all:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={monthly:0,payoff:0,total:0,interestPaid:0,schedule:[]};return t.forEach((function(t){var n=e.single(t,a);r.monthly+=n.monthly,n.payoff>r.payoff&&(r.payoff=n.payoff),r.total+=n.total,r.interestPaid+=n.interestPaid,r.schedule=e.mergeSchedules(r.schedule,n.schedule)})),r},mergeSchedules:function(t,e){var a,r;return t.length>e.length?(a=t,r=e):(a=e,r=t),r.forEach((function(t,e){a[e].payment+=t.payment,a[e].interest+=t.interest,a[e].principal+=t.principal,a[e].balance+=t.balance})),a},round:function(t){return Math.round(100*t)/100}},j={monthName:["January","February","March","April","May","June","July","August","September","October","November","December"],usd:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"===typeof(t=u.round(t,1))&&/^[0-9]+\.[0-9]{1,2}$/.test(t.toString()))return"$".concat(t)+(e?" USD":"");var a=this.getOnlyNumber(t),r=a[0],n=a[1];","===(r=(r=r.split("").reverse().join("")).replace(/[0-9]{3}/g,"$&,")).slice(-1)&&(r=r.substr(0,r.length-1)),r=r.split("").reverse().join("");var s="$".concat(r,".").concat(n);return e?"".concat(s," USD"):s},months:function(t){if(t>12){var e=Math.floor(t/12),a=t-12*e;return"".concat(e," Years and ").concat(a," Months")}return"".concat(t," Months")},years:function(t){if(t>12){var e=Math.ceil(t/12);return"".concat(e," Years")}return"<1 Year"},relativeMonth:function(t){var e=new Date;return e.setMonth(e.getMonth()+t),"".concat(j.monthName[e.getMonth()],", ").concat(e.getFullYear())},getOnlyNumber:function(t){if(!isNaN(t)&&t<100&&t>0)return console.log(t),["0",(t/10).toString().replaceAll(/[^0-9]/g,"")];var e=t.toString().replaceAll(/[^0-9]/g,""),a="00";return e.length>2&&(a=e.slice(-2),e=e.substr(0,e.length-2)),[e,a]},percent:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t.toString().replaceAll(/[^0-9]/g,"");return"rate"==e&&(a=(a/100).toFixed(2)),a+"%"}},b=j,p=(a(36),a(22)),m=a(7),f=a(2),O=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=new Date,a=[{x:e.getFullYear(),y:this.props.totalBalance}],r=[e.getFullYear()];if(this.props.schedule.forEach((function(t,n){if(e.setMonth(e.getMonth()+1),!(e.getMonth()>0)){var s=e.getFullYear();r.push(s),a.push({x:s,y:100*t.balance})}})),e.getMonth()>0){var n=12-e.getMonth();e.setMonth(e.getMonth()+n);var s=e.getFullYear();r.push(s),a.push({x:s,y:0})}return Object(f.jsx)("div",{className:"BalanceChart",children:Object(f.jsx)(p.a,{children:function(e){var r=e.width,n=e.height;return Object(f.jsxs)(m.e,{margin:{left:100},height:n,width:r,xType:"ordinal",children:[Object(f.jsx)(m.c,{}),Object(f.jsx)(m.a,{}),Object(f.jsx)(m.d,{title:"Years to payoff"}),Object(f.jsx)(m.f,{tickFormat:function(t){return b.usd(t)},title:"Cards balance"}),Object(f.jsx)(m.b,{data:a,color:t.props.color||"#434343",barWidth:.25,style:{rx:3,ry:3}})]})}})})}}]),a}(n.a.Component),x=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra);return Object(f.jsxs)("div",{className:"big-result",children:[Object(f.jsxs)("div",{className:"result-main single-result",children:[Object(f.jsx)("label",{children:this.props.addExtra?"Paying a little more than required minimum total":"Your interest with only minimum payments"}),Object(f.jsx)("label",{style:{fontSize:"x-large"},children:"Interest Paid"}),Object(f.jsx)("span",{children:b.usd(100*e.interestPaid)})]}),Object(f.jsxs)("div",{className:"result-secondary",children:[Object(f.jsxs)("div",{className:"single-result",children:[Object(f.jsx)("label",{children:"You will pay off your debt by"}),Object(f.jsx)("span",{children:b.relativeMonth(e.payoff)}),Object(f.jsxs)("label",{children:["(Or ",b.years(e.payoff),")"]})]}),Object(f.jsxs)("div",{className:"single-result",children:[Object(f.jsx)("label",{children:"Total Payment:"}),Object(f.jsx)("span",{children:b.usd(100*e.total,!1)})]})]}),Object(f.jsx)("button",{className:"view-report",onClick:function(){return t.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component),y=a(23),v=a(24),g=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=u.all(this.props.cards).total-e.total;return Object(f.jsxs)("div",{className:"big-result",children:[Object(f.jsxs)("div",{className:"result-main single-result",children:[Object(f.jsx)("label",{children:"Paying a little more than required minimum"}),Object(f.jsxs)("label",{style:{color:"#FF6200",fontSize:"x-large",display:"flex",alignItems:"center"},children:["Interest Saved ",Object(f.jsx)(y.a,{"data-tip":!0,"data-for":"interestSavedTooltip"}),Object(f.jsx)(v.a,{id:"interestSavedTooltip",children:Object(f.jsx)("span",{children:"This is showing you how much money you saved that would have gone towards interest by paying every month."})})]}),Object(f.jsx)("span",{style:{color:"#FF6200"},children:b.usd(100*a)})]}),Object(f.jsxs)("div",{className:"result-secondary",children:[Object(f.jsxs)("div",{className:"single-result",children:[Object(f.jsx)("label",{children:"You will pay off your debt by"}),Object(f.jsx)("span",{children:b.relativeMonth(e.payoff)}),Object(f.jsxs)("label",{children:["(Or ",b.years(e.payoff),")"]})]}),Object(f.jsxs)("div",{className:"single-result",children:[Object(f.jsx)("label",{children:"Total Payment:"}),Object(f.jsx)("span",{children:b.usd(100*e.total,!1)})]})]}),Object(f.jsx)("button",{className:"view-report",onClick:function(){return t.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component),N=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=0,r=0;return this.props.cards.forEach((function(t){a+=parseFloat(t.balance)})),this.props.cards.forEach((function(t){r+=t.balance/a*(t.rate/100)})),r=u.round(r),Object(f.jsx)("div",{className:"debt-summary",children:Object(f.jsxs)("table",{children:[Object(f.jsxs)("thead",{children:[Object(f.jsx)("tr",{children:Object(f.jsx)("th",{colSpan:"100",children:"Debt summary"})}),Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:"Balance"}),Object(f.jsx)("th",{children:"Interest Rate"}),Object(f.jsx)("th",{children:"Monthly Payment"}),Object(f.jsx)("th",{children:"Interest Paid"}),Object(f.jsx)("th",{children:"Total Payments"}),Object(f.jsx)("th",{children:"Time to Payoff"})]})]}),Object(f.jsx)("tbody",{children:this.props.cards.map((function(e,a){var r=u.single(e,t.props.addExtra);return Object(f.jsxs)("tr",{children:[Object(f.jsxs)("th",{children:["Credit Card #",a+1]}),Object(f.jsx)("td",{children:b.usd(e.balance,!1)}),Object(f.jsx)("td",{children:b.percent(e.rate,"rate")}),Object(f.jsx)("td",{children:b.usd(100*r.monthly,!1)}),Object(f.jsx)("td",{children:b.usd(100*r.interestPaid,!1)}),Object(f.jsx)("td",{children:b.usd(100*r.total,!1)}),Object(f.jsx)("td",{children:b.months(r.payoff)})]},a)}))}),Object(f.jsx)("tfoot",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Totals"}),Object(f.jsx)("td",{children:b.usd(a,!1)}),Object(f.jsx)("td",{children:r+"%"}),Object(f.jsx)("td",{children:b.usd(100*e.monthly,!1)}),Object(f.jsx)("td",{children:b.usd(100*e.interestPaid,!1)}),Object(f.jsx)("td",{children:b.usd(100*e.total,!1)}),Object(f.jsx)("td",{children:b.months(e.payoff)})]})})]})})}}]),a}(n.a.Component),C=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"payment-schedule",children:Object(f.jsxs)("table",{children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{}),Object(f.jsx)("th",{children:"Payment"}),Object(f.jsx)("th",{children:"Interest"}),Object(f.jsx)("th",{children:"Total Principal"}),Object(f.jsx)("th",{children:"Balance"})]})}),Object(f.jsx)("tbody",{children:this.props.schedule.map((function(t,e){return Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:e||""}),Object(f.jsx)("td",{children:b.usd(100*t.payment,!1)}),Object(f.jsx)("td",{children:b.usd(t.interest,!1)}),Object(f.jsx)("td",{children:b.usd(t.principal,!1)}),Object(f.jsx)("td",{children:b.usd(100*t.balance,!1)})]},e)}))})]})})}}]),a}(n.a.Component),w=(a(78),a(25));var S=function(t){return Object(f.jsx)("svg",{className:t.className,height:t.height,width:t.width,viewBox:"0 0 266 438",xmlns:"http://www.w3.org/2000/svg",children:Object(f.jsx)("path",{d:"m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z",fill:t.fill})})};a(79);var k=function(t){var e=Object(r.useState)(""),a=Object(w.a)(e,2),n=a[0],s=a[1],c=Object(r.useState)("0px"),i=Object(w.a)(c,2),l=i[0],o=i[1],d=Object(r.useState)("accordion__icon"),h=Object(w.a)(d,2),u=h[0],j=h[1],b=Object(r.useRef)(null);return Object(f.jsxs)("div",{className:"accordion__section",children:[Object(f.jsxs)("button",{className:"accordion ".concat(n),onClick:function(){s(""===n?"active":""),o("active"===n?"0px":"".concat(b.current.scrollHeight,"px")),j("active"===n?"accordion__icon":"accordion__icon rotate")},children:[Object(f.jsx)("p",{className:"accordion__title",children:t.title}),Object(f.jsx)(S,{className:"".concat(u),width:10,fill:"#777"})]}),Object(f.jsx)("div",{ref:b,style:{maxHeight:"".concat(l)},className:"accordion__content",children:Object(f.jsx)("div",{className:"accordion__text",children:t.content})})]})},M=a(49),F=a.n(M),P=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=0;return this.props.cards.forEach((function(t){a+=parseFloat(t.balance)})),Object(f.jsx)("div",{className:"report",children:Object(f.jsxs)("div",{className:"report-inner",ref:function(e){return t.componentRef=e},children:[Object(f.jsx)(F.a,{trigger:function(){return Object(f.jsx)("span",{className:"print-report",children:"Print this report"})},content:function(){return t.componentRef}}),Object(f.jsx)("span",{className:"close-report",onClick:function(){return t.props.report()},children:"Close report"}),this.props.addExtra?Object(f.jsxs)("h4",{children:["Paying a little more than required minimum total will take ",b.months(e.payoff)," to payoff your debt."]}):Object(f.jsxs)("h4",{children:["Minimum payments will take ",b.months(e.payoff)," to payoff your debt."]}),this.props.addExtra?Object(f.jsxs)("p",{children:["You owe a total of ",b.usd(a)," having a total monthly payment of ",b.usd(100*e.monthly),". If you continue to make this same amount of additional payments it will take you ",b.months(e.payoff)," to payoff this debt. Your total interest paid will now be ",b.usd(100*e.interestPaid),"."]}):Object(f.jsxs)("p",{children:["You owe a total of ",b.usd(a)," having a total monthly payment of ",b.usd(100*e.monthly),". If you continue to make the minimum payments it will take you ",b.months(e.payoff)," to payoff this debt. The total interest paid will be ",b.usd(100*e.interestPaid),"."]}),Object(f.jsx)(N,{cards:this.props.cards,addExtra:this.props.addExtra}),Object(f.jsxs)("h3",{children:["Debt payoff is estimated at ",b.months(e.payoff)]}),Object(f.jsx)(O,{totalBalance:a,schedule:e.schedule,color:this.props.addExtra?"#ff6f31":"#434343"}),Object(f.jsx)(k,{title:"View your credit card payment schedule",content:Object(f.jsx)(C,{schedule:e.schedule})})]})})}}]),a}(n.a.Component),E=a(14),Y=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={editing:!1,drag:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.value;switch(this.props.type){case"big":e=this.state.editing?(e/100).toFixed(2):b.usd(e);break;case"bubble":e="extra"===this.props.name?this.state.editing?(e/100).toFixed(2):b.usd(e,!1):"rate"===this.props.name?this.state.editing?(e/100).toFixed(2):b.percent(e,"rate"):this.state.editing?e:b.usd(e)}var a=0,r=1;switch(this.props.name){case"extra":a=25e3,r=1;break;case"rate":a=36;break;case"minimum":a=20}return Object(f.jsxs)("div",{className:"card-header-input bubble",children:[Object(f.jsxs)("label",{children:[this.props.label,"rate"==this.props.name&&Object(f.jsxs)("span",{style:{color:"#FF6200"},children:[Object(f.jsx)(y.a,{"data-tip":!0,"data-for":"APRTooltip"}),Object(f.jsx)(v.a,{id:"APRTooltip",children:Object(f.jsx)("span",{children:"Interest is essentially a charge to the borrower for the use of an asset"})})]})]}),Object(f.jsxs)("div",{className:"input-wrapper",children:[Object(f.jsx)("input",{type:"text",name:this.props.name,value:e,onChange:this.props.onChange,onFocus:function(){return t.setState({editing:!0})},onBlur:function(){return t.setState({editing:!1})}}),"bubble"===this.props.type&&!0===this.props.slider&&Object(f.jsx)("input",{type:"range",step:r,min:0,max:a,value:this.props.value,name:this.props.name,onChange:this.props.onChange})]})]})}}]),a}(n.a.Component),I=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(i.a)(this,a),(r=e.call(this,t)).state={data:r.props.data,calculated:!1,error:!1},r.handleChange=r.handleChange.bind(Object(E.a)(r)),r.calculate=r.calculate.bind(Object(E.a)(r)),r}return Object(l.a)(a,[{key:"render",value:function(){var t=this;u.single(this.state.data);return Object(f.jsxs)("div",{className:"single-card",children:[Object(f.jsxs)("div",{className:"card-header",style:{display:"flex",flexDirection:"column"},children:[Object(f.jsx)(Y,{name:"balance",value:this.state.data.balance,type:"big",onChange:this.handleChange,label:"What is your current credit card balance?"}),Object(f.jsx)(Y,{name:"rate",value:this.state.data.rate,type:"bubble",onChange:this.handleChange,label:"Interest Rate (APR)"}),Object(f.jsx)(Y,{name:"minimum",value:this.state.data.minimum,type:"big",onChange:this.handleChange,label:"What is your minimum payment due each month?"}),Object(f.jsx)("button",{className:"calculate",onClick:this.calculate,children:"Calculate"}),this.state.error&&Object(f.jsx)("span",{className:"card-error",children:this.state.error})]}),Object(f.jsx)("div",{className:"card-footer",children:this.props.remove&&Object(f.jsx)("div",{className:"card-remove pointer",onClick:function(){return t.props.remove()},style:{fontSize:"x-large"},children:"Remove"})}),Object(f.jsx)("div",{className:"card-additional",style:{display:this.state.calculated?"":"none",fontSize:"x-large",color:"#33208e",fontWeight:"bold"},children:Object(f.jsx)(Y,{name:"extra",value:this.state.data.extra,type:"bubble",onChange:this.handleChange,label:"Can you pay a little more this month? Enter any additional amount to see how this might effect your total.",slider:!0})})]})}},{key:"handleChange",value:function(t){var e=t.target.value;e=e.replaceAll(/[^0-9]/g,"");var a=t.target.name,r=this.state.data;e>3600&&"rate"===a&&(e=3600),"minimum"===a&&(e=e),e>25e3&&"extra"===a&&(e=25e3),"undefined"!==typeof r[a]&&(r[a]=e,this.setState({data:r}),"extra"===a&&this.props.update(r),this.setState({error:!1}))}},{key:"calculate",value:function(){console.log(this.state.data),0!==parseInt(this.state.data.minimum)?0!==parseInt(this.state.data.balance)?(this.setState({calculated:!0}),this.props.update(this.state.data)):this.setState({error:"Card balance cant be zero"}):this.setState({error:"Minimum payment cant be zero"})}}]),a}(n.a.Component),T=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=!1;this.props.cards.forEach((function(e){e.extra>0&&(t=!0)}));var e=u.all(this.props.cards,!1),a=u.all(this.props.cards,!0),r=0;this.props.cards.forEach((function(t){r+=parseFloat(t.balance)}));var n=new Date,s=[{x:n.getFullYear(),y:r}],c=[{x:n.getFullYear(),y:r}];if(e.schedule.forEach((function(t,e){if(n.setMonth(n.getMonth()+1),!(n.getMonth()>0)){var r=n.getFullYear();s.push({x:r,y:100*t.balance}),c.push({x:r,y:a.schedule[e]?100*a.schedule[e].balance:0})}})),n.getMonth()>0){var i=12-n.getMonth();n.setMonth(n.getMonth()+i);var l=n.getFullYear();s.push({x:l,y:0}),c.push({x:l,y:0})}return Object(f.jsxs)("div",{className:"BalanceChartTwin",children:[Object(f.jsxs)("div",{className:"legend",children:[Object(f.jsx)("div",{className:"min",children:"Minimum"}),t&&Object(f.jsx)("div",{className:"add",children:"w/ Additional"})]}),Object(f.jsx)(p.a,{children:function(e){var a=e.width,r=e.height;return Object(f.jsxs)(m.e,{margin:{left:100},height:r,width:a,xType:"ordinal",children:[Object(f.jsx)(m.c,{}),Object(f.jsx)(m.a,{}),Object(f.jsx)(m.d,{title:"Years to payoff"}),Object(f.jsx)(m.f,{tickFormat:function(t){return b.usd(t)},title:"Cards balance"}),Object(f.jsx)(m.b,{data:s,color:"#434343",barWidth:.35,style:{rx:3,ry:3}}),t&&Object(f.jsx)(m.b,{data:c,color:"#ff6f31",barWidth:.35,style:{rx:3,ry:3}})]})}})]})}}]),a}(n.a.Component),_=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;Object(i.a)(this,a),r=e.call(this,t);var n=localStorage.getItem("current-cards")?JSON.parse(localStorage.getItem("current-cards")):[{balance:"0",rate:"0",minimum:"0",extra:"0"}];return r.state={cards:n,report:0},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=!1;return this.state.cards.forEach((function(t){t.extra>0&&(e=!0)})),Object(f.jsxs)("div",{className:"calculator",children:[Object(f.jsx)("div",{className:"cards-container",children:this.state.cards.map((function(e,a){return Object(f.jsx)(I,{data:e,update:function(e){return t.update(a,e)},clone:function(){return t.clone(a)},add:function(){return t.add()},remove:t.state.cards.length>1&&function(){return t.remove(a)}},a)}))}),Object(f.jsxs)("div",{className:"right-column",children:[Object(f.jsxs)("div",{className:"twin-results",children:[Object(f.jsx)(x,{cards:this.state.cards,report:function(){return t.setState({report:!1})},addExtra:!1}),e&&Object(f.jsx)(g,{cards:this.state.cards,report:function(){return t.setState({report:!0})},addExtra:!0})]}),Object(f.jsx)(T,{cards:this.state.cards})]}),0!==this.state.report&&Object(f.jsx)(P,{cards:this.state.cards,report:function(){return t.setState({report:0})},addExtra:this.state.report})]})}},{key:"update",value:function(t,e){var a=Object(h.a)(this.state.cards);a[t]=e,this.updateCards(a)}},{key:"remove",value:function(t){var e=Object(h.a)(this.state.cards);e.length<=1||(e.splice(t,1),this.updateCards(e))}},{key:"clone",value:function(t){var e=Object(h.a)(this.state.cards);if(e[t]){var a={};Object.assign(a,e[t]),e.push(a),this.updateCards(e)}}},{key:"add",value:function(){var t=Object(h.a)(this.state.cards);t.push({balance:0,rate:0,minimum:0,extra:0}),this.updateCards(t)}},{key:"updateCards",value:function(t){this.setState({cards:t}),localStorage.setItem("current-cards",JSON.stringify(t))}}]),a}(n.a.Component),A=(n.a.Component,function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(_,{})})}}]),a}(n.a.Component));c.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(A,{})}),document.getElementById("root"))}},[[80,1,2]]]);
//# sourceMappingURL=main.1882caba.chunk.js.map