window.onload = () => {
    const supportedFonts = FontsDetectionModule.exec()

    let div
    for (let i = 0; i < supportedFonts.length; i++) {
        div = document.createElement('div')
        div.innerText = supportedFonts[i]
        document.body.appendChild(div)
    }

}
