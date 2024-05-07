export class Footer {
  private element: HTMLElement;

  constructor(private parentElement: HTMLElement) {
    this.element = document.createElement("div");
    this.element.id = "footer";
    this.element.classList.add(
      "fixed",
      "flex",
      "justify-center",
      "items-center",
      "w-full",
      "bottom-0",
      "text-black",
      "dark:text-white",
    );
    this.element.innerHTML = `
      <span>© 2024 BFFFamilk. All right reserved.</span>
    `;
  }

  render(): void {
    this.parentElement.appendChild(this.element);
  }
}
