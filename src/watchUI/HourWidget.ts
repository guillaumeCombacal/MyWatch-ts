import { TimeUnitWidget } from "./TimeUnitWidget";

export class HourWidget extends TimeUnitWidget {

    private _hourLabel: HTMLLabelElement;

    public constructor() {
        super();

        this._hourLabel = document.createElement('label');
        this._htmlElement.appendChild(this._hourLabel);
    }

    public setTime(hour: number): void {
        this._hourLabel.innerHTML = hour.toString() + ' h';
    }

}