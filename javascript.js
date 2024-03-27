const inputText = document.querySelectorAll(".inputs");
const spans = document.querySelectorAll(".span-required");
const btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  let formValid = true;

  inputText.forEach((input) => {
    const trimmedValue = input.value.trim();
    if (!trimmedValue) {
      formValid = false;
      input.classList.add("border-red");
      input.classList.remove("border-green");
      input.nextElementSibling.style.display = "block";
    } else {
      input.classList.remove("border-red");
      input.classList.add("border-green");
      input.nextElementSibling.style.display = "none";
    }
  });
});
