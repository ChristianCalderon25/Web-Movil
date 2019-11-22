$(document).ready(function () {
    $("#bodytext1").hide();
    $("#bodytext2").hide();
    $("#bodytext3").hide();
    $("#bodytext4").hide();
    $("#bodytext5").hide();
    $("#bodytext6").hide();

});

$(document).ready(function () {

    $("#botonhome").click(function () {
        $("#bodytext2").hide();
        $("#bodytext3").hide();
        $("#bodytext4").hide();
        $("#bodytext5").hide();
        $("#bodytext6").hide();

        $("#bodytext1").show();
    });
});

$(document).ready(function () {

    $("#botonabout").click(function () {
        $("#bodytext1").hide();
        $("#bodytext3").hide();
        $("#bodytext4").hide();
        $("#bodytext5").hide();
        $("#bodytext6").hide();

        $("#bodytext2").show();

    });
});
$(document).ready(function () {

    $("#botongame").click(function () {
        $("#bodytext1").hide();
        $("#bodytext2").hide();
        $("#bodytext4").hide();
        $("#bodytext5").hide();
        $("#bodytext6").hide();

        $("#bodytext3").show();

    });
});
$(document).ready(function () {

    $("#botonrules").click(function () {
        $("#bodytext1").hide();
        $("#bodytext2").hide();
        $("#bodytext3").hide();
        $("#bodytext5").hide();
        $("#bodytext6").hide();

        $("#bodytext4").show();
    });
});
$(document).ready(function () {

    $("#botoncontact").click(function () {
        $("#bodytext1").hide();
        $("#bodytext2").hide();
        $("#bodytext3").hide();
        $("#bodytext4").hide();
        $("#bodytext6").hide();


        $("#bodytext5").show();
    });
});

$(document).ready(function () {

    $("#botoncommensts").click(function () {
        $("#bodytext1").hide();
        $("#bodytext2").hide();
        $("#bodytext3").hide();
        $("#bodytext4").hide();
        $("#bodytext5").hide();


        $("#bodytext6").show();
    });
});
