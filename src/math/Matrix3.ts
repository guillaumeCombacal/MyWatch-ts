
export class Matrix3 {

    private _matrix3: Array<number> = [];

    public constructor(col0Row0: number, col1Row0: number, col2Row0: number,
                       col0Row1: number, col1Row1: number, col2Row1: number,
                       col0Row2: number, col1Row2: number, col2Row2: number) {

        this.setMatrixCoeff(col0Row0, col1Row0, col2Row0,
                            col0Row1, col1Row1, col2Row1,
                            col0Row2, col1Row2, col2Row2);
    }

    public setMatrixCoeff(col0Row0: number, col1Row0: number, col2Row0: number,
                           col0Row1: number, col1Row1: number, col2Row1: number,
                           col0Row2: number, col1Row2: number, col2Row2: number): void{

        this._matrix3 = [col0Row0, col1Row0, col2Row0,
                         col0Row1, col1Row1, col2Row1,
                         col0Row2, col1Row2, col2Row2];
    }

    public inverseMatrix(): Matrix3{
        if(this._matrixDeterminant() === 0){
            return this;
        }
        else{

        }
    }

    // public multiplyByMatrix(matrix: Matrix3): Matrix3{
    //     // TODO
    // }

    // public transform(vector){
    //     // TODO
    // }

    private _matrixDeterminant():number{
        const det: number = this._matrix3[0] * this._matrix3[4] * this._matrix3[8] +
                            this._matrix3[1] * this._matrix3[5] * this._matrix3[6] +
                            this._matrix3[2] * this._matrix3[3] * this._matrix3[7] -
                            this._matrix3[2] * this._matrix3[4] * this._matrix3[6] -
                            this._matrix3[1] * this._matrix3[3] * this._matrix3[8] -
                            this._matrix3[0] * this._matrix3[5] * this._matrix3[7];
        return det;
    }

}