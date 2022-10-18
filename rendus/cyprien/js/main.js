// JavaScript

let text = "Open Font Library is a website dedicated to hosting fonts under free license and encouraging their collaborative development, in the manner of free software. It is associated with Open Clip Art Library, a site hosting free clipart in SVG format, whose principles it follows. The initiative was launched in 2006, and a site was opened in 2008. The site did not evolve much until it was presented at the 2011 Libre Graphics Meeting in Montreal1,2. This site was developed using the PHP framework Aiki2.";

window.onload = function (){
    // Tags On/Off
    let mainButtons = [].slice.call(document.getElementsByClassName("main-filters-tags"));

    mainButtons.forEach(button => {
        button.addEventListener("click", function () {
            if(button.classList.contains("main-is-selected")){
                button.classList.remove("main-is-selected")
            } else {
                button.classList.add("main-is-selected")
            }
        })
    });

    // Color selector
    $(".main-colors").on("click",function(){
        let couleur = $(this).attr("id");
        $("#col-2").removeClass();
        $("#col-2").addClass("col");
        $("#col-2").addClass(couleur);
        $(".main-colors").removeClass("selected");
        $(this).addClass("selected");
    });

    // Toggle list
    let elToggle  = document.querySelector(".main-font-top");
    let elContent = document.querySelector(".main-font-content");

    elToggle.addEventListener("click", () => {
        $(elContent).slideToggle();
    });

    // Text editor
    $(".input-font").text(text); // Chargement, on écrit la variable "text" dans tous les <p>
    $(".input-font").on('input',function(){ // Quand on écrit dans n'importe quel <p>, qui pour class ".inut-font"
        text = $(this).text(); // On actualise la varaible "text"
        $(".input-font").text(text); // et on applique à nouveau la varaible "text"
    });

    // Col Responsive
    $('.main-close').on('click',function(){
        if($('#main').attr('data-col-1')=='1'){
            $('#main').attr('data-col-1','0');
        }else{
            $('#main').attr('data-col-1','1');
        }        
    })
    $('#col-1').on('click',function(){
        if($('#main').attr('data-col-1')=='0'){
            $('#main').attr('data-col-1','1');
        }else{
            $('#main').attr('data-col-1','0');
        }        
    })

}