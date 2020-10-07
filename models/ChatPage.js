const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ChatPageSchema = new mongoose.Schema({
  teacher_id: {
    type: String
  },
  name: {
    type: String
  },
  message: {
    type: String
  },
  school_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  student_id:{
    type: String
  },
  clas:{
    type: String
  },
  sender_id: {
    type: Schema.Types.ObjectId
  }
});

const ChatPage = mongoose.model('ChatPage', ChatPageSchema);

module.exports = ChatPage;
