const express = require("express");
const app = express();
const path = require("path");
const cors = require('cors')
var ownerRouter = require('./routes/owner')
var teacherRouter = require('./routes/teacher')
var parentRouter = require('./routes/parent')
const mongoose = require("mongoose");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const Chat = require('./models/Chat')
const News = require('./models/News')
const Result = require('./models/Result')
mongoURI = process.env.NODE_ENV==='production' ? process.env.ATLAS_URI : 'mongodb://localhost/schoolManager'
 const connection = mongoose.connect(mongoURI,
  {
    useNewUrlParser: true,
  useCreateIndex:true,
   useUnifiedTopology:true,
   useFindAndModify: false
 })
 .then(()=>console.log('MongoDB database connected successfully'))
 .catch(error=>console.error(error))

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/owner', ownerRouter);
app.use('/teacher', teacherRouter);
app.use('/parent', parentRouter);
io.on("connect", socket => {
  socket.on('disconnect',()=>{
    console.log('User disconnected')
  })
  // let newRoom = socket.handshake.query.school_id===undefined ? socket.handshake.query.student_id : socket.handshake.query.school_id
  let ID = socket.handshake.query.ID
  console.log(ID)
  socket.join(ID)
  socket.on("Input PTF", msg => {
    connection.then(db => {

      try {
        let chat = new Chat({ sender_id:msg.sender_id,
        message:msg.message,
        school_id:msg.school_id,
        name:msg.name,
        sender_id:msg.sender_id
      });
        chat.save((err, doc) => {
          if (err) return console.log({ success: false, err });

          Chat.find({sender_id:doc.sender_id})
            .populate("sender_id")
            .exec((err,doc) => {
              return io.to(ID).emit("Output PTF", msg);
            })
        });

      } catch (err) {
        console.error(err);
      }
  });
});
socket.on("uploadNotice", msg => {
  connection.then(db => {

    try {
      let news = new News({
        title:msg.title,
    content:msg.content,
    school_id:msg.school_id,
    day:msg.day,
    month:msg.month,
    image:msg.image,
    sender_id:msg.sender_id
    });
      news.save((err, doc) => {
        if (err) return console.log({ success: false, err });

        News.find({sender_id:doc.sender_id})
          .populate("sender_id")
          .exec((err,doc) => {
            console.log(msg)
            return io.to(ID).emit("viewNotice", msg);
          })
      });

    } catch (err) {
      console.error(err);
    }
});
});
});

if(process.env.NODE_ENV==='production'){
  app.use(express.static('client/build'))
  app.get('*', (req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log(`Server Running at ${port}`)
});
