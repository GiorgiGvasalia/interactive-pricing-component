const activation = document.querySelector(".activation");
const toggleCircle = document.querySelector(".toggle");
let pricing = document.querySelector(".monthly-pricing");
let rect = document.querySelector(".rect");
const rangeInput = document.querySelector(".range-input");
const pageViews = document.querySelector(".views");

rangeInput.addEventListener("input", () => {
  updateSliderColor();
});

function updateSliderColor() {
  changePageViews();
  const minValue = rangeInput.min;
  const maxValue = rangeInput.max;
  const value = rangeInput.value;

  const percent = ((value - minValue) / (maxValue - minValue)) * 100;

  rangeInput.style.background = `linear-gradient(to right, #A4F3EB ${percent}%, #fff ${percent}%)`;
}

activation.addEventListener("click", () => {
  yearlyBilling();
});

let monthlyBillingClicked = false;
let originalPrice; 

function yearlyBilling() {
  toggleCircle.classList.toggle("active");
  rect.classList.toggle("active");

  const oldValue = parseFloat(pricing.textContent);

  if (toggleCircle.classList.contains("active")) {
    if (!monthlyBillingClicked) { 
      let monthlyPrice = oldValue + oldValue * 0.25;
      pricing.textContent = monthlyPrice.toFixed(2);
      monthlyBillingClicked = true;
    }
  } else {
    pricing.textContent = originalPrice.toFixed(2);
    monthlyBillingClicked = false;
  }
}

originalPrice = parseFloat(pricing.textContent);


function changePageViews() {
  const inputValue = parseInt(rangeInput.value, 10);

  console.log(pageViews.textContent);

  let basePrice;

  if (toggleCircle.classList.contains("active")) {
    basePrice = 4.0 * 1.25;
  } else {
    basePrice = 4.0;
  }

  switch (inputValue) {
    case 1:
      pageViews.textContent = "5K PAGE VIEWS";
      pricing.textContent = basePrice.toFixed(2);
      break;
    case 2:
      pageViews.textContent = "10K PAGE VIEWS";
      pricing.textContent = (basePrice * 2).toFixed(2);
      break;
    case 3:
      pageViews.textContent = "25K PAGE VIEWS";
      pricing.textContent = (basePrice * 3).toFixed(2);
      break;
    case 4:
      pageViews.textContent = "50K PAGE VIEWS";
      pricing.textContent = (basePrice * 4).toFixed(2);
      break;
    case 5:
      pageViews.textContent = "100K PAGE VIEWS";
      pricing.textContent = (basePrice * 8).toFixed(2);
      break;
    default:
      pageViews.textContent = "0 PAGE VIEWS";
      pricing.textContent = "0.00";
      break;
  }
}
