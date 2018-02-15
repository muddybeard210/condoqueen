let navHeight = $('.navContainer').height();
Vue.use(VeeValidate);

//let url = 'https://us-central1-calzone0820.cloudfunctions.net/widgets/';
let url = 'http://localhost:5001/calzone0820/us-central1/widgets'


function axiosTest(data) {
    axios.post(url, data)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            return error;
        });
}

var interests = {
    "1": "Buying",
    "2": "Selling",
    "3": "Other"
}

var app = new Vue({
    el: '#inquire',
    data: {
        errors: [],
        emailBuild: {
            from: {
                data: 'camille@camillethecondoqueen.com',
                hasError: false
            },
            to: {
                data: 'matthewsheridansmith@gmail.com',
                hasError: false
            },
            subject: {
                data: 'Inquiry From Condo Queen Website',
                hasError: false
            },
            firstName: {
                data: '',
                hasError: function(){
                    return this.data == "";
                }
            },
            lastName: {
                data: '',
                hasError: function(){
                    return this.data == "";
                }
            },
            email: {
                data: '',
                hasError: function(){
                    return this.data == "";
                }
            },
            interest: {
                data: '',
                hasError: function(){
                    return this.data == "";
                }
            },
            text: {
                data: '',
                hasError: false
            }
        
        }
    },
    methods: {
        submitForum: function (emailTemplate) {
            emailTemplate.interest.data = interests[emailTemplate.interest.data];
            axios.post(url, emailTemplate)
            .then(function (response) {
                console.log(response);
                return response;
            })
            .catch(function (error) {
                console.log(error);
                return error;
            });
        },
        checkForm: function(e) {
            e.preventDefault();
            this.errors = [];
            if(this.emailBuild.firstName.data == "") {
                this.errors.push("First name is required.");
            }
            if(this.emailBuild.lastName.data == "") {
                this.errors.push("Last name is required.");
            }
            if(this.emailBuild.email.data == "") {
                this.errors.push("Email is required.");
            }
            if(this.emailBuild.interest.data == "") {
                this.errors.push("Interest is required.");
            }
            if(this.errors.length == 0) {
                this.submitForum(this.emailBuild);
            } else {
                console.log("some fields were missing", this.errors)
            }
        }
    }
});

// function attemptSubmit() {
//     let reqFields = ["firstName", "lastName", "email", "interest"];

//     reqFields.forEach(function(string) {
//         console.log("here is what we're looking at:", app.emailBuild[string]);
//         if (app.emailBuild[string].hasError() == true) {
//             $(document.getElementById(string)).parent().addClass("hasError");
//             return false;
//         } else {
//             $(document.getElementById(string)).parent().removeClass("hasError");
//             return true;
//         }
//     })
//     console.log("All was good!");
// }


// emailBuild: {
//     from: {
//         data: 'camille@camillethecondoqueen.com',
//         hasError: false
//     },
//     to: {
//         data: 'matthewsheridansmith@gmail.com',
//         hasError: false
//     },
//     subject: {
//         data: 'Inquiry From Condo Queen Website',
//         hasError: false
//     },
//     firstName: {
//         data: '',
//         hasError: false
//     },
//     lastName: {
//         data: '',
//         hasError: false
//     },
//     email: {
//         data: '',
//         hasError: false
//     },
//     interest: {
//         data: '',
//         hasError: false
//     },
//     text: {
//         data: ''
//         hasError: false
//     }

// }




