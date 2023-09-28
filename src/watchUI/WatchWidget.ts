import { IncreaseBtn } from "./IncreaseBtn";
import { LightBtn } from "./LightBtn";
import { EditMode, ModeBtn } from "./ModeBtn";
import { Observer } from "./Observer";
import { TimeUnit, TimeWidget } from "./TimeWidget";
import { WatchTime, TimeObservableData } from "./WatchTime";

export class WatchWidget {

    private _documentBody;
    private _divContent: HTMLDivElement;

    private _watchTime = new WatchTime();
    private _modeBtn: ModeBtn = new ModeBtn('Mode');
    private _increaseBtn: IncreaseBtn = new IncreaseBtn('Increase');
    private _lightBtn: LightBtn = new LightBtn('Light');
    private _timewidget: TimeWidget;

    public constructor() {
        this._timewidget = new TimeWidget(this._watchTime);
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
            if(editMode === EditMode.HOUR){
                this._timewidget.setHighlight(TimeUnit.HOUR);
            }
            else if(editMode === EditMode.MINUTE){
                this._timewidget.setHighlight(TimeUnit.MINUTE);
            }
            
        });

        this._increaseBtn.setOnIncreaseCb(()=>{
            const editMode: EditMode = this._modeBtn.getEditMode();
            if(editMode === EditMode.HOUR){
                this._watchTime.increaseHourOffset();
            }
            else if(editMode === EditMode.MINUTE){
                this._watchTime.increaseMinuteOffset();
            }
            
        });
        
        this._divContent.appendChild(this._modeBtn.getHtmlElement());
        this._divContent.appendChild(this._increaseBtn.getHtmlElement());
        this._divContent.appendChild(this._lightBtn.getHtmlElement());
        this._divContent.appendChild(this._timewidget.getHtmlElement());
    }

    

}
