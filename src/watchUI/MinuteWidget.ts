import { TimeUnitWidget } from "./TimeUnitWidget";

export class MinuteWidget extends TimeUnitWidget {

    private _minuteLabel: HTMLLabelElement;

    public constructor() {
        super();

        this._minuteLabel = document.createElement('label');
        this._htmlElement.appendChild(this._minuteLabel);
    }

    public setTime(minute: number): void {
        this._minuteLabel.innerHTML = minute.toString() + ' min';
    }

}