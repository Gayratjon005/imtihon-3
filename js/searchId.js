const searchId = document.querySelector("#searchId");
searchId.addEventListener("input", (e) => {
  searchPost = [];
  e.preventDefault();
  let value = elSearch.value;
  posts.forEach((e) => {
    if (e.name.toLowerCase().includes(value)) {
      searchPost.push(e);
    }
  });
  posts.forEach((e) => {
    if (e.body.toLowerCase().includes(value)) {
      searchPost.push(e);
    }
  });
  posts.forEach((e) => {
    if (e.email.toLowerCase().includes(value)) {
      searchPost.push(e);
    }
  });
  renderPosts(searchPost);
});
