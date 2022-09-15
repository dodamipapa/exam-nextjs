import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log("DB is connected"))
    .catch((err) => console.log(err));
};

export default connectMongo;
