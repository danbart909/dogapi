function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    getDogImage();
  });
}

function getDogImage() {
  let number = $("#number :selected").val();
//  let num = number.toString();
  fetch(`https://dog.ceo/api/breeds/image/random/${number}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  //replace the existing image with the new one
  $('.results-img').replaceWith(
    `<img src="${responseJson.message}" class="results-img">`
  )
  //display the results section
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
