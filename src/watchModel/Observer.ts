import { ObservableData } from "./Observable";

export interface Observer<T extends ObservableData> {
    update(data: T): void;
}