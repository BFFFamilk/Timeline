export class Host {
  static isGithubPages(url: string): boolean {
    return url.includes(".github.io");
  }

  static getRepoNameFromUrl(url: string): string | null {
    const regex = /https?:\/\/([^/]+)\/([^/]+)\/?/i;
    const match = url.match(regex);

    if (match) {
      const [, , siteName] = match;
      return `${siteName}`;
    }
    return null;
  }

  static isDevMode(): boolean {
    if (process.env.NODE_ENV === "development") {
      return true;
    } else {
      return false;
    }
  }
}
