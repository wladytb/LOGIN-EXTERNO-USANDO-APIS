function verificarUser(data) {
    $.ajax({
        type: "POST",
        url: "https://wslogin.herokuapp.com/ws/login/checkUser",
        //url: "http://localhost:8080/loingApisWS/ws/login/checkUser",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: data,
        success: function (response) {
            if (response.length > 0) {
                console.log("responde el servicio");
                console.log(response);
                 window.location.href = 'pages/principal.html?idU=' + response[0];
            } else {
                console.log("no hay datos");
                console.log(response);
                toast('Alert', 'Datos incorrectos!.', '<i class="fas fa-exclamation-circle"></i>');
                toast('Error', 'Error al iniciar sesión.', '<i class="fas fa-times-circle"></i>');
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}
function saveUser(data) {
    $.ajax({
        type: "POST",
        url: "https://wslogin.herokuapp.com/ws/login/save",
        //url: "http://localhost:8080/loingApisWS/ws/login/save",
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        data: data,
        success: function (response) {
            console.log(response);
            if (response > 0) {
                console.log("responde el servicio");
                console.log(response);
                toast('Sucess', 'Se ha registrado correctamente!.', '<i class="fas fa-check-circle"></i>');
                $("#btn-cancel").click();
            } else {
                console.log("no hay datos");
                console.log(response);
                toast('Alert', 'No se ha podido registrar!.', '<i class="fas fa-exclamation-circle"></i>');
                toast('Error', 'Error al guardar datos!.', '<i class="fas fa-times-circle"></i>');
            }
            $('#btn-cancel').removeAttr('disabled');
            $('#btn-save').removeAttr('disabled');
        },
        error: function (error) {
            $('#btn-cancel').removeAttr('disabled');
            $('#btn-save').removeAttr('disabled');
            console.log(error);
            toast('Error',error, '<i class="fas fa-times-circle"></i>');
        }
    });
}