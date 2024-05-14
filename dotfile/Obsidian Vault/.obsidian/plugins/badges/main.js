/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => BadgesPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var import_state = require("@codemirror/state");
var import_view = require("@codemirror/view");

// src/constants.ts
var BADGE_TYPES = [
  ["note", "Note", "lucide-pencil"],
  ["info", "Info", "lucide-info"],
  ["todo", "Todo", "lucide-check-circle-2"],
  ["abstract", "Abstract", "lucide-clipboard-list"],
  ["summary", "Summary", "lucide-clipboard-list"],
  ["tldr", "TLDR", "lucide-clipboard-list"],
  ["tip", "Tip", "lucide-flame"],
  ["hint", "Hint", "lucide-flame"],
  ["important", "Important", "lucide-flame"],
  ["success", "Success", "lucide-check"],
  ["check", "Check", "lucide-check"],
  ["done", "Done", "lucide-check"],
  ["question", "Question", "help-circle"],
  ["help", "Help", "help-circle"],
  ["faq", "FAQ", "help-circle"],
  ["warning", "Warning", "lucide-alert-triangle"],
  ["caution", "Caution", "lucide-alert-triangle"],
  ["attention", "Attention", "lucide-alert-triangle"],
  ["failure", "Failure", "lucide-x"],
  ["fail", "Fail", "lucide-x"],
  ["missing", "Missing", "lucide-x"],
  ["danger", "Danger", "lucide-zap"],
  ["error", "Error", "lucide-zap"],
  ["bug", "Bug", "lucide-bug"],
  ["example", "Example", "lucide-list"],
  ["quote", "Quote", "quote-glyph"],
  ["cite", "Cite", "quote-glyph"],
  ["power", "Power", "lucide-power"],
  ["verse", "Verse", "lucide-music"],
  ["complete", "Complete", "lucide-check-circle"],
  ["milestone", "Milestone", "lucide-milestone"],
  ["component", "Component", "lucide-toy-brick"],
  ["polish", "Polish", "lucide-car"],
  ["point", "point", "lucide-pointer"],
  ["dream", "Dream", "lucide-moon"],
  ["process", "Process", "lucide-clock"],
  ["refine", "Refine", "lucide-axe"],
  ["image", "Image", "lucide-image"],
  ["party", "Party", "lucide-party-popper"],
  ["crystallize", "Crystallize", "lucide-diamond"],
  ["definition", "Definition", "lucide-key"],
  ["mention", "Mention", "lucide-at-sign"],
  ["exclaim", "Exclaim", "lucide-megaphone"],
  ["meta", "Meta", "lucide-filter"],
  ["compute", "Compute", "lucide-hourglass"],
  ["emergency", "Emergency", "lucide-siren"],
  ["magnet", "Magnet", "lucide-magnet"],
  ["flag", "Flag", "flag"],
  ["branch", "Branch", "network"],
  ["snippet", "Snippet", "scissors"],
  ["lock", "Lock", "lock"],
  ["highlight", "Highlight", "highlighter"],
  ["clue", "Clue", "puzzle"],
  ["claim", "Claim", "anchor"],
  ["profile", "Profile", "lucide-user"],
  ["hat-tip", "Hat-tip", "hard-hat"],
  ["dig", "Dig", "shovel"],
  ["witness", "Witness", "edit-3"],
  ["notice", "Notice", "pen-tool"],
  ["attachment", "Attachment", "paperclip"],
  ["lightbulb", "Lightbulb", "lightbulb"],
  ["prohibit", "Prohibit", "ban"],
  ["stop", "Stop", "lucide-alert-octagon"],
  ["bomb", "Bomb", "lucide-bomb"],
  ["hold", "Hold", "lucide-hand"],
  ["charge", "Charge", "lucide-zap"],
  ["sprout", "Sprout", "lucide-sprout"],
  ["extract", "Extract", "lucide-hammer"],
  ["compass", "Compass", "lucide-compass"],
  ["map", "Map", "lucide-map"],
  ["expedition", "Expedition", "lucide-mountain-snow"],
  ["home", "Home", "lucide-home"],
  ["knowledge", "Knowledge", "lucide-book"],
  ["account", "Account", "open-vault"],
  ["judgment", "Judgment", "lucide-gavel"],
  ["balance", "Balance", "lucide-scale"],
  ["feast", "Feast", "lucide-grape"],
  ["gift", "Gift", "lucide-gift"],
  ["love", "Love", "lucide-heart"],
  ["specimen", "Specimen", "lucide-gem"],
  ["command", "Command", "lucide-swords"],
  ["deed", "Deed", "lucide-scroll"],
  ["honor", "Honor", "lucide-sword"],
  ["reward", "Reward", "lucide-crown"],
  ["customized", "Customized", "hash"],
  ["vault", "Vault", "vault"]
];

// src/main.ts
var REGEXP = /(`\[!!([^\]]*)\]`)/gm;
var TAGS = "code";
var BadgesPlugin = class extends import_obsidian.Plugin {
  constructor() {
    super(...arguments);
    this.postprocessor = (el, ctx) => {
      const blockToReplace = el.querySelectorAll(TAGS);
      if (blockToReplace.length === 0)
        return;
      function replace(node) {
        const childrenToReplace = [];
        node.childNodes.forEach((child) => {
          if (child.nodeType === 3) {
            childrenToReplace.push(child);
          }
        });
        childrenToReplace.forEach((child) => {
          child.replaceWith(child);
        });
      }
      blockToReplace.forEach((block) => {
        replace(block);
      });
    };
  }
  async onload() {
    this.registerMarkdownPostProcessor(
      buildPostProcessor()
    );
    this.registerEditorExtension(viewPlugin);
    console.log("Badges plugin loaded");
  }
  onunload() {
    console.log("Badges plugin loaded");
  }
};
function buildPostProcessor() {
  return (el) => {
    el.findAll("code").forEach(
      (code) => {
        let text = code.innerText.trim();
        if (text !== void 0 && text.startsWith("[!!") && text.endsWith("]")) {
          let newEl = buildBadge(text);
          if (newEl !== void 0) {
            code.replaceWith(newEl);
          }
        }
      }
    );
  };
}
var BadgeWidget = class extends import_view.WidgetType {
  constructor(badge) {
    super();
    this.badge = badge;
  }
  toDOM(view) {
    let text = this.badge[0].substring(1).substring(this.badge[0].length - 2, 0);
    return buildBadge(text);
  }
};
var viewPlugin = import_view.ViewPlugin.fromClass(class {
  constructor(view) {
    this.decorations = this.buildDecorations(view);
  }
  update(update) {
    this.decorations = this.buildDecorations(update.view);
  }
  destroy() {
  }
  buildDecorations(view) {
    if (!view.state.field(import_obsidian.editorLivePreviewField)) {
      return import_view.Decoration.none;
    }
    let builder = new import_state.RangeSetBuilder();
    let lines = [];
    if (view.state.doc.length > 0) {
      lines = Array.from(
        { length: view.state.doc.lines },
        (_, i) => i + 1
      );
    }
    const currentSelections = [...view.state.selection.ranges];
    for (let n of lines) {
      const line = view.state.doc.line(n);
      const startOfLine = line.from;
      const endOfLine = line.to;
      let currentLine = false;
      currentSelections.forEach((r) => {
        if (r.to >= startOfLine && r.from <= endOfLine) {
          currentLine = true;
          return;
        }
      });
      let matches = Array.from(line.text.matchAll(REGEXP));
      for (const match of matches) {
        let add = true;
        const from = match.index != void 0 ? match.index + line.from : -1;
        const to = from + match[0].length;
        if (to - from === 6) {
          add = false;
        }
        currentSelections.forEach((r) => {
          if (r.to >= from && r.from <= to) {
            add = false;
          }
        });
        if (add) {
          builder.add(from, to, import_view.Decoration.widget({ widget: new BadgeWidget(match) }));
        }
      }
    }
    return builder.finish();
  }
}, {
  decorations: (v) => v.decorations
});
function buildBadge(text) {
  let newEl = document.createElement("span");
  let iconEl = document.createElement("span");
  let titleEl = document.createElement("span");
  let textEl = document.createElement("span");
  let attrType = "";
  let part = text.substring(2);
  let content = part.substring(part.length - 1, 1).trim();
  if (!content.length) {
    newEl.setText("Badges syntax error");
    return newEl;
  }
  let parts = content.split(":");
  if (parts.length < 2) {
    newEl.setText("\u274C Badges syntax error");
    newEl.setAttr("style", "color:var(--text-error)");
    return newEl;
  }
  let badgeType = parts[0].trim();
  let extras = badgeType.split("|");
  let hasExtra = extras.length > 1;
  let badgeContent = parts[1].trim();
  if (extras.length == 3) {
    iconEl.addClass("inline-badge-icon");
    attrType = "customized";
    (0, import_obsidian.setIcon)(iconEl, extras[1]);
    iconEl.setAttr("aria-label", extras[2]);
    let details = parts[1].split("|");
    let title = details[0].trim();
    titleEl.addClass("inline-badge-title-inner");
    titleEl.setText(title);
    newEl.addClass("inline-badge");
    newEl.setAttr("data-inline-badge", attrType.toLowerCase());
    let color = "currentColor";
    if (details[1]) {
      color = details[1].trim();
    }
    newEl.setAttr("style", "--customize-badge-color: " + color + ";");
    newEl.appendChild(iconEl);
    if (textEl.getText() != "") {
      newEl.appendChild(textEl);
    }
    newEl.appendChild(titleEl);
    attrType = extras.join("|");
  } else {
    if (hasExtra) {
      if (extras[1].startsWith("ghb>") || extras[1].startsWith("ghs>")) {
        let ghType = extras[1].split(">")[1].trim();
        (0, import_obsidian.setIcon)(iconEl, "github");
        iconEl.addClass("inline-badge-icon");
        iconEl.setAttr("aria-label", "Github");
        textEl.addClass("gh-type");
        textEl.setText(ghType);
        iconEl.appendChild(textEl);
        attrType = extras[1].startsWith("ghb>") ? "github" : "github-success";
        badgeType = extras[1].startsWith("ghb>") ? "github" : "github-success";
      } else {
        iconEl.addClass("inline-badge-extra");
        iconEl.setText(badgeType.split("|")[1].trim());
        attrType = "text";
        badgeType = "text";
      }
    } else {
      iconEl.addClass("inline-badge-icon");
      attrType = badgeType.trim();
      BADGE_TYPES.forEach((el) => {
        if (el.indexOf(badgeType.toLowerCase()) === 0 && el[2].length > 0) {
          (0, import_obsidian.setIcon)(iconEl, el[2]);
          iconEl.setAttr("aria-label", badgeType.trim());
        }
      });
    }
    titleEl.addClass("inline-badge-title-inner");
    titleEl.setText(badgeContent);
    newEl.addClass("inline-badge");
    newEl.setAttr("data-inline-badge", attrType.toLowerCase());
    newEl.appendChild(iconEl);
    if (textEl.getText() != "") {
      newEl.appendChild(textEl);
    }
    newEl.appendChild(titleEl);
  }
  return newEl;
}
