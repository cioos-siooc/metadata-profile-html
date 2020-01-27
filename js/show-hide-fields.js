$(document).ready(function(){

    $('.mc-content').hide();

    $('#show-mandatory').click(function(e) {
        $('.optional, .recommended').slideToggle(100, "swing");
        $(this).html($('#show-mandatory').text() == 'Show all fields' ? 'Show only mandatory fields' : 'Show all fields');
    })

    $('.expand').click(function(e) {
        var $this = $(this).parents('section');
        $this.toggleClass("expanded");
        $this.find('.mc-content').slideToggle(100, "swing");
        e.preventDefault();
    })

});