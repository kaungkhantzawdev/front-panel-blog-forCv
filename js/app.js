// let dark = document.getElementById('dark');
// let darkModeBtn = document.getElementById('darkMode');
// let icon = document.getElementById('modeIcon');
//
// darkModeBtn.onclick = function () {
//     dark.classList.toggle("dark-mode");
//     if(icon.classList.contains('bi-moon-fill')){
//         icon.classList.remove('bi-moon-fill');
//         icon.classList.add('bi-sun-fill');
//     }else {
//         icon.classList.remove('bi-sun-fill');
//         icon.classList.add('bi-moon-fill');
//     }
// }

$('.darkMode').click(function () {
    $('.dark').toggleClass('dark-mode');
    if($('.modeIcon').hasClass('bi-moon-fill')){
        $('.modeIcon').removeClass('bi-moon-fill');
        $('.modeIcon').addClass('bi-sun-fill');
    }else {
        $('.modeIcon').removeClass('bi-sun-fill');
        $('.modeIcon').addClass('bi-moon-fill');
    }
});

// $('.search-btn').click(function () {
//     $('.search-form').toggleClass('show-search');
// });


$(window).scroll(function () {
      if($(this).scrollTop()){
          $('.header').addClass('shadow-sm');
          $('.header').addClass('position-sticky');
          $('.header').addClass('top-0');
      }else {
          $('.header').removeClass('shadow-sm');
          $('.header').removeClass('position-fixed');
      }
    }
);

let menu = document.getElementById('menu');
let menuItem = document.getElementById('menuItem');
menu.onclick = function(){
    menu.classList.toggle('menu-ani');

}