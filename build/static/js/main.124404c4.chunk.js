(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(37),i=a.n(s),c=(a(62),a(3)),l=a(4),o=a(6),d=a(5),h=a(18),u=a(11),p={single:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={};Object.assign(a,e);var r={monthly:0,payoff:0,total:0,interestPaid:0,totalPrincipal:0,schedule:[]};if("object"!==typeof a||"undefined"===typeof a.balance||"undefined"===typeof a.rate||"undefined"===typeof a.minimum)return r;a.balance=parseFloat((a.balance/100).toFixed(2)),r.monthly=a.minimum/100,r.monthly=this.round(r.monthly);var n=this.getSchedule(a,t);return Object.assign(r,n),r.interestPaid=this.round(r.total-a.balance),r},getSchedule:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a={payoff:0,total:0,totalPrincipal:0,schedule:[]},r=e.balance,n=e.rate/36e3,s=30*n;a.schedule.push({payment:0,interest:0,principal:0,balance:r});for(var i=0;i<240&&!(this.round(r)<=0);i++){var c=e.minimum/100;e.extra&&t&&(c+=parseFloat(e.extra/100));var l=s*r/100;c>r+l&&(c=r+l);var o=(c=this.round(c))-(l=this.round(l));if(o<0&&i>=120)break;r-=o,a.schedule.push({payment:this.round(c),interest:this.round(l),principal:this.round(o),balance:this.round(r)}),a.payoff++,a.total+=c,a.totalPrincipal+=o}return a.total=this.round(a.total),a},all:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r={monthly:0,payoff:0,total:0,interestPaid:0,totalPrincipal:0,schedule:[]};return e.forEach((function(e){var n=t.single(e,a);r.monthly+=n.monthly,n.payoff>r.payoff&&(r.payoff=n.payoff),r.total+=n.total,r.interestPaid+=n.interestPaid,r.totalPrincipal+=n.totalPrincipal,r.schedule=t.mergeSchedules(r.schedule,n.schedule)})),r.interestPaid=this.round(r.interestPaid),r.totalPrincipal=this.round(r.totalPrincipal),r},mergeSchedules:function(e,t){var a,r;return e.length>t.length?(a=e,r=t):(a=t,r=e),r.forEach((function(e,t){a[t].payment+=e.payment,a[t].interest+=e.interest,a[t].principal+=e.principal,a[t].balance+=e.balance})),a},round:function(e){return Math.round(100*e)/100}},j={monthName:["January","February","March","April","May","June","July","August","September","October","November","December"],usd:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if("number"===typeof(e=p.round(e,1))&&/^[0-9]+\.[0-9]{1,2}$/.test(e.toString()))return"$".concat(e)+(t?" USD":"");var a=this.getOnlyNumber(e),r=a[0],n=a[1];","===(r=(r=r.split("").reverse().join("")).replace(/[0-9]{3}/g,"$&,")).slice(-1)&&(r=r.substr(0,r.length-1)),r=r.split("").reverse().join("");var s="$".concat(r,".").concat(n);return t?"".concat(s," USD"):s},months:function(e){if(e>12){var t=Math.floor(e/12),a=e-12*t;return"".concat(t," Years and ").concat(a," Months")}return"".concat(e," Months")},years:function(e){if(e>12){var t=Math.ceil(e/12);return"".concat(t," Years")}return"<1 Year"},relativeMonth:function(e){var t=new Date;return t.setMonth(t.getMonth()+e),"".concat(j.monthName[t.getMonth()],", ").concat(t.getFullYear())},getOnlyNumber:function(e){if(!isNaN(e)&&e<100&&e>0)return["0",(e/10).toString().replaceAll(/[^0-9]/g,"")];var t=e.toString().replaceAll(/[^0-9]/g,""),a="00";return t.length>2&&(a=t.slice(-2),t=t.substr(0,t.length-2)),[t,a]},percent:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=e.toString().replaceAll(/[^0-9]/g,"");return"rate"==t&&(a=(a/100).toFixed(2)),a+"%"}},b=j,m=(a(40),a(24)),f=a(9),O=a(2),x=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=new Date,a=[{x:t.getFullYear(),y:this.props.totalBalance}],r=[t.getFullYear()];if(this.props.schedule.forEach((function(e,n){if(t.setMonth(t.getMonth()+1),!(t.getMonth()>0)){var s=t.getFullYear();r.push(s),a.push({x:s,y:100*e.balance})}})),t.getMonth()>0){var n=12-t.getMonth();t.setMonth(t.getMonth()+n);var s=t.getFullYear();r.push(s),a.push({x:s,y:0})}return Object(O.jsx)("div",{className:"BalanceChart",children:Object(O.jsx)(m.a,{children:function(t){var r=t.width,n=t.height;return Object(O.jsxs)(f.f,{margin:{left:130},height:n,width:r,xType:"ordinal",children:[Object(O.jsx)(f.d,{}),Object(O.jsx)(f.a,{}),Object(O.jsx)(f.e,{title:"Years to payoff"}),Object(O.jsx)(f.g,{tickFormat:function(e){return b.usd(e)},title:"Card balance"}),Object(O.jsx)(f.c,{data:a,color:e.props.color||"#434343",barWidth:.25,style:{rx:3,ry:3}})]})}})})}}]),a}(n.a.Component),y=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra);return Object(O.jsxs)("div",{className:"big-result",children:[Object(O.jsxs)("div",{className:"result-main single-result",children:[Object(O.jsx)("label",{children:this.props.addExtra?"Paying a little more than required minimum total":"Your interest with only minimum payments"}),Object(O.jsx)("label",{style:{fontSize:"x-large"},children:"Interest Paid"}),Object(O.jsx)("span",{children:b.usd(100*t.interestPaid)})]}),Object(O.jsxs)("div",{className:"result-secondary",children:[Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"You will pay off your debt by"}),Object(O.jsx)("span",{children:b.relativeMonth(t.payoff)}),Object(O.jsxs)("label",{children:["(Or ",b.years(t.payoff),")"]})]}),Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"Total Payment:"}),Object(O.jsx)("span",{children:b.usd(100*t.total,!1)})]})]}),Object(O.jsx)("button",{className:"view-report",onClick:function(){return e.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component),v=a(25),g=a(26),N=a.p+"static/media/coin.673e924e.gif",w=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra),a=p.all(this.props.cards).total-t.total;return Object(O.jsxs)("div",{className:"big-result",children:[Object(O.jsxs)("div",{className:"result-main single-result",children:[Object(O.jsx)("label",{children:"Your interest when you pay over the minimum payment"}),Object(O.jsx)("label",{style:{fontSize:"x-large"},children:"Interest Paid"}),Object(O.jsx)("span",{children:b.usd(100*t.interestPaid)}),Object(O.jsxs)("label",{style:{fontSize:"1.2em",fontWeight:"bold",display:"flex",alignItems:"center",marginBottom:-60},children:[Object(O.jsx)("img",{className:"coin",src:N}),"Saving You ",Object(O.jsx)("span",{style:{color:"#FF6200",marginLeft:8},children:b.usd(100*a)})," ",Object(O.jsx)(v.a,{"data-tip":!0,"data-for":"interestSavedTooltip"}),Object(O.jsx)(g.a,{id:"interestSavedTooltip",multiline:!0,children:Object(O.jsxs)("span",{children:["Paying over your monthly minimum payment ",Object(O.jsx)("br",{}),"reduces the total interest paid on the debt.",Object(O.jsx)("br",{})," This means you can use the money saved towards other goals."]})})]})]}),Object(O.jsxs)("div",{className:"result-secondary",children:[Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"You will pay off your debt by"}),Object(O.jsx)("span",{children:b.relativeMonth(t.payoff)}),Object(O.jsxs)("label",{children:["(Or ",b.years(t.payoff),")"]})]}),Object(O.jsxs)("div",{className:"single-result",children:[Object(O.jsx)("label",{children:"Total Payment:"}),Object(O.jsx)("span",{children:b.usd(100*t.total,!1)})]})]}),Object(O.jsx)("button",{className:"view-report",onClick:function(){return e.props.report()},children:"Payoff Report"})]})}}]),a}(n.a.Component),P=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.principal+this.props.interest,t=100*this.props.principal/e,a=100*this.props.interest/e;t=p.round(t),a=p.round(a);var r=[{angle:this.props.principal,label:"Total Principal",color:"#091C5A",subLabel:"".concat(t,"%")},{angle:this.props.interest,label:"Interest Paid",color:"#FF6600",subLabel:"".concat(a,"%")}];return Object(O.jsxs)("div",{className:"BalancePie",children:[this.props.title&&Object(O.jsx)("h3",{children:this.props.title}),Object(O.jsx)(m.a,{children:function(e){var t=e.width,a=e.height;return Object(O.jsx)(f.b,{colorType:"literal",data:r,width:t,height:a,showLabels:!0,innerRadius:80,radius:140,labelsStyle:{textAnchor:"middle",fontSize:12,fontWeight:500,fill:"white",stroke:"black",strokeWidth:"3px",strokeLinecap:"butt",strokeLinejoin:"miter",paintOrder:"stroke"},labelsRadiusMultiplier:.9})}})]})}}]),a}(n.a.Component);n.a.Component,a(84),a(27);var C=function(e){return Object(O.jsx)("svg",{className:e.className,height:e.height,width:e.width,viewBox:"0 0 266 438",xmlns:"http://www.w3.org/2000/svg",children:Object(O.jsx)("path",{d:"m258.476 235.971-194.344 194.343c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901l154.021-154.746-154.021-154.745c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0l194.343 194.343c9.373 9.372 9.373 24.568.001 33.941z",fill:e.fill})})},k=(a(85),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={showAll:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(O.jsx)("div",{className:"debt-summary",children:Object(O.jsxs)("table",{children:[Object(O.jsxs)("thead",{children:[Object(O.jsx)("tr",{children:Object(O.jsx)("th",{colSpan:"100",children:"Payment Schedule"})}),Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Month"}),Object(O.jsx)("th",{children:"Payment"}),Object(O.jsx)("th",{children:"Interest"}),Object(O.jsx)("th",{children:"Total Principal"}),Object(O.jsx)("th",{children:"Balance"})]})]}),Object(O.jsx)("tbody",{children:this.props.schedule.map((function(t,a){if(e.state.showAll||!(a>=10))return Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:a||""}),Object(O.jsx)("td",{children:b.usd(100*t.payment,!1)}),Object(O.jsx)("td",{children:b.usd(t.interest,!1)}),Object(O.jsx)("td",{children:b.usd(t.principal,!1)}),Object(O.jsx)("td",{children:b.usd(100*t.balance,!1)})]},a)}))}),Object(O.jsx)("tfoot",{children:Object(O.jsx)("tr",{children:Object(O.jsxs)("td",{colSpan:"15",className:"showMore",onClick:function(){e.setState({showAll:!e.state.showAll})},children:[this.state.showAll?"Show less":"Show more",Object(O.jsx)(C,{className:this.state.showAll?"less":"",width:10,fill:"#fff"})]})})})]})})}}]),a}(n.a.Component));var S=a(53),F=a.n(S),M=a(54),A=n.a.createRef(),E=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=p.all(this.props.cards,this.props.addExtra),a=0;this.props.cards.forEach((function(e){a+=parseFloat(e.balance)}));var r=p.all(this.props.cards).total,n=t.total,s=r-n;return Object(O.jsx)("div",{className:"report",children:Object(O.jsxs)("div",{className:"report-inner",ref:A,children:[Object(O.jsx)(F.a,{trigger:function(){return Object(O.jsx)("span",{className:"print-report",children:"Print this report"})},content:function(){return A.current}}),Object(O.jsx)("span",{onClick:this.toPDF,className:"print-report",children:"Download this report"}),Object(O.jsx)("span",{className:"close-report",onClick:function(){return e.props.report()},children:"Close report"}),this.props.addExtra?Object(O.jsxs)("h4",{children:["Paying a little more than required minimum total will take ",b.months(t.payoff)," to payoff your debt."]}):Object(O.jsxs)("h4",{children:["Minimum payments will take ",b.months(t.payoff)," to payoff your debt."]}),this.props.addExtra?Object(O.jsxs)("p",{children:["Nice! With your additional payment of ",b.usd(Number(this.props.cards[0].extra))," it brings down your total payment plus interest down to ",b.usd(a)," saving you ",b.usd(s),". If you continue to make a monthly payment of ",b.usd(n),", it will take you ",b.months(t.payoff)," to pay off your current balance of ",b.usd(a),". The revised total interest paid will now be ",b.usd(100*t.interestPaid),"."]}):Object(O.jsxs)("p",{children:["If you continue to make a monthly payment of ",b.usd(100*t.monthly),", it will take you ",b.months(t.payoff)," to pay off your current balance of ",b.usd(a),". The total interest paid in addition to the balance will be ",b.usd(100*t.interestPaid),"."]}),Object(O.jsxs)("h3",{children:["Estimated payoff will by ",b.relativeMonth(t.payoff)]}),Object(O.jsx)(x,{totalBalance:a,schedule:t.schedule,color:this.props.addExtra?"#ff6f31":"#434343"}),Object(O.jsx)(k,{schedule:t.schedule})]})})}},{key:"toPDF",value:function(){new M.a("p","px",[800,1280]).html(document.querySelector(".report-inner"),{callback:function(e){e.save("report.pdf")},format:"PNG",pagesplit:!0})}}]),a}(n.a.Component),I=a(55),T=a.n(I),Y=(a(101),function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={editing:!1,drag:!1},r}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.props.value;switch(this.props.type){case"big":t=this.state.editing?(t/100).toFixed(2):b.usd(t);break;case"bubble":t="extra"===this.props.name?this.state.editing?(t/100).toFixed(2):b.usd(t,!1):"rate"===this.props.name?this.state.editing?(t/100).toFixed(2):b.percent(t,"rate"):this.state.editing?t:b.usd(t)}var a=0,r=1;switch(this.props.name){case"extra":a=25e3,r=1;break;case"rate":a=36;break;case"minimum":a=20}return console.log(0,a),Object(O.jsxs)("div",{className:"card-header-input bubble",children:[Object(O.jsxs)("label",{children:[this.props.label,"rate"==this.props.name&&Object(O.jsxs)("span",{style:{color:"#FF6200"},children:[Object(O.jsx)(v.a,{"data-tip":!0,"data-for":"APRTooltip"}),Object(O.jsx)(g.a,{id:"APRTooltip",multiline:!0,children:Object(O.jsxs)("span",{children:["Interest rates, or APRs ",Object(O.jsx)("br",{})," are the price you pay for using a credit card. ",Object(O.jsx)("br",{})," If you carry a balance even some of the time, ",Object(O.jsx)("br",{})," a lower APR will cost you less."]})})]})]}),Object(O.jsxs)("div",{className:"input-wrapper",children:[Object(O.jsx)("input",{type:"text",name:this.props.name,value:t,onChange:this.props.onChange,onFocus:function(){return e.setState({editing:!0})},onBlur:function(){return e.setState({editing:!1})}}),"bubble"===this.props.type&&!0===this.props.slider&&Object(O.jsx)(T.a,{step:r,minValue:0,maxValue:a,value:parseFloat(this.props.value),name:this.props.name,onChange:function(t){e.props.onChange({target:{name:e.props.name,value:t.toString()}})},formatLabel:function(e){return b.usd(e)}})]})]})}}]),a}(n.a.Component)),R=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{children:Object(O.jsx)("div",{className:"landing-page",children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("div",{className:"image",children:Object(O.jsx)("img",{src:"https://images.pexels.com/photos/6348114/pexels-photo-6348114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})}),Object(O.jsx)("div",{className:"info",children:Object(O.jsx)("h1",{children:"Fill out your card balance details to calculate payoff results."})})]})})})}}]),a}(n.a.Component),z=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).state={data:r.props.data,calculated:!1,error:!1},r.handleChange=r.handleChange.bind(Object(u.a)(r)),r.calculate=r.calculate.bind(Object(u.a)(r)),r}return Object(l.a)(a,[{key:"render",value:function(){var e=this;p.single(this.state.data);return Object(O.jsxs)("div",{className:"single-card",children:[Object(O.jsxs)("div",{className:"card-header",style:{display:"flex",flexDirection:"column"},children:[Object(O.jsx)(Y,{name:"balance",value:this.state.data.balance,type:"big",onChange:this.handleChange,label:"What is your current credit card balance?"}),Object(O.jsx)(Y,{name:"rate",value:this.state.data.rate,type:"bubble",onChange:this.handleChange,label:"Interest Rate (APR)"}),Object(O.jsx)(Y,{name:"minimum",value:this.state.data.minimum,type:"big",onChange:this.handleChange,label:"What is the minimum payment due?"}),Object(O.jsx)("button",{className:"calculate",onClick:this.calculate,children:"Calculate"}),this.state.error&&Object(O.jsx)("span",{className:"card-error",children:this.state.error}),Object(O.jsx)("span",{className:"card-reset",onClick:function(){e.props.reset().then((function(){e.setState({data:e.props.data,calculated:!1})}))},children:"Reset"})]}),Object(O.jsx)("div",{className:"card-footer",children:this.props.remove&&Object(O.jsx)("div",{className:"card-remove pointer",onClick:function(){return e.props.remove()},style:{fontSize:"x-large"},children:"Remove"})}),Object(O.jsxs)("div",{className:"card-additional",style:{display:this.state.calculated?"":"none",fontSize:"x-large",color:"#FF6200",fontWeight:"bold"},children:[Object(O.jsx)(Y,{name:"extra",value:this.state.data.extra,type:"bubble",onChange:this.handleChange,label:"Can you pay a little more than your minimum payment? Enter it here to see how it will affect you payoff",slider:!0}),Object(O.jsx)("span",{children:Object(O.jsx)("div",{className:"newTotal",children:Object(O.jsxs)("p",{style:{fontWeight:"bold"},children:["Minimum + Additional payment= ",b.usd(Number(this.state.data.minimum)+Number(this.state.data.extra))]})})})]})]})}},{key:"handleChange",value:function(e){var t=e.target.value;t=t.replaceAll(/[^0-9]/g,"");var a=e.target.name,r=this.state.data;t>3600&&"rate"===a&&(t=3600),"minimum"===a&&(t=t),t>25e3&&"extra"===a&&(t=25e3),"undefined"!==typeof r[a]&&(r[a]=t,this.setState({data:r}),"extra"===a&&this.props.update(r),this.setState({error:!1}))}},{key:"calculate",value:function(){0!==parseInt(this.state.data.minimum)?0!==parseInt(this.state.data.balance)?(this.setState({calculated:!0}),this.props.onCalculate(),this.props.update(this.state.data)):this.setState({error:"Card balance cant be zero"}):this.setState({error:"Minimum payment cant be zero"})}}]),a}(n.a.Component),B=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=p.all(this.props.cards,0),t=p.all(this.props.cards,1);return Object(O.jsxs)("div",{className:"TwinPies",children:[Object(O.jsx)("div",{className:"single-pie",children:Object(O.jsx)(P,{interest:e.interestPaid,principal:e.totalPrincipal,title:"Interest Paid vs Principal (%) with minimum payments"})}),e.interestPaid!==t.interestPaid&&Object(O.jsx)("div",{className:"single-pie",children:Object(O.jsx)(P,{interest:t.interestPaid,principal:t.totalPrincipal,title:"Interest Paid vs Principal (%) with paying over the minimum payment"})})]})}}]),a}(n.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(e){var r;Object(c.a)(this,a),r=t.call(this,e);var n=localStorage.getItem("current-cards")?JSON.parse(localStorage.getItem("current-cards")):[{balance:"0",rate:"0",minimum:"0",extra:"0"}];return r.state={cards:n,report:0,calculated:!1},r.reset=r.reset.bind(Object(u.a)(r)),r}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=!1;return this.state.cards.forEach((function(e){e.extra>0&&(t=!0)})),Object(O.jsxs)("div",{className:"calculator",children:[Object(O.jsx)("div",{className:"cards-container",children:this.state.cards.map((function(t,a){return Object(O.jsx)(z,{data:t,update:function(t){return e.update(a,t)},clone:function(){return e.clone(a)},add:function(){return e.add()},reset:function(){return e.reset()},remove:e.state.cards.length>1&&function(){return e.remove(a)},onCalculate:function(){return e.setState({calculated:!0})}},a)}))}),this.state.calculated?Object(O.jsxs)("div",{className:"right-column bordered",children:[Object(O.jsxs)("div",{className:"twin-results",children:[Object(O.jsx)(y,{cards:this.state.cards,report:function(){return e.setState({report:!1})},addExtra:!1}),t&&Object(O.jsx)(w,{cards:this.state.cards,report:function(){return e.setState({report:!0})},addExtra:!0})]}),Object(O.jsx)(B,{cards:this.state.cards})]}):Object(O.jsxs)("div",{className:"right-column",children:[" ",Object(O.jsx)(R,{})," "]}),0!==this.state.report&&Object(O.jsx)(E,{cards:this.state.cards,report:function(){return e.setState({report:0})},addExtra:this.state.report})]})}},{key:"update",value:function(e,t){var a=Object(h.a)(this.state.cards);a[e]=t,this.updateCards(a)}},{key:"remove",value:function(e){var t=Object(h.a)(this.state.cards);t.length<=1||(t.splice(e,1),this.updateCards(t))}},{key:"clone",value:function(e){var t=Object(h.a)(this.state.cards);if(t[e]){var a={};Object.assign(a,t[e]),t.push(a),this.updateCards(t)}}},{key:"reset",value:function(){return this.setState({calculated:!1}),this.updateCards([{balance:0,rate:0,minimum:0,extra:0}])}},{key:"add",value:function(){var e=Object(h.a)(this.state.cards);e.push({balance:0,rate:0,minimum:0,extra:0}),this.updateCards(e)}},{key:"updateCards",value:function(e){var t=this;return localStorage.setItem("current-cards",JSON.stringify(e)),new Promise((function(a){t.setState({cards:e},(function(){a(!0)}))}))}}]),a}(n.a.Component),W=(n.a.Component,function(e){Object(o.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"App",children:Object(O.jsx)(D,{})})}}]),a}(n.a.Component));i.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(W,{})}),document.getElementById("root"))},62:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){}},[[102,1,3]]]);
//# sourceMappingURL=main.124404c4.chunk.js.map