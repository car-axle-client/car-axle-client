import { moduleDefinition } from "../../moduleapi";

function editpagetext() {
  document.body.contentEditable = "true";
  document.designMode = "on";
}

function removeabilitytoeditpagetext() {
  document.body.contentEditable = "false";
  document.designMode = "off";
}

const plugin: moduleDefinition = {
  displayName: "Edit Page Text",
  id: "editpage",
  section: "fun",
  onactive: editpagetext,
  ondisable: removeabilitytoeditpagetext,
};

export default plugin;
