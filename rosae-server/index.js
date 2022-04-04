import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
const port = 3500;
import { queryWikidataWithSparql } from "./Wikidata/ApiWrapper.js";
import { verbaliseSentences } from "./tuto.js";

app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

app.get("/verbalise/:name", async (req, res) => {
  const knowledgeGraph = await queryWikidataWithSparql(req.params.name);
  const sentences = await verbaliseSentences(knowledgeGraph);
  return res.send(
    sentences.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll(".", ". ")
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
