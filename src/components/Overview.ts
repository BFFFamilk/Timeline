export class Overview {
    private element: HTMLElement | null;

    constructor(selector: string) {
        this.element = document.getElementById(selector) as HTMLElement;
        this.element.classList.add('w-full', "dark:text-white");
        this.element.innerHTML = `
        Overview
        `;
    }
}