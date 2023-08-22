
const promptTextField = document.getElementById('prompt')
const startBtn = document.getElementById('start-voice-btn')
const responTextArea = document.getElementById('respon-textarea')
const notif = document.querySelector('.notif')

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition


const recognition = new window.SpeechRecognition
recognition.interimResults = true
recognition.lang = 'id-ID'

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    

    promptTextField.value = text
})

recognition.addEventListener('end', () => {
    const prompt = promptTextField.value

    // if(prompt.includes('Tolong hitung') || prompt.includes('tolong hitung') || prompt.includes('tolong Hitung')){
    //     console.log(prompt.substring(14, prompt.length - 1))
    // }

    notif.classList.toggle('show')

    fetch(`https://api.akuari.my.id/ai/gpt?chat=${prompt}`).then(res => res.json()).then(message => {
        responTextArea.value = message.respon

        notif.classList.toggle('show')
    }).catch(error => {
        notif.innerHTML = 'ADUH MAAF... Terjadi kesalahan saat memproses permintaan anda :(<br>Tolong coba lagi yaa... maaf bgt nih emng kadang gitu si :"'
    })
})

startBtn.addEventListener('click', () => {

    if(notif.classList.contains('show')){
        notif.classList.toggle('show')
    }

    recognition.start()
})
