import { HtmlBaseElement } from "./HtmlBaseElement";

export abstract class HtmlBtn extends HtmlBaseElement<HTMLButtonElement>{

    private _name: string = '';

    protected _clickBtnCb: ()=>void = ()=>{console.log('Btn : ' + this._name);};

    public constructor(name: string) {

        super();
        this._name = name;
        this._htmlElement = document.createElement('button');
        this._htmlElement.innerHTML = name;
        this._htmlElement.addEventListener("click", () => {
            this._clickBtnCb();
        });
    }

}
