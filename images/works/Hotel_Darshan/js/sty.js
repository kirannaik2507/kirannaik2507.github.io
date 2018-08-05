
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 2000); // Change image every 2 seconds
}


   
		$(window).scroll(function() {
		if ($(this).scrollTop() > 1){  
			$('header').addClass("sticky");
		  }
		  else{
			$('header').removeClass("sticky");
		  }
		});
	
  


  	var header = document.getElementById("myDIV");
	var btns = header.getElementsByClassName("btn");
	for (var i = 0; i < btns.length; i++) {
	  btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	  });
	}
  
  

  $(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});



    <script type="text/javascript">
	  // create animation
	AOS.init();

    <script>
 $(document).ready(function() {
    $("#datepicker").datepicker();
  });



$(".anisocl").hover(
  function () {
    $(this).addClass("animated bounce");
  },
  function () {
    $(this).removeClass("animated bounce");
  }
);

    <script>
$(".lgo").hover(
  function () {
    $(this).addClass("animated rubberBand");
  },
  function () {
    $(this).removeClass("animated rubberBand");
  }
);

   
  function validate(fillid)
    {
        var a=document.getElementById(fillid);
        a.style.background="white";
        if(a.value=="")
            {
                a.style.border="2px solid red";
            }
        else{
            a.style.border="2px solid green";
        }
    }
