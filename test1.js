// import { CopyPasteEventModule } from './classes/CopyPasteEventModule'

let inputField, startButton, stopButton
inputField = document.getElementById('inputField')

function cbCopy (event) {
    let copyText = document.getSelection()
    console.log(`Copy text: ${copyText}`)
}

function cbPaste (event) {
    let pasteText = event.clipboardData.getData('text/plain')
    console.log(`Paste text: ${pasteText}`)
}

inputFieldObj = new CopyPasteEventModule(inputField, { cbCopy, cbPaste })

window.onload = () => {
    // Add buttons listeners
    startButton = document.getElementById('startButton')
    stopButton = document.getElementById('stopButton')
    
    startButton.addEventListener('click', () => {
        inputFieldObj.start()
    })

    stopButton.addEventListener('click', () => {
        inputFieldObj.stop()
    })
}
