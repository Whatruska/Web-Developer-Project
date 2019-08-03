document.addEventListener("DOMContentLoaded", function() {
	$(document).ready(function () {
		$(".header-content-links").on("click", "a", function (event) {
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({ scrollTop: top }, 1500);
		});
	});
	function removeClass(elem, clas){
		elem.classList.remove(clas);
	}
	function addClass(elem, clas){
		elem.classList.add(clas);
		console.log()
	}
	function isActive(elem) {
		var result = false;
		var classList = elem.classList;
		var targetClass = 'btn-portfolio-active';
		for(var i = 0; i < classList.length; i++){
			if (classList[i] == targetClass){
				result = true;
			}
		}
		//console.log('isActive - ' + classList + ' ' + result);
		return result;
	}
	function findActive(){
		var index = -1;
		$('.btn-portfolio').each(function (i){
			if (isActive($('.btn-portfolio')[i])){
				index = i;
			}
		});
		return index;
	}
	var curr = 0;
	$('.btn-portfolio').on('click', function(){

		removeClass($('.btn-portfolio')[curr], 'btn-portfolio-active');
		addClass(this, 'btn-portfolio-active');

		removeClass($('.portfolio-item')[curr], 'portfolio-item-active');
		curr = findActive();
		addClass($('.portfolio-item')[curr], 'portfolio-item-active');
	});
	//console.log($('.btn-portfolio')[curr].classList);
});
