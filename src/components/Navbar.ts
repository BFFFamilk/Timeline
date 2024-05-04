import github from "../assets/github.svg";

export class Navbar {
  private element: HTMLElement;

  constructor(private parentElement: HTMLElement) {
    this.element = document.createElement("div");
    this.element.classList.add(
      "fixed",
      "flex",
      "justify-between",
      "items-center",
      "w-full",
      "min-h-20"
    );
    this.element.innerHTML = `
        <div class="pl-5">
            <a id="default" href="/">
            <span class="text-2xl font-black text-black">Timeline</span>
            </a>
        </div>
        <nav class="flex justify-between items-center">
            <a id="default" href="/" class="nav px-5 mx-1 text-md font-medium">Overview</a>
            <a id="timeline" href="/timeline" class="nav px-5 mx-1 text-md font-medium">Timeline</a>
        </nav>
        <div class="pr-5">
            <a href="//github.com/BFFFamilk">
            <img src=${github} alt="github-logo" width=20 />
            </a>
        </div>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
