
let newComment = [];

let newSection = document.querySelector('.comments');

let newDiv = document.createElement('div');
newDiv.classList = 'comments__box';
let html = newDiv.innerHTML = '<img class="comments__box__image" src="" alt=""><div class="comments__box__content"><div class="comments__box__name">%Name%</div><div class="comments__box__date">%12/11/2019%</div><div class="comments__box__message">%comment-message% </div></div >'
newSection.appendChild(newDiv);
let newHtml = html.replace('%Name%', object.name);
newHtml = newHtml.replace('%comment-message%', object.message)

console.log(newDiv);

let getNewName = document.forms;
console.log(getNewName);

function storeComment (event) {
    console.log(newComment.length + "init len");
    event.preventDefault();

    let postedContent = {
        postName: event.target.name.value,
        postComment: event.target.message.value
    }

    if (postedContent.postName === '' || postedContent.postComment === '') {
        newComment = newComment
    } else {
        newComment.unshift(postedContent);
    }
}

function displayComment () {
    let displayContent = {
        name: newComment[i].postName,
        message: newComment[i].postComment
    }

}

document.querySelector('.form').addEventListener('submit', displayComment);

console.log(newComment);