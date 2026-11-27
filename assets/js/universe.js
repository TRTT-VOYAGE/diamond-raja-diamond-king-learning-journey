const nodes = {
  core:{title:"Your universe",copy:"A personal space that brings learning, ideas, projects, and proof together — with you in control.",principle:"Human ownership",symbol:"✦",index:"CONNECTION / 01"},
  learn:{title:"Learning paths",copy:"Turn questions, lessons, experiments, and corrections into a visual path you can revisit and build upon.",principle:"Learning stays traceable",symbol:"✧",index:"CONNECTION / 02"},
  idea:{title:"Your idea constellation",copy:"Keep owner-originated ideas distinct, connect related thoughts, and move selected concepts into experiments or prototypes.",principle:"Clear idea provenance",symbol:"◇",index:"CONNECTION / 03"},
  project:{title:"Project workspaces",copy:"Give each initiative a home for its goals, tasks, decisions, collaborators, files, and next actions.",principle:"Bounded project spaces",symbol:"⌘",index:"CONNECTION / 04"},
  evidence:{title:"Evidence & sources",copy:"Attach references to claims and decisions. Separate verified facts from assumptions, proposals, and AI-generated suggestions.",principle:"Evidence before claims",symbol:"◎",index:"CONNECTION / 05"},
  milestone:{title:"Milestones & timelines",copy:"See how a project evolves over time, what changed, what was learned, and which outcomes have supporting proof.",principle:"Progress with proof",symbol:"↗",index:"CONNECTION / 06"},
  share:{title:"Private and selective sharing",copy:"Keep spaces private by default. Share only selected records with explicit permissions and retain portable exports.",principle:"Consent and least privilege",symbol:"⌁",index:"CONNECTION / 07"}
};
const map = document.querySelector(".map-canvas");
if (map) {
  map.querySelectorAll(".map-node").forEach(button => button.addEventListener("click", () => {
    const item = nodes[button.dataset.node];
    if (!item) return;
    map.querySelectorAll(".map-node").forEach(node => node.classList.toggle("active", node === button));
    document.querySelector("#detail-title").textContent = item.title;
    document.querySelector("#detail-copy").textContent = item.copy;
    document.querySelector("#detail-principle").textContent = item.principle;
    document.querySelector(".detail-symbol").textContent = item.symbol;
    document.querySelector(".detail-index").textContent = item.index;
  }));
}
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (toggle && nav) toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
document.querySelectorAll("[data-world]").forEach(link => link.addEventListener("click", () => {
  const target = link.dataset.world;
  const node = document.querySelector('[data-node="' + (target === "learning" ? "learn" : target === "ideas" ? "idea" : "project") + '"]');
  if (node) node.click();
}));