
let newComment = [];

let newSection = document.querySelector('.comments');

function createCommentDiv (object) {
    let newDiv = document.createElement('div');
    newDiv.classList = 'comments__box';
    let html = '<img class="comments__box__image" src="" alt=""><div class="comments__box__content"><div class="comments__box__name">%Name%</div><div class="comments__box__date">%12/11/2019%</div><div class="comments__box__message">%comment-message% </div></div >'
    let newHtml = html.replace('%Name%', object.name);
    newHtml = newHtml.replace('%comment-message%', object.message);
    newDiv.innerHTML = newHtml;
    newSection.appendChild(newDiv);
    console.log(newSection);
}


//console.log(newDiv);

//let getNewName = document.forms;
//console.log(getNewName);

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

        //store comment
        newComment.unshift(postedContent);

        // call the function for displaying comment
        displayComment();

        
    }

    
}

function displayComment () {

    for (i = 0; i <= (newComment.length - 1); i++)  {
        let displayContent = {
            name: newComment[i].postName,
            message: newComment[i].postComment
        }

        // call the function for new comment section
        createCommentDiv(displayContent);
    }
    

}

document.querySelector('.form').addEventListener('submit', storeComment);

console.log(newComment);