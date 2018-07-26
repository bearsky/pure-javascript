var changeCalcForm = document.getElementById('changeCalcForm');

changeCalcForm.addEventListener("submit", calcChange);

function calcChange(event) {
  event.preventDefault();
  var priceVal = document.getElementById('price').value;
  var cacheVal = document.getElementById('cache').value;
  var changeVal = document.getElementById('change').value = cacheVal - priceVal;
};

function addElement() {
  console.log('lalala');
  // create a new div element
  var newDiv = document.createElement("div");
  // and give it some content
  var newContent = document.createTextNode("Hi there and greetings!");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  var currentDiv = document.getElementById("submitBtn");
  document.body.insertBefore(newDiv, currentDiv);
}