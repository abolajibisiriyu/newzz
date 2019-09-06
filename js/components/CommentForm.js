Newzz.components.CommentForm = function(onSubmit) {
  const form = Newzz.createElement("form", { className: "comment_form" }, [
    Newzz.createElement("h4", {}, "Submit Comment"),
    Newzz.createElement("input", {
      name: "name",
      placeholder: "Name",
      required: true
    }),
    Newzz.createElement("textarea", {
      name: "comment",
      placeholder: "comment",
      rows: 4,
      required: true
    }),
    Newzz.createElement("input", {
      name: "avatar",
      placeholder:
        "avatar (url): https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg",
      required: true
      //   value: "https://s3.amazonaws.com/uifaces/faces/twitter/koridhandy/128.jpg"
    }),
    Newzz.components.Button("submit")
  ]);
  form.addEventListener("submit", onSubmit);
  return form;
};
