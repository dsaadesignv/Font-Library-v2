window.onload = function(){

    let sectionBasic = document.getElementsByClassName("section-basic")[0];
    let sectionElegant = document.getElementsByClassName("section-elegant")[0];
    let sectionFantaisy = document.getElementsByClassName("section-fantaisy")[0];
    let sectionGothic = document.getElementsByClassName("section-gothic")[0];
    let sectionGraphic = document.getElementsByClassName("section-graphic")[0];
    let sectionSymbolic = document.getElementsByClassName("section-symbolic")[0];
    let sectionTechnology = document.getElementsByClassName("section-technology")[0];

    let soundBasic = new Audio("sound/basic.mp3");
    let soundElegant = new Audio("sound/elegant.mp3");
    let soundFantaisy = new Audio("sound/fantaisy.mp3");
    let soundGothic = new Audio("sound/gothic.mp3");
    let soundGraphic = new Audio("sound/graphic.mp3");
    let soundSymbolic = new Audio("sound/symbolic.mp3");
    let soundTechnology = new Audio("sound/technology.mp3");

    // soundBasic.muted = true;
    // soundElegant.muted = true;
    // soundFantaisy.muted = true;
    // soundGothic.muted = true;
    // soundGraphic.muted = true;
    // soundSymbolic.muted = true;
    // soundTechnology.muted = true;

    function playAudio(source) {
        source.play();
    }

    function stopAudio(source){
        source.pause();
        source.currentTime = 0;
    }

    sectionBasic.addEventListener("mouseenter", function(){
        playAudio(soundBasic);
    })
    sectionBasic.addEventListener("mouseleave", function(){
        stopAudio(soundBasic);
    })

    sectionElegant.addEventListener("mouseenter", function(){
        playAudio(soundElegant);
    })
    sectionElegant.addEventListener("mouseleave", function(){
        stopAudio(soundElegant);
    })

    sectionFantaisy.addEventListener("mouseenter", function(){
        playAudio(soundFantaisy);
    })
    sectionFantaisy.addEventListener("mouseleave", function(){
        stopAudio(soundFantaisy);
    })

    sectionGothic.addEventListener("mouseenter", function(){
        playAudio(soundGothic);
    })
    sectionGothic.addEventListener("mouseleave", function(){
        stopAudio(soundGothic);
    })

    sectionGraphic.addEventListener("mouseenter", function(){
        playAudio(soundGraphic);
    })
    sectionGraphic.addEventListener("mouseleave", function(){
        stopAudio(soundGraphic);
    })

    sectionSymbolic.addEventListener("mouseenter", function(){
        playAudio(soundSymbolic);
    })
    sectionSymbolic.addEventListener("mouseleave", function(){
        stopAudio(soundSymbolic);
    })

    sectionTechnology.addEventListener("mouseenter", function(){
        playAudio(soundTechnology);
    })
    sectionTechnology.addEventListener("mouseleave", function(){
        stopAudio(soundTechnology);
    })

}

$(document).ready(function(){
    // quand on clique sur une des lignes dans la div #filter
    $('.nav-menu ul li').on('click',function(){
        // actions au clic
        let ligne = $(this).attr('id');
        $('.font').addClass('invisible');
        $('.section-'+ligne).removeClass('invisible')
    })





})