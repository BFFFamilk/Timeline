export class DarkMode {
  private darkModeEnabled: boolean;

  constructor() {
    this.darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    this.toggleDarkMode();

    const darkModeToggleBtn = document.getElementById("dark-mode-btn");
    if (darkModeToggleBtn) {
      darkModeToggleBtn.addEventListener(
        "click",
        this.toggleDarkMode.bind(this)
      );
    }
  }

  private toggleDarkMode() {
    const body = document.body;
    const darkModeIcon = document.getElementById("dark-btn-icon");

    this.darkModeEnabled = !this.darkModeEnabled;
    if (this.darkModeEnabled) {
      body.classList.add("dark");
      darkModeIcon?.classList.add("fa-sun");
      darkModeIcon?.classList.remove("fa-moon");
      localStorage.setItem("darkModeEnabled", "true");
    } else {
      body.classList.remove("dark");
      darkModeIcon?.classList.add("fa-moon");
      darkModeIcon?.classList.remove("fa-sun");
      localStorage.setItem("darkModeEnabled", "false");
    }
  }
}
