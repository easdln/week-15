const cities = ["Москва", "Казань","Уфа", "Оренбург", "Омск"];
const citiesTemp = [];
const tempItem = document.getElementById('temperatyre-list');


cities.forEach((city,index) => {
   let temperature = prompt(`Введите температуру для города: ${city}`);
   citiesTemp.push(parseFloat(temperature));
   const liElem = document.createElement('li');
   liElem.textContent = `Температура в городе ${city}: ${citiesTemp[index]}°C`
   tempItem.appendChild(liElem);
})

const MaxTemp = Math.max(...citiesTemp);
const MinTemp = Math.min(...citiesTemp);
   divElem = document.createElement('div');
   divElem2 = document.createElement('div');
   divElem.textContent = `Максимальная температура: ${MaxTemp}°C`;
   divElem2.textContent = `Минимальная температура: ${MinTemp}°C`;
   tempItem.appendChild(divElem);
   tempItem.appendChild(divElem2);


































// function create() {
//    getEveryTemp();
//    let elemDiv = document.createElement("div");
//    elemDiv.innerHTML = "Погода в городе " + obj.cities;
//    console.log(elemDiv);
//    let elemH1 = document.querySelector("h1");
//    elemH1.appendChild(elemDiv);
// }

// let res = create();
// console.log(res);

//"Уфа", "Оренбург", "Омск", "Новосибирск"
