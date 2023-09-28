import { HourWidget } from "./HourWidget";
import { MinuteWidget } from "./MinuteWidget";
import { Observer } from "./Observer";
import { SecondWidget } from "./SecondWidget";
import { TimeObservableData, WatchTime } from "./WatchTime";

export enum TimeUnit {
    HOUR = 0,
    MINUTE = 1,
    SECOND = 0
}

export class TimeWidget extends Observer<TimeObservableData> {

    private _divContent: HTMLDivElement;
    private _hourWidget: HourWidget = new HourWidget();
    private _minuteWidget: MinuteWidget = new MinuteWidget();
    private _secondWidget: SecondWidget = new SecondWidget();

    public constructor(watchTime: WatchTime) {
        super();
        this._divContent = document.createElement('div');
        this._initTimeComponents();
        watchTime.registerObserver(this);
    }

    public getHtmlElement(): HTMLDivElement {
        return this._divContent;
    }

    private _initTimeComponents(): void {

        this._divContent.appendChild(this._hourWidget.getHtmlElement());
        this._divContent.appendChild(this._minuteWidget.getHtmlElement());
        this._divContent.appendChild(this._secondWidget.getHtmlElement());
    }

    private _updateTime(hours: number, minutes: number, seconds: number): void{

        this._hourWidget.setTime(hours);
        this._minuteWidget.setTime(minutes);
        this._secondWidget.setTime(seconds);
    }

    public setHighlight(timeUnit: TimeUnit): void{

        switch(timeUnit){
            case TimeUnit.HOUR:
                this._hourWidget.addCSSClass('hightlight-timeunit');
                break;
            case TimeUnit.MINUTE:
                this._minuteWidget.addCSSClass('hightlight-timeunit');
                break;
            case TimeUnit.SECOND:
            default:
        }
    }

    public removeHighlight(): void{
        
        this._hourWidget.removeCSSClass();
        this._minuteWidget.removeCSSClass();
        this._secondWidget.removeCSSClass();
    }

    public increaseUnitTime(unit: TimeUnit): void{
        switch(unit){
            case TimeUnit.HOUR:
                
                break;
            case TimeUnit.MINUTE:
                
                break;
            case TimeUnit.SECOND:
            default:
        }
    }

    public update(data: TimeObservableData): void {
        this._updateTime(data.hour, data.minute, data.second);
    }

}
