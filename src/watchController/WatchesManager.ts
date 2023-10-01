import { WatchManagementPanel } from "../watchUI/WatchManagementPanel";
import { Watch } from "./Watch";

export class WatchesManager {

    private _watchManagementPanel: WatchManagementPanel = new WatchManagementPanel();
    private _watchesList: Array<Watch> = [];

    public constructor() {
        this._watchManagementPanel.setOnAddNewWatch(()=>{
            this._addNewWatch();
        });
    }

    public getWatchManagementPanel(): WatchManagementPanel{
        return this._watchManagementPanel;
    }

    private _addNewWatch(): void{
        const newWatch = new Watch(parseInt(this._watchManagementPanel.getGMTOffset()));
        this._watchManagementPanel.addNewWatch(newWatch.getWatchWidget());
        this._watchesList.push(newWatch);
    }

}