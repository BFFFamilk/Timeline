import "./style.css";
import github from './assets/github.svg'

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div class="">
    <div class="flex justify-between items-center w-full min-h-20">
      <div class="pl-5">
        <span class="text-2xl font-black text-black">Timeline</span>
      </div>
      <nav class="flex justify-between items-center">
        <a href="#dashboard" class="nav px-5 mx-1 text-md font-medium">Dashboard</a>
        <a href="#overview" class="nav px-5 mx-1 text-md font-medium">Overview</a>
        <a href="#timeline" class="nav px-5 mx-1 text-md font-medium">Timeline</a>
      </nav>
      <div class="pr-5">
        <a href="//github.com/BFFFamilk">
          <img src=${github} alt="github-logo" width=20 />
        </a>
      </div>
    </div>
  </div>
`;
