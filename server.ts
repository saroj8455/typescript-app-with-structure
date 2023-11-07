import app from "./src/app";
import * as dotenv from 'dotenv';

// Config ENV
dotenv.config();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`⚡️ Server is running under http://localhost:${PORT}`);
});
