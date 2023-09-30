import { Watch } from "./watchController/Watch";
import { WatchesManager } from "./watchController/WatchesManager";

export class App {

    private _documentBody: HTMLElement;

    public constructor() {

        this._documentBody = document.body;
        const watchesManager = new WatchesManager();
        this._documentBody.append(watchesManager.getWatchManagementPanel().getHtmlElement());
    }
}