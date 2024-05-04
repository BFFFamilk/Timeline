
export class NavbarMobile {
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
            <a href="/">
                <span class="text-2xl font-black text-black">TimelineM</span>
            </a>
        </div>
        <nav id="navbar" class="fixed top-[4rem] flex flex-col justify-between items-center w-full">
            <a href="/" class="nav px-5 mx-1 text-md font-medium">Overview</a>
            <a href="/timeline" class="nav px-5 mx-1 text-md font-medium">Timeline</a>
        </nav>
        <div class="pr-5">
            ≡
        </div>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
