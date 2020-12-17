$(document).ready(() => {
    $('#open_btn').click(() => {
        $(".left-panel").animate({
            width: "15%"
        });

        $('#open_btn').hide();
    })

    $('#close_btn').click(() => {
        $(".left-panel").animate({
            width: "0"
        });

        setTimeout(function() {
            $('#open_btn').show();
        }, 350)

    })

    $('#overlay_btn').click(() => {
        if ($('.overlay').height() == 30) {
            $(".overlay").animate({
                height: "300px"
            });
        } else {
            $(".overlay").animate({
                height: "30px"
            });
        }
    })
})