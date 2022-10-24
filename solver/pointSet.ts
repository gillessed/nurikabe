import { Point } from './point';

export class PointSet {
    private points: Point[];

    constructor(newPoints?: Point[]) {
        this.points = [];
    }

    public contains = (point: Point): boolean => {
        for (const p of this.points) {
            if (p.x === point.x && p.y === point.y) {
                return true;
            }
        }
        return false;
    }

    public add = (...newPoints: Point[]) => {
        for (const newPoint of newPoints) {
            if (!this.contains(newPoint)) {
                this.points.push(newPoint);
            }
        }
    }

    public merge = (other: PointSet): PointSet {
        const new
    }
}