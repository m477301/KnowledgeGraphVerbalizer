/* THIRD-PARTY FUNCTIONS */
import express from "express";
import cors from "cors";

/* HELPER FUNCTIONS */
import { queryWikidataWithSparql } from "./Wikidata/ApiWrapper.js";
import { verbaliseSentences } from "./tuto.js";

/* Express API setup */
const app = express();
app.use(cors());
const port = 3500;

/* Test api endpoint */
app.get("/", (req, res) => {
  res.send("Welcome to the Server!");
});

/* GET: Knowledge Graph Verbalisation Endpoint
  parameter: query value
  return: {trouples: <{[{subject, predicate, object}, ...]}>, sentences: <English Sentences>} 
*/
app.get("/verbalise/:name", async (req, res) => {
  const knowledgeGraph = await queryWikidataWithSparql(req.params.name);
  const sentences = await verbaliseSentences(knowledgeGraph);
  return res.send({
    trouples: knowledgeGraph,
    sentences: sentences
      .replaceAll("<p>", "")
      .replaceAll("</p>", "")
      .replaceAll(".", ". "),
  });
});

/* Setup and Start Server */
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
