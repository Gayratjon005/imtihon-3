const elCards = document.querySelector(".cards");
elCards.addEventListener("click", (evt) => {
  const target = evt.target;
  let newPosts = [];

  if (target.className.includes("delete-btn")) {
    const id = Number(target.dataset.id);

    posts.forEach((post) => {
      if (post.id !== id) {
        newPosts.push(post);
      }
    });
    posts = newPosts;
    renderPosts(posts);
  }
});
