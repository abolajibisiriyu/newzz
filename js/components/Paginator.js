{
  /* 
    <div class="paginator">
    <button class="btn">Previous</button>
    <button class="btn">Next</button>
    </div>
     */
}

Newzz.components.Paginator = function(onNextClicked, onPrevClicked) {
  const el = Newzz.createElement("div", { className: "paginator" }, [
    Newzz.components.Button("Previous", onPrevClicked),
    Newzz.components.Button("Next", onNextClicked)
  ]);
  return el;
};
