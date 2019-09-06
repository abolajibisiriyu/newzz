{
  /* <button class="btn">Try again</button> */
}

Newzz.components.Button = function(text, onClick) {
  const el = Newzz.createElement("button", { className: "btn" }, text);
  el.addEventListener("click", onClick, false);
  return el;
};
