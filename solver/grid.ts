import { Island } from './island';

export class Grid {
    static deserialize = (source: string): Grid => {
        
    }

    constructor(
        public readonly grid: number[][],
        public readonly islands: Island[],
    ) {}
}
