$(document).ready(function(){
//change color of button when selected
var classHighlight = 'highlight';
var $thumbs = $('.navBtn').click(function(e) {
    e.preventDefault();
    $thumbs.removeClass(classHighlight);
    $(this).addClass(classHighlight);
});

// switch between the two tabs - personal info and social profile
    $("#socialBtn").click(function(){
        $("#personal_tab").hide();
        $("#social_tab").fadeIn("slow");
    });
    $("#personalBtn").click(function(){
        $("#social_tab").hide();
        $("#personal_tab").fadeIn("slow");
    });
});
