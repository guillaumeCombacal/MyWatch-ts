
export class Vector2 {

    private _vector2: Array<number> = [];

    public constructor(x: number, y:number) {
        this.setVectorCoordinates(x, y);
    }

    private setVectorCoordinates(x: number, y:number): void{
        this._vector2 = [x, y];
    }

}