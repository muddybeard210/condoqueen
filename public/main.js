let navHeight = $('.navContainer').height();

$(".mainContent").css("margin-top", (navHeight - 20));

$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,

    });

});

// var data = {
//     emailFrom: "matthewsheridansmith@gmail.com",
//     emailTo: "matthewsheridansmith@gmail.com",
//     emailSubject: "This is the subject",
//     emailText: "This is some test text"
// };

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://us-central1-calzone0820.cloudfunctions.net/helloWorld",
//     "method": "POST",
//     "headers": {
//         "Content-Type": "application/json",
//         "Cache-Control": "no-cache",
//         "Access-Control-Allow-Origin": "*"

//     },
//     "processData": false,
//     "data": JSON.stringify(data)
// };

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });

var data = {
    from: 'matthewsheridansmith@gmail.com',
    to: 'matthewsheridansmith@gmail.com',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
  };

function axiosTest() {
    axios.post('https://us-central1-calzone0820.cloudfunctions.net/widgets/', data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
}

