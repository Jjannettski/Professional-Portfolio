// Initialize Firebase
  var config = {
    apiKey: "AIzaSyC8GPO10DFqxsBHmNfSSyOiouWxgDcKm50",
    authDomain: "portfoliosite-cdcf9.firebaseapp.com",
    databaseURL: "https://portfoliosite-cdcf9.firebaseio.com",
    projectId: "portfoliosite-cdcf9",
    storageBucket: "portfoliosite-cdcf9.appspot.com",
    messagingSenderId: "330230773168"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

$("#submit-btn-story").on("click",function(){

var firstName = $(".firstn1").val();
    console.log(firstName);
var lastName = $(".lastn1").val();
    console.log(lastName);
var email = $(".email1").val();
    console.log(email);
var phoneNumber = $(".phone1").val();
    console.log(phoneNumber);
var website = $(".web1").val();
    console.log(website);
var additionalInfo = $(".additional1").val();
    console.log(additionalInfo);



 database.ref("Clients").push({
        FirstName: firstName,
        LastName: lastName,
        Email: email,
        PhoneNumber: phoneNumber,
        Website: website,
        additionalInfo: additionalInfo
    });
});

$("#submit-btn-hire").on("click",function(){

var firstName2 = $(".firstn2").val();
    console.log(firstName2);
var lastName2 = $(".lastn2").val();
    console.log(lastName2);
var email2 = $(".email2").val();
    console.log(email2);
var phoneNumber2 = $(".phone2").val();
    console.log(phoneNumber2);
var employment = $(".employ2").val();
    console.log(employment);
var compensation = $(".comp2").val();
    console.log(compensation);
var additionalInfo2 = $(".additional2").val();
    console.log(additionalInfo2);



 database.ref("Jobs").push({
        FirstName: firstName2,
        LastName: lastName2,
        Email: email2,
        PhoneNumber: phoneNumber2,
        EmploymentType: employment,
        Compensation: compensation,
        AdditionalInfo: additionalInfo2
    });
});
