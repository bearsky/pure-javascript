var changeCalcForm = document.getElementById('changeCalcForm');

changeCalcForm.addEventListener("submit", calcChange);

function calcChange(event) {
  event.preventDefault();
  var priceVal = document.getElementById('price').value;
  var cacheVal = document.getElementById('cache').value;
  var change = document.getElementById('change');

  changeVal = parseFloat(cacheVal).toFixed(2) - parseFloat(priceVal).toFixed(2);
  change.value = parseFloat(changeVal).toFixed(2);

  var changeCache = change.value;

  console.log(changeCache, 'changeCache');

  var dollars = 0;
  var cents = 0;
  var fiftyCents = 0;
  var quarters = 0;
  var fiveCents = 0;
  var oneCent = 0;

  cents = changeCache % 1;
  dollars = changeCache - cents;
  console.log('dollars: ', dollars, cents.toFixed(2));

  fiftyCents = changeCache % 50;
  changeCache = changeCache - fiftyCents;
  console.log('fiftyCents: ', fiftyCents, changeCache);

  quarters = changeCache % 25;
  changeCache = changeCache - quarters;
  console.log('quarters: ', quarters, changeCache);

  fiveCents = changeCache % 5;
  changeCache = changeCache - fiveCents;
  console.log('fiveCents: ', fiveCents, changeCache);

  oneCent = changeCache % 1;
  changeCache = changeCache - oneCent;
  console.log('oneCent: ', oneCent, changeCache);
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