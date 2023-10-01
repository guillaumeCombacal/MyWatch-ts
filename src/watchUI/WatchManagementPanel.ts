import { IWatchWidget } from "./IWatchWidget";
import { HtmlBtn } from "./htmlComponent/HtmlBtn";
import { HtmlDiv } from "./htmlComponent/HtmlDiv";
import { HtmlDropDownList } from "./htmlComponent/HtmlDropDownList";
import { HtmlText } from "./htmlComponent/HtmlText";

export class WatchManagementPanel extends HtmlDiv{

    private _headerPanel: HtmlDiv = new HtmlDiv();
    private _contentPanel: HtmlDiv = new HtmlDiv();
    private _addNewWatchBtn: HtmlBtn = new HtmlBtn('New Watch');
    private _gmtPanel: HtmlDiv = new HtmlDiv();
    private _gmtSelection: HtmlDropDownList;
    private _gmtText: HtmlText = new HtmlText("GMT");
    private _onAddNewWatch: ()=>void = ()=>{console.log('_onAddNewWatch not yet initialised')};

    public constructor() {
        super();

        this._headerPanel.addCSSClass("watch-manager-header");

        this._addNewWatchBtn.setOnClickCb(()=>{
            this._onAddNewWatch();
        });
        this._headerPanel.addHtmlElement(this._addNewWatchBtn.getHtmlElement());

        const gmtOptions: Array<string> = [];
        for(let i=-12; i<15; i++){
            i<0 ? gmtOptions.push(i.toString()) : gmtOptions.push('+'+ i.toString());
        }
        this._gmtSelection = new HtmlDropDownList(gmtOptions);
        this._gmtSelection.selectItemByIndex(12);// GMT+0 by default
        this._gmtPanel.addHtmlElement(this._gmtText.getHtmlElement());
        this._gmtPanel.addHtmlElement(this._gmtSelection.getHtmlElement());
        this._headerPanel.addHtmlElement(this._gmtPanel.getHtmlElement());
        this._gmtPanel.addCSSClass("watch-manager-header-gmt");

        this.addHtmlElement(this._headerPanel.getHtmlElement());
        this.addHtmlElement(this._contentPanel.getHtmlElement());
    }

    public addNewWatch(watchWidget: IWatchWidget){
        this._contentPanel.addHtmlElement(watchWidget.getWatchWidget().getHtmlElement());
    }

    public setOnAddNewWatch(cb: ()=>void): void{
        this._onAddNewWatch = cb;
    }

    public getGMTOffset(): string{
        const currentOption: string = this._gmtSelection.getCurrentOption();
        if(currentOption.length === 0){
            return '';
        }

        const gmtOffset: string = currentOption[0] === '+' ? currentOption.slice(1) : currentOption;
        return gmtOffset;
    }

}