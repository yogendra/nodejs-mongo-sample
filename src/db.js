import { MongoClient } from "mongodb";

const dbname = process.env.MONGO_DB_NAME || "nodejs-kubernetes";
const dburl = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/';

const connOpt = { useNewUrlParser: true, useUnifiedTopology: true };
const client = new MongoClient(dburl, connOpt);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
console.log("✅ MongoDB Connected");
let db = conn.db(dbname);
console.log("✅ DB Selected");
export default db;
