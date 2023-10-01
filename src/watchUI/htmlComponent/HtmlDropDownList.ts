import { HtmlBaseElement } from "./HtmlBaseElement";

export class HtmlDropDownList extends HtmlBaseElement<HTMLSelectElement>{

    private _listElements: Array<string> = [];

    public constructor(elements?: Array<string>) {
        super(document.createElement('select'));

        if(undefined !== elements){
            this.addElements(elements);
        }
    }

    public addElements(elements: Array<string>): void{
        elements.forEach((element: string)=>{
            this._listElements.push(element);
            const option: HTMLOptionElement = document.createElement('option');
            option.value = element;
            option.text = element;
            this.getHtmlElement().appendChild(option);
        });
    }

    public getCurrentOption(): string{
        const selectedOptions: HTMLCollectionOf<HTMLOptionElement> = this.getHtmlElement().selectedOptions;
        if(selectedOptions.length > 0){
            return selectedOptions[0].value;
        }
        return '';
    }

    public selectItemByIndex(index: number): void{
        if(index > 0 && index < this._listElements.length){
            this._htmlElement.selectedIndex = index;
        }
    }

}
