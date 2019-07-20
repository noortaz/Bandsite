let apiKey = '344f8337-6d2e-4977-ad5f-61621d12eff4';


let getData = axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`);

getData.then((result) => {
  //console.log(result.data);
  displayShowTickets(result.data);
});

getData.catch((error) => {
  console.log(error)
});


function displayShowTickets(array) {

  for (i = 0; i < array.length; i++) {
      let defaultContent = {
          date: array[i].date,
          location: array[i].location,
          place: array[i].place
      }
      createTicketsDiv(defaultContent);
  }
}

function createTicketsDiv(object) {

  let newBox = document.querySelector('.shows__tickets');
  console.log(newBox);

  let newTicketBox = document.createElement('div');
  newTicketBox.classList = 'shows__tickets__box';
  
  let newDiv1 = document.createElement('div');
  newDiv1.classList = 'shows__tickets__date';
  let newDate = document.createElement('div');
  newDate.classList = 'shows__tickets__date--value';
  let newDateKey = document.createElement('div');
  newDateKey.classList = 'shows__tickets__date--key';
  

  let newDiv2 = document.createElement('div');
  newDiv2.classList = 'shows__tickets__venue';
  let newVenue = document.createElement('div');
  newVenue.classList = 'shows__tickets__venue--value';
  let newVenueKey = document.createElement('div');
  newVenueKey.classList = 'shows__tickets__venue--key';

  let newDiv3 = document.createElement('div');
  newDiv3.classList = 'shows__tickets__location';
  let newLocation = document.createElement('div');
  newLocation.classList = 'shows__tickets__location--value';
  let newLocationKey = document.createElement('div');
  newLocationKey.classList = 'shows__tickets__location--key';

  let newButton = document.createElement('button');
  newButton.classList = 'shows__tickets__button--buy';


  newDiv1.appendChild(newDateKey);
  newDiv2.appendChild(newVenueKey);
  newDiv3.appendChild(newLocationKey);

  newDiv1.appendChild(newDate);
  newDiv2.appendChild(newVenue);
  newDiv3.appendChild(newLocation);

  newTicketBox.appendChild(newDiv1);
  newTicketBox.appendChild(newDiv2);
  newTicketBox.appendChild(newDiv3);
  newTicketBox.appendChild(newButton);

  newBox.appendChild(newTicketBox);

  newDateKey.innerHTML = 'date';
  newVenueKey.innerHTML = 'venue';
  newLocationKey.innerHTML = 'location';
  

  newDate.innerHTML = object.date;
  newVenue.innerHTML = object.place;
  newLocation.innerHTML = object.location;
  newButton.innerHTML = 'buy tickets'

  //console.log(newBox);
}

