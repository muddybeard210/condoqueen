let navHeight = $('.navContainer').height();





function axiosTest(data) {
    axios.post('https://us-central1-calzone0820.cloudfunctions.net/widgets/', data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}

var app = new Vue({
    el: '#inquire',
    data: {
        emailBuild: {
            from: 'camille@camillethecondoqueen.com',
            to: 'matthewsheridansmith@gmail.com',
            subject: 'Inquiry From Condo Queen Website',
            firstName: '',
            lastName: '',
            email: '',
            interest: '',
            text: ''

        }
    },
    methods: {
        submitForum: function (emailTemplate) {
            return console.log(emailTemplate);
            if()
        }
    }
})




