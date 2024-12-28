let password = document.getElementById("contrasena");
let goBoton = document.getElementById("go");
let cleanBoton = document.getElementById("clean");
let copyBoton = document.getElementById("copiar");
let arr = [];

const digsCompletos = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '{', '|', '}', '~',
    ];

goBoton.addEventListener("click", ()=>{
    let longitud = document.getElementById("digitos").value;
    if (longitud<=50){
        for(i=0; i<longitud; i++){
            let x = Math.floor(Math.random() * 93);
            arr.push(digsCompletos[x]);
        }
        arr = arr.toString().replaceAll(",", '');
        
        password.value = arr;
    } 
})
copyBoton.addEventListener("click", ()=>{
    let textCopy = password;
    textCopy.select();
    textCopy.setSelectionRange(0, 100);
    navigator.clipboard.writeText(textCopy.value);
})

cleanBoton.addEventListener("click", ()=>{
    password.value = '';
    arr = [];
})


