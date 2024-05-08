const divCha1 = document.getElementById("m-order__list_1");
const divCon1 = document.getElementById("m-order__detail_1");

divCha1.addEventListener("click", () => {
  if (divCon1.style.display === "none") {
    divCon1.style.display = "block";
  } else {
    divCon1.style.display = "none";
  }
});

const divCha2 = document.getElementById("m-order__list_2");
const divCon2 = document.getElementById("m-order__detail_2");

divCha2.addEventListener("click", () => {
  if (divCon2.style.display === "none") {
    divCon2.style.display = "block";
  } else {
    divCon2.style.display = "none";
  }
});