const toggle = document.querySelector(".toggle");
const toggleButton = document.querySelector(".btn-toggle");
const cancelButton = document.querySelector(".btn-cancel");
const unCheckBtn = document.querySelectorAll(".btn-uncheck");

let toggleState = 0;
let todoListsName = [];
let checkState = 0;
let todoListNumber = 1;

toggleButton.addEventListener("click", function () {
  if (toggleState === 0) {
    document.querySelector(".toggle-img").src = "/images/icon-sun.svg";
    document.querySelector(".new-todo").style.backgroundColor =
      "hsl(235, 24%, 19%)";

    document.querySelector("header").style.backgroundImage =
      "url(/images/bg-desktop-dark.jpg)";
    document.querySelector("main").style.backgroundColor = "hsl(235, 21%, 11%)";
    document.querySelector(".new-entry").style.backgroundColor =
      "hsl(235, 24%, 19%)";
    document.querySelector(".main").style.backgroundColor =
      "hsl(235, 24%, 19%)";

    toggleState++;
  } else {
    document.querySelector(".toggle-img").src = "/images/icon-moon.svg";
    document.querySelector(".new-todo").style.backgroundColor =
      "hsl(0, 0%, 98%)";
    toggleButton.style.backgroundRepeat = "no-repeat";
    document.querySelector("header").style.backgroundImage =
      "url(/images/bg-desktop-light.jpg)";
    document.querySelector("main").style.backgroundColor = "hsl(236, 33%, 92%)";
    document.querySelector(".new-entry").style.backgroundColor =
      "hsl(0, 0%, 98%)";
    document.querySelector(".main").style.backgroundColor = " hsl(0, 0%, 98%)";

    toggleState--;
  }
});

document.querySelector(".btn-arrow").addEventListener("click", function () {
  const listValue = document.querySelector(".new-entry").value;
  todoListsName.push(listValue);
  const tagString = `<li class="list">
  <button class="btn btn-uncheck">
      <img class="img-check image-size hidden" src="/images/icon-check.svg" alt="check">
  </button>
  <p class="list-entry l-veryDarkGreyishBlue f-s12 weight-700">${listValue}</p>
  <button class="btn-cancel">
      <img class="img-cancel image-size" src="/images/icon-cross.svg" alt="cross">
  </button>
</li>`;
  const range = document.createRange();
  const lists = document.getElementById("lists");

  const documentFragment = range.createContextualFragment(tagString);
  lists.appendChild(documentFragment);
  document.querySelector(".list-numbers").textContent = `${todoListNumber}`;
  todoListNumber++;
  document.querySelector(".new-entry").value = "";
});

document.querySelector(".todo-lists").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;
    const li = button.parentNode;
    const ul = li.parentNode;

    if (button.className === "btn btn-uncheck") {
      button.classList.replace("btn-uncheck", "btn-check");

      li.querySelector(".img-check").classList.remove("hidden");
      li.querySelector(".list-entry").classList.replace(
        "l-veryDarkGreyishBlue",
        "l-lightGrayishblue"
      );
      li.querySelector(".list-entry").style.textDecoration = "line-through";
      
    } else if (button.className === "btn btn-check") {
      button.classList.replace("btn-check", "btn-uncheck");
      li.querySelector(".img-check").classList.add("hidden");
      li.querySelector(".list-entry").classList.replace(
        "l-lightGrayishblue",
        "l-veryDarkGreyishBlue"
      );
      li.querySelector(".list-entry").style.textDecoration = "none";
    } else if (button.className === "btn-cancel") {
      ul.removeChild(li);
      todoListNumber--;
      document.querySelector(".list-numbers").textContent = `${todoListNumber}`;
    }
  }
});

document.querySelector(".list-footer").addEventListener("click", function (e) {
  for (let i = 0; i < todoListsName.length; i++) {
    if (e.target.tagName === "BUTTON") {
      const button = e.target;
      document.querySelectorAll(".list")[i].classList.remove("hidden");

      if (button.className === "all btn-footer p-brightBlue weight-700 f-s10") {
        document.querySelectorAll(".list")[i].classList.remove("hidden");
      } else if (
        button.className ===
        "active btn-footer l-darkGreyishBlue weight-700 f-s10"
      ) {
        if (
          document.querySelectorAll(".btn")[i].className === "btn btn-check"
        ) {
          document.querySelectorAll(".list")[i].classList.add("hidden");
        }
      } else if (
        button.className ===
        "completed btn-footer l-darkGreyishBlue weight-700 f-s10"
      ) {
        if (
          document.querySelectorAll(".btn")[i].className === "btn btn-uncheck"
        ) {
          document.querySelectorAll(".list")[i].classList.add("hidden");
        }
      } else if (
        button.className ===
        "clear btn-footer l-lightGrayishblue weight-500 f-s10"
      ) {
        if (
          document.querySelectorAll(".btn")[i].className === "btn btn-check"
        ) {
          document.querySelectorAll(".list")[i].remove();
        }
      }
    }
  }
});
