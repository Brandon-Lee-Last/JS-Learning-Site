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
                height: "350px"
            });
        } else {
            $(".overlay").animate({
                height: "30px"
            });
        }
    })

    $('#overlay2_btn').click(() => {
        if ($('.overlay2').height() == 30) {
            $(".overlay2").animate({
                height: "300px"
            });
        } else {
            $(".overlay2").animate({
                height: "30px"
            });
        }
    })

    //Input examples logic.

    $('#test-div').click((event) => {
        if (event.target.id == "input2") {
            $("input[name=input]:checked").next().css('color', 'limegreen');
        } else {
            $("input[name=input]:checked").next().css('color', 'red');
        }
    })
})