/* Slide 09 (#3) */
function signUp_Admin(){
    var userEmail=document.getElementById("admin_username").value;
    var userPassword=document.getElementById("admin_password").value;
    var userName=document.getElementById("admin_fName").value;
    var userSurname=document.getElementById("admin_sName").value;
    auth.createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
        var user = auth.currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
            console.log(uid);
        }
        var firebaseRef = firebase.database().ref();
            var userData = {
                userFullName: userName,
                userSurname: userSurname,
                userEmail: userEmail,
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../admin.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
}

/* Slide 09 (#4) */
function signIn_Admin(){
    var userSIEmail=document.getElementById("admin_uname").value;
    var userSIPassword=document.getElementById("admin_passname").value;
    auth.signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
        swal({
            icon: 'success',
            title: 'Succesfully signed in', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("./admin.html");
            }, 1000)
        });
    }).catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     swal({
         icon: 'error',
         title: 'Error',
         text: "Error",
     })
 });
}

/* Slide 09 (#5) */
function signUp_User(){
    var userEmail=document.getElementById("user_username").value;
    var userPassword=document.getElementById("user_password").value;
    var userName=document.getElementById("user_fName").value;
    var userSurname=document.getElementById("user_sName").value;
    auth.createUserWithEmailAndPassword(userEmail, userPassword).then((success) => {
        var user = auth.currentUser;
        var uid;
        if (user != null) {
            uid = user.uid;
            console.log(uid);
        }
        var firebaseRef = firebase.database().ref();
            var userData = {
                userFullName: userName,
                userSurname: userSurname,
                userEmail: userEmail,
            }
            firebaseRef.child(uid).set(userData);
            swal('Your Account Created','Your account was created successfully, you can log in now.',
            ).then((value) => {
                setTimeout(function(){
                    window.location.replace("../users.html");
                }, 1000)
            });
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            swal({
                icon: 'error',
                title: 'Error',
                text: "Error",
            })
        });
}

/* Slide 09 (#6) */
function signIn_User(){
    var userSIEmail=document.getElementById("user_uname").value;
    var userSIPassword=document.getElementById("user_passname").value;
    auth.signInWithEmailAndPassword(userSIEmail, userSIPassword).then((success) => {
        swal({
            icon: 'success',
            title: 'Succesfully signed in', 
        }).then((value) => {
            setTimeout(function(){
                window.location.replace("./users.html");
            }, 1000)
        });
    }).catch((error) => {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     swal({
         icon: 'error',
         title: 'Error',
         text: "Error",
     })
 });
}