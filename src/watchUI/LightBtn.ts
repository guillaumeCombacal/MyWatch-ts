import { HtmlBtn } from "./HtmlBtn";

export class LightBtn extends HtmlBtn {

    private _onLightCb: (isNightMode: boolean)=>void = ()=>{console.log("on light cb not yet initialised")}
    private _toggleNightMode: boolean = false;

    public constructor(name: string) {
        super(name);

        this._clickBtnCb = () => {
            this._toggleNightMode = !this._toggleNightMode;
            this._onLightCb(this._toggleNightMode);
        }
    }

    public setOnLightModeCb(cb: (isNightMode: boolean)=>void): void{
        this._onLightCb = cb;
    }

}