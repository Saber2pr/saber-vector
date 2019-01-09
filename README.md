# saber-vector

> math/vector lib for javascript!

```bash
npm install saber-vector
```

```ts
let start_3d = new Vector3D(0, 0, 0)

let end1_3d = new Vector3D(0, 1, 0)
let line1_3d = new Line3D(start_3d, end1_3d)

let end2_3d = new Vector3D(0, 1, 1)
let line2_3d = new Line3D(start_3d, end2_3d)

// v.neg().neg()
console.log(
  end2_3d
    .neg()
    .neg()
    .isEquals(end2_3d)
) // true

// get angle in two vectors?
console.log(radToAngle(line1_3d.toVec().angleWith(line2_3d.toVec()))) // 45

// get props of vector?
console.log(line1_3d.toVec().props())

// get line's projection on line2?
console.log(
  line1_3d
    .projection(line2_3d)
    .toVec()
    .props()
)

// same to 2d
let start_2d = new Vector2D(0, 0)

let end1_2d = new Vector2D(0, 1)
let line1_2d = new Line2D(start_2d, end1_2d)

let end2_2d = new Vector2D(1, 1)
let line2_2d = new Line2D(start_2d, end2_2d)

console.log('2d: ', radToAngle(line1_2d.toVec().angleWith(line2_2d.toVec())))
console.log(
  line1_2d
    .projection(line2_2d)
    .toVec()
    .props()
)
console.log(
  end2_2d
    .neg()
    .neg()
    .isEquals(end2_2d)
) // true
```
