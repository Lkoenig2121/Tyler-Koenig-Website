// Getting the data
const name = document.querySelector('#name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const success = document.querySelector('#success');
const errorNodes = document.querySelectorAll('.error');
      
$(document).ready(function() {
        $('.submit').click(function (event) {
         
            var name = $('#name').val()
            var email = $('#email').val()
            var message = $('#message').val()
            var statusElm = $('.status')
            statusElm.empty()

            if (email.length > 5 && email.includes('@') && email.includes('.')) {
                statusElm.append('<div>Email is valid</div>') // .append means that we are adding html inside of the element
            } else {
                statusElm.append('<div>Email is not valid</div>')
                event.preventDefault();
            }

            if (name.length > 0) {
                statusElm.append('<div>Name is valid</div>')
            } else {
                statusElm.append('<div>Name is not valid</div>')
                event.preventDefault();
            }

            if (message.length > 0) {
                statusElm.append('<div>Message is valid</div>')
            } else {
                statusElm.append('<div>Message cannot be empty</div>')
                event.preventDefault();
            }

        })
})              