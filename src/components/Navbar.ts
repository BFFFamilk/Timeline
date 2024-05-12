import logo from "../assets/logo.png";

export class Navbar {
  private element: HTMLElement;

  constructor(private parentElement: HTMLElement) {
    this.element = document.createElement("div");
    this.element.id = "navbar";
    this.element.classList.add(
      "fixed",
      "w-full",
      "z-50",
      "flex",
      "justify-between",
      "items-center",
      "min-h-28",
      "dark:text-white",
      "border-b-[3px]",
      "border-gray-500"
    );
    this.element.innerHTML = `
      <div class="ml-7 mx-3 my-5 flex items-center justify-center space-x-2 px-3 py-3">
        <img src="${logo}" alt="logo" width="48" class="rounded-xl border-[3px] border-gray-500" />
        <span class="hidden text-4xl font-bold">BFFFamilk.</span>
      </div>
    
      <div class="px-2 py-2 m-2">
        <nav class="relative">
          <a id="route" href="/" class="active text-xl font-bold mx-2 px-3 py-3">Overview</a>
          <a id="route" href="/timeline" class="text-xl font-bold mx-2 px-3 py-3">Timeline</a>
        </nav>
      </div>
      
      <div class="pr-5 flex justify-between items-center space-x-2">
        <div id="github-btn">
          <i id="github-icon" class="fa-brands fa-github fa-lg w-10 h-10 text-xl text-black hover:bg-black hover:text-white border-[3px] border-gray-500 px-2 py-1 rounded-lg"></i>  
        </div>
        <div id="dark-mode-btn">
          <i id="dark-btn-icon" class="fa-solid fa-sun fa-lg w-10 h-10 text-xl text-black hover:bg-black hover:text-white border-[3px] border-gray-500 px-2 py-1 rounded-lg"></i>
        </div>
      </div>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
