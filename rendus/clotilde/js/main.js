$(document).ready(function(){

	/*Colonne 4*/
	$('.icon1').on('click',function(){
		if($('#main').attr('data-col-4')=='1'){
			$('#main').attr('data-col-4','0');
		}else{
			$('#main').attr('data-col-4','1');
		}
	})

	/*Curseur*/
	$('.a_1').on('click',function(){
    	$('.icons_bas1').toggle();
  	});
  	$('.a_2').on('click',function(){
    	$('.icons_bas2').toggle();
  	});
  	$('.a_3').on('click',function(){
    	$('.icons_bas3').toggle();
  	});
  	$('.a_4').on('click',function(){
    	$('.icons_bas4').toggle();
  	});
  	$('.a_5').on('click',function(){
    	$('.icons_bas5').toggle();
  	});
  	$('.a_6').on('click',function(){
    	$('.icons_bas6').toggle();
  	});
  	$('.a_7').on('click',function(){
    	$('.icons_bas7').toggle();
  	});
  	$('.a_8').on('click',function(){
    	$('.icons_bas8').toggle();
  	});
  	$('.a_9').on('click',function(){
    	$('.icons_bas9').toggle();
  	});
  	$('.a_10').on('click',function(){
    	$('.icons_bas10').toggle();
  	});
  	$('.a_11').on('click',function(){
    	$('.icons_bas11').toggle();
  	});

  	/*Colonne 3*/
	$('.font-plus').on('click',function(){
		let nom = $(this).data('fonta');
		let fav = $('<div>');
		fav.addClass(nom.substring(0, 3));
		fav.addClass('fav1');
		fav.addClass('And');
		fav.append('<p>'+ nom.substring(0, 3) +'</p>');
		$('#col-3').append(fav);
		$('#main').attr('data-col-3','1');
	})  

	$('.font-plus2').on('click',function(){
		let nom = $(this).data('font');
		let fav = $('<div>');
		fav.addClass(nom.substring(0, 3));
		fav.addClass('fav2');
		fav.addClass('Jan');
		fav.append('<p>'+ nom.substring(0, 3) +'</p>');
		$('#col-3').append(fav);
		$('#main').attr('data-col-3','1');

	})  

	$('.icon_plus').on('click',function(){
		$('#main').attr('data-col-3','0');
	})  



})

/*	
$('.icons_tiroir .a_1').on('click',function(){
	console.log('ksfghkjzrbkzs');
    $(this).parent().parent().children('icons_bas1').toggle();
});
*/