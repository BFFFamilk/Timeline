import logo from "../assets/logo.png";

export class Navbar {
  private element: HTMLElement;

  constructor(private parentElement: HTMLElement) {
    this.element = document.createElement("div");
    this.element.classList.add(
      "w-full",
      "flex",
      "justify-between",
      "items-center",
      "dark:text-white",
    );
    this.element.innerHTML = `
      <div class="px-2 py-2 m-2 space-x-5 flex justify-center items-center">
        <img src=${logo} alt="logo" width="40" class="rounded-full"/>
        <span class="text-3xl font-extrabold">Timeline<sub><sub>■</sub></sub></span>
      </div>

      <div>
        <nav class="relative space-x-10">
          <a id="route" href="/"         class="nav">Home</a>
          <a id="route" href="/overview" class="nav">Overview</a>
          <a id="route" href="/timeline" class="nav">Timeline</a>
        </nav>
      </div>

      <div class="pr-5">
        <div id="dark-mode-btn">
          <i id="dark-btn-icon"class="fa-solid fa-sun"></i>
        </div>
      </div>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
