const form = document.getElementById("myForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  if (name === "") {
    alert("give your name");
  } else {
    alert("Your name " + name.toUpperCase());
  }
});
