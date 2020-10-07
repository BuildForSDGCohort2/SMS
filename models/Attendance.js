const mongoose = require('mongoose')
const AttendanceSchema = new mongoose.Schema({
    fullname: {
        type: String
    },
    school_id: {
        type: String
    },
    student_id: {
        type: String
    },
    clas: {
        type: String
    },
    attendance: {
        type: Array
    }
})
const Attendance = mongoose.model('Attendance', AttendanceSchema)
module.exports = Attendance