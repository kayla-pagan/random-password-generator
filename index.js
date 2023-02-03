const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-one")
let passwordTwoEl = document.getElementById("password-two")

function generatePass() {
    randomCharacters()
    passwordOneEl.textContent = randomCharacters()
    passwordTwoEl.textContent = randomCharacters()
}

function randomCharacters() {
    let password = ""
    for ( let i = 0; i < 16; i++) {
        let randomIndex = Math.floor( Math.random() * characters.length )
        password += characters[randomIndex] 
    }
    return password
}

var copy = document.querySelectorAll(".copy"); 

for (const copied of copy) { 
  copied.onclick = function() { 
    document.execCommand("copy"); 
  };  
  copied.addEventListener("copy", function(event) { 
    event.preventDefault(); 
    if (event.clipboardData) { 
      event.clipboardData.setData("text/plain", copied.textContent);
      console.log(event.clipboardData.getData("text"))
    };
  });
};





