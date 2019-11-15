function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function getDogImage() {
  let number = $("#number").val();
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  $('.results-img').empty();
  for (let i=0; i < responseJson.message.length; i++) {
  $('.results-img').append(     
    `<img src="${responseJson.message[i]}"><br>`);
    console.log(responseJson.message[i]);
  }
  $('.results').removeClass('hidden');
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});

//$(function () {
//  $('#number').change(function()
//    $('#number').attr('value', number);
// )});

// $(function() {
//   $('form').submit(function () {
// //    $('#number').attr('value', number);
//     console.log(number);
//   });
// });
