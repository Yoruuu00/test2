$(document).ready(function() {
            $('button[type="submit"]').click(function() {
                const name = $('#floatingInputName').val();
                const email = $('#floatingInputEmail').val();
                const message = $('#floatingTextareaMessage').val();

                if (name === '' || email === '' || message === '') {
                    alert('Please fill in all fields');
                } else {
                    alert('Form has been submitted successfully!');
                }
            });
        });
