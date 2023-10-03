import { Observable, ObservableData } from "./Observable";

export class TimeObservableData extends ObservableData{
    public date: Date;
}

/**
 * This class is a singleton
 * It is updated every second and notify its observers
 */
export class Time extends Observable<TimeObservableData> {

    private static _instance: Time | undefined = undefined;
    private _currentTime: Date = new Date();

    private constructor(){
        super();

        setInterval(()=>{
            this._currentTime = new Date();
            this._updateTime();
        }, 1000);
    }

    public static getInstance(): Time{
        if(undefined === Time._instance){
            Time._instance = new Time();
        }

        return Time._instance;
    }

    private _updateTime(): void{

        const timeData = new TimeObservableData;
        timeData.date = this._currentTime;
        this.notifyObservers(timeData);
    }
}