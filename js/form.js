jQuery.extend(jQuery.validator.messages, {
    required: "Заповніть обов'язкове поле.&#8679;",
    remote: "Please fix this field.",
    email: "Введіть коректний email.&#8679;",
    url: "Please enter a valid URL.",
    date: "Please enter a valid date.",
    dateISO: "Please enter a valid date (ISO).",
    number: "Please enter a valid number.",
    digits: "Please enter only digits.",
    creditcard: "Please enter a valid credit card number.",
    equalTo: "Please enter the same value again.",
    accept: "Please enter a value with a valid extension.",
    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
    minlength: jQuery.validator.format("Please enter at least {0} characters."),
    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
document.querySelector('button[id=send]').addEventListener('click', sendForm);
function sendForm(e) {
    var textAlert = document.getElementsByClassName('textAlert')[0];
    var $contactForm = $('#contactForm');
    if ($contactForm.valid()) {
        e.preventDefault();
        $.ajax({
            url: "https://formspree.io/info@familyburger.com.ua",
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                textarea: $('#comment').val()
            },
            dataType: "json",
            beforeSend: function() { 
                textAlert.style.display = 'block';
                textAlert.innerHTML = '<div class="alert alert--loading">Відправлення…</div>';},
            success: function(data) {
                textAlert.style.display = 'block';
                textAlert.innerHTML ='<div class="alert alert--success">Надіслано! &#10003;</div>';},
            error: function(err) {
                textAlert.style.display = 'block';
                textAlert.innerHTML = '<div class="alert alert--error">Вибачте,але стався збій. &#10006;</div>';}
        })
    }
}

