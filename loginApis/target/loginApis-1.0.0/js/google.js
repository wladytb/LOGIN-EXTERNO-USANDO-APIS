var gg;
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(googleUser);
    gg = profile;
    try {
        verificarUser(JSON.stringify(
                {userName: "null",
                    password: "null", firstName: String(profile.getGivenName()), lastName: String(profile.getFamilyName()),
                    email: String(profile.getEmail()), photo: String(profile.getImageUrl()),
                    idApis: String(profile.getId()), api: 'gg', tp: 1}));
    } catch (error) {

    }
//    document.getElementById("imaUsuario").src = profile.getImageUrl().toString();
//    document.getElementById("use").innerHTML = profile.getName().toString();
//    document.getElementById("correo").innerHTML = profile.getEmail();
}
function signOut(a) {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        if (a)
            window.location.href = '../index.html';
        console.log('User signed out.');
    });
}
$(document).on('click', '#googleClick', function (e) {
    e.preventDefault();
    $(".abcRioButtonContentWrapper").click();
});
