import {params} from "./config";

class ElementHandler {
    constructor(variant_id) {
        this.variant_id = variant_id + 1;
    }
    element(element) {
        if (element.tagName === 'title')
            element.setInnerContent(params['WEB_PAGE_TITLE']);
        else if (element.tagName === 'h1' && element.getAttribute('id') === 'title')
            element.setInnerContent(params['MAIN_PAGE_TITLE'] + " \nVariant" + this.variant_id);
        else if (element.tagName === 'p' && element.getAttribute('id') === 'description'){
            element.setInnerContent(params['DESCRIPTION']);
            element.setAttribute("style", "text-align: justify !important")
            element.setAttribute("style", "text-justify: inter-word !important")
            element.setAttribute("style", "text-center: !important")
        }
        else if (element.tagName === 'a' && element.getAttribute('id') === 'url') {
            element.setInnerContent(params['REDIRECT_URL_TEXT']);
            element.setAttribute('href', params['REDIRECT_URL']);
        }
    }

    comments(comment) {
        // An incoming comment
    }

    text(text) {
        // An incoming piece of text
    }
}

export default ElementHandler