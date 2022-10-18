
function filterFonts(argument){

  const fontline = document.getElementsByClassName("fontline");
  for (let i = 0; i < fontline.length; i++) {
    if(!fontline[i].classList.contains(argument)){
      fontline[i].style.display = "none";
  }
}
}

$(document).ready(function(){

  // jquery va ici
  $('.filters h3').on('click',function(){
    // récupérer l'id du h3 cliqué
    var id = $(this).attr('id');
    // afficher l'id dans la console

    $('.filter ul').addClass('invisible');
    $('#'+ id +'-liste').removeClass('invisible');
  })

$('.plus').on('click',function(){
  console.log('ok');
  $('#timeline').toggleClass('open');
  })
    })
