import { HtmlBtn } from "./HtmlBtn";

// TODO : bouger dans un repo util/common
export enum EditMode{
    NONE = 0,
    HOUR = 1,
    MINUTE = 2
} 

export class ModeBtn extends HtmlBtn {

    private _currentMode: EditMode = EditMode.NONE;
    private _onChangeModeCb: (editMode: EditMode)=>void = ()=>{console.log("not yet initialised")}

    public constructor(name: string) {
        super(name);
        this._clickBtnCb = () => {
            this._currentMode = this._currentMode === 2 ? EditMode.NONE : this._currentMode + 1;
            this._onChangeModeCb(this._currentMode);
        }
    }

    public getEditMode(): EditMode{
        return this._currentMode;
    }

    public setOnchangeModeCb(cb: (editMode: EditMode)=>void){
        this._onChangeModeCb = cb;
    }

}
