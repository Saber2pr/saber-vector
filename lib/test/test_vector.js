"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_vector_1 = require("../core/saber-vector");
function test_vector() {
    var start_3d = new saber_vector_1.Vector3D(0, 0, 0);
    var end1_3d = new saber_vector_1.Vector3D(0, 1, 0);
    var line1_3d = new saber_vector_1.Line3D(start_3d, end1_3d);
    var end2_3d = new saber_vector_1.Vector3D(0, 1, 1);
    var line2_3d = new saber_vector_1.Line3D(start_3d, end2_3d);
    // get angle in two vectors?
    console.log(saber_vector_1.radToAngle(line1_3d.toVec().angleWith(line2_3d.toVec()))); // 45
    // get props of vector?
    console.log(line1_3d.toVec().props());
    // get line's projection on line2?
    console.log(line1_3d
        .projection(line2_3d)
        .toVec()
        .props());
    // same to 2d
    var start_2d = new saber_vector_1.Vector2D(0, 0);
    var end1_2d = new saber_vector_1.Vector2D(0, 1);
    var line1_2d = new saber_vector_1.Line2D(start_2d, end1_2d);
    var end2_2d = new saber_vector_1.Vector2D(1, 1);
    var line2_2d = new saber_vector_1.Line2D(start_2d, end2_2d);
    console.log('2d: ', saber_vector_1.radToAngle(line1_2d.toVec().angleWith(line2_2d.toVec())));
    console.log(line1_2d
        .projection(line2_2d)
        .toVec()
        .props());
}
exports.test_vector = test_vector;
