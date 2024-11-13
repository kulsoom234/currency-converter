const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};

document.getElementById('converter-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let fromCurrency = document.getElementById('from').value;
    let toCurrency = document.getElementById('to').value;
    let amount = parseFloat(document.getElementById('amount').value);

    if (isNaN(amount)) {
        document.getElementById('result').textContent = "Please enter a valid amount.";
        return;
    }

    let fromAmount = currency[fromCurrency];
    let toAmount = currency[toCurrency];
    let convertedAmount = (amount / fromAmount) * toAmount;

    document.getElementById('result').textContent = convertedAmount; {convertedAmount.toFixed(2)};
});