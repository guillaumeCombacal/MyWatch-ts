import { HtmlBaseElement } from "./HtmlBaseElement";

export class HtmlBtn extends HtmlBaseElement<HTMLButtonElement>{

    private _name: string = '';

    protected _clickBtnCb: ()=>void = ()=>{console.log('Btn : ' + this._name);};

    public constructor(name: string) {

        super(document.createElement('button'));
        this._name = name;
        this._htmlElement.innerHTML = name;
        this._htmlElement.addEventListener("click", () => {
            this._clickBtnCb();
        });
    }

    public setOnClickCb(cb: ()=>void): void{
        this._clickBtnCb = cb;
    }

}
