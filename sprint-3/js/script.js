
// start calling the functions after this event occurs
document.querySelector('.form').addEventListener('submit', storeComment);


function storeComment (event) {

    // prevent reloading the page
    event.preventDefault();

    // create an array to store all the new comments
    //let newComment = [];

    // store new comment in the object
    let postedContent = {
        postName: event.target.name.value,
        postComment: event.target.message.value
    }

    if (postedContent.postName !== '' && postedContent.postComment !== '') {
        //store comment-object in the array
    
        let postData = axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`, {
            name: postedContent.postName,
            comment: postedContent.postComment
        });
        
        // call the function for displaying comment

        postData.then((result) => {
            createCommentDiv(result.data);
        })


        // clear the input field
        event.target.name.value = '';
        event.target.message.value = '';
    }    
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
    newHtml = newHtml.replace('%comment-message%', object.comment);
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



// api calling

let apiKey = '344f8337-6d2e-4977-ad5f-61621d12eff4';


let getData = axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`);

getData.then((result) => {
    console.log(result);
    displayDefaultComment(result.data);
});

getData.catch((error) => {
    console.log(error)
});


function displayDefaultComment(array) {
    for (i = 2; i >= 0; i--) {
        let defaultContent = {
            name: array[i].name,
            comment: array[i].comment
        }
        createCommentDiv(defaultContent);
    }   
}










