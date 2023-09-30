import { HtmlBtn } from "../htmlComponent/HtmlBtn";

export class ResetBtn extends HtmlBtn {

    private _onResetCb: ()=>void = ()=>{console.log("on reset cb not yet initialised")}

    public constructor(name: string) {
        super(name);
        this._clickBtnCb = () => {
            this._onResetCb();
        }

        this.addCSSClass('watch-edit-btn');
    }

    public setOnResetCb(cb: ()=>void): void{
        this._onResetCb = cb;
    }

}