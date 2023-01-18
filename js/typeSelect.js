const typeSelect = document.querySelector("#types-select");
function renderPostId(postArr, p) {
  let postIdArr = [];
  postArr.forEach((i) => {
    if (!postIdArr.includes(i.postId)) {
      postIdArr.push(i.postId);
    }
  });
  postIdArr.forEach((element) => {
    let elOption = document.createElement("option");
    elOption.value = element;
    elOption.textContent = element;
    p.appendChild(elOption);
  });
}
renderPostId(posts, typeSelect);
typeSelect.addEventListener("change", () => {
  const type = typeSelect.value;
  let filteredPosts = [];

  if (type === "all") {
    renderPosts(posts);
  } else {
    posts.forEach((post) => {
      if (post.postId == type) {
        filteredPosts.push(post);
      }
    });
    renderPosts(filteredPosts);
  }
});