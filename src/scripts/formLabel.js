window.onload = () => {
  const loginFields = document.querySelectorAll("input");

  Array.from(loginFields).forEach((field, index) => {
    field.addEventListener("change", () => {
      let aux = document.querySelectorAll("label");
      let labels = Array.from(aux);
      if (field.value != "") {
        labels[index].classList.add("move");
      } else {
        labels[index].classList.remove("move");
      }
    });
  });
};
