export class PageNotFound {
  private element: HTMLElement;

  constructor(private parentElement: HTMLElement) {
    this.element = document.createElement("div");
    this.element.classList.add("w-full", "min-h-20");
    this.element.innerHTML = `
        <div>
            <span>Not Found</span>
        </div>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
