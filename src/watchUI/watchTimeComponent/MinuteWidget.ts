import { TimeUnitWidget } from "./TimeUnitWidget";

export class MinuteWidget extends TimeUnitWidget {

    public constructor() {
        super();
    }

    public setTime(minute: number): void {
        const displayMinute: string = minute < 10 ? '0' + minute.toString() : minute.toString();
        this.setText(displayMinute + ' :');
    }

}