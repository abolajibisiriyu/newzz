{
  /* <div class="card error">
          <h1 class="error__text">An Error Occured :(</h1>
          <button class="btn">Try again</button>
        </div> */
}
Newzz.components.Error = function(message, onTryAgain) {
  return Newzz.createElement("div", { className: "card error" }, [
    Newzz.createElement(
      "h1",
      { className: "error__text" },
      message || "An Error Occured :("
    ),
    Newzz.components.Button("Try again", onTryAgain)
  ]);
};
