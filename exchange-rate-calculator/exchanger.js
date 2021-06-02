


// get elements
const currency1 = document.getElementById('currency1');
const currency2 = document.getElementById('currency2');


const amount1 = document.getElementById('amount1')
const amount2 = document.getElementById('amount2')

const rateEl = document.getElementById('rate')
const swap = document.getElementById('swap')

//fetch exchange rates to update dom
calculate = () => {
/// using exchangerate-api.com btn
    //free account to get an api key (f6f00b136f294651624fc121) used in the get request
    // more info at https://www.exchangerate-api.com/docs/standard-requests
    let currency1Value = currency1.value;
    let currency2Value = currency2.value;
    
    fetch(`https://v6.exchangerate-api.com/v6/f6f00b136f294651624fc121/latest/${currency1Value}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.conversion_rates[currency2.value])
            const rate = data.conversion_rates[currency2Value]
            
            rateEl.innerText = `1 ${currency1Value} = ${rate} ${currency2Value}`

            amount2.value = (amount1.value * rate). toFixed(2);
        });   

}


// console.log(currency1)
// event listeners
currency1.addEventListener('change', calculate)
currency2.addEventListener('change', calculate)
amount1.addEventListener('input', calculate)
amount2.addEventListener('input', calculate)
swap.addEventListener('click', () => {
    const temp = currency1.value;
    currency1.value = currency2.value;
    currency2.value = temp;
    calculate();
} )
calculate();

