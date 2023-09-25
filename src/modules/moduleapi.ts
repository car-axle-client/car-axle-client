import { GAMESLINK } from "../global/constant";

export type moduleDefinition = {
  displayName: string;
  id: string;
  section: string;
  reset?: boolean;
  always?: boolean;
  // Options are wip
  onactive: () => void;
  ondisable: () => void;
};

// Function to change link of the iframe
export function changeGame(link: string): void {
  let iframe = document.getElementById(
    "cac__games__iframe",
  ) as HTMLIFrameElement;
  iframe.setAttribute("src", GAMESLINK + link);
}

export function none(): void {
  // nothing
}
