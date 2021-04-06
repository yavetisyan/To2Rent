$(document).ready(function () {
  $(".slider").slick({
    prevArrow:
      '<button class="slick-arrow slick-prev">	<img src="images/prev.svg" alt="prev arrow">	</button>',
    nextArrow:
      '<button class="slick-arrow slick-next">	<img src="images/next.svg" alt="next arrow">	</button>',
    fade: true,
		responsive:[
			{
				breackpoint: 441,
				settings:{
					arrows:false
				}
			}
		]
  });
});
