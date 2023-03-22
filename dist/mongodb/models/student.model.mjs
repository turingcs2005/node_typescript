import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    name: String,
    school: String,
    grade: Number
});
const Student = mongoose.model('Student', studentSchema);
export { Student };
//# sourceMappingURL=student.model.mjs.map