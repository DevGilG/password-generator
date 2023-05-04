const inputEl = document.getElementById ("senha")
const upperCaseCheckEl = document.getElementById ("uppercase-check")
const numberCheckEl = document.getElementById ("numbers-check")
const symbolCheckEl = document.getElementById ("symbols-check")
const securityQuality = document.querySelector("#security-indicator")

    let senhaSlider = 16

    function gerarSenha () {
        let chars = "abcdefghjkmnpqrstuvwxyz"

        const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ"
        const numberChars = "123456789"
        const symbolChars = "?!@&*()[]"

        if (upperCaseCheckEl.checked) {
            chars += upperCaseChars
          }
  
        if (numberCheckEl.checked) {
          chars += numberChars
        }

        if (symbolCheckEl.checked) {
          chars += symbolChars
        }
       
        let senha = ""
        for (let i = 0; i < senhaSlider; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            senha+= chars.substring(randomNumber, randomNumber + 1)
        }
        
        inputEl.value = senha


    }

    function calculateQuality () {
        if (upperCaseCheckEl.checked) {
            securityQuality.style.width += 5% 
        }   
    }
    
    const senhaSliderEl = document.querySelector("#senha-slider")
    
    senhaSliderEl.addEventListener("input", function () {
        senhaSlider = senhaSliderEl.value
        document.getElementById("senha-slider-text").innerText = senhaSlider
        gerarSenha()
    })
    
    upperCaseCheckEl.addEventListener("click", gerarSenha)
    numberCheckEl.addEventListener("click", gerarSenha)
    symbolCheckEl.addEventListener("click", gerarSenha)
    
    function copiar () {
        navigator.clipboard.writeText(inputEl.value) 
    }
    
    document.querySelector("#copiar-1").addEventListener("click", copiar)
    document.querySelector("#copiar-2").addEventListener("click", copiar)

    gerarSenha()