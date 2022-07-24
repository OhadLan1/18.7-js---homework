let form = document.getElementById("form");

let nameInput = document.getElementById("input-name");
let ageInput = document.getElementById("input-age");
let colorInput = document.getElementById("input-color");
let countryInput = document.getElementById("input-country");
let genderInput = document.getElementById("input-gender");

let infoCard = document.getElementById("user-info");

function clearInputs() {
  nameInput.value = "";
  ageInput.value = "";
  countryInput.value = "";
  colorInput.value = "#000000";
}
let counter = 1;
function handleClick() {
  if (
    nameInput.value.length > 2 &&
    ageInput.value > 0 &&
    countryInput.value.length > 0
  ) {
    infoCard.innerHTML +=
      '<div  class="card" style="width: 18rem; background-color:' +
      colorInput.value +
      ';"><ul class="list-group list-group-flush"><li class="list-group-item">' +
      nameInput.value +
      `</li>
    <li class="list-group-item">` +
      ageInput.value +
      `</li>
    <li class="list-group-item">` +
      countryInput.value +
      `</li>
      <li class="list-group-item">` +
      genderInput.value +
      `</li>
    </ul>
  </div>`;
    // infoCard.style.background = colorInput.value;
    // const div = infoCard.children[counter];
    // div.style.backgroundColor = colorInput.value;
    // counter++;
  }
  clearInputs();
  // console.log(infoCard.children[counter]);
}
