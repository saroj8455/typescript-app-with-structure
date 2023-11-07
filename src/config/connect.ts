import mongoose from "mongoose";



const CONNECT = async ()=>{
  const url = process.env.MONGO_URL || ""
  try {
    await mongoose.connect(url)
    console.log("Remote DB Connected");

  } catch (error) {
    console.log(error);
    process.exit(1)
  }
}

export default CONNECT;