import { WatchTime } from "../watchModel/WatchTime";
import { IWatchWidget } from "./IWatchWidget";
import { HtmlDiv } from "./htmlComponent/HtmlDiv";
import { HtmlText } from "./htmlComponent/HtmlText";
import { IncreaseBtn } from "./watchButton/IncreaseBtn";
import { LightBtn } from "./watchButton/LightBtn";
import { EditMode, ModeBtn } from "./watchButton/ModeBtn";
import { ResetBtn } from "./watchButton/ResetBtn";
import { TimeUnit, TimeWidget } from "./watchTimeComponent/TimeWidget";


export class WatchWidget extends HtmlDiv implements IWatchWidget{

    private _modeBtn: ModeBtn = new ModeBtn('Mode');
    private _increaseBtn: IncreaseBtn = new IncreaseBtn('Increase');
    private _lightBtn: LightBtn = new LightBtn('Light');
    private _resetBtn: ResetBtn = new ResetBtn('Reset');
    private _gmtInfo: HtmlText = new HtmlText('');
    private _footerHandleContent: HtmlDiv = new HtmlDiv();
    private _timewidget: TimeWidget;
    private _watchHandleContent: HtmlDiv = new HtmlDiv();
    private _onIncreaseHoursCb: ()=>void = ()=>{console.log("_onIncreaseHoursCb not yet initialised")};
    private _onIncreaseMinutesCb: ()=>void = ()=>{console.log("_onIncreaseMinutesCb not yet initialised")};
    private _onResetCb: ()=>void = ()=>{console.log("_onResetCb not yet initialised")};

    public constructor(watchTime: WatchTime) {
        super();
        this._timewidget = new TimeWidget(watchTime);
        this.addCSSClass('watch-widget');

        this._watchHandleContent.addCSSClass('watch-widget-handle');
        const gmtOffset: number = watchTime.getGmtOffset();
        const gmtInfo: string = gmtOffset < 0 ? gmtOffset.toString() : "+" + gmtOffset.toString();
        this._gmtInfo.setText("GMT " + gmtInfo);

        this._initWatch();
    }

    private _initWatch(): void {

        this._modeBtn.setOnchangeModeCb((editMode: EditMode) => {
            this._increaseBtn.setDisable(editMode === EditMode.NONE);

            this._timewidget.removeHighlight();
            if (editMode === EditMode.HOUR) {
                this._timewidget.setHighlight(TimeUnit.HOUR);
            }
            else if (editMode === EditMode.MINUTE) {
                this._timewidget.setHighlight(TimeUnit.MINUTE);
            }

        });

        this._increaseBtn.setOnIncreaseCb(() => {
            const editMode: EditMode = this._modeBtn.getEditMode();
            if (editMode === EditMode.HOUR) {
                this._onIncreaseHoursCb();
            }
            else if (editMode === EditMode.MINUTE) {
                this._onIncreaseMinutesCb();
            }

        });

        this._lightBtn.setOnLightModeCb((isNightMode: boolean) => {

            isNightMode ? this._timewidget.getTimeContent().addCSSClass('night-mode') : this._timewidget.getTimeContent().removeCSSClass('night-mode');
        });

        this._resetBtn.setOnResetCb(()=>{
            this._onResetCb();
        })

        this._footerHandleContent.addCSSClass('watch-widget-footer');
        this._footerHandleContent.addHtmlElement(this._gmtInfo.getHtmlElement());
        this._footerHandleContent.addHtmlElement(this._resetBtn.getHtmlElement());

        this._watchHandleContent.addHtmlElement(this._modeBtn.getHtmlElement());
        this._watchHandleContent.addHtmlElement(this._increaseBtn.getHtmlElement());
        this._watchHandleContent.addHtmlElement(this._timewidget.getTimeContent().getHtmlElement());
        this._watchHandleContent.addHtmlElement(this._footerHandleContent.getHtmlElement());

        this.addHtmlElement(this._watchHandleContent.getHtmlElement());
        this.addHtmlElement(this._lightBtn.getHtmlElement());
    }

    public setOnIncreaseHoursCb(cb: ()=>void): void{
        this._onIncreaseHoursCb = cb;
    }

    public setOnIncreaseMinutesCb(cb: ()=>void): void{
        this._onIncreaseMinutesCb = cb;
    }

    public setOnResetCb(cb: ()=>void): void{
        this._onResetCb = cb;
    }

    public getWatchWidget(): HtmlDiv{
        return this;
    }


}
