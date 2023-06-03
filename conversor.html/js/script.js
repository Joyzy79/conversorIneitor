const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues(){
     const inputCurrencyValue = document.querySelector(".input-currency").value
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
     const currencyValueConverted = document.querySelector(".currency-value")
     
     const currencySelect = document.querySelector(".currency-select")
     //currencyValueConverted.innerHTML = convertValues
     currencyValueConverted.innerHTML = "";// mudança que fiz
     
     console.log(currencySelect.value);
     const dolarToday = 4.9
     const euroToday = 5.3
     const libraToday = 6.3    

     if(currencySelect.value == "Dólar"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-us",{
               style:"currency",
               currency: "USD"
          }).format(inputCurrencyValue / dolarToday)

     }
     
     if(currencySelect.value == "Euro"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
               style:"currency",
               currency: "EUR"  
          }).format(inputCurrencyValue / euroToday)

     }

     if(currencySelect.value == "Libra"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK",{
               style:"currency",
               currency: "GBP"  
          }).format(inputCurrencyValue / libraToday)

     }

     currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
          style: "currency",
          currency: "BRL"
     }).format(inputCurrencyValue)
    

}

function changeCurrency(){
     const currencyName = document.getElementById("currency-name")
     const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "Dólar"){
     currencyName.innerHTML = "Dólar americano"
     currencyImage.src = ".assets/estados-unidos (1) 1 (1).svg"
    }
    if(currencySelect.value == "Euro"){
     currencyName.innerHTML = "Euro"
     currencyImage.src = ".assets/euro 2.png"
     
    }
    if(currencySelect.value == "Libra"){
     currencyName.innerHTML = "Libra"
     currencyImage.src = ".conversor.html/assets/libra 1.png"
     
    }
    convertValues() 
}



currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)

