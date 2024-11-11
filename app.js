const allProjectBtn = document.getElementById("btn");
const allProject = document.getElementById("allProjects")

const fccRevealBtn = document.getElementById("fcc");
const fccProject = document.getElementById("fccProjects");

const pokemonSearchProj = document.getElementById("projectFour");
const pokemonSearchProjBtn = document.getElementById("projectFourBtn");

const usaPhone = document.getElementById("projectThree");
const usaPhoneBtn = document.getElementById("projectThreeBtn");

const romanNum = document.getElementById("projectTwo");
const romanNumBtn = document.getElementById("projectTwoBtn");

const palindromeChk = document.getElementById("projectOne");
const palindromeChkBtn = document.getElementById("projectOneBtn");

allProjectBtn.addEventListener("click", () => {
  if (allProject.style.display === "none") {
    allProject.style.display = "block";
  } else {
    allProject.style.display = "none";
  }
});

fccRevealBtn.addEventListener("click", () => {
  if (fccProject.style.display === "none") {
    fccProject.style.display = "block";
  } else {
    fccProject.style.display = "none";
  }
});

pokemonSearchProjBtn.addEventListener("click", () => {
  if (pokemonSearchProj.style.display === "none") {
    pokemonSearchProj.style.display = "block";
  } else {
    pokemonSearchProj.style.display = "none";
  }
});

usaPhoneBtn.addEventListener("click", () => {
  if (usaPhone.style.display === "none") {
    usaPhone.style.display = "block";
  } else {
    usaPhone.style.display = "none";
  }
});

romanNumBtn.addEventListener("click", () => {
  if (romanNum.style.display === "none") {
    romanNum.style.display = "block";
  } else {
    romanNum.style.display = "none";
  }
});

palindromeChkBtn.addEventListener("click", () => {
  if (palindromeChk.style.display === "none") {
    palindromeChk.style.display = "block";
  } else {
    palindromeChk.style.display = "none";
  }
});

//POKEMON SEARCH PROJECT

const searchButt = document.getElementById("search-button");
const searchIn = document.getElementById("search-input");
const img = document.getElementById("sprite");
const pname = document.getElementById("pokemon-name");
const piD = document.getElementById("pokemon-id");
const pweight = document.getElementById("weight");
const pheight = document.getElementById("height");
const ptypes = document.getElementById("types");
const php = document.getElementById("hp");
const pattack = document.getElementById("attack");
const pdefense = document.getElementById("defense");
const pspecialA = document.getElementById("special-attack");
const pspecialD = document.getElementById("special-defense");
const pspeed = document.getElementById("speed");
const pokemonLink = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon"

let allPokemonData = [];

const pokemonNameId = (data) =>{
const {count, results} = data;
allPokemonData = results;
}

const pokemonSearchedInfo = (data) => {
const {height, id, name, order, sprites, stats, types, weight} = data
const {back_default, back_female, back_shiny, back_shiny_female, front_default, front_female, front_shiny, front_shiny_front} = sprites;
//console.log(types);


pname.innerText = name.toUpperCase();
piD.innerText = id;
pweight.innerText = weight;
pheight.innerText = height;
php.innerText = stats[0].base_stat;
pattack.innerText = stats[1].base_stat;
pdefense.innerText = stats[2].base_stat;
pspecialA.innerText = stats[3].base_stat;
pspecialD.innerText = stats[4].base_stat;
pspeed.innerText =  stats[5].base_stat;
ptypes.innerHTML = types.map(el =>el.type.name.toUpperCase()).toString().replace(",", ", ");
img.src = front_default;
}

const find = () => {
ptypes.innerText = "";
const inputValue = searchIn.value;
const isId = Number.isFinite(Number(inputValue));
const stringInput = inputValue.toLowerCase();

if(isId) {

const searchPokemon = allPokemonData.find(el => el.id === Number(inputValue));
getSearchPokemonData(inputValue);

if(searchPokemon === undefined){
return alert("Pokémon not found")
} else{
return getSearchPokemonData(inputValue);
}

} else if (isId === false) {

const searchPokemon = allPokemonData.find(el => el.name === stringInput);
//console.log(searchPokemon);
if(searchPokemon){
return getSearchPokemonData(stringInput)
} else{
return alert("Pokémon not found");
}

} else {
console.log("error1?")
}
}

const getSearchPokemonData = async (pokemon) => {
  const pokelink = `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemon}`
  try {
    const res = await fetch(pokelink)
    if(!res){
    throw new Error("Pokemon not found");
    }
    const data = await res.json();
    pokemonSearchedInfo(data);
  } catch (err){
  alert("Pokemon not found");
  }
}

const getPokemonData = async () => {
  try {
    const res = await fetch(pokemonLink);
    const data = await res.json();
    pokemonNameId(data);
  } catch (err) {
console.log(err)
  }
}
getPokemonData();
searchButt.addEventListener("click", find)

//POKEND

//VALID USA PHONE NUMBER PROJECT

const check3 = document.getElementById("check-btn3");
const clear3 = document.getElementById("clear-btn3");
const result3 = document.getElementById("results-div3");
const input3 = document.getElementById("user-input3");

check3.addEventListener("click", main);
clear3.addEventListener("click", clearing);

function main () {
  if(input3.value === "") {
    alert("Please provide a phone number");
  } else if (isVald(input3.value)) {
    result3.innerText = `Valid US number: ${input3.value}`;
  } else {
    result3.innerText = `Invalid US number: ${input3.value}`;
  }
}

function isVald (a) {

const correct = /(1)?(\s)?([-]|[(])?([1-9])([1-9])([1-9])([-]|[)])?(\s)?([1-9])([1-9])([1-9])([-\s])?([1-9])([1-9])([1-9])([1-9])/

const nocaseo = /(1)?(\s)?([-])?([(])([-])?([1-9])([1-9])([1-9])([-])?(\s)?([1-9])([1-9])([1-9])([-\s])?([1-9])([1-9])([1-9])([1-9])/

const nocaset = /(1)?(\s)?([-])?([1-9])([1-9])([1-9])([-])?([)])([-])?(\s)?([1-9])([1-9])([1-9])([-\s])?([1-9])([1-9])([1-9])([1-9])/

const mincase = /([-)(1)?(\s)?([-]|[(])?([1-9])([1-9])([1-9])([-]|[)])?(\s)?([1-9])([1-9])([1-9])([-\s])?([1-9])([1-9])([1-9])([1-9])/

console.log(mincase.test(input3.value));

const corrbrack = /(1)?(\s)?([(])([1-9])([1-9])([1-9])([)])(\s)?([1-9])([1-9])([1-9])([-\s])?([1-9])([1-9])([1-9])([1-9])/

const nocase = [nocaseo, nocaset, mincase]

function brackets (p) {
  const brac = /[)(]/g
  if(brac.test(p)){
  return notcase(p) === true? corrbrack.test(p) ? true : false : true;
  } else {
    return true;
  }
}

const notcase = (l) => nocase.some((regex) => regex.test  (l))
const right = correct.test(a);
const stringed = input3.value.replace(/[\s-)(]/g,"");

function firstnum (b) {if(b.length === 11) {
  if(b.charAt(0) === "1") {
    return true;
  } else {return false;}
  } else {return true;}
  }

function noneg (x) {
  if(x.charAt(0) === "-"){
   return false;
  } else {
   return true;
  }
}

if(noneg(input3.value) && brackets(input3.value) && right && firstnum(stringed) && stringed.length === 10 | stringed.length === 11){
  return true;
} else {
  return false;
}}

function clearing () {
result3.innerText = "";
input3.value = "";
}

//VALID USA PHONE NUMBER PROJECT END

//ROMAN NUMERAL CONVERTER PROJECT

const conv = document.getElementById("convert-btn");
const inputN = document.getElementById("number");
const clear2 = document.getElementById("clear-btn2");
const outie = document.getElementById("output");
let finalN = [];
let index = 0;

conv.addEventListener("click", algo) 
clear2.addEventListener("click", removeTwo) 

function removeTwo () {
  inputN.value = ""
  outie.innerText = "";
}

function converter (leftOver) {
if(leftOver >= 1000) {

const numberOfM = Math.floor(leftOver/1000);
for (let i = 0; i < numberOfM; i++) {
finalN[index] = "M";
index += 1;
}
leftOver = leftOver % 1000;
converter(leftOver);

} else if (leftOver >= 900){

const numberOfCM = Math.floor(leftOver / 900);
for (let i = 0; i < numberOfCM; i++) {
finalN[index] = "CM";
index += 1;
}
leftOver = leftOver % 900;
converter(leftOver);

} else if (leftOver >= 500){

const numberOfD = Math.floor(leftOver / 500);
for (let i = 0; i < numberOfD; i++) {
finalN[index] = "D";
index += 1;
}
leftOver = leftOver % 500;
converter(leftOver);

} else if (leftOver >= 400){

const numberOfCD = Math.floor(leftOver / 400);
for (let i = 0; i < numberOfCD; i++) {
finalN[index] = "CD";
index += 1;
}
leftOver = leftOver % 400;
converter(leftOver);

} else if (leftOver >= 100){

const numberOfC = Math.floor(leftOver / 100);
for (let i = 0; i < numberOfC; i++) {
finalN[index] = "C";
index += 1;
}
leftOver = leftOver % 100;
converter(leftOver);

} else if (leftOver >= 90){

const numberOfXC = Math.floor(leftOver / 90);
for (let i = 0; i < numberOfXC; i++) {
finalN[index] = "XC";
index += 1;
}
leftOver = leftOver % 90;
converter(leftOver);

} else if (leftOver >= 50){

const numberOfL = Math.floor(leftOver / 50);
for (let i = 0; i < numberOfL; i++) {
finalN[index] = "L";
index += 1;
}
leftOver = leftOver % 50;
converter(leftOver);

} else if (leftOver >= 40){

const numberOfXL = Math.floor(leftOver / 40);
for (let i = 0; i < numberOfXL; i++) {
finalN[index] = "XL";
index += 1;
}
leftOver = leftOver % 40;
converter(leftOver);

} else if (leftOver >= 10){

const numberOfX = Math.floor(leftOver / 10);
for (let i = 0; i < numberOfX; i++) {
finalN[index] = "X";
index += 1;
}
leftOver = leftOver % 10;
converter(leftOver);

} else if (leftOver >= 9){

const numberOfIX = Math.floor(leftOver / 9);
for (let i = 0; i < numberOfIX; i++) {
finalN[index] = "IX";
index += 1;
}
leftOver = leftOver % 9;
converter(leftOver);

} else if (leftOver >= 5){

const numberOfV = Math.floor(leftOver / 5);
for (let i = 0; i < numberOfV; i++) {
finalN[index] = "V";
index += 1;
}
leftOver = leftOver % 5;
converter(leftOver);

} else if (leftOver >= 4){

const numberOfIV = Math.floor(leftOver / 4);
for (let i = 0; i < numberOfIV; i++) {
finalN[index] = "IV";
index += 1;
}
leftOver = leftOver % 4;
converter(leftOver);

} else if (leftOver >= 1){

const numberOfI = Math.floor(leftOver / 1);
for (let i = 0; i < numberOfI; i++) {
finalN[index] = "I";
index += 1;
}
leftOver = leftOver % 1;
converter(leftOver);

} else {
     outie.innerText = finalN.join('');
    finalN = [];
    index = 0;
    return
  }
}

function algo () {
  if (inputN.value == "") {
outie.innerText = `Please enter a valid number`;
  } else if (inputN.value < 0){
  outie.innerText = `Please enter a number greater than or equal to 1`;
  } else if (inputN.value >= 4000) {
    outie.innerText = `Please enter a number less than or equal to 3999`;
  } else {
    converter(inputN.value);
  }
}   

//ROMAN NUMERAL CONVERTER PROJECT END

//PALINDROME CHECKER PROJECT

const result = document.getElementById("result");
const button = document.getElementById("check-btn");
const clear1 = document.getElementById("clear-btn1");
const input = document.getElementById("text-input");

const testing = document.getElementById("test");
let inputtest = [];

function clearOne () {
  input.value = "";
  result.innerText = "";
  };

function palindrome () {
const inputRemoveSpace = input.value.replace(/\s+/g, "");
const inputIntoArr = Array.from(inputRemoveSpace);
const inputReversed = [...inputIntoArr].reverse();
const inputstringed = inputIntoArr.toString();
const reversedStringed = inputReversed.toString();
const inputRemoveother = inputstringed.replace(/["'\/(),._-]/g, '');
const reversedRemvoed = reversedStringed.replace(/["'\/(),._-]/g, '');
const lowerinput = inputRemoveother.toLowerCase();
const reversedinput = reversedRemvoed.toLowerCase();


  if(lowerinput === reversedinput){
    return true;
  } else {
    return false;
  }
} 

function testone () {
  if(input.value === "") {
 return alert("Please input a value");
} else if (palindrome() === true) {
  return result.innerText = `${input.value} is a palindrome`;
} else {
  return result.innerText = `${input.value} is not a palindrome`;
}
};

button.addEventListener("click", testone)
clear1.addEventListener("click", clearOne)



//PALINDROME CHECKER PROJECT END
