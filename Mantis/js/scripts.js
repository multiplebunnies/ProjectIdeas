//down arrow in sidebar container toggles

$('#navheading a').click(function(){
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
});