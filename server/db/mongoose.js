const mongoose = require("mongoose");
const keys = require("../config/keys");

// mongoose.connect(keys.mongoURI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
//   useUnifiedTopology: true,
// });

//connect to cluster
mongoose.connect(
  `mongodb+srv://yevgeny:${keys.MONGOOSE_PASS}@cluster0.mzerb.mongodb.net/ecommerce?retryWrites=true&w=majority`,

  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//mongoose.connect("mongodb://127.0.0.1:27017/users", {});
console.log("connected to db");
