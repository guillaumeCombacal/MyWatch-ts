import { ObservableData } from "./Observable";

export abstract class Observer<T extends ObservableData> {

    public constructor() {
    }

    public abstract update(data: T): void;
}