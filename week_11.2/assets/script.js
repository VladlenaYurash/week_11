const priceProductOne = document.getElementById('priceProductOne');
const priceProductTwo = document.getElementById('priceProductTwo');
const priceProductThree = document.getElementById('priceProductThree');
const priceProductFour = document.getElementById('priceProductFour');
const buttonClick = document.getElementById('button');

buttonClick.addEventListener('click', function(){
    function getPrice(element) {
        return Number(element.innerText);
    }
    let sum = getPrice(priceProductOne) + getPrice(priceProductTwo) + getPrice(priceProductThree) + getPrice(priceProductFour);
    let sale = sum * 0.8;
    const result = document.getElementById('result');
    result.innerHTML= sale;
})