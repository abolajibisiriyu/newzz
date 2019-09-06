(function() {
  let page = 1;
  fetchNews(page);

  function fetchNews(page) {
    const root = document.getElementById("root");
    const results = document.getElementById("results");
    Newzz.toggleLoader(true);
    Newzz.fetchNews(page)
      .then(d => {
        // console.log(d);
        let PaginatorComponent = document.querySelector(".paginator");
        if (!PaginatorComponent) {
          const pagination = Newzz.components.Paginator(
            onNextClicked,
            onPrevClicked
          );
          Newzz.appendChild(root, pagination, results);
        }
        const newsList = d.map(news =>
          Newzz.createElement(
            "a",
            {
              href: `news.html?id=${news.id}`
            },
            Newzz.components.News(news)
          )
        );
        // Newzz.utils.triggerErrorAtRandom();
        Newzz.render(results, newsList);
        if (!PaginatorComponent) {
          const pagination = Newzz.components.Paginator(
            onNextClicked,
            onPrevClicked
          );
          Newzz.appendChild(root, pagination);
        }
        Newzz.toggleLoader(false);
      })
      .catch(err => {
        console.log(err);
        let ErrorComponent = document.querySelector(".error");
        if (!ErrorComponent) {
          ErrorComponent = Newzz.components.Error("An Error Occured :(", e => {
            fetchNews(page);
          });
          Newzz.appendChild(results, ErrorComponent);
        }
        Newzz.toggleLoader(false);
      });
  }

  function onNextClicked(e) {
    page += 1;
    fetchNews(page);
  }

  function onPrevClicked(e) {
    if (page !== 1) {
      page -= 1;
      fetchNews(page);
    }
  }
})();
