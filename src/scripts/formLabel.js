document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const loginFields = document.querySelectorAll("input");
    const labels = document.querySelectorAll("label");

    Array.from(loginFields).forEach((field, index) => {
      if (field.value !== "") {
        labels[index].classList.add("move");
      }

      field.addEventListener("input", () => {
        if (field.value !== "") {
          labels[index].classList.add("move");
        } else {
          labels[index].classList.remove("move");
        }
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
