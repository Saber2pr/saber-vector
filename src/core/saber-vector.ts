/*
 * @Author: AK-12
 * @Date: 2019-01-01 17:49:55
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-08 21:42:06
 */
/**
 * 0 => 0
 * 1 => -1
 *
 * @param value
 */
export const negative = (value: number) => (value === 0 ? 0 : -1 * value)
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
interface IVector<V = Vec2 | Vec3> {
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
  equals(vector: V): boolean
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
  dot(vector: V): number
  /**
   * vec1 x vec2
   *
   * to Vector3d
   * @param {V} vector
   * @returns {Vec3}
   * @memberof IVector
   */
  cross(vector: V): Vec3
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
export class Vec2 implements IVector<Vec2> {
  constructor(public x: number, public y: number) {}
  props = () => ({ x: this.x, y: this.y })
  equals(v2: Vec2) {
    return v2.x === this.x && v2.y === this.y
  }
  add(vector: Vec2) {
    return new Vec2(this.x + vector.x, this.y + vector.y)
  }
  sub(vector: Vec2) {
    return new Vec2(this.x - vector.x, this.y - vector.y)
  }
  mul(vector: Vec2) {
    return new Vec2(this.x * vector.x, this.y * vector.y)
  }
  scale(value: number) {
    return this.mul(new Vec2(value, value))
  }
  div(vector: Vec2) {
    return new Vec2(this.x / vector.x, this.y / vector.y)
  }
  neg() {
    return new Vec2(negative(this.x), negative(this.y))
  }
  mag() {
    return magnitude2d(this.x, this.y)
  }
  angleWith(vector: Vec2) {
    return Math.acos(this.dot(vector) / (this.mag() * vector.mag()))
  }
  dot(vector: Vec2) {
    return this.x * vector.x + this.y * vector.y
  }
  cross(vector: Vec2) {
    return new Vec3(0, 0, this.x * vector.y - this.y * vector.x)
  }
  unitized() {
    return new Vec2(this.x / this.mag(), this.y / this.mag())
  }
}
/**
 * v2
 *
 * @export
 * @param {(Vec2 | number)} x
 * @param {number} [y]
 * @returns
 */
export function v2(x: Vec2 | number, y?: number) {
  if (typeof x === 'object') {
    return new Vec2(x.x, x.y)
  } else {
    return new Vec2(x, y || x)
  }
}
/**
 * @export
 * @class Vector3D
 * @implements {IVector<Vector3D>}
 */
export class Vec3 implements IVector<Vec3> {
  constructor(public x: number, public y: number, public z: number) {}
  props = () => ({ x: this.x, y: this.y, z: this.z })
  equals(v3: Vec3) {
    return this.x === v3.x && this.y === v3.y && this.z === v3.z
  }
  add(vector3d: Vec3) {
    return new Vec3(
      this.x + vector3d.x,
      this.y + vector3d.y,
      this.z + vector3d.z
    )
  }
  sub(vector3d: Vec3) {
    return new Vec3(
      this.x - vector3d.x,
      this.y - vector3d.y,
      this.z - vector3d.z
    )
  }
  mul(vector: Vec3) {
    return new Vec3(this.x * vector.x, this.y * vector.y, this.z * vector.z)
  }
  scale(value: number) {
    return this.mul(new Vec3(value, value, value))
  }
  div(vector: Vec3) {
    return new Vec3(this.x / vector.x, this.y / vector.y, this.z / vector.z)
  }
  neg() {
    return new Vec3(negative(this.x), negative(this.y), negative(this.z))
  }
  mag() {
    return magnitude3d(this.x, this.y, this.z)
  }
  angleWith(vector: Vec3) {
    return Math.acos(this.dot(vector) / (this.mag() * vector.mag()))
  }
  dot(vector: Vec3) {
    return this.x * vector.x + this.y * vector.y + this.z * vector.z
  }
  cross(vector: Vec3) {
    return new Vec3(
      this.y * vector.z - this.z * vector.y,
      this.z * vector.x - this.x * vector.z,
      this.x * vector.y - this.y * vector.x
    )
  }
  unitized() {
    return new Vec3(
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
interface ILine<L = Line2D | Line3D, V = Vec2 | Vec3> {
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
export class Line2D implements ILine<Line2D, Vec2> {
  constructor(public start: Vec2, public end: Vec2) {}
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
export class Line3D implements ILine<Line3D, Vec3> {
  constructor(public start: Vec3, public end: Vec3) {}
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
