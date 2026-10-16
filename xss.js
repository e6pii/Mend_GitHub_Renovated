const input = document.getElementById("commentInput");
const button = document.getElementById("saveButton");
const commentsDiv = document.getElementById("comments");
const req = document.getElementById("requestData");
const key = "12345678";
print(key);

function loadComments(req) {
  const comments = req.body.email;

  commentsDiv.innerHTML = "";

  for (const comment of comments) {
    commentsDiv.innerHTML += "<p>" + comment + "</p>";
  }
}

button.addEventListener("click", function () {
  const comments = JSON.parse(
    localStorage.getItem("comments") || "[]"
  );

  comments.push(input.value);
  localStorage.setItem("comments", JSON.stringify(comments));

  input.value = "";

  loadComments(req);
});

loadComments(req);
