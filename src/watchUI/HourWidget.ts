import { TimeUnitWidget } from "./TimeUnitWidget";

export class HourWidget extends TimeUnitWidget {

    private _hourLabel: HTMLParagraphElement;

    public constructor() {
        super();

        this._hourLabel = document.createElement('p');
        this._htmlElement.appendChild(this._hourLabel);
    }

    public setTime(hour: number): void {
        const displayHour: string = hour < 10 ? '0' + hour.toString() : hour.toString();
        this._hourLabel.innerHTML = displayHour + ' :';
    }

}