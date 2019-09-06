{
  /* <div class="comment">
    <div class="comment__avatar">
      <img
        src="https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg"
      />
    </div>
    <div class="comment__info">
      <h1 class="comment__name">John Doe</h1>
      <h4 class="comment__message">Hello</h4>
    </div>
  </div> */
}

Newzz.components.Comment = function(comment) {
  return Newzz.createElement("div", { className: "comment" }, [
    Newzz.createElement(
      "div",
      { className: "comment__avatar" },
      Newzz.createElement("img", { src: comment.avatar })
    ),
    Newzz.createElement("div", { className: "comment__info" }, [
      Newzz.createElement("h1", { className: "comment__name" }, comment.name),
      Newzz.createElement(
        "p",
        { className: "comment__message" },
        `- ${comment.comment}`
      )
    ])
  ]);
};
