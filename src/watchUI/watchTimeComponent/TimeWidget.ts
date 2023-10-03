import { Observer } from "../../watchModel/Observer";
import { WatchTime, WatchTimeObservableData } from "../../watchModel/WatchTime";
import { HtmlDiv } from "../htmlComponent/HtmlDiv";
import { HtmlText } from "../htmlComponent/HtmlText";
import { HourWidget } from "./HourWidget";
import { MinuteWidget } from "./MinuteWidget";
import { SecondWidget } from "./SecondWidget";

export enum TimeUnit {
    HOUR = 0,
    MINUTE = 1,
    SECOND = 0
}

/**
 * The time widget composed by hours, minutes and second widgets
 */
export class TimeWidget implements Observer<WatchTimeObservableData> {

    private _divContent: HtmlDiv = new HtmlDiv();
    private _hourWidget: HourWidget = new HourWidget();
    private _minuteWidget: MinuteWidget = new MinuteWidget();
    private _secondWidget: SecondWidget = new SecondWidget();
    private _amPmInfo: HtmlText = new HtmlText('');

    public constructor(watchTime: WatchTime) {
        this._initTimeComponents();
        watchTime.registerObserver(this);
        this._divContent.addCSSClass('time-widget');
    }

    public getTimeContent(): HtmlDiv {
        return this._divContent;
    }

    private _initTimeComponents(): void {

        this._divContent.addHtmlElement(this._hourWidget.getHtmlElement());
        this._divContent.addHtmlElement(this._minuteWidget.getHtmlElement());
        this._divContent.addHtmlElement(this._secondWidget.getHtmlElement());
        this._divContent.addHtmlElement(this._amPmInfo.getHtmlElement());
    }

    private _updateTime(hours: number, minutes: number, seconds: number, amPm: string): void{

        this._hourWidget.setTime(hours);
        this._minuteWidget.setTime(minutes);
        this._secondWidget.setTime(seconds);
        this._amPmInfo.setText(amPm);
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
        
        this._hourWidget.removeCSSClass('hightlight-timeunit');
        this._minuteWidget.removeCSSClass('hightlight-timeunit');
        this._secondWidget.removeCSSClass('hightlight-timeunit');
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

    public update(data: WatchTimeObservableData): void {
        this._updateTime(data.hour, data.minute, data.second, data.amPm);
    }

}
