import { HtmlText } from "../htmlComponent/HtmlText";

export abstract class TimeUnitWidget extends HtmlText {

    public constructor() {
        super('');
        this.addCSSClass('time-unit');
    }

    public abstract setTime(time: number): void;

}