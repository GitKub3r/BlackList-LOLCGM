document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const openSidebar = document.getElementById("open-sidebar");
    const closeSidebar = document.getElementById("close-sidebar");

    openSidebar.addEventListener("click", () => {
      const sidebar = document.querySelector(".main-header-sidebar");
      sidebar.style.display = "flex";
    });

    closeSidebar.addEventListener("click", () => {
      const sidebar = document.querySelector(".main-header-sidebar");
      sidebar.style.display = "none";
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
