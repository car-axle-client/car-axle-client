import { DATABASE } from "../../../static/constant";
import { moduleDefinition } from "../../moduleapi";

type Special = {
  wild: {
    [key: string]: string[];
  };
  [key: string]: any;
};

var special: Special = {
  wild: {
    vu: ["f"],
  },
};

fetch(`${DATABASE}special.json`)
  .then((res) => res.json())
  .then((json) => (special = json));

function get_random_string(length: number) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;

    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

function set_to_random_wildcard(type: string) {
  let iframe = document.getElementById(
    "cac__pocketbrowser__iframe"
  ) as HTMLIFrameElement;

  // Check if special.wild[type] is defined before accessing its properties
  if (special.wild?.[type]) {
    let link = special.wild[type][Math.floor(Math.random() * special.wild[type].length)];
    iframe.src = "https://" + get_random_string(Math.floor(Math.random() * 10)) + '.' + atob(link);
  } else {
    console.error(`Type '${type}' not found in special.wild`);
  }
}

const vu: moduleDefinition = {
  custom_render: false,
  display_name: "Set to Random UltraViolet Link",
  id: "vu",
  description: "Sets to a random UV link (with a wildcard)",
    reset: true,
  section: "pocket",
  onactive: () => set_to_random_wildcard("vu"),
};

const plugin: moduleDefinition[] = [vu];

export default plugin;
