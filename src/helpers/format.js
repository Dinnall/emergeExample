import Calc from './calc.js';
var Format = {
	monthName: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	usd: function(usd, includeWord=false){
		usd = Calc.round(usd, 1);
		if(typeof usd === 'number' && /^[0-9]+\.[0-9]{1,2}$/.test(usd.toString())) return `$${usd}` + (includeWord ? ' USD' : '');
		let numbers = this.getOnlyNumber(usd);
		let first = numbers[0];
		let decimals = numbers[1];
		first = first.split("").reverse().join("");
		first = first.replace(/[0-9]{3}/g, "$&,");
		if(first.slice(-1) === ',') first = first.substr(0, (first.length - 1));
		first = first.split("").reverse().join("");
		let whole = `$${first}.${decimals}`;
		return includeWord ? `${whole} USD` : whole;
	},
	months: function(n){
		if(n > 12){
			let years = Math.floor(n / 12);
			let months = n - (years * 12);
			return `${years} Years and ${months} Months`;
		}
		return `${n} Months`;
	},
	years: function(n){
		if(n > 12){
			let years = Math.ceil(n / 12);
			let months = n - (years * 12);
			return `${years} Years`;
		}
		return `<1 Year`;
	},
	relativeMonth: function(n){
		let D = new Date();
		D.setMonth( D.getMonth() + n );
		return `${Format.monthName[ D.getMonth() ]}, ${ D.getFullYear() }`;
	},
	getOnlyNumber: function(inp){
		if(!isNaN(inp) && inp < 100 && inp>0){
			return ['0', (inp/10).toString().replaceAll(/[^0-9]/g, '')];
		}
		let number = inp.toString().replaceAll(/[^0-9]/g, '');
		let decimals = '00';
		if(number.length > 2){
			decimals = number.slice(-2);
			number = number.substr(0, (number.length - 2));
		}
		return [number, decimals];
	},
	percent(per, name=false){
		let percentage = per.toString().replaceAll(/[^0-9]/g, '');
		if(name=='rate') percentage = (percentage / 100).toFixed(2);
		return percentage+'%';
	}
}
export default Format;