const scene = document.querySelector("#scene");
const progressText = document.querySelector("#progress-text");
const progressBoard = document.querySelector("#progress-board");
const wallElements = {
  left: document.querySelector("#wall-left"),
  right: document.querySelector("#wall-right"),
};

let assembledCount = 0;

const introPieces = [
  { id: 1, wall: "left", label: "Name", value: "Kim Jeonghyun", scatterPos: "-3 1 -4", targetPos: "-3.8 7 -5" },
  { id: 2, wall: "left", label: "Job", value: "Web Developer", scatterPos: "3 2 -3", targetPos: "-3.8 6 -5" },
  { id: 3, wall: "left", label: "Goal", value: "XR Developer", scatterPos: "0 3 -6", targetPos: "-3.8 5 -5" },
  { id: 4, wall: "left", label: "Location", value: "Seongnam, Sujeong-gu", scatterPos: "-2 1 -3", targetPos: "-3.8 4 -5" },
  { id: 5, wall: "left", label: "Education", value: "Gachon University", scatterPos: "-1 3 -5", targetPos: "-3.8 3 -5" },
  { id: 6, wall: "left", label: "Age", value: "20", scatterPos: "-3 2 -6", targetPos: "-3.8 2 -5" },
  { id: 7, wall: "left", label: "Email", value: "dd0220ndd0220@gmail.com", scatterPos: "0 1 -4", targetPos: "-3.8 1 -5" },

  { id: 8, wall: "right", label: "ComfyUI", value: "*****", scatterPos: "2 1 -3", targetPos: "3.8 6.5 -5" },
  { id: 9, wall: "right", label: "Python", value: "****-", scatterPos: "4 3 -4", targetPos: "3.8 5.5 -5" },
  { id: 10, wall: "right", label: "Frontend", value: "****-", scatterPos: "1 2 -6", targetPos: "3.8 4.5 -5" },
  { id: 11, wall: "right", label: "Unity", value: "***--", scatterPos: "3 1 -5", targetPos: "3.8 3.5 -5" },
  { id: 12, wall: "right", label: "Blender", value: "***--", scatterPos: "2 3 -6", targetPos: "3.8 2.5 -5" },
  { id: 13, wall: "right", label: "Photoshop", value: "**---", scatterPos: "1 1 -3", targetPos: "3.8 1.5 -5" },
];

const wallColors = { left: "#b3b4b4", right: "#38383a" };
const wallRotations = { left: "0 60 0", right: "0 -60 0" };
const wallSpinTargets = { left: "360 780 0", right: "360 660 0" };
const leftPieces = introPieces.filter((piece) => piece.wall === "left");
const rightPieces = introPieces.filter((piece) => piece.wall === "right");
const leftBoxes = [];
const rightBoxes = [];
let leftAssembled = 0;
let rightAssembled = 0;

const revealWallSummary = (wallName, boxes, pieces) => {
  boxes.forEach((box) => box.setAttribute("visible", "false"));

  const basePos = wallName === "left" ? { x: -4, y: 4, z: -5 } : { x: 4, y: 4, z: -5 };
  const baseRot = wallName === "left" ? { x: 0, y: 60, z: 0 } : { x: 0, y: -60, z: 0 };

  const summary = document.createElement("a-entity");
  summary.setAttribute("position", `${basePos.x} ${basePos.y} ${basePos.z}`);
  summary.setAttribute("rotation", `${baseRot.x} ${baseRot.y} ${baseRot.z}`);

  summary.setAttribute("animation__float", {
    property: "position",
    to: `${basePos.x} ${basePos.y + 0.2} ${basePos.z}`,
    dir: "alternate",
    loop: true,
    dur: 2000,
    easing: "easeInOutSine",
  });

  const tiltAnimation = {
    property: "rotation",
    to: `${baseRot.x + 3} ${baseRot.y} ${baseRot.z + 3}`,
    dir: "alternate",
    loop: true,
    dur: 2500,
    easing: "easeInOutSine",
  };

  summary.setAttribute("animation__tilt", tiltAnimation);
  wallElements[wallName].setAttribute("animation__tilt", tiltAnimation);

  const panel = document.createElement("a-plane");
  panel.setAttribute("width", "3.7");
  panel.setAttribute("height", "7");
  panel.setAttribute("color", "#000");
  panel.setAttribute("opacity", "0.65");
  panel.setAttribute("position", "0 0 0.05");
  summary.appendChild(panel);

  const title = wallName === "left" ? "PROFILE" : "SKILLS";
  const body = pieces.map((piece) => `${piece.label}\n${piece.value}`).join("\n\n");

  const titleText = document.createElement("a-text");
  titleText.setAttribute("align", "center");
  titleText.setAttribute("color", "#33ccff");
  titleText.setAttribute("font", "exo2bold");
  titleText.setAttribute("letterSpacing", "2");
  titleText.setAttribute("width", wallName === "left" ? "7" : "8");
  titleText.setAttribute("position", "0 3 0.06");
  titleText.setAttribute("value", title);
  summary.appendChild(titleText);

  const summaryText = document.createElement("a-text");
  summaryText.setAttribute("align", "center");
  summaryText.setAttribute("color", "#fff");
  summaryText.setAttribute("font", "exo2bold");
  summaryText.setAttribute("letterSpacing", "2");
  summaryText.setAttribute("lineHeight", "60");
  summaryText.setAttribute("width", wallName === "left" ? "5" : "6");
  summaryText.setAttribute("position", "0 -0.3 0.06");
  summaryText.setAttribute("value", body);
  summary.appendChild(summaryText);

  scene.appendChild(summary);
};

introPieces.forEach((piece) => {
  const box = document.createElement("a-box");
  box.setAttribute("position", piece.scatterPos);
  box.setAttribute("rotation", wallRotations[piece.wall]);
  box.setAttribute("color", wallColors[piece.wall]);
  box.setAttribute("id", `piece-${piece.id}`);

  const label = document.createElement("a-entity");
  label.setAttribute("position", "0 0 0.51");
  label.setAttribute("visible", "false");

  const bg = document.createElement("a-plane");
  bg.setAttribute("width", "0.9");
  bg.setAttribute("height", "0.9");
  bg.setAttribute("color", "#000");
  bg.setAttribute("opacity", "0.75");
  label.appendChild(bg);

  const text = document.createElement("a-text");
  text.setAttribute("align", "center");
  text.setAttribute("color", "#fff");
  text.setAttribute("font", "exo2bold");
  text.setAttribute("letterSpacing", "2");
  text.setAttribute("lineHeight", "50");
  text.setAttribute("width", "2.4");
  text.setAttribute("position", "0 0 0.01");
  label.appendChild(text);

  box.appendChild(label);
  scene.appendChild(box);

  if (piece.wall === "left") {
    leftBoxes.push(box);
  } else {
    rightBoxes.push(box);
  }

  box.addEventListener(
    "animationcomplete",
    () => {
      text.setAttribute("value", `${piece.label}\n${piece.value}`);
      label.setAttribute("visible", "true");

      assembledCount++;
      progressText.setAttribute("value", `${assembledCount} / ${introPieces.length} Assembled`);
      progressBoard.emit("bounce");

      if (piece.wall === "left") {
        leftAssembled++;
        if (leftAssembled === leftPieces.length) {
          revealWallSummary("left", leftBoxes, leftPieces);
        }
      } else {
        rightAssembled++;
        if (rightAssembled === rightPieces.length) {
          revealWallSummary("right", rightBoxes, rightPieces);
        }
      }
    },
    { once: true }
  );

  box.addEventListener("click", () => {
    box.setAttribute("animation__position", {
      property: "position",
      to: piece.targetPos,
      dur: 1000,
      easing: "easeInOutQuad",
    });

    box.setAttribute("animation__rotation", {
      property: "rotation",
      to: wallSpinTargets[piece.wall],
      dur: 1000,
      easing: "easeInOutQuad",
    });
  });
});