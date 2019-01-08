"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var saber_vector_1 = require("../core/saber-vector");
function test_vector() {
    var start = new saber_vector_1.Vector3D(0, 0, 0);
    var end1 = new saber_vector_1.Vector3D(0, 1, 0);
    var line1 = new saber_vector_1.Line(start, end1);
    var end2 = new saber_vector_1.Vector3D(0, 1, 1);
    var line2 = new saber_vector_1.Line(start, end2);
    // get angle in two vectors?
    console.log(saber_vector_1.radToAngle(line1.toVec().angleWith(line2.toVec()))); // 45
    // get props of vector?
    console.log(line1.toVec().props());
    // get line's projection on line2?
    console.log(line1
        .projection(line2)
        .toVec()
        .props());
}
exports.test_vector = test_vector;
