/**
 * 2 => 4
 * @param value
 */
export declare const square: (value: number) => number;
/**
 * 3, 4 => 5
 * @param x
 * @param y
 */
export declare const magnitude2d: (x: number, y: number) => number;
/**
 * @param x
 * @param y
 * @param z
 */
export declare const magnitude3d: (x: number, y: number, z: number) => number;
/**
 * 90 => pi/2
 * @param angle
 */
export declare const angleToRad: (angle: number) => number;
/**
 * pi/2 => 90
 * @param rad
 */
export declare const radToAngle: (rad: number) => number;
/**
 * @interface Vector
 * @template V
 */
interface IVector<V = Vector2D | Vector3D> {
    x: number;
    y: number;
    z?: number;
    /**
     * props
     *
     * @memberof IVector
     */
    props: () => {
        x: number;
        y: number;
        z?: number;
    };
    /**
     * isEquals
     *
     * @param {V} vector
     * @returns {boolean}
     * @memberof IVector
     */
    isEquals(vector: V): boolean;
    /**
     * +
     *
     * @param {V} vector
     * @returns {V}
     * @memberof IVector
     */
    add(vector: V): V;
    /**
     * -
     *
     * @param {V} vector
     * @returns {V}
     * @memberof IVector
     */
    sub(vector: V): V;
    /**
     * *
     *
     * @param {V} vector
     * @returns {V}
     * @memberof IVector
     */
    mul(vector: V): V;
    /**
     * 1 --x2--> 2
     *
     * @param {number} value
     * @returns {V}
     * @memberof IVector
     */
    scale(value: number): V;
    /**
     * /
     *
     * @param {V} vector
     * @returns {V}
     * @memberof IVector
     */
    div(vector: V): V;
    /**
     * return -1 * self
     *
     * @returns {V}
     * @memberof IVector
     */
    neg(): V;
    /**
     * length
     *
     * @returns {number}
     * @memberof IVector
     */
    mag(): number;
    /**
     * angle by vector
     *
     * @param {V} vector
     * @returns {number}
     * @memberof IVector
     */
    angleWith(vector: V): number;
    /**
     * vec1 . vec2
     *
     * @param {V} vector
     * @returns {number}
     * @memberof IVector
     */
    product(vector: V): number;
    /**
     * return its unit
     *
     * @param {V} vector
     * @returns {V}
     * @memberof IVector
     */
    unitized(vector: V): V;
}
/**
 * @export
 * @class Vector2D
 * @implements {IVector<Vector2D>}
 */
export declare class Vector2D implements IVector<Vector2D> {
    x: number;
    y: number;
    constructor(x: number, y: number);
    props: () => {
        x: number;
        y: number;
    };
    isEquals(vector2d: Vector2D): boolean;
    add(vector: Vector2D): Vector2D;
    sub(vector: Vector2D): Vector2D;
    mul(vector: Vector2D): Vector2D;
    scale(value: number): Vector2D;
    div(vector: Vector2D): Vector2D;
    neg(): Vector2D;
    mag(): number;
    angleWith(vector: Vector2D): number;
    product(vector: Vector2D): number;
    unitized(): Vector2D;
}
/**
 * @export
 * @class Vector3D
 * @implements {IVector<Vector3D>}
 */
export declare class Vector3D implements IVector<Vector3D> {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number);
    props: () => {
        x: number;
        y: number;
        z: number;
    };
    isEquals(vector3d: Vector3D): boolean;
    add(vector3d: Vector3D): Vector3D;
    sub(vector3d: Vector3D): Vector3D;
    mul(vector: Vector3D): Vector3D;
    scale(value: number): Vector3D;
    div(vector: Vector3D): Vector3D;
    neg(): Vector3D;
    mag(): number;
    angleWith(vector: Vector3D): number;
    product(vector: Vector3D): number;
    unitized(): Vector3D;
}
/**
 * @interface ILine
 * @template V
 */
interface ILine<L = Line2D | Line3D, V = Vector2D | Vector3D> {
    start: V;
    end: V;
    /**
     * return projection-self on line-target
     *
     * @param {L} line
     * @returns {L}
     * @memberof ILine
     */
    projection(line: L): L;
    /**
     * return its vector, from start to end
     *
     * @returns {V}
     * @memberof ILine
     */
    toVec(): V;
}
/**
 * @export
 * @class Line2D
 * @implements {ILine<Line2D, Vector2D>}
 */
export declare class Line2D implements ILine<Line2D, Vector2D> {
    start: Vector2D;
    end: Vector2D;
    constructor(start: Vector2D, end: Vector2D);
    projection(line: Line2D): Line2D;
    toVec(): Vector2D;
}
/**
 * @export
 * @class Line3D
 * @implements {ILine<Line3D, Vector3D>}
 */
export declare class Line3D implements ILine<Line3D, Vector3D> {
    start: Vector3D;
    end: Vector3D;
    constructor(start: Vector3D, end: Vector3D);
    projection(line: Line3D): Line3D;
    toVec(): Vector3D;
}
export {};
