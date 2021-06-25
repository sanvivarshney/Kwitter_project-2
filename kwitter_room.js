  var firebaseConfig = {
    apiKey: "AIzaSyDwyWtQkLjIQmugT9ZKk_-q_PmRCzBobis",
    authDomain: "web-chat-app-3735b.firebaseapp.com",
    databaseURL: "https://web-chat-app-3735b-default-rtdb.firebaseio.com",
    projectId: "web-chat-app-3735b",
    storageBucket: "web-chat-app-3735b.appspot.com",
    messagingSenderId: "181887373129",
    appId: "1:181887373129:web:47ae27861f35a3c7d09498",
    measurementId: "G-GVBF1Y7ELN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function logout() 
  {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "kwitter.html";
  }