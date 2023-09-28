import { HtmlBtn } from "./HtmlBtn";

export class IncreaseBtn extends HtmlBtn {

    private _onIncreaseCb: ()=>void = ()=>{console.log("on increase cb not yet initialised")}

    public constructor(name: string) {
        super(name);
        this._htmlElement.disabled = true;
        this._clickBtnCb = () => {
            this._onIncreaseCb();
        }
    }

    public setDisable(isDisabled: boolean): void{
        this._htmlElement.disabled = isDisabled;
    }

    public setOnIncreaseCb(cb: ()=>void): void{
        this._onIncreaseCb = cb;
    }

}