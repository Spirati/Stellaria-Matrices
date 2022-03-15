interface MatrixArguments {
    data?: number[][]
    dimensions?: [number, number]
}

export default class Matrix {
    data: number[][]
    rows: number
    columns: number

    static identity(size: number) {
        let out = new Matrix({ dimensions: [size, size] })
        for(let i = 0; i < size; i++) {
            out.data[i][i] = 1
        }
        return out
    }

    constructor(args: MatrixArguments) {
        if (args.data) {
            this.data = args.data
            this.rows = args.data.length
            this.columns = args.data[0].length
        } else if(args.dimensions) {
            [this.rows, this.columns] = args.dimensions
            this.data = new Array(this.rows).fill(0).map(_ => new Array(this.columns).fill(0))
        } else {
            throw new Error("Invalid arguments supplied to matrix constructor")
        }
    }

    multiply(other: Matrix) {
        if(other.rows != this.columns) throw new Error("M2 rows must equal M1 columns")

        let out = new Matrix({ dimensions: [ this.rows, other.columns ] })
        for(let x = 0; x < other.columns; x++) {
            for(let y = 0; y < this.rows; y++) {
                out.data[y][x] = this.data[y].reduce((p,c,i) => p+c*other.data[i][x], 0)
            }
        }

        return out
    }
}