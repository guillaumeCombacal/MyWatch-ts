import { IWatchWidget } from "./IWatchWidget";
import { HtmlBtn } from "./htmlComponent/HtmlBtn";
import { HtmlDiv } from "./htmlComponent/HtmlDiv";

export class WatchManagementPanel extends HtmlDiv{

    private _headerPanel: HtmlDiv = new HtmlDiv();
    private _contentPanel: HtmlDiv = new HtmlDiv();
    private _addNewWatchBtn: HtmlBtn = new HtmlBtn('New Watch');
    private _onAddNewWatch: ()=>void = ()=>{console.log('_onAddNewWatch not yet initialised')};

    public constructor() {
        super();
        this._headerPanel.addHtmlElement(this._addNewWatchBtn.getHtmlElement());
        this._addNewWatchBtn.setOnClickCb(()=>{
            this._onAddNewWatch();
        });

        this.addHtmlElement(this._headerPanel.getHtmlElement());
        this.addHtmlElement(this._contentPanel.getHtmlElement());
    }

    public addNewWatch(watchWidget: IWatchWidget){
        this._contentPanel.addHtmlElement(watchWidget.getWatchWidget().getHtmlElement());
    }

    public setOnAddNewWatch(cb: ()=>void): void{
        this._onAddNewWatch = cb;
    }

}