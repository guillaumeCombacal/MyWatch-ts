import { HtmlBaseElement } from "./HtmlBaseElement";

export class HtmlText extends HtmlBaseElement<HTMLParagraphElement>{

    public constructor(text: string) {

        super(document.createElement('p'));
        this.setText(text);
    }

    public setText(text: string):void{
        this._htmlElement.innerHTML = text;
    }

}
