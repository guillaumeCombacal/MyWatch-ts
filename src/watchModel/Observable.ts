import { Observer } from "./Observer";

export abstract class ObservableData {

}

export abstract class Observable<T extends ObservableData> {

    private _observers: Array<Observer<ObservableData>> = [];

    public constructor() {
    }

    public registerObserver(observer: Observer<ObservableData>):void{
        this._observers.push(observer);
    }

    public removeObserver(observer: Observer<ObservableData>):void{
        // TODO
    }

    protected notifyObservers(data: T): void{
        for(const observer of this._observers){
            observer.update(data);
        }
    }

    
}