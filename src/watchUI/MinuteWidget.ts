import { TimeUnitWidget } from "./TimeUnitWidget";

export class MinuteWidget extends TimeUnitWidget {

    private _minuteLabel: HTMLParagraphElement;

    public constructor() {
        super();

        this._minuteLabel = document.createElement('p');
        this._htmlElement.appendChild(this._minuteLabel);
    }

    public setTime(minute: number): void {
        const displayMinute: string = minute < 10 ? '0' + minute.toString() : minute.toString();
        this._minuteLabel.innerHTML = displayMinute + ' :';
    }

}