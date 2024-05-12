export class Timeline {
  private element: HTMLElement | null;

  constructor(selector: string) {
    this.element = document.getElementById(selector) as HTMLElement;
    this.element.classList.add("w-full", "dark:text-white");
    this.element.innerHTML = `
      <div class="absolute top-[12%] mx-10 my-2 text-6xl font-medium">Timeline</div>
      <div class="absolute top-[22%] w-full border-t">
        <div">Test</div>
      </div>
    `;
  }
}
