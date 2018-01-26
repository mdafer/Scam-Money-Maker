var mycaptcha="";
$(document).ready(function () {
	setInterval(function(){
		mycaptcha+=$("#cimg1").find('img').attr("src").substr(-5, 1);
	    mycaptcha+=$("#cimg2").find('img').attr("src").substr(-5, 1);
	    mycaptcha+=$("#cimg3").find('img').attr("src").substr(-5, 1);
	    mycaptcha+=$("#cimg4").find('img').attr("src").substr(-5, 1);
	    $('[name="capcha"]').val(mycaptcha);
	    $('[name="mainf"]').find(':button').trigger("click");
	    console.log(mycaptcha);
	    mycaptcha="";
	}, 1);
});