const posts = [
  {
    id: 1,
    title: "Learning HTML",
    date: "May 10, 2025",
    image: "images/first.jpg",
    content: "HTML is the foundation of all web pages...",
  },
  {
    id: 2,
    title: "CSS for Styling",
    date: "May 15, 2025",
    image: "images/sec.jpg",
    content: "CSS allows you to style HTML elements beautifully...",
  },
  {
    id: 3,
    title: "JavaScript Magic",
    date: "May 20, 2025",
    image: "images/third.jpg",
    content: "JavaScript makes websites interactive and dynamic...",
  },
];

const blogList = document.getElementById("blog-list");

if (blogList) {
  posts.forEach(post => {
    blogList.innerHTML += `
      <div class="blog-post">
        <h2>${post.title}</h2>
        <small>${post.date}</small>
        <img src="${post.image}" alt="${post.title}" />
        <p>${post.content.substring(0, 100)}...</p>
        <a href="post.html?id=${post.id}">Read More</a>
      </div>
    `;
  });
}

// Post Page Logic
const postPage = new URLSearchParams(window.location.search).get("id");

if (postPage) {
  const post = posts.find(p => p.id == postPage);
  if (post) {
    document.body.innerHTML = `
      <header><h1>${post.title}</h1></header>
      <main>
        <small>${post.date}</small>
        <img src="${post.image}" alt="${post.title}" />
        <p>${post.content}</p>
        <hr />
        <h3>Comments</h3>
        <form id="commentForm">
          <input type="text" id="name" placeholder="Your name" required /><br/>
          <textarea id="message" placeholder="Your comment" required></textarea><br/>
          <button type="submit">Submit</button>
        </form>
        <ul id="commentList"></ul>
      </main>
      <a href="index.html">← Back</a>
    `;

    const form = document.getElementById("commentForm");
    const commentList = document.getElementById("commentList");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const message = document.getElementById("message").value;
      const comment = document.createElement("li");
      comment.innerHTML = `<strong>${name}:</strong> ${message}`;
      commentList.appendChild(comment);
      form.reset();
    });
  }
}
