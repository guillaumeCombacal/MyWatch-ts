import { WatchTime } from "../watchModel/WatchTime";
import { IWatchWidget } from "../watchUI/IWatchWidget";
import { WatchType, WatchWidgetFactory } from "../watchUI/WatchWidgetFactory";

export class Watch {

    private _watchWidget: IWatchWidget;
    private _factoryWatchWidget: WatchWidgetFactory = new WatchWidgetFactory();
    private _watchTime = new WatchTime();

    public constructor() {
        this._watchWidget = this._factoryWatchWidget.buildWatchWidget(WatchType.WATCH_HTML, this._watchTime);

        this._watchWidget.setOnIncreaseHoursCb(()=>{
            this._watchTime.increaseHourOffset();
        });

        this._watchWidget.setOnIncreaseMinutesCb(()=>{
            this._watchTime.increaseMinuteOffset();
        });

        this._watchWidget.setOnResetCb(()=>{
            this._watchTime.resetTime();
        });
    }

}