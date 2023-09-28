import { HtmlBaseElement } from "./HtmlBaseElement";

export abstract class TimeUnitWidget extends HtmlBaseElement<HTMLDivElement> {

    public constructor() {
        super();

        this._htmlElement = document.createElement('div');
        this.addCSSClass('time-unit');
    }

    public abstract setTime(time: number): void;

}