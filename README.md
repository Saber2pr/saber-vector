# saber-vector

[![npm](https://img.shields.io/npm/v/saber-vector.svg)](https://www.npmjs.com/package/saber-vector)

> math/vector lib for javascript!

```bash
npm install saber-vector
```

# API

## angleToRad

角度转弧度

```ts
angleToRad(90) // 1.5707963267948966
```

## radToAngle

弧度转角度

```ts
radToAngle(Math.PI / 2) // 90
```

## magnitude2d

求 2d 向量的模

```ts
magnitude2d(3, 4) // 5
```

## magnitude3d

求 3d 向量的模

```ts
magnitude3d(1, 2, 2) // 3
```

## Vec2

2d 坐标类型

构造函数：

```ts
new Vec2(x, y)
```

方法：

> 注意：以下方法均为纯函数

1. props 获取所有坐标属性
2. equals 判断两个向量是否相等
3. add 向量和
4. sub 向量差
5. mul 向量乘
6. div 向量除
7. scale 向量缩放
8. neg 向量取反
9. mag 返回向量的模
10. angleWith 与另一个向量夹角
11. dot 向量数量积
12. cross 向量叉积
13. unitized 单位化

## Vec3

3d 坐标类型

构造函数：

```ts
new Vec3(x, y, z)
```

方法：...同 Vec2

## Line2D

二维有向线段

构造函数：

```ts
new Line2D(start_vec2, end_vec2)
```

方法：

> 注意：以下方法均为纯函数

1. projection 在另一个二维有向线段上的投影
2. toVec 转为 Vec2 类型

## Line3D

三维有向线段

构造函数：

```ts
new Line3D(start_vec3, end_vec3)
```

方法：...同 Line2D

# Examples

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

# Author

saber2pr
