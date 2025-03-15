function showTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = 'none';
    });
    document.getElementById(tabId).style.display = 'block';
}

function submitPoll() {
    let question = document.getElementById("poll-question").value;
    if (question) addPost("Poll", question);
}

function submitPost() {
    let content = document.getElementById("post-content").value;
    if (content) addPost("Thought", content);
}

function submitQuestion() {
    let question = document.getElementById("question-content").value;
    if (question) addPost("Question", question);
}

function addPost(type, content) {
    let postContainer = document.getElementById("posts");
    let postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `<strong>${type}:</strong> ${content} <br>
                         <button onclick="upvote(this)">👍</button> 
                         <button onclick="downvote(this)">👎</button> 
                         <input type='text' placeholder='Add a comment...' onkeypress='addComment(event, this)'>`;
    postContainer.prepend(postDiv);
}

function upvote(btn) {
    btn.innerText = `👍 ${parseInt(btn.innerText.split(' ')[1] || 0) + 1}`;
}

function downvote(btn) {
    btn.innerText = `👎 ${parseInt(btn.innerText.split(' ')[1] || 0) + 1}`;
}

function addComment(event, input) {
    if (event.key === 'Enter') {
        let comment = document.createElement("p");
        comment.textContent = "💬 " + input.value;
        input.parentNode.appendChild(comment);
        input.value = "";
    }
}
