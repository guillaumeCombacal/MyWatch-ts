import { HtmlBaseElement } from "./HtmlBaseElement";

export class HtmlDiv extends HtmlBaseElement<HTMLDivElement>{

    public constructor() {

        super(document.createElement('div'));
    }

    public addHtmlElement(htmlBaseElement: Node){
        this._htmlElement.appendChild(htmlBaseElement);
    }

}
