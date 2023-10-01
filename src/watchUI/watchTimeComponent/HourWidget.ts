import { TimeUnitWidget } from "./TimeUnitWidget";

export class HourWidget extends TimeUnitWidget {

    public constructor() {
        super();
    }

    public setTime(hour: number): void {
        const displayHour: string = hour < 10 ? '0' + hour.toString() : hour.toString();
        this.setText(displayHour + '   :');
    }

}