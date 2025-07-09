const posts = [];

async function postar() {
  const postText = document.getElementById("postText").value;
  if (postText.trim() === "") return;

  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  const catImage = data[0].url;

  const newPost = {
    date: new Date(),
    username: "UserName",
    avatar: "https://via.placeholder.com/50",
    text: postText,
    image: catImage,
    likes: 0,
  };

  posts.unshift(newPost);
  document.getElementById("postText").value = "";
  renderPosts();
}

function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = "";
  posts.forEach((post, index) => {
    const postElement = document.createElement("div");
    postElement.className = "post";
    postElement.innerHTML = `
            <div>
                <img src="${post.avatar}" alt="Avatar" width="50">
                <strong>${post.username}</strong>
            </div>
            <p>${post.text}</p>
            <img src="${post.image}" alt="Cat Image">
            <div>
                <button class="like-button" onclick="likePost(${index})">Curtir (${post.likes})</button>
            </div>
        `;
    postsContainer.appendChild(postElement);
  });
}

function likePost(index) {
  posts[index].likes++;
  renderPosts();
}
