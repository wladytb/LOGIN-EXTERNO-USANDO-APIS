$(document).ready(function () {
    resize();
    $(window).resize(function () {
        resize();
    });
    function resize() {
        $(".body").css('height', ($(window).height()) + "px");
    }
    $('#btnsalir').on('click', function (event) {
        if (typeof tp !== 'undefined') {
            if (tp === 'fc')
                fbLogout(true);
            else if (tp === 'gh')
                logout(true);
            else if (tp === 'gg')
                signOut(true);
            else if (tp === 'tw')
                salirTwitter(true);
        }
    });
});

function verifiuserlogin()
{
    if (window.location.search.substring(1).includes('idU=')) {
        var vars = window.location.search.substring(1).replace("idU=", "").split('&');
        verificarUsermain(JSON.stringify({idU: vars[0]}));
    } else {
        window.location.href = '../index.html';
    }
}
var tp;
function verificarUsermain(data) {
    $.ajax({
        type: "POST",
        url: "https://wslogin.herokuapp.com/ws/login/getData",
        //url: "http://localhost:8080/loingApisWS/ws/login/getData",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: data,
        success: function (response) {
            if (response.length > 0) {
                tp = response[0].api;
                if (response[0].api === 'gh')
                    $(".redes-sociales").append('<i class="github fab fa-github-square"></i>');
                else
                if (response[0].api === 'fc')
                    $(".redes-sociales").append('<i class="facebook fab fa-facebook-square"></i>');
                else
                if (response[0].api === 'gg')
                    $(".redes-sociales").append('<img src="../img/google.png" alt=""/>');
                else
                if (response[0].api === 'in')
                    $(".redes-sociales").append('<img class="instagram" src="../img/instagram.png" alt=""/>');
                else
                if (response[0].api === 'tw')
                    $(".redes-sociales").append('<i class="twitter fab fa-twitter-square"></i>');

                console.log("responde el servicio");
                console.log(response);
                $.each(response, function (item, val) {
                    if (typeof val.photo !== 'undefined' && val.photo !== 'null' && val.photo !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row row-img"> <img src="' + val.photo + '" alt=""/></div>');
                    }
                    if (typeof val.firstName !== 'undefined' && val.firstName !== 'null' && val.firstName !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>Nombre:</label><label>' + val.firstName + '</label></div>');
                    }
                    if (typeof val.lastName !== 'undefined' && val.lastName !== 'null' && val.lastName !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>Apellido:</label><label>' + val.lastName + '</label></div>');
                    }
                    if (typeof val.email !== 'undefined' && val.email !== 'null' && val.email !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>E-mail:</label><label>' + val.email + '</label></div>');
                    }
                    if (typeof val.idApis !== 'undefined' && val.idApis !== 'null' && val.idApis !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>idApi:</label><label>' + val.idApis + '</label></div>');
                    }
                    if (typeof val.userName !== 'undefined' && val.userName !== 'null' && val.userName !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>userName:</label><label>' + val.userName + '</label></div>');
                    }
                    if (typeof val.password !== 'undefined' && val.password !== 'null' && val.password !== '')
                    {
                        $(".contenedor").children(':last').before('<div class="row"> <label>password:</label><label>' + val.password + '</label></div>');
                    }
                });

            } else {
                console.log("no hay datos");
                console.log(response);
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}