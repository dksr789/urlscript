// Initialize Firebase with your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyBqyuLE6lekU-NngH_RHxEnYBVZExDdLY8",
    authDomain: "urlstored.firebaseapp.com",
    databaseURL: "https://urlstored-default-rtdb.firebaseio.com",
    projectId: "urlstored",
    storageBucket: "urlstored.appspot.com",
    messagingSenderId: "217888652046",
    appId: "1:217888652046:web:8f29659da1962ac62ff55f"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const urlsRef = database.ref("urls");
const ytbtn = document.getElementById('button1');

document.getElementById("button2").addEventListener("click", () => {
    const url = prompt("Enter a URL to store:");

    if (url) {
        // Check if the URL already exists
        urlsRef.once("value")
            .then(snapshot => {
                const data = snapshot.val();
                if (data && Object.values(data).includes(url)) {
                    alert("URL already exists!");
                } else {
                    // Add the URL to the database
                    const newUrlRef = urlsRef.push();
                    newUrlRef.set(url);
                    alert("URL added to the database!");
                }
            })
            .catch(error => {
                console.error("Error checking for duplicate URL:", error);
            });
    }
});


function enableButton() {
    document.getElementById("button2").removeAttribute("disabled");
}

function openYouTubeChannel() {
    window.open('https://www.youtube.com/channel/UChT4Taq8bKvE8cuoblNpJoA');
    ytbtn.style.display = "none";
    step1.style.display= "none";
}

ytbtn.addEventListener('click', openYouTubeChannel);
