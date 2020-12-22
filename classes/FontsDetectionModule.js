class FontsDetectionModule {

    static #fontsList = [
        'American Typewriter',
        'Andale Mono',
        'Arial',
        'Arial Black',
        'Arial Narrow',
        'Arial Rounded MT Bold',
        'Arial Unicode MS',
        'Avenir',
        'Avenir Next',
        'Avenir Next Condensed',
        'Bahnschrift',
        'Baskerville',
        'Big Caslon',
        'Bodoni 72',
        'Bodoni 72 Oldstyle',
        'Bodoni 72 Smallcaps',
        'Bradley Hand',
        'Brush Script MT',
        'Calibri',
        'Cambria',
        'Cambria Math',
        'Candara',
        'Chalkboard',
        'Chalkboard SE',
        'Chalkduster',
        'Charter',
        'Cochin',
        'Comic Sans MS',
        'Consolas',
        'Constantia',
        'Copperplate',
        'Corbel',
        'Courier',
        'Courier New',
        'Didot',
        'DIN Alternate',
        'DIN Condensed',
        'Ebrima',
        'Franklin Gothic Medium',
        'Futura',
        'Gabriola',
        'Gadugi',
        'Geneva',
        'Georgia',
        'Gill Sans',
        'Helvetica',
        'Helvetica Neue',
        'Herculanum',
        'Hoefler Text',
        'HoloLens MDL2 Assets',
        'Impact',
        'Ink Free',
        'Javanese Text',
        'Leelawadee UI',
        'Lucida Console',
        'Lucida Grande',
        'Lucida Sans Unicode',
        'Luminari',
        'Malgun Gothic',
        'Marker Felt',
        'Marlett',
        'Menlo',
        'Microsoft Himalaya',
        'Microsoft JhengHei',
        'Microsoft New Tai Lue',
        'Microsoft PhagsPa',
        'Microsoft Sans Serif',
        'Microsoft Tai Le',
        'Microsoft YaHei',
        'Microsoft Yi Baiti',
        'MingLiU-ExtB',
        'Monaco',
        'Mongolian Baiti',
        'MS Gothic',
        'MV Boli',
        'Myanmar Text',
        'Nirmala UI',
        'Noteworthy',
        'Optima',
        'Palatino',
        'Palatino Linotype',
        'Papyrus',
        'Phosphate',
        'Rockwell',
        'Savoye LET',
        'Segoe MDL2 Assets',
        'Segoe Print',
        'Segoe Script',
        'Segoe UI',
        'Segoe UI Historic',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'SignPainter',
        'SimSun',
        'Sitka',
        'Skia',
        'Snell Roundhand',
        'Sylfaen',
        'Symbol',
        'Tahoma',
        'Times',
        'Times New Roman',
        'Trattatello',
        'Trebuchet MS',
        'Verdana',
        'Webdings',
        'Wingdings',
        'Yu Gothic',
        'Zapfino'
    ]

    static #baseFonts = ['monospace', 'sans-serif', 'serif']
    static #testString = "mmmmmmmmmmlli"
    static #testSize = '72px'

    static exec () {

        const defaultWidth = []
        const result = []

        // Create Canvas and get Context
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext("2d")

        // Get the widths of the base fonts
        let textMetrics
        for (let i = 0; i < FontsDetectionModule.#baseFonts.length; i++) {
            ctx.font = `${FontsDetectionModule.#testSize} ${FontsDetectionModule.#baseFonts[i]}`
            textMetrics = ctx.measureText(FontsDetectionModule.#testString)
            defaultWidth[i] = textMetrics.width
        }

        // Compare the font width with the base font width
        let curFontWidth, matched
        for (let i = 0; i < FontsDetectionModule.#fontsList.length; i++) {
            ctx.font = `${FontsDetectionModule.#testSize} ${FontsDetectionModule.#fontsList[i]}`
            textMetrics = ctx.measureText(FontsDetectionModule.#testString)
            
            curFontWidth = textMetrics.width
            matched = false
            for (let j = 0; j < defaultWidth.length; j++) {
                if (curFontWidth == defaultWidth[j]) {
                    matched = true
                    break
                }
            }
            
            if (!matched)
                result.push(FontsDetectionModule.#fontsList[i])
            
        }

        return result
    }
}