import { TimeUnitWidget } from "./TimeUnitWidget";

export class SecondWidget extends TimeUnitWidget {

    public constructor() {
        super();
    }

    public setTime(second: number): void {
        const displaySecond: string = second < 10 ? '0' + second.toString() : second.toString();
        this.setText(displaySecond);
    }

}