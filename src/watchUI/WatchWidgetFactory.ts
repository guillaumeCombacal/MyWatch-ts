import { WatchTime } from "../watchModel/WatchTime";
import { IWatchWidget } from "./IWatchWidget";
import { WatchWidget } from "./WatchWidget";

export enum WatchType {
    WATCH_HTML = 0,
    WATCH_3D = 1
}
export class WatchWidgetFactory {

    public constructor() {
    }

    public buildWatchWidget(type: WatchType, watchTime: WatchTime):IWatchWidget {

        switch(type){
            case WatchType.WATCH_HTML:
                default:
                    return new WatchWidget(watchTime);
                break;
            case WatchType.WATCH_HTML:
                break;
        }
    }
}