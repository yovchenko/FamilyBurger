let $images = $('.product-img');
let itemImg = Array.prototype.slice.call(document.querySelectorAll('.container .item-img'));
for (let i = 0; i < itemImg.length; i++) {
    itemImg[i].onclick = addImage;
}
function addImage() {
    let num = itemImg.indexOf(this) + 1;
    let price = document.getElementsByClassName('ribbon')[0];
    (function slideDown() {
        let hgt = 25;
        interval = setInterval(function () {
            if (50 > hgt) {
                hgt += 1/2;
                price.style.height = hgt + "%";
            } else {
                price.style.height = hgt + "%";
                clearInterval(interval);
            }
        }, 25);
    })();
    
    let description = document.getElementsByClassName('description')[0];
    $images.css('background-image', 'url(images/product/img-' + num + '.png)');
    switch (num) {
        case 1:
            price.innerHTML = '19 грн.';
            description.innerHTML = 'Найсмачніша соковита курятина – приготована на грилі,соковита куряча котлета,соковиті томати,свіжа пекінська капуста і ніжний пікантний соус у гарячій рум\'яній булочці.Справжнє задоволення !!!';
            break;
        case 2:
            price.innerHTML = '24,50 грн.';
            description.innerHTML = 'Нехай життя буде ще більш сонячним та радісним разом з чізбургером від Family Burger! Фірмове поєднання приготованої на грилі соковитої курячої котлети із злегка розплавленим бутербродним сиром, свіжа пекінська капуста, соковиті помідори і ніжний пікантний соус. Яскраве поєднання смаку та прянощів!';
            break;
        case 3:
            price.innerHTML = '34 грн.';
            description.innerHTML = 'Соковите цільне куряче філе приготоване на вогню разом з солоними огірочками, томатами, свіжою пекінською капустою, під гострим соусом Табаско. Вишуканий смак!';
            break;
        case 4:
            price.innerHTML = '30,50 грн.'
            description.innerHTML = 'Неймовірно,неймовірно барвистий і апетитний бургер із соковитим курячим філе в хрусткій паніровці, зі свіжими огірками, та томатами під пікантним часниковим соусом в м\'якій булочці з кунжутом…. Радісний смак літа!!!';
            break;
        case 5:
            price.innerHTML = '35 грн.';
            description.innerHTML = 'Величезне задоволення! Чим більше – тим краще! Саме тому, в нашому Дабл чізбургері  аж дві соковиті курячі котлети обсмажені на грилі,та аж два злегка розплавлених бутербродних сира, а також стиглі томати, свіжа пекінська капуста і ніжний пікантний соус у гарячій рум\'яній булочці.  Даблчізбургер – коли звірячий апетит!';
            break;
        case 6:
            price.innerHTML = '19 грн.';
            description.innerHTML = 'Шматочок золотистої курочки улюблений з самого дитинства, соковитий всередині, хрусткий зовні. Промаринований у східних спеціях за рецептом <br>Family Burger – наша фірмова страва.';
            break;
        case 7:
            price.innerHTML = '8 грн.';
            description.innerHTML = 'Обсмажені в рослинному фритюрі курячі крила в пікантній оригінальній паніровці. Соковиті в середині, хрусткі зовні. Чудово підійдуть як закуска до обіду або пива ммм... Неймовірно смачно...';
            break;
        case 8:
            price.innerHTML = '13,25 грн.';
            description.innerHTML = 'Легендарна картопля фрі – з апетитною хрусткою скоринкою та м’якою, розсипчастою серединкою.';
            break;
        case 9:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 10:
            price.innerHTML = '49,99 грн.';
            description.innerHTML = 'Діаметр - 30см.<br>Склад: соус,сир твердий, помідори, заправка, настоянка ніжності. ';
            break;
        case 11:
            price.innerHTML = '74 грн.';
            description.innerHTML = 'Склад: соус, куряче філе, сир, печериці, ананаси, заправка, гарний настрій';
            break;
        case 12:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 13:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 14:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 15:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 16:
            price.innerHTML = 'ціна';
            description.innerHTML = '';
            break;
        case 17:
            price.innerHTML = '35 грн.';
            description.innerHTML = 'Закручений зі смаком! Шматочки золотистого курячого філе в хрусткій паніровці, з соковитою пекінською капустою, морква по-корейськи, пікантний часниковий соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Яскрава смакота!!!';
            break;
        case 18:
            price.innerHTML = '36 грн.';
            description.innerHTML = 'Справжній Голандський сир та сир Моцарелла, з соковитою пекінською капустою, томатами, під сирним соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Дієтично, смачно, легко !!!';
            break;
        case 19:
            price.innerHTML = '36 грн.';
            description.innerHTML = 'Золотистий курячий стейк приготований на вогню, соковита пекінська капуста, помідори, під гострим соусом Тобаско, та томатним кетчупом,  загорнутий в пшеничний лаваш і підсмажений на грилі. Шедевр смаку!!!';
            break;
        case 20:
            price.innerHTML = '30 грн.';
            description.innerHTML = 'Смак соковитої золотистої курочки з ніжним сиром, , з соковитою пекінською капустою, томатами та пікантним Французьким соусом, загорнутий в пшеничний лаваш і підсмажений на грилі. Справжня насолода!!!';
            break;
        case 21:
            price.innerHTML = '00 грн.';
            description.innerHTML = '';
            break;
        case 22:
            price.innerHTML = '00 грн.';
            description.innerHTML = '';
            break;
    }
}

$('#selectMenu').change(function() {
    var $option = $('#selectMenu option:selected').text();
    var $target = '';
    if($option === 'Піца') {
        $target = $("#pizzaDiv");
        scrollToDiv ();
    }
    else if ($option === 'Роли') {
        $target = $("#rollDiv");
        scrollToDiv ();
    }
    else if ($option === 'Салати') {
        $target = $("#salatDiv");
        scrollToDiv ();
    }
    else if ($option === 'Різне') {
        $target = $("#elseDiv");
        scrollToDiv ();
    }

function scrollToDiv () {
    $('html, body').animate({
        scrollTop: $target.offset().top
    -100}, 'slow');
}
});