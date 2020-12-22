class CopyPasteEventModule {
    #elem = null
    #cbCopy = null
    #cbPaste = null
    constructor (elem, callbacks) {
        if (typeof elem === 'object' && elem instanceof HTMLElement)
            this.#elem = elem

        if (callbacks) {
            if (callbacks.cbCopy && typeof callbacks.cbCopy === 'function')
                this.#cbCopy = callbacks.cbCopy
            if (callbacks.cbPaste && typeof callbacks.cbPaste === 'function')
                this.#cbPaste = callbacks.cbPaste
        }
    }

    start () {
        if (this.#elem && this.#cbCopy)
            this.#elem.addEventListener('copy', this.#cbCopy)
        if (this.#elem && this.#cbPaste)
            this.#elem.addEventListener('paste', this.#cbPaste)
        console.log('CopyPasteEventModule started...')
    }

    stop () {
        if (this.#elem) {
            this.#elem.removeEventListener('copy', this.#cbCopy)
            this.#elem.removeEventListener('paste', this.#cbPaste)
        }
        console.log('CopyPasteEventModule stoped...')
    }
}