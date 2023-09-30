import { Observable, ObservableData } from "./Observable";
import { Observer } from "./Observer";
import { Time, TimeObservableData } from "./Time";

export class WatchTimeObservableData extends ObservableData{
    public hour: number;
    public minute: number;
    public second: number;
}

export class WatchTime extends Observable<WatchTimeObservableData> implements Observer<TimeObservableData> {

    private _currentTime: Date = new Date();
    private _hour: number = 0;
    private _offsetHour: number = 0;
    private _minute: number = 0;
    private _offsetMinute: number = 0;
    private _second: number = 0;

    public constructor() {
        super();
        Time.getInstance().registerObserver(this);
    }

    private _updateTime(): void{

        this._formatTime();

        const timeData = new WatchTimeObservableData;
        timeData.hour = this._hour;
        timeData.minute = this._minute;
        timeData.second = this._second;
        this.notifyObservers(timeData);
    }

    private _formatTime(): void{

        const customHours = this._currentTime.getHours() + this._offsetHour;
        this._hour = customHours - Math.floor(customHours / 24)*24

        const customMinutes = this._currentTime.getMinutes() + this._offsetMinute;
        this._minute = customMinutes - Math.floor(customMinutes / 60)*60;

        this._second = this._currentTime.getSeconds();
    }

    public increaseHourOffset(){
        this._offsetHour += 1;
        this._updateTime();
    }

    public increaseMinuteOffset(){
        this._offsetMinute += 1;
        this._updateTime();
    }

    public resetTime(){
        this._offsetHour = 0;
        this._offsetMinute = 0;
        this._updateTime();
    }

    public update(data: TimeObservableData): void{
        this._currentTime = data.date;
        this._updateTime();
    }

}