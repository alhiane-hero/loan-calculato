const loanForm = document.getElementById('loan-form');
const loanAmountInput = document.getElementById('loan-amount-input');
const interestInput = document.getElementById('interest-input');
const monthlySalaryInput = document.getElementById('monthly-salary-input');
const yearsToRepayInput = document.getElementById('years-to-repay-input');
const resultsEl = document.querySelector('.results');

function getLoanData() {
    let interestInputVal = parseInt(interestInput.value);
    let loanAmountInputVal = parseInt(loanAmountInput.value);
    let TotalInterest = (interestInputVal / 100) * loanAmountInputVal;
    let totalPayment = loanAmountInputVal + TotalInterest;
    let yearsToRepayInputVal = parseInt(yearsToRepayInput.value)
    let monthlyPayment = totalPayment / (12 * yearsToRepayInputVal);
    let monthlySalaryInputVal = parseInt(monthlySalaryInput.value);
    let afford = monthlySalaryInputVal > monthlyPayment ? 'Yes' : 'No';
    // loading:
    loadFunc();
    window.setTimeout(_ => {
        createResults(TotalInterest, totalPayment, monthlyPayment, afford);
    }, 2000);
}

function createResults(TotalInterest, totalPayment, monthlyPayment, afford) {
    // clear comtainer:
    resultsEl.innerHTML = '';
    let box = document.createElement('div');
    let domData = `<h2>Results</h2>
    <div class="input-box">
        <span class="title">Monthly Payment</span>
        <span class="value" id="loan-value">$${monthlyPayment}</span>
    </div>
    <div class="input-box">
        <span class="title">Total Payment</span>
        <span class="value" id="loan-value">$${totalPayment}</span>
    </div>
    <div class="input-box">
        <span class="title">Total Interest</span>
        <span class="value" id="loan-value">$${TotalInterest}</span>
    </div>
    <div class="input-box">
        <span class="title">Can you afford it?</span>
        <span class="value" id="loan-value">${afford}</span>
    </div>`;
    box.innerHTML = domData;
    resultsEl.appendChild(box);
}

function loadFunc() {
    // clear comtainer:
    resultsEl.innerHTML = '';
    let loading = document.createElement('div');
    loading.classList.add('loading');
    let loadingImg = `<img src="img/download.gif" alt="loading img">`;
    loading.innerHTML = loadingImg;
    resultsEl.appendChild(loading);
}

loanForm.addEventListener('submit', event => {
    event.preventDefault();
    let loanAmountInputVal = loanAmountInput.value;
    let interestInputVal = interestInput.value;
    let monthlySalaryInputVal = monthlySalaryInput.value;
    let yearsToRepayInputVal = yearsToRepayInput.value;
    if (loanAmountInputVal !== ''
    && interestInputVal !== '' 
    && monthlySalaryInputVal !== '' 
    && yearsToRepayInputVal !== '') {
        getLoanData();
    } else {
        alert('Please check your numbers again!');
    }
});