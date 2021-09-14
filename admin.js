function FetchAllData(){
    firebase.database().ref('Reports').once('value',function(snapshot){
        snapshot.forEach(
            
            function(ChildSnapshot){
                let name = ChildSnapshot.val().name;
                let email = ChildSnapshot.val().email;
                let loc =  ChildSnapshot.val().location;
                let des = ChildSnapshot.val().description;
                
                var str = `<tr><td>${name}</td><td>${email}</td><td>${loc}</td><td>${des}</td></tr>`
	 document.getElementById("table_reportData").appendChild = str;
	
            }
        )
    });
}


function saveInspection() {
    let userID = auth.currentUser.uid;
    alert(userID);
    // let userID="Mahika";
    let name = document.getElementById("A_nameField").value;
    let phone = document.getElementById("A_phoneField").value;
    let email = document.getElementById("A_emailField").value;
    let reporter_email = document.getElementById("A_userEmailField").value;
    let location = document.getElementById("A_locationField").value;
    let description = document.getElementById("A_descriptionField").value;
    firebase.database().ref('Inspections/' + userID + '/').set({
        name: name,
        phoneNumber: phone,
        email: email,
        reporter_email: reporter_email,
        location: location,
        description: description
    })
        .then(() => {
            alert('Inspection Saved!')
        })
        .catch((error) => {
            console.error("Error writing Inspection: ", error);
        });
    var brRef = firebase.database().ref("InspectionForms");
    brRef.push({
        name: name,
        phoneNumber: phone,
        email: email,
        reporter_email: reporter_email,
        location: location,
        description: description
    })
        .then(() => {
            alert('Data Saved!')
        })
        .catch((error) => {
            console.error("Error writing Data: ", error);
        });
}