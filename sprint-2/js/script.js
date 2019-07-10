var message = document.querySelector('.comment-box__message--input').textContent;

message.style.color = red;

var newComment = document.createElement('p');
newComment.textContent = message;