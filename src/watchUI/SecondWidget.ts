import { TimeUnitWidget } from "./TimeUnitWidget";

export class SecondWidget extends TimeUnitWidget {

    private _secondLabel: HTMLLabelElement;

    public constructor() {
        super();

        this._secondLabel = document.createElement('label');
        this._htmlElement.appendChild(this._secondLabel);
    }

    public setTime(second: number): void {
        this._secondLabel.innerHTML = second.toString() + ' s';
    }

}