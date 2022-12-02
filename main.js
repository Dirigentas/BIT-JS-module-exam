// console.log('labas');
// document.querySelector('div').innerHTML = 'labas rytas';
// document.getElementById('main').innerHTML += ' viso gero';
// DOM.classList.add('virykle');

// level2DOM.addEventListener('mouseenter', () => {
//     level2DOM.innerHTML = `<div class = "level2box">labas</div>`
// })

// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai)
// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai)
// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
// 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)(10 taškų)
// 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu -
//     "(XXX) XXX-XXXX". (10 taškų)

console.log('========== 1 uzduotis');

function vienas(a, b) {
    return a > b ? `${a} daugiau uz ${b}` : a === b ? `${a} yra lygu ${b}` : `${b} daugiau uz ${a}`;
}

console.log(vienas(4, 4))

console.log('========== 2 uzduotis');

for (let i = 0; i <= 10; ++i) {
    console.log(i);
}

console.log('========== 3 uzduotis');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

console.log('========== 4 uzduotis');

for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}

console.log('========== 5 uzduotis');
// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.(7 taškai)
let penki = 1;
while (penki <= 5) {
    console.log(Math.floor(Math.random() * (10 - 1 + 1) + 1));
    if (penki === 5) {
        console.log(penki);
    }
    penki++;
}

console.log('========== 6 uzduotis');
// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)

let max = -Infinity;

const sesi = [...Array(Math.floor(Math.random() * (30 - 20 + 1) + 20))]
    .map(a => Math.floor(Math.random() * (30 - 10 + 1) + 10));

const sesi6 = sesi.forEach(a => a > max ? max = a : max = max);


console.log('masyvas: ', sesi);
console.log('didziausia reiksme: ', max);

console.log('========== 7 uzduotis');
// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

let a = 0;
let b = 0;
let c = 0;
let d = 0;

const septyni = [...Array(100)].map(a => Math.floor(Math.random() * (4 - 1 + 1) + 1))
    .map(a => a === 1 ? 'A' : a === 2 ? 'B' : a === 3 ? 'C' : 'D');

septyni.forEach(m => m === 'A' ? a++ : m === 'B' ? b++ : m === 'C' ? c++ : d++)

console.log('Masyvas: ', septyni);
console.log('A yra: ', a);
console.log('B yra: ', b);
console.log('C yra: ', c);
console.log('D yra: ', d);

console.log('========== 8 uzduotis');
// 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).

