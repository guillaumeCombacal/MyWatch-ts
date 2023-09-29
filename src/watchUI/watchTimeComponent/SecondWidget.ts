import { TimeUnitWidget } from "./TimeUnitWidget";

export class SecondWidget extends TimeUnitWidget {

    private _secondLabel: HTMLParagraphElement;

    public constructor() {
        super();

        this._secondLabel = document.createElement('p');
        this._htmlElement.appendChild(this._secondLabel);
    }

    public setTime(second: number): void {
        const displaySecond: string = second < 10 ? '0' + second.toString() : second.toString();
        this._secondLabel.innerHTML = displaySecond;
    }

}