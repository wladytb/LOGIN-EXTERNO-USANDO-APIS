function signinTwitter()
{
    try {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
                .then(() => {
                    var provider = new firebase.auth.TwitterAuthProvider();
                    return  firebase.auth().signInWithPopup(provider);
                }).catch((error) => {
            console.log(error.message);
        });
    } catch (error) {
        console.log(error);
    }
}
var tt;
firebase.auth().onAuthStateChanged((user) => {
    try {
        if (user)
        {
            tt= user;
            if (user.providerData[0].providerId === "twitter.com") {

            }
            verificarUser(JSON.stringify(
                    {userName: "null",
                        password: "null", firstName: String(user.displayName), lastName: "null",
                        email: String(user.email), photo: String(user.photoURL),
                        idApis: String(user.uid), api: 'tw', tp: 1}));
            console.log(user);
        }
    } catch (error) {

    }
});

function salirTwitter(a) {
    firebase.auth().signOut().then(function (response) {
        if (a)
            window.location.href = '../index.html';
        console.log(response);
    }).catch(function (error) {
        console.log(error);
    });
}
$(document).on('click', '#twitter', function (e) {
    e.preventDefault();
    twitterSi = true;
    signinTwitter();
});