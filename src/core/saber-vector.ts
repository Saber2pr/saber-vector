/*
 * @Author: AK-12
 * @Date: 2019-01-01 17:49:55
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-08 21:42:06
 */
/**
 * 2 => 4
 * @param value
 */
export const square = (value: number) => Math.pow(value, 2)
/**
 * 3, 4 => 5
 * @param x
 * @param y
 */
export const magnitude2d = (x: number, y: number) =>
  Math.sqrt(square(x) + square(y))
/**
 * @param x
 * @param y
 * @param z
 */
export const magnitude3d = (x: number, y: number, z: number) =>
  Math.sqrt(square(x) + square(y) + square(z))
/**
 * 90 => pi/2
 * @param angle
 */
export const angleToRad = (angle: number) => (angle * Math.PI) / 180
/**
 * pi/2 => 90
 * @param rad
 */
export const radToAngle = (rad: number) => (rad * 180) / Math.PI
/**
 * @interface IVector
 * @template V
 */
interface IVector<V = Vector2D | Vector3D> {
  x: number
  y: number
  z?: number
  /**
   * props
   *
   * @memberof IVector
   */
  props: () => {
    x: number
    y: number
    z?: number
  }
  /**
   * isEquals
   *
   * @param {V} vector
   * @returns {boolean}
   * @memberof IVector
   */
  isEquals(vector: V): boolean
  /**
   * +
   *
   * @param {V} vector
   * @returns {V}
   * @memberof IVector
   */
  add(vector: V): V
  /**
   * -
   *
   * @param {V} vector
   * @returns {V}
   * @memberof IVector
   */
  sub(vector: V): V
  /**
   * *
   *
   * @param {V} vector
   * @returns {V}
   * @memberof IVector
   */
  mul(vector: V): V
  /**
   * 1 --x2--> 2
   *
   * @param {number} value
   * @returns {V}
   * @memberof IVector
   */
  scale(value: number): V
  /**
   * /
   *
   * @param {V} vector
   * @returns {V}
   * @memberof IVector
   */
  div(vector: V): V
  /**
   * return -1 * self
   *
   * @returns {V}
   * @memberof IVector
   */
  neg(): V
  /**
   * length
   *
   * @returns {number}
   * @memberof IVector
   */
  mag(): number
  /**
   * angle by vector
   *
   * @param {V} vector
   * @returns {number}
   * @memberof IVector
   */
  angleWith(vector: V): number
  /**
   * vec1 . vec2
   *
   * @param {V} vector
   * @returns {number}
   * @memberof IVector
   */
  product(vector: V): number
  /**
   * return its unit
   *
   * @param {V} vector
   * @returns {V}
   * @memberof IVector
   */
  unitized(vector: V): V
}
/**
 * @export
 * @class Vector2D
 * @implements {IVector<Vector2D>}
 */
export class Vector2D implements IVector<Vector2D> {
  constructor(public x: number, public y: number) {}
  props = () => ({ x: this.x, y: this.y })
  isEquals(vector2d: Vector2D) {
    return vector2d.x === this.x && vector2d.y === this.y
  }
  add(vector: Vector2D) {
    return new Vector2D(this.x + vector.x, this.y + vector.y)
  }
  sub(vector: Vector2D) {
    return new Vector2D(this.x - vector.x, this.y - vector.y)
  }
  mul(vector: Vector2D) {
    return new Vector2D(this.x * vector.x, this.y * vector.y)
  }
  scale(value: number) {
    return this.mul(new Vector2D(value, value))
  }
  div(vector: Vector2D) {
    return new Vector2D(this.x / vector.x, this.y / vector.y)
  }
  neg() {
    return new Vector2D(-this.x, -this.y)
  }
  mag() {
    return magnitude2d(this.x, this.y)
  }
  angleWith(vector: Vector2D) {
    return Math.acos(this.product(vector) / (this.mag() * vector.mag()))
  }
  product(vector: Vector2D) {
    return this.x * vector.x + this.y * vector.y
  }
  unitized() {
    return new Vector2D(this.x / this.mag(), this.y / this.mag())
  }
}
/**
 * @export
 * @class Vector3D
 * @implements {IVector<Vector3D>}
 */
export class Vector3D implements IVector<Vector3D> {
  constructor(public x: number, public y: number, public z: number) {}
  props = () => ({ x: this.x, y: this.y, z: this.z })
  isEquals(vector3d: Vector3D) {
    return (
      this.x === vector3d.x && this.y === vector3d.y && this.z === vector3d.z
    )
  }
  add(vector3d: Vector3D) {
    return new Vector3D(
      this.x + vector3d.x,
      this.y + vector3d.y,
      this.z + vector3d.z
    )
  }
  sub(vector3d: Vector3D) {
    return new Vector3D(
      this.x - vector3d.x,
      this.y - vector3d.y,
      this.z - vector3d.z
    )
  }
  mul(vector: Vector3D) {
    return new Vector3D(this.x * vector.x, this.y * vector.y, this.z * vector.z)
  }
  scale(value: number) {
    return this.mul(new Vector3D(value, value, value))
  }
  div(vector: Vector3D) {
    return new Vector3D(this.x / vector.x, this.y / vector.y, this.z / vector.z)
  }
  neg() {
    return new Vector3D(-this.x, -this.y, -this.z)
  }
  mag() {
    return magnitude3d(this.x, this.y, this.z)
  }
  angleWith(vector: Vector3D) {
    return Math.acos(this.product(vector) / (this.mag() * vector.mag()))
  }
  product(vector: Vector3D) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z
  }
  unitized() {
    return new Vector3D(
      this.x / this.mag(),
      this.y / this.mag(),
      this.z / this.mag()
    )
  }
}
/**
 * @interface ILine
 * @template L
 * @template V
 */
interface ILine<L = Line2D | Line3D, V = Vector2D | Vector3D> {
  start: V
  end: V
  /**
   * return projection-self on line-target
   *
   * @param {L} line
   * @returns {L}
   * @memberof ILine
   */
  projection(line: L): L
  /**
   * return its vector, from start to end
   *
   * @returns {V}
   * @memberof ILine
   */
  toVec(): V
}
/**
 * @export
 * @class Line2D
 * @implements {ILine<Line2D, Vector2D>}
 */
export class Line2D implements ILine<Line2D, Vector2D> {
  constructor(public start: Vector2D, public end: Vector2D) {}
  projection(line: Line2D) {
    let angle = this.toVec().angleWith(line.toVec())
    let length = this.toVec().mag() * Math.cos(angle)
    let unit = line.toVec().unitized()
    return new Line2D(line.start, unit.scale(length))
  }
  toVec() {
    return this.end.sub(this.start)
  }
}
/**
 * @export
 * @class Line3D
 * @implements {ILine<Line3D, Vector3D>}
 */
export class Line3D implements ILine<Line3D, Vector3D> {
  constructor(public start: Vector3D, public end: Vector3D) {}
  projection(line: Line3D) {
    let angle = this.toVec().angleWith(line.toVec())
    let length = this.toVec().mag() * Math.cos(angle)
    let unit = line.toVec().unitized()
    return new Line3D(line.start, unit.scale(length))
  }
  toVec() {
    return this.end.sub(this.start)
  }
}
