let inputN = null;
let inputA = null;
let spnout= null;

function bodyOnLoad()
{
  inputN = document.getElementById("txtInputN");
  inputA = document.getElementById("txtInputA");
  inputCus = document.getElementById("txtInputCus");
  spnout = document.getElementById("spnOutput");
}

// var pSpan = document.createElement('p');
// pSpan.className = 'result';

function btnClickML() {
  let outputString;
  let noun = inputN.value;
  let adverb = inputA.value;
  
  outputString = noun + " " + "you " + adverb;

  spnout.innerHTML = outputString;
}

function btnClickCus() {
  let customPhrase = inputCus.value;
  
  let outputString = document.createElement("blockquote");
  
  spnOutput.appendChild(image);

  spnout.innerHTML = outputString;
}