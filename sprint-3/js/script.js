
// start calling the functions after this event occurs
document.querySelector('.form').addEventListener('submit', storeComment);





function storeComment (event) {

    // prevent reloading the page
    event.preventDefault();

    // store new comment in the object
    let postedContent = {
        postName: event.target.name.value,
        postComment: event.target.message.value
    }

    if (postedContent.postName !== '' && postedContent.postComment !== '') {
        //store comment-object in the array
    
        let postData = axios.post(`${apiUrl}?api_key=${apiKey}`, {
            name: postedContent.postName,
            comment: postedContent.postComment
        });
        
        //call the function for displaying comment

        postData.then((result) => {
            createCommentDiv(result.data);
        })


        // clear the input field
        event.target.name.value = '';
        event.target.message.value = '';
    }    
}


function createCommentDiv(object) {

    let newSection = document.querySelector('.comments');

    //create new comment section
    
    let newDiv = document.createElement('div');
    let firstBox = document.createElement('div');
    let secondBox = document.createElement('div');
    let thirdBox = document.createElement('div');
    let image = document.createElement('img');
    let name = document.createElement('div');
    let date = document.createElement('div');
    let button = document.createElement('button');

    // add new class
    newDiv.className = 'comments__box';
    firstBox.className = 'comments__box__image';
    secondBox.className = 'comments__box__content';
    thirdBox.className = 'comments__box__message';

    image.className = 'comments__box__image';
    name.className = 'comments__box__name';
    date.className = 'comments__box__date';

    button.className = 'button--delete';


    /********* *********was suggested not to code this way ****************** 
    // save the html portion inside a variable as a string
    let html = '<div class="comments__box__image"><img class="comments__box__image" src="" alt=""></div><div class="comments__box__content"><div class="comments__box__name">%Name%</div><div class="comments__box__date">%12/11/2019%</div></div><div class="comments__box__message">%comment-message%</div>'

    // replace the name, message and date of comment with the actual value
    let newHtml = html.replace('%Name%', object.name);
    newHtml = newHtml.replace('%comment-message%', object.comment);
    newHtml = newHtml.replace('%12/11/2019%', accesstime());

    // insert the new html inside the newdiv
    newDiv.innerHTML = newHtml;
    *******************************************/

    // append the child

    newDiv.appendChild(firstBox);
    newDiv.appendChild(secondBox);
    newDiv.appendChild(thirdBox);
    newDiv.appendChild(button);

    firstBox.appendChild(image);
    secondBox.appendChild(name);
    secondBox.appendChild(date);

    // innerhtml insertion

    name.innerHTML = object.name;
    date.innerHTML = accessTime(object.timestamp);
    thirdBox.innerHTML = object.comment;
    button.innerHTML = 'X';

    // let the most recent comment appear on the top
    newSection.insertBefore(newDiv, newSection.firstChild);

    // delete the comment from api if delete button is clicked
    document.querySelector('.button--delete').addEventListener('click', deleteComment);

    function deleteComment(event, id) {
        removeData = axios.delete(`${apiUrl}/${object.id}?api_key=${apiKey}`);

        removeData.then((result) => {
            console.log(result);
            return location.reload(true);
        })
    }
    


    
}

// api calling
/*
console.log(document.querySelector('.button--delete'));
document.querySelector('.button--delete').addEventListener('click', deleteComment);

function deleteComment(event, id) {
    removeData = axios.delete(`${apiUrl}/${id}?api_key=${apiKey}`);
}

let getId = function (array) {
    commentId = array[i].id;
    deleteComment(event, commentId);
}*/

let apiKey = '634b91e2-f1fc-469a-b347-8c6f0fe2ecf5';
let apiUrl = 'https://project-1-api.herokuapp.com/comments';

/*let register = axios.get('https://project-1-api.herokuapp.com/register');

register.then((result) => {
    console.log(result);
})*/

let getData = axios.get(`${apiUrl}?api_key=${apiKey}`);


getData.then((result) => {
    console.log(result);
    displayDefaultComment(result.data);
});

getData.catch((error) => {
    console.log(error)
});

// display default comments stored in api
function displayDefaultComment(array) {
    for (i = (array.length - 1); i >= 0; i--) {
        let defaultContent = {
            name: array[i].name,
            comment: array[i].comment,
            timestamp: array[i].timestamp,
            id: array[i].id
        }
        createCommentDiv(defaultContent);
    }   
}

// add comment time
function accessTime(timestamp) {
    let now = new Date(timestamp);

    let newDate = now.getDate();
    let newMonth = now.getMonth()
    let newYear = now.getFullYear();

    let newDay = newMonth + '/' + newDate + '/' + newYear;

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    let commentTime;

    let auxHour = hour;
    if (hour >= 12) {
        auxHour = hour;
        if (hour > 12) {
            auxHour = hour - 12;
        }
        commentTime = auxHour + ':' + minute + ' PM'
    }
    return newDay + ' ' + commentTime;
}


// add delete function








