function successFunction(){
    let validEmail = false;
    let emailInput = document.getElementById('emailBox').value;
    function valid(emailInput) {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return pattern.test(emailInput);
    }

    if (valid(emailInput)) 
    {
        validEmail= true;
        document.getElementById('validity').style.visibility= 'hidden';
        
    }
    else
    {
        document.getElementById('validity').style.visibility= 'visible';
    }

    let message='';
    if(validEmail)
    {
        
    document.getElementById('showBox').style.display= 'none';
    document.getElementById('successBox').style.display= 'block';
    document.getElementById('emailConfirm').innerHTML="";
    message = document.getElementById('emailConfirm').innerHTML + 'A confirmation email has been sent to ' + '<span class= "boldText">' + emailInput + "</span>. Please open it and click the button inside to confirm your subscription.";
    document.getElementById('emailConfirm').innerHTML= message;
    console.log(message);
    }
    else{
        document.querySelector('input[type=email]').style.borderColor = "red";
        let emailColor = document.querySelector(".emailBox");
        emailColor.style.color="red";
        emailColor.style.backgroundColor = "hsla(9, 100%, 64%, 0.4)";
        
    }
}

function dismissFunction(){
    document.getElementById('successBox').style.display= 'none';
    document.getElementById('showBox').style.display= 'block';
    document.querySelector('input[type=email]').style.borderColor = "hsl(0, 0%,58%)";
        let color = document.querySelector(".emailBox");
        color.style.color="hsl(0, 0.00%, 3.10%)"
}
function errorFunction(){
    document.querySelector('input[type=email]').style.borderColor = "black";
    let emailColor = document.querySelector(".emailBox");
    emailColor.style.color="black";
    emailColor.style.backgroundColor = "white";
}