import { HtmlDiv } from "./htmlComponent/HtmlDiv";

export interface IWatchWidget {
    setOnIncreaseHoursCb(cb: ()=>void): void;
    setOnIncreaseMinutesCb(cb: ()=>void): void;
    setOnResetCb(cb: ()=>void): void;
    setOnSwitchAmPmCb(cb: ()=>void): void;
    getWatchWidget(): HtmlDiv;
}