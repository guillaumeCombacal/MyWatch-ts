export abstract class HtmlBaseElement <T extends HTMLElement> {

    protected _htmlElement: T;

    public constructor() {

    }

    public getHtmlElement(): T {
        return this._htmlElement;
    }

    public addCSSClass(className: string): void {
        this._htmlElement.classList.add(className);
    }

    public removeCSSClass(className: string): void {
        this._htmlElement.classList.remove(className);
    }

}
