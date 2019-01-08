import { Vector3D, Line, radToAngle, Vector2D } from '../core/saber-vector'

export function test_vector() {
  let start = new Vector3D(0, 0, 0)

  let end1 = new Vector3D(0, 1, 0)
  let line1 = new Line(start, end1)

  let end2 = new Vector3D(0, 1, 1)
  let line2 = new Line(start, end2)

  // get angle in two vectors?
  console.log(radToAngle(line1.toVec().angleWith(line2.toVec()))) // 45

  // get props of vector?
  console.log(line1.toVec().props())

  // get line's projection on line2?
  console.log(
    line1
      .projection(line2)
      .toVec()
      .props()
  )
}
