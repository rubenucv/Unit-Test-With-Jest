const sum = (a,b) => {
    return a + b;
}

console.log(sum(7,3));


let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

oneEuroIs.JPY

const fromDollarToYen = (dollarValue) =>{
	return dollarValue * (oneEuroIs.JPY/oneEuroIs.USD);
}

const fromEuroToDollar = (euroValue) =>{
	return euroValue * (oneEuroIs.USD);
}

const fromYenToPound = (yenValue) =>{
	return yenValue * (oneEuroIs.GBP/oneEuroIs.JPY);
}

console.log(fromDollarToYen(137));
console.log(fromEuroToDollar(137));
console.log(fromYenToPound(137));

module.exports = { sum, fromDollarToYen, fromEuroToDollar, fromYenToPound};