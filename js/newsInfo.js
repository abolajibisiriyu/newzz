(function() {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log({ id });

  getNewsInfo(id);

  function getNewsInfo(id) {
    const results = document.getElementById("results");
    Newzz.toggleLoader(true);
    Promise.all([Newzz.getNews(id), Newzz.getNewsComments(id)])
      .then(([_news, _comments]) => {
        // console.log({ _news, _comments });
        const newsInfo = Newzz.components.NewsInfo(_news);
        const comments = Newzz.createElement(
          "section",
          { className: "card comments" },
          [
            Newzz.createElement(
              "h1",
              {
                className: "comments__header"
              },
              "Comments"
            )
          ]
            .concat(_comments.map(_c => Newzz.components.Comment(_c)))
            .concat([Newzz.components.CommentForm(onCommentFormSubmitted)])
        );
        // Newzz.utils.triggerErrorAtRandom();
        Newzz.render(results, [newsInfo, comments]);
        Newzz.toggleLoader(false);
      })
      .catch(err => {
        console.log(err);
        let ErrorComponent = document.querySelector(".error");
        if (!ErrorComponent) {
          ErrorComponent = Newzz.components.Error("An Error Occured :(", e => {
            getNews(id);
          });
          Newzz.render(results, ErrorComponent);
        }
        Newzz.toggleLoader(false);
      });
  }

  function getNewsComments(id) {
    const results = document.getElementById("results");
    // Newzz.toggleLoader(true);
    Newzz.getNews(id)
      .then(d => {
        console.log(d);
        const news = Newzz.components.NewsInfo(d);
        // Newzz.utils.triggerErrorAtRandom();
        Newzz.render(results, news);
        Newzz.toggleLoader(false);
      })
      .catch(err => {
        console.log(err);
        let ErrorComponent = document.querySelector(".error");
        if (!ErrorComponent) {
          ErrorComponent = Newzz.components.Error("An Error Occured :(", e => {
            getNews(id);
          });
          Newzz.render(results, ErrorComponent);
        }
        // Newzz.toggleLoader(false);
      });
  }

  function onCommentFormSubmitted(e) {
    e.preventDefault();
    Newzz.toggleLoader(true);
    const elements = e.target.elements;
    const data = {};
    for (let index = 0; index < elements.length; index++) {
      const element = elements[index];
      const nodeName = element.nodeName.toLowerCase();
      if (nodeName === "input" || nodeName === "textarea") {
        data[element.name] = element.value;
      }
    }
    console.log(data);
    Newzz.addNewsComments(id, data)
      .then(_d => {
        console.log(_d);
        if (_d.ok) {
          getNewsInfo(id);
        } else {
          alert(`Error: ${_d}`);
        }
        Newzz.toggleLoader(false);
      })
      .catch(e => {
        console.log(e);
      });
  }
})();
