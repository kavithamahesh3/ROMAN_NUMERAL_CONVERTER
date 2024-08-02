const num = document.getElementById("number");
const btn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const symbols= [
  {
    value:1000,
    symbol:'M'
  },
  {
    value:900,
    symbol:'CM'
  },
  {
    value:500,
    symbol:'D'
  },
  {
    value:400,
    symbol:'CD'
  },
  {
    value:100,
    symbol:'C'
  },
  {
    value:90,
    symbol:'XC'
  },
  {
    value:50,
    symbol:'L'
  },
  {
    value:40,
    symbol:'XL'
  },
  {
    value:10,
    symbol:'X'
  },
  {
    value:9,
    symbol:'IX'
  },
  {
    value:5,
    symbol:'V'
  },
  {
    value:4,
    symbol:'IV'
  },
  {
    value:1,
    symbol:'I'
  }
];

const roman = [];
const toRoman = (number) => {
  if(number===0){
    return '';
  }
  for(let i=0; i<symbols.length; i++){
    if(number>=symbols[i].value){
     return symbols[i].symbol + toRoman(number - symbols[i].value);
    }
  }
}

const checkUserInput = () => {
  const number = parseInt(num.value);
if(num.value===""){
  result.classList.add("invalid");
  result.innerText = "Please enter a valid number";
  return;
}
else if(number<=0){
   result.classList.add("invalid");
  result.innerText = "Please enter a number greater than or equal to 1";
  return;
}
else if(number>=4000){
  result.classList.add("invalid");
  result.innerText = "Please enter a number less than or equal to 3999";
  return;
}
result.classList.remove("invalid");
result.style.display = "block";
result.innerText = toRoman(number);
}

num.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkUserInput();
  }
});
btn.addEventListener("click",checkUserInput);


