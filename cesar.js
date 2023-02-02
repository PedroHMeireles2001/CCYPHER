const alphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];


function cypher(text){
    text = text.toUpperCase()
    chave = parseInt(document.querySelector("#chave").value)
    resultado = ""
    listaCaracteres = text.split('')
    listaCaracteres.forEach(char => {
        if(alphabet.includes(char)){
            charIndex = alphabet.indexOf(char)
            newCharIndex = charIndex + chave <= 25 ? charIndex + chave : (charIndex + chave) - 26
            resultado = resultado + alphabet[newCharIndex]
        }else{
            resultado = resultado + char
        }
    });

    document.querySelector("#resultado").value = resultado
}

function decypher(text){
    text = text.toUpperCase()
    chave = parseInt(document.querySelector("#chave").value)
    resultado = ""
    listaCaracteres = text.split('')
    listaCaracteres.forEach(char => {
        if(alphabet.includes(char)){
            charIndex = alphabet.indexOf(char)
            newCharIndex = charIndex - chave >= 0 ? charIndex - chave : (charIndex - chave) + 26
            resultado = resultado + alphabet[newCharIndex]
        }else{
            resultado = resultado + char
        }
    });

    document.querySelector("#resultado").value = resultado
}
