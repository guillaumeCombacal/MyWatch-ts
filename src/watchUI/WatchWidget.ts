import { WatchTime } from "../watchModel/WatchTime";
import { IWatchWidget } from "./IWatchWidget";
import { IncreaseBtn } from "./watchButton/IncreaseBtn";
import { LightBtn } from "./watchButton/LightBtn";
import { EditMode, ModeBtn } from "./watchButton/ModeBtn";
import { ResetBtn } from "./watchButton/ResetBtn";
import { TimeUnit, TimeWidget } from "./watchTimeComponent/TimeWidget";


export class WatchWidget implements IWatchWidget{

    private _documentBody;
    private _divContent: HTMLDivElement;
    private _modeBtn: ModeBtn = new ModeBtn('Mode');
    private _increaseBtn: IncreaseBtn = new IncreaseBtn('Increase');
    private _lightBtn: LightBtn = new LightBtn('Light');
    private _resetBtn: ResetBtn = new ResetBtn('Reset');
    private _timewidget: TimeWidget;
    private _onIncreaseHoursCb: ()=>void = ()=>{console.log("_onIncreaseHoursCb not yet initialised")};
    private _onIncreaseMinutesCb: ()=>void = ()=>{console.log("_onIncreaseMinutesCb not yet initialised")};
    private _onResetCb: ()=>void = ()=>{console.log("_onResetCb not yet initialised")};

    public constructor(watchTime: WatchTime) {

        this._timewidget = new TimeWidget(watchTime);
        this._documentBody = document.body;
        this._divContent = document.createElement('div');
        this._divContent.className = 'watch-widget';

        this._initWatch();

        this._documentBody.append(this._divContent);
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

            isNightMode ? this._timewidget.addCSSClass('night-mode') : this._timewidget.removeCSSClass('night-mode');
        });

        this._resetBtn.setOnResetCb(()=>{
            this._onResetCb();
        })

        this._divContent.appendChild(this._modeBtn.getHtmlElement());
        this._divContent.appendChild(this._increaseBtn.getHtmlElement());
        this._divContent.appendChild(this._timewidget.getHtmlElement());
        this._divContent.appendChild(this._lightBtn.getHtmlElement());
        this._divContent.appendChild(this._resetBtn.getHtmlElement());
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



}
