
// start calling the functions after this event occurs
document.querySelector('.form').addEventListener('submit', storeComment);


function storeComment (event) {

    // prevent reloading the page
    event.preventDefault();

    // create an array to store all the new comments
    let newComment = [];

    // store new comment in the object
    let postedContent = {
        postName: event.target.name.value,
        postComment: event.target.message.value
    }
    

    if (postedContent.postName !== '' && postedContent.postComment !== '') {
        //store comment-object in the array
        newComment.unshift(postedContent);
        
        // call the function for displaying comment
        displayComment(newComment);

        // clear the input field
        event.target.name.value = '';
        event.target.message.value = '';
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

function createCommentDiv(object) {

    //create new comment section
    let newSection = document.querySelector('.comments');
    let newDiv = document.createElement('div');

    // add new class
    newDiv.classList = 'comments__box';

    // save the html portion inside a variable as a string
    let html = '<div class="comments__box__image"><img class="comments__box__image" src="" alt=""></div><div class="comments__box__content"><div class="comments__box__name">%Name%</div><div class="comments__box__date">%12/11/2019%</div></div><div class="comments__box__message">%comment-message%</div>'

    // replace the name, message and date of comment with the actual value
    let newHtml = html.replace('%Name%', object.name);
    newHtml = newHtml.replace('%comment-message%', object.message);
    newHtml = newHtml.replace('%12/11/2019%', accesstime());

    // insert the new html inside the newdiv
    newDiv.innerHTML = newHtml;

    // let the most recent comment appear on the top
    newSection.insertBefore(newDiv, newSection.firstChild);

}

function accesstime() {
    let now = new Date();

    let newDate = now.getDate();
    let newMonth = now.getMonth()
    let newYear = now.getFullYear();

    return newDay = newMonth + '/' + newDate + '/' + newYear;
}







