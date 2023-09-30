import { Observable, ObservableData } from "./Observable";

export class TimeObservableData extends ObservableData{
    public hour: number;
    public minute: number;
    public second: number;
}

export class WatchTime extends Observable<TimeObservableData> {

    private _currentTime: Date = new Date();
    private _hour: number = 0;
    private _offsetHour: number = 0;
    private _minute: number = 0;
    private _offsetMinute: number = 0;
    private _second: number = 0;

    public constructor() {
        super();

        setInterval(()=>{
            this._currentTime = new Date();
            this._updateTime();
        }, 1000);
    }

    private _formatTime(): void{

        const customHours = this._currentTime.getHours() + this._offsetHour;
        this._hour = customHours - Math.floor(customHours / 24)*24

        const customMinutes = this._currentTime.getMinutes() + this._offsetMinute;
        this._minute = customMinutes - Math.floor(customMinutes / 60)*60;

        this._second = this._currentTime.getSeconds();
    }

    private _updateTime(): void{

        this._formatTime();

        const timeData = new TimeObservableData;
        timeData.hour = this._hour;
        timeData.minute = this._minute;
        timeData.second = this._second;
        this.notifyObservers(timeData);
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

}