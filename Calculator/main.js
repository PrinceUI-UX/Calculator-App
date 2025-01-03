let display = document.getElementById("display");
let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map(function(button){
    button.addEventListener("click", function(e){
        switch(e.target.innerText) {
            case "C":
                display.innerText = "";
                break;
            case "=":
                try {
                  display.innerText = eval(display.innerText);
                }
                catch {
                    display.innerText = "error"
                }
                break;
            case "CE":
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0, -1);
                }    
                break;
            case "%":
                try {
                    display.innerText = display.innerText/100;
                }
                catch {
                    display.innerText = "error"
                }
                break;
            case "sqrt":
                try {
                    display.innerText = (Math.sqrt(display.innerText));
                    break;
                }
                catch {
                    display.innerText = "error"
                }
                break;
            case "sin":
                try{
                    display.innerText = Math.sin(display.innerText);
                    break;
                }
                catch {
                    display.innerText = "error"
                }
                break;
            case "cos":
                try {
                    display.innerText = Math.cos(display.innerText);
                    break;
                }
                catch {
                    display.innerText = "error"
                }
                break;
            case "tan":
                try{
                    display.innerText = Math.tan(display.innerText);
                    break;
                }
                catch {
                    display.innerText = "error";
                }
                break;
            case "pi":
                display.innerText += 3.1415;
                break;

            default:
                display.innerText += e.target.innerText;

        }
    });
});