export interface IWatchWidget {
    setOnIncreaseHoursCb(cb: ()=>void): void;
    setOnIncreaseMinutesCb(cb: ()=>void): void;
    setOnResetCb(cb: ()=>void): void;
}