{
  /* <div class="card news">
    <div class="news__avatar">
      <img
        src="https://s3.amazonaws.com/uifaces/faces/twitter/leandrovaranda/128.jpg"
      />
    </div>
    <div class="news__info">
      <h1 class="news__title">Investor architecture</h1>
      <h4 class="news__date">2019-07-14T15:51:37.454Z</h4>
    </div>
  </div> */
}

Newzz.components.NewsInfo = function(news) {
  return Newzz.createElement("div", { className: "card news" }, [
    Newzz.createElement(
      "div",
      { className: "news__avatar" },
      Newzz.createElement("img", { src: news.avatar })
    ),
    Newzz.createElement("div", { className: "news__info" }, [
      Newzz.createElement("h1", { className: "news__title" }, news.title),
      Newzz.createElement("h4", { className: "news__date" }, news.createdAt)
    ])
  ]);
};
