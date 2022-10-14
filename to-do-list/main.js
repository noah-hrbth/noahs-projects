let add = document.querySelector("#add");
let list = document.querySelector("#list");
add.onclick = (e) => {
  e.preventDefault();
  let listItem = document.querySelector("#listItem");
  if (listItem.value !== "") {
    let li = document.createElement("li");
    li.innerHTML = listItem.value;
    let removeBtn = document.createElement("button");
    removeBtn.className = "close";
    removeBtn.innerHTML = "\u00D7";
    li.appendChild(removeBtn);
    list.appendChild(li);
    listItem.value = "";
    li.addEventListener("click", (e) => {
      if (e.target.style.textDecoration === "none") {
        e.target.style.textDecoration = "line-through";
        e.target.style.textDecorationThickness = "2px";
      } else {
        e.target.style.textDecoration = "none";
      }
    });
    removeBtn.addEventListener("click", (e) => {
      e.target.parentElement.style.display = "none";
    });
  } else {
    alert("I have no Input!\nWrite something :)");
  }
};

// Add Button
if (window.alert !== "I have no Input!\nWrite something :)") {
  // Add Button Animation
  let element = document.getElementById("add");
  element.addEventListener(
    "click",
    function (e) {
      e.preventDefault;
      element.classList.remove("buttonAnimation");
      void element.offsetWidth;
      element.classList.add("buttonAnimation");
    },
    false
  );
}

