// ------------slick-slider-----------
$('.container3__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  variableWidth: true,
  arrows: true,
  prevArrow: "<img src='image/prev.svg' alt='' class='prev' alt='1'>",
  nextArrow: "<img src='image/next.svg' alt=''class='next' alt='2'>",
  dots: true,
  centerPadding: '30px',
  infinite: true,
  centerMode: true,
  easing: 'ease',

  //   responsive: [
  //     {
  //       breakpoint: 1160,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,

  //       }
  //     },
  //       {
  //         breakpoint: 800,
  //         settings: {
  //           slidesToShow: 1,
  //           slidesToScroll: 1
  //         }
  //       },
  //     ]
});

$(document).ready(function () {
  $('.container__article-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
  })
});
// ------------container2-location-----------
$(document).ready(function () {
  $('.location__text').each(function () {
    let link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent($(this).text()) + "' target='_blank'>" + $(this).text() + "</a>";
    $(this).html(link);
  });
});
// ------------form-location-----------
$(document).ready(function () {
  $('.getintouch__location').each(function () {
    let link = "<a href='http://maps.google.com/maps?q=" + encodeURIComponent($(this).text()) + "' target='_blank'>" + $(this).text() + "</a>";
    $(this).html(link);
  });
});

// ----------------showModal------------

// Get the modal
let modal = document.getElementById("myModal");
// Get the button that opens the modal
let btn = document.getElementById("btn1");
// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let modal2 = document.getElementById("myModal2");
let btn2 = document.getElementById("btn2");
let span2 = document.getElementsByClassName("close2")[0];
btn2.onclick = function () {
  modal2.style.display = "block";
}
span2.onclick = function () {
  modal2.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
}

let modal3 = document.getElementById("myModal3");
let btn3 = document.getElementById("btn3");
let span3 = document.getElementsByClassName("close3")[0];
btn3.onclick = function () {
  modal3.style.display = "block";
}
span3.onclick = function () {
  modal3.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
}
// ----------------Burger-menu------------
let menuBtn = document.querySelector('.header__menu-btn');
let menu = document.querySelector('.header__menu');

menuBtn.addEventListener('click', function () {
  menuBtn.classList.toggle('active');
  menu.classList.toggle('active');
});

// ----------------Button back to top------------
function backToTop()
{
    let button = $('.back_to_top');
    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50)
        {
            button.fadeIn();
        }else{
            button.fadeOut();
        }
    });
    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}
backToTop();
