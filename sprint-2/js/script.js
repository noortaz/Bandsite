




function createCommentDiv (object) {

    //create new comment section
    let newSection = document.querySelector('.comments');
    let newDiv = document.createElement('div');

    // add new class
    newDiv.classList = 'comments__box';

    // save the html portion inside a variable as a string
    let html = '<img class="comments__box__image" src="" alt=""><div class="comments__box__content"><div class="comments__box__name">%Name%</div><div class="comments__box__date">%12/11/2019%</div><div class="comments__box__message">%comment-message% </div></div >'

    // replace the name, message and date of comment with the actual value
    let newHtml = html.replace('%Name%', object.name);
    newHtml = newHtml.replace('%comment-message%', object.message);

    // insert the new html inside the newdiv
    newDiv.innerHTML = newHtml;

    //
    newSection.appendChild(newDiv);
    
}


function storeComment (event) {

    // prevent reloading the page
    event.preventDefault();

    // create an array to store all the comments
    let newComment = [];

    // store new comment in the object
    let postedContent = {
        postName: event.target.name.value,
        postComment: event.target.message.value
    }
    

    if (postedContent.postName === '' || postedContent.postComment === '') {

        //for empty string do nothing
        newComment = newComment

    } else {
        //store comment-object in the array
        newComment.unshift(postedContent);
        

        // call the function for displaying comment
        displayComment(newComment);
 
    }

    
}

function displayComment (array) {

    //create an objecct that only stores the most recent comment
    let displayContent = {
        name: array[0].postName,
        message: array[0].postComment
    }

    // call the function to create new html section
    createCommentDiv(displayContent);
   
}

// start calling the functions after this event occurs
document.querySelector('.form').addEventListener('submit', storeComment);

//console.log(newComment);