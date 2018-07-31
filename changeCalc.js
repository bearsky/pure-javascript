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

  checkPositiveVal(changeCache);

  var cents = changeCache % 1;
  var dollars = changeCache - cents;
  cents = cents * 100;

  var fiftyCents = parseInt(cents / 50);
  cents = Math.round(cents % 50);

  var quarters = parseInt(cents / 25);
  cents = Math.round(cents % 25);

  var fiveCents = parseInt(cents / 5);
  cents = Math.round(cents % 5);

  var oneCent = cents;

  var denominationObj = {
    "Dollars" : dollars,
    "Fifty Cents" : fiftyCents,
    "Quarters" : quarters,
    "Five Cents" : fiveCents,
    "One Cent" : oneCent,
  };

  denomination(denominationObj);
};

function denomination(obj) {
  clearOutputs(document.querySelectorAll('.outputBox'));

  Object.keys(obj).forEach(function(key) {
      var nominalExist = obj[key] > 0;
      var div = document.createElement("div");
      div.classList.add("outputBox");
      var divContent = document.createTextNode(key + ' * ' + obj[key]);
      nominalExist && div.appendChild(divContent);

      var formContainer = document.getElementById("changeCalcForm");
      formContainer.appendChild(div);
  });
};


function clearOutputs(arr) {
  arr.forEach(function(el) {
    el.remove();
  });
};

function checkPositiveVal(change) {
  clearOutputs(document.querySelectorAll('.errorMessage'));
  var negVal = change < 0;
  var errDiv = document.createElement("div");
  errDiv.classList.add("errorMessage");
  var errDivContent = document.createTextNode('Need more money!');
  negVal && errDiv.appendChild(errDivContent);

  var formContainer = document.getElementById("changeCalcForm");
  formContainer.appendChild(errDiv);
};