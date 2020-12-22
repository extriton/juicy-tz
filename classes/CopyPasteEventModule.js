class CopyPasteEventModule {
    constructor (elem, callbacks) {
        if (typeof elem === 'object' && elem instanceof HTMLElement)
            this._elem = elem

        if (callbacks) {
            if (callbacks.cbCopy && typeof callbacks.cbCopy === 'function')
                this._cbCopy = callbacks.cbCopy
            if (callbacks.cbPaste && typeof callbacks.cbPaste === 'function')
                this._cbPaste = callbacks.cbPaste
        }
    }

    start () {
        if (this._elem && this._cbCopy)
            this._elem.addEventListener('copy', this._cbCopy)
        if (this._elem && this._cbPaste)
            this._elem.addEventListener('paste', this._cbPaste)
        console.log('CopyPasteEventModule started...')
    }

    stop () {
        if (this._elem) {
            this._elem.removeEventListener('copy', this._cbCopy)
            this._elem.removeEventListener('paste', this._cbPaste)
        }
        console.log('CopyPasteEventModule stoped...')
    }
}