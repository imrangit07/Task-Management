const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    title:String,
    description:String,
    dueDate:String,
    priority:String,
    assignee:String,
    status:String,
    completedAt:String,
    userId:mongoose.Types.ObjectId

})

module.exports = mongoose.model("allTask",TaskSchema);