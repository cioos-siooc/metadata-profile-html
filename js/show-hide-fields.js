$(document).ready(function(){

    var i = 1;
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

    $('#expand-all').click(function(e) {
        $(this).html($('#expand-all').text() == 'Collapse all fields' ? 'Expand all fields' : 'Collapse all fields');
        if (i % 2 === 0) {
            $('.mc-content').each(function() {
                $(this).hide(200);
            });
        }
        else {
            $('.mc-content').each(function() {
                $(this).show(200);
            });
        }
        e.preventDefault();
        i++;
    })

});