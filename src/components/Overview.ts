export class Overview {
  private element: HTMLElement | null;

  constructor(selector: string) {
    this.element = document.getElementById(selector) as HTMLElement;
    this.element.classList.add("w-full", "dark:text-white");
    this.element.innerHTML = `
      <div class="absolute top-[15%] ml-10 text-6xl font-medium">Overview</div>
      <div class=""></div>
    `;
  }
}
