const Newzz = {
  render(el, node) {
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
    this.appendChild(el, node);
  },
  createElement(el, options = {}, children) {
    const element = document.createElement(el);
    for (const key in options) {
      element[key] = options[key];
    }
    return this.appendChild(element, children);
  },
  appendChild(el, children, nodePosition) {
    const element = el;
    if (children) {
      if (typeof children === "object") {
        if (Array.isArray(children)) {
          for (let index = 0; index < children.length; index++) {
            const _element = children[index];
            this.appendChild(element, _element);
          }
        } else {
          element.insertBefore(children, nodePosition);
        }
      } else {
        element.insertBefore(
          document.createTextNode(children.toString()),
          nodePosition
        );
      }
    }
    return element;
  },
  toggleLoader(show = true) {
    const loader = document.getElementsByClassName("loader")[0];
    if (!show) {
      loader.classList.add("hide");
    } else {
      loader.classList.remove("hide");
    }
  },

  // components

  components: {},

  // utils

  utils: {},

  // api
  baseURL: "http://5d2c2f2b8c90070014972225.mockapi.io/api/v2/news",
  async fetchNews(page = 1, limit = 10) {
    const res = await fetch(`${this.baseURL}?page=${page}&limit=${limit}`);
    return await res.json();
  },
  async getNews(id) {
    const res = await fetch(`${this.baseURL}/${id}`);
    return await res.json();
  },
  async getNewsComments(id) {
    const res = await fetch(`${this.baseURL}/${id}/comments`);
    return await res.json();
  },
  async addNewsComments(id, data) {
    const res = await fetch(`${this.baseURL}/${id}/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        newsId: id,
        ...data
      })
    });
    return await res.json();
  }
};
