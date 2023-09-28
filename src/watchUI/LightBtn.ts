import { HtmlBtn } from "./HtmlBtn";

export class LightBtn extends HtmlBtn {

    public constructor(name: string) {
        super(name);

        this._clickBtnCb = () => {
            console.log("Turn on the light");
        }
    }

}