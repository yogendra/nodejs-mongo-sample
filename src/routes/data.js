import express from 'express';
import db from "../db.js";
import { ObjectId } from "mongodb";
const router = express.Router();

router.get("/", async (req, res) => {
  let collection = await db.collection('data');
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
  let collection = await db.collection('data');
  let query = { id: req.params.id };
  let result = await collection.findOne(query);

  if (!result) {
    res.send("Not found").status(404);
  } else {
    res.send(result).status(200);
  }
});
router.post("/:id", async (req, res) => {
  let collection = await db.collection('data');
  let newDocument = req.body;
  let id = req.params.id;
  newDocument.date = new Date();
  newDocument.id = id;
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

router.post("/:id", async (req, res) => {
  let data = req.body;
  let id = req.params.id;
  let collection = await db.collection('data');

  res.send(results).status(200);
});
export default router;
