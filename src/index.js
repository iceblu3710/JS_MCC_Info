import "./styles.css";
import { computePosition } from "@floating-ui/dom";

const reference = document.getElementById("reference");
const floating = document.getElementById("floating");

computePosition(reference, floating, {
  placement: "right-start",
}).then(({ x, y }) => {
  Object.assign(floating.style, {
    top: `${y}px`,
    left: `${x + 10}px`,
  });
});

var obj = {};
fetch("../mcc_info.json")
  .then((response) => response.json())
  .then((json) => (obj = json));

reference.onclick = getResponse;

function getResponse(event) {
  if (floating.innerHTML) {
    floating.innerHTML = "";
  } else {
    floating.innerHTML = printObj(obj["MILL"]["MCC 501A"]["M1-IL-404"]);
  }
}

let printObj = function (obj) {
  let string = "";
  for (let prop in obj) {
    if (typeof obj[prop] == "string") {
      string += prop + ": " + obj[prop] + "<br><br>";
    }
  }
  return string;
};
