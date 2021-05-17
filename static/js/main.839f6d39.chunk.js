(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{102:function(t,e,a){"use strict";a.r(e);var r=a(1),n=a.n(r),s=a(37),i=a.n(s),c=(a(62),a(3)),l=a(4),o=a(6),d=a(5),h=a(18),u={single:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};Object.assign(a,t);var r={monthly:0,payoff:0,total:0,interestPaid:0,totalPrincipal:0,schedule:[]};if("object"!==typeof a||"undefined"===typeof a.balance||"undefined"===typeof a.rate||"undefined"===typeof a.minimum)return r;a.balance=parseFloat((a.balance/100).toFixed(2)),r.monthly=a.minimum/100,r.monthly=this.round(r.monthly);var n=this.getSchedule(a,e);return Object.assign(r,n),r.interestPaid=this.round(r.total-a.balance),r},getSchedule:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={payoff:0,total:0,totalPrincipal:0,schedule:[]},r=t.balance,n=t.rate/36e3,s=30*n;a.schedule.push({payment:0,interest:0,principal:0,balance:r});for(var i=0;i<240&&!(this.round(r)<=0);i++){var c=t.minimum/100;t.extra&&e&&(c+=parseFloat(t.extra/100));var l=s*r/100;c>r+l&&(c=r+l);var o=(c=this.round(c))-(l=this.round(l));if(o<0&&i>=120)break;r-=o,a.schedule.push({payment:this.round(c),interest:this.round(l),principal:this.round(o),balance:this.round(r)}),a.payoff++,a.total+=c,a.totalPrincipal+=o}return a.total=this.round(a.total),a},all:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={monthly:0,payoff:0,total:0,interestPaid:0,totalPrincipal:0,schedule:[]};return t.forEach((function(t){var n=e.single(t,a);r.monthly+=n.monthly,n.payoff>r.payoff&&(r.payoff=n.payoff),r.total+=n.total,r.interestPaid+=n.interestPaid,r.totalPrincipal+=n.totalPrincipal,r.schedule=e.mergeSchedules(r.schedule,n.schedule)})),r.interestPaid=this.round(r.interestPaid),r.totalPrincipal=this.round(r.totalPrincipal),r},mergeSchedules:function(t,e){var a,r;return t.length>e.length?(a=t,r=e):(a=e,r=t),r.forEach((function(t,e){a[e].payment+=t.payment,a[e].interest+=t.interest,a[e].principal+=t.principal,a[e].balance+=t.balance})),a},round:function(t){return Math.round(100*t)/100}},j={monthName:["January","February","March","April","May","June","July","August","September","October","November","December"],usd:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"===typeof(t=u.round(t,1))&&/^[0-9]+\.[0-9]{1,2}$/.test(t.toString()))return"$".concat(t)+(e?" USD":"");var a=this.getOnlyNumber(t),r=a[0],n=a[1];","===(r=(r=r.split("").reverse().join("")).replace(/[0-9]{3}/g,"$&,")).slice(-1)&&(r=r.substr(0,r.length-1)),r=r.split("").reverse().join("");var s="$".concat(r,".").concat(n);return e?"".concat(s," USD"):s},months:function(t){if(t>12){var e=Math.floor(t/12),a=t-12*e;return"".concat(e," Years and ").concat(a," Months")}return"".concat(t," Months")},years:function(t){if(t>12){var e=Math.ceil(t/12);return"".concat(e," Years")}return"<1 Year"},relativeMonth:function(t){var e=new Date;return e.setMonth(e.getMonth()+t),"".concat(j.monthName[e.getMonth()],", ").concat(e.getFullYear())},getOnlyNumber:function(t){if(!isNaN(t)&&t<100&&t>0)return["0",(t/10).toString().replaceAll(/[^0-9]/g,"")];var e=t.toString().replaceAll(/[^0-9]/g,""),a="00";return e.length>2&&(a=e.slice(-2),e=e.substr(0,e.length-2)),[e,a]},percent:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=t.toString().replaceAll(/[^0-9]/g,"");return"rate"==e&&(a=(a/100).toFixed(2)),a+"%"}},p=j,b=(a(40),a(24)),m=a(9),O=a(2),f=(n.a.Component,function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra);return Object(O.jsxs)("div",{className:"big-result",children:[Object(O.jsxs)("div",{className:"result-main single-result",children:[Object(O.jsx)("label",{children:this.props.addExtra?"Paying a little more than required minimum total":"Your interest with only minimum payments"}),Object(O.jsx)("label",{style:{fontSize:"x-large"},children:"Interest Paid"}),Object(O.jsx)("span",{children:p.usd(100*e.interestPaid)})]}),Object(O.jsxs)("div",{className:"result-secondary",children:[Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"You will pay off your debt by"}),Object(O.jsx)("span",{children:p.relativeMonth(e.payoff)}),Object(O.jsxs)("label",{children:["(Or ",p.years(e.payoff),")"]})]}),Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"Total Payment:"}),Object(O.jsx)("span",{children:p.usd(100*e.total,!1)})]})]}),Object(O.jsx)("button",{className:"view-report",onClick:function(){return t.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component)),x=a(25),y=a(26),v=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=u.all(this.props.cards).total-e.total;return Object(O.jsxs)("div",{className:"big-result",children:[Object(O.jsxs)("div",{className:"result-main single-result",children:[Object(O.jsx)("label",{children:"Your interest when you pay over the minimum payment"}),Object(O.jsx)("label",{style:{fontSize:"x-large"},children:"Interest Paid"}),Object(O.jsx)("span",{children:p.usd(100*e.interestPaid)}),Object(O.jsxs)("label",{style:{fontSize:"1.2em",fontWeight:"bold",display:"flex",alignItems:"center",marginBottom:-23},children:["Saving You ",Object(O.jsx)("span",{style:{color:"#FF6200",marginLeft:8},children:p.usd(100*a)})," ",Object(O.jsx)(x.a,{"data-tip":!0,"data-for":"interestSavedTooltip"}),Object(O.jsx)(y.a,{id:"interestSavedTooltip",multiline:!0,children:Object(O.jsxs)("span",{children:[" This is showing you how much money ",Object(O.jsx)("br",{})," you saved that would have gone ",Object(O.jsx)("br",{})," towards interest by paying every month."]})})]})]}),Object(O.jsxs)("div",{className:"result-secondary",children:[Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"You will pay off your debt by"}),Object(O.jsx)("span",{children:p.relativeMonth(e.payoff)}),Object(O.jsxs)("label",{children:["(Or ",p.years(e.payoff),")"]})]}),Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"Total Payment:"}),Object(O.jsx)("span",{children:p.usd(100*e.total,!1)})]})]}),Object(O.jsx)("button",{className:"view-report",onClick:function(){return t.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component),g=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this.props.principal+this.props.interest,e=100*this.props.principal/t,a=100*this.props.interest/t;e=u.round(e),a=u.round(a);var r=[{angle:this.props.principal,label:"Total Principal",color:"#091C5A",subLabel:"".concat(e,"%")},{angle:this.props.interest,label:"Interest Paid",color:"#FF6600",subLabel:"".concat(a,"%")}];return Object(O.jsxs)("div",{className:"BalancePie",children:[this.props.title&&Object(O.jsx)("h3",{children:this.props.title}),Object(O.jsx)(b.a,{children:function(t){var e=t.width,a=t.height;return Object(O.jsx)(m.b,{colorType:"literal",data:r,width:e,height:a,showLabels:!0,innerRadius:80,radius:140,labelsStyle:{textAnchor:"middle",fontSize:12,fontWeight:500,fill:"white",stroke:"black",strokeWidth:"3px",strokeLinecap:"butt",strokeLinejoin:"miter",paintOrder:"stroke"},labelsRadiusMultiplier:.9})}})]})}}]),a}(n.a.Component),N=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=0,r=0;return this.props.cards.forEach((function(t){a+=parseFloat(t.balance)})),this.props.cards.forEach((function(t){r+=t.balance/a*(t.rate/100)})),r=u.round(r),Object(O.jsx)("div",{className:"debt-summary",children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"100",children:"Debt summary"})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{}),Object(O.jsx)("th",{children:"Balance"}),Object(O.jsx)("th",{children:"Interest Rate"}),Object(O.jsx)("th",{children:"Monthly Payment"}),Object(O.jsx)("th",{children:"Interest Paid"}),Object(O.jsx)("th",{children:"Total Payments"}),Object(O.jsx)("th",{children:"Time to Payoff"})]})]}),Object(O.jsx)("tbody",{children:this.props.cards.map((function(a,r){var n=u.single(a,t.props.addExtra);return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("th",{children:["Credit Card #",r+1]}),Object(O.jsx)("td",{children:p.usd(a.balance,!1)}),Object(O.jsx)("td",{children:p.percent(a.rate,"rate")}),Object(O.jsx)("td",{children:p.usd(100*n.monthly,!1)}),Object(O.jsx)("td",{children:p.usd(100*n.interestPaid,!1)}),Object(O.jsx)("td",{children:p.usd(100*n.total,!1)}),Object(O.jsx)("td",{children:p.relativeMonth(e.payoff)})]},r)}))}),Object(O.jsx)("tfoot",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Totals"}),Object(O.jsx)("td",{children:p.usd(a,!1)}),Object(O.jsx)("td",{children:r+"%"}),Object(O.jsx)("td",{children:p.usd(100*e.monthly,!1)}),Object(O.jsx)("td",{children:p.usd(100*e.interestPaid,!1)}),Object(O.jsx)("td",{children:p.usd(100*e.total,!1)}),Object(O.jsx)("td",{children:p.relativeMonth(e.payoff)})]})})]})})}}]),a}(n.a.Component),w=(a(84),a(27));var P=function(t){return Object(O.jsx)("svg",{className:t.className,height:t.height,width:t.width,viewBox:"0 0 266 438",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z",fill:t.fill})})},C=(a(85),function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(c.a)(this,a),(r=e.call(this,t)).state={showAll:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this;return Object(O.jsx)("div",{className:"payment-schedule",children:Object(O.jsxs)("table",{children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Month"}),Object(O.jsx)("th",{children:"Payment"}),Object(O.jsx)("th",{children:"Interest"}),Object(O.jsx)("th",{children:"Total Principal"}),Object(O.jsx)("th",{children:"Balance"})]})}),Object(O.jsx)("tbody",{children:this.props.schedule.map((function(e,a){if(t.state.showAll||!(a>=10))return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:a||""}),Object(O.jsx)("td",{children:p.usd(100*e.payment,!1)}),Object(O.jsx)("td",{children:p.usd(e.interest,!1)}),Object(O.jsx)("td",{children:p.usd(e.principal,!1)}),Object(O.jsx)("td",{children:p.usd(100*e.balance,!1)})]},a)}))}),Object(O.jsx)("tfoot",{children:Object(O.jsx)("tr",{children:Object(O.jsxs)("td",{colSpan:"15",className:"showMore",onClick:function(){t.setState({showAll:!t.state.showAll},(function(){t.props.onMore()}))},children:[this.state.showAll?"Show less":"Show more",Object(O.jsx)(P,{className:this.state.showAll?"less":"",width:10,fill:"#fff"})]})})})]})})}}]),a}(n.a.Component));var k=function(t){var e=Object(r.useState)(""),a=Object(w.a)(e,2),n=a[0],s=a[1],i=Object(r.useState)("0px"),c=Object(w.a)(i,2),l=c[0],o=c[1],d=Object(r.useState)("accordion__icon"),h=Object(w.a)(d,2),u=h[0],j=h[1],p=Object(r.useRef)(null);return Object(O.jsxs)("div",{className:"accordion__section",children:[Object(O.jsxs)("button",{className:"accordion ".concat(n),onClick:function(){s(""===n?"active":""),o("active"===n?"0px":"".concat(p.current.scrollHeight,"px")),j("active"===n?"accordion__icon":"accordion__icon rotate")},children:[Object(O.jsx)("p",{className:"accordion__title",children:t.title}),Object(O.jsx)(P,{className:"".concat(u),width:10,fill:"#777"})]}),Object(O.jsx)("div",{ref:p,style:{maxHeight:"".concat(l)},className:"accordion__content",children:Object(O.jsx)("div",{className:"accordion__text",children:Object(O.jsx)(C,{schedule:t.schedule,onMore:function(){console.log("xd"),o("".concat(p.current.scrollHeight,"px"))}})})})]})},S=a(53),M=a.n(S),F=a(54),E=n.a.createRef(),A=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=u.all(this.props.cards,this.props.addExtra),a=0;return this.props.cards.forEach((function(t){a+=parseFloat(t.balance)})),Object(O.jsx)("div",{className:"report",children:Object(O.jsxs)("div",{className:"report-inner",ref:E,children:[Object(O.jsx)(M.a,{trigger:function(){return Object(O.jsx)("span",{className:"print-report",children:"Print this report"})},content:function(){return E}}),Object(O.jsx)("span",{onClick:this.toPDF,className:"print-report",children:"Download this report"}),Object(O.jsx)("span",{className:"close-report",onClick:function(){return t.props.report()},children:"Close report"}),this.props.addExtra?Object(O.jsxs)("h4",{children:["Paying a little more than required minimum total will take ",p.months(e.payoff)," to payoff your debt."]}):Object(O.jsxs)("h4",{children:["Minimum payments will take ",p.months(e.payoff)," to payoff your debt."]}),this.props.addExtra?Object(O.jsxs)("p",{children:["Your current total of ",p.usd(a)," will take you ",p.months(e.payoff)," to payoff, if you continue to make a monthly payment of ",p.usd(100*e.monthly),". If you continue to make this same amount of additional payments it will take you ",p.months(e.payoff)," to payoff this debt. Your total interest paid will now be ",p.usd(100*e.interestPaid),"."]}):Object(O.jsxs)("p",{children:["Your current total of ",p.usd(a)," will take you ",p.months(e.payoff)," to payoff, if you continue to make a monthly payment of ",p.usd(100*e.monthly),". The total interest paid will be ",p.usd(100*e.interestPaid),"."]}),Object(O.jsx)(N,{cards:this.props.cards,addExtra:this.props.addExtra}),Object(O.jsxs)("h3",{children:["Estimated payoff will by ",p.relativeMonth(e.payoff)]}),Object(O.jsx)(g,{interest:e.interestPaid,principal:e.totalPrincipal}),Object(O.jsx)(k,{title:"View your credit card payment schedule",schedule:e.schedule})]})})}},{key:"toPDF",value:function(){new F.a("p","px",[800,1280]).html(document.querySelector(".report-inner"),{callback:function(t){t.save("report.pdf")},format:"PNG",pagesplit:!0})}}]),a}(n.a.Component),I=a(15),T=a(55),_=a.n(T),Y=(a(101),function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(c.a)(this,a),(r=e.call(this,t)).state={editing:!1,drag:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this,e=this.props.value;switch(this.props.type){case"big":e=this.state.editing?(e/100).toFixed(2):p.usd(e);break;case"bubble":e="extra"===this.props.name?this.state.editing?(e/100).toFixed(2):p.usd(e,!1):"rate"===this.props.name?this.state.editing?(e/100).toFixed(2):p.percent(e,"rate"):this.state.editing?e:p.usd(e)}var a=0,r=1;switch(this.props.name){case"extra":a=25e3,r=1;break;case"rate":a=36;break;case"minimum":a=20}return console.log(0,a),Object(O.jsxs)("div",{className:"card-header-input bubble",children:[Object(O.jsxs)("label",{children:[this.props.label,"rate"==this.props.name&&Object(O.jsxs)("span",{style:{color:"#FF6200"},children:[Object(O.jsx)(x.a,{"data-tip":!0,"data-for":"APRTooltip"}),Object(O.jsx)(y.a,{id:"APRTooltip",multiline:!0,children:Object(O.jsxs)("span",{children:["Interest is essentially ",Object(O.jsx)("br",{})," a charge to the borrower ",Object(O.jsx)("br",{})," for the use of an asset"]})})]})]}),Object(O.jsxs)("div",{className:"input-wrapper",children:[Object(O.jsx)("input",{type:"text",name:this.props.name,value:e,onChange:this.props.onChange,onFocus:function(){return t.setState({editing:!0})},onBlur:function(){return t.setState({editing:!1})}}),"bubble"===this.props.type&&!0===this.props.slider&&Object(O.jsx)(_.a,{step:r,minValue:0,maxValue:a,value:parseFloat(this.props.value),name:this.props.name,onChange:function(e){t.props.onChange({target:{name:t.props.name,value:e.toString()}})},formatLabel:function(t){return p.usd(t)}})]})]})}}]),a}(n.a.Component)),R=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"landing-page",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:"https://images.pexels.com/photos/6348114/pexels-photo-6348114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})}),Object(O.jsxs)("div",{className:"info",children:[Object(O.jsx)("h1",{children:"Fill out your card balance details to calculate payoff results."}),Object(O.jsx)("p",{children:" You could get closer to being debt-free than you think"})]})]})})})}}]),a}(n.a.Component),z=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;return Object(c.a)(this,a),(r=e.call(this,t)).state={data:r.props.data,calculated:!1,error:!1},r.handleChange=r.handleChange.bind(Object(I.a)(r)),r.calculate=r.calculate.bind(Object(I.a)(r)),r}return Object(l.a)(a,[{key:"render",value:function(){var t=this;u.single(this.state.data);return Object(O.jsxs)("div",{className:"single-card",children:[Object(O.jsxs)("div",{className:"card-header",style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)(Y,{name:"balance",value:this.state.data.balance,type:"big",onChange:this.handleChange,label:"What is your current credit card balance?"}),Object(O.jsx)(Y,{name:"rate",value:this.state.data.rate,type:"bubble",onChange:this.handleChange,label:"Interest Rate (APR)"}),Object(O.jsx)(Y,{name:"minimum",value:this.state.data.minimum,type:"big",onChange:this.handleChange,label:"What is the minimum payment due?"}),Object(O.jsx)("button",{className:"calculate",onClick:this.calculate,children:"Calculate"}),this.state.error&&Object(O.jsx)("span",{className:"card-error",children:this.state.error})]}),Object(O.jsx)("div",{className:"card-footer",children:this.props.remove&&Object(O.jsx)("div",{className:"card-remove pointer",onClick:function(){return t.props.remove()},style:{fontSize:"x-large"},children:"Remove"})}),Object(O.jsxs)("div",{className:"card-additional",style:{display:this.state.calculated?"":"none",fontSize:"x-large",color:"#FF6200",fontWeight:"bold"},children:[Object(O.jsx)(Y,{name:"extra",value:this.state.data.extra,type:"bubble",onChange:this.handleChange,label:"Can you pay a little more than your minimum payment? Enter it here to see how it will affect you payoff",slider:!0}),Object(O.jsx)("span",{children:Object(O.jsx)("div",{className:"newTotal",children:Object(O.jsxs)("p",{children:["Minimum + Additional payment: ",p.usd(Number(this.state.data.minimum)+Number(this.state.data.extra))]})})})]})]})}},{key:"handleChange",value:function(t){var e=t.target.value;e=e.replaceAll(/[^0-9]/g,"");var a=t.target.name,r=this.state.data;e>3600&&"rate"===a&&(e=3600),"minimum"===a&&(e=e),e>25e3&&"extra"===a&&(e=25e3),"undefined"!==typeof r[a]&&(r[a]=e,this.setState({data:r}),"extra"===a&&this.props.update(r),this.setState({error:!1}))}},{key:"calculate",value:function(){0!==parseInt(this.state.data.minimum)?0!==parseInt(this.state.data.balance)?(this.setState({calculated:!0}),this.props.onCalculate(),this.props.update(this.state.data)):this.setState({error:"Card balance cant be zero"}):this.setState({error:"Minimum payment cant be zero"})}}]),a}(n.a.Component),D=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var t=u.all(this.props.cards,0),e=u.all(this.props.cards,1);return Object(O.jsxs)("div",{className:"TwinPies",children:[Object(O.jsx)("div",{className:"single-pie",children:Object(O.jsx)(g,{interest:t.interestPaid,principal:t.totalPrincipal,title:"Minimum payments"})}),t.interestPaid!==e.interestPaid&&Object(O.jsx)("div",{className:"single-pie",children:Object(O.jsx)(g,{interest:e.interestPaid,principal:e.totalPrincipal,title:"Over the minimum payments"})})]})}}]),a}(n.a.Component),B=function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(t){var r;Object(c.a)(this,a),r=e.call(this,t);var n=localStorage.getItem("current-cards")?JSON.parse(localStorage.getItem("current-cards")):[{balance:"0",rate:"0",minimum:"0",extra:"0"}];return r.state={cards:n,report:0,calculated:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var t=this;console.log("cal comp SingleCard:",this.state);var e=!1;return this.state.cards.forEach((function(t){t.extra>0&&(e=!0)})),Object(O.jsxs)("div",{className:"calculator",children:[Object(O.jsx)("div",{className:"cards-container",children:this.state.cards.map((function(e,a){return Object(O.jsx)(z,{data:e,update:function(e){return t.update(a,e)},clone:function(){return t.clone(a)},add:function(){return t.add()},remove:t.state.cards.length>1&&function(){return t.remove(a)},onCalculate:function(){return t.setState({calculated:!0})}},a)}))}),this.state.calculated?Object(O.jsxs)("div",{className:"right-column bordered",children:[Object(O.jsxs)("div",{className:"twin-results",children:[Object(O.jsx)(f,{cards:this.state.cards,report:function(){return t.setState({report:!1})},addExtra:!1}),e&&Object(O.jsx)(v,{cards:this.state.cards,report:function(){return t.setState({report:!0})},addExtra:!0})]}),Object(O.jsx)(D,{cards:this.state.cards})]}):Object(O.jsxs)("div",{className:"right-column",children:[" ",Object(O.jsx)(R,{})," "]}),0!==this.state.report&&Object(O.jsx)(A,{cards:this.state.cards,report:function(){return t.setState({report:0})},addExtra:this.state.report})]})}},{key:"update",value:function(t,e){var a=Object(h.a)(this.state.cards);a[t]=e,this.updateCards(a)}},{key:"remove",value:function(t){var e=Object(h.a)(this.state.cards);e.length<=1||(e.splice(t,1),this.updateCards(e))}},{key:"clone",value:function(t){var e=Object(h.a)(this.state.cards);if(e[t]){var a={};Object.assign(a,e[t]),e.push(a),this.updateCards(e)}}},{key:"add",value:function(){var t=Object(h.a)(this.state.cards);t.push({balance:0,rate:0,minimum:0,extra:0}),this.updateCards(t)}},{key:"updateCards",value:function(t){this.setState({cards:t}),localStorage.setItem("current-cards",JSON.stringify(t))}}]),a}(n.a.Component),J=(n.a.Component,function(t){Object(o.a)(a,t);var e=Object(d.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(B,{})})}}]),a}(n.a.Component));i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(J,{})}),document.getElementById("root"))},62:function(t,e,a){},84:function(t,e,a){},85:function(t,e,a){}},[[102,1,3]]]);
//# sourceMappingURL=main.839f6d39.chunk.js.map