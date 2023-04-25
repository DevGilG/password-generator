const inputEl = document.getElementById("senha")

    let senhaSlider = 16

    function gerarSenha() {
        const chars = "abcdefghijklmnopqrstuvABCDEFGHIJKLMNOPQRSTUV123456789?!@&*()[]"
        let senha = ""
        for (let i = 0; i < senhaSlider; i++) {
            const randomNumber = Math.floor(Math.random() * chars.length)
            senha+= chars.substring(randomNumber, randomNumber + 1)
        }
        
        inputEl.value = senha
    }

    const senhaSliderEl = document.querySelector("#senha-slider")
    senhaSliderEl.addEventListener("input", function () {
        senhaSlider = senhaSliderEl.value
        gerarSenha()
    })

    function copiar () {
        navigator.clipboard.writeText(inputEl.value) 
    }

    const copiarEl = document.querySelector("#copiar")
    copiarEl.addEventListener("click", copiar)

    gerarSenha()