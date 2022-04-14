/* THIRD-PARTY FUNCTIONS */
import axios from "axios";

/* Map that holds all possible Search Queries and their wikidata code */
const subjects = new Map();
subjects.set("Messi", `wd:Q615`);
subjects.set("Ronaldo", `wd:Q11571`);
subjects.set("Mbappe", `wd:Q21621995`);
subjects.set("Haaland", `wd:Q28967995`);
subjects.set("Bellingham", `wd:Q66241169`);
subjects.set("Reus", `wd:Q152377`);
subjects.set("Malen", `wd:Q24084301`);
subjects.set("Muller", `wd:Q2426220`);
subjects.set("Saka", `wd:Q59306386`);
subjects.set("Bony", `wd:Q370339`);

/* Initial Part of the SPARQL Query */
const sparqlQueryB = `SELECT ?subject ?subjectLabel ?predicate ?predicate_label ?object ?objectLabel
WHERE {
  ?subject ?predicate ?object; wdt:P31 wd:Q5; wdt:P106 wd:Q937857.
  VALUES ?subject { `;

/* Final Part of the SPARQL Query */
const sparqlQueryE = ` }
  ?x wikibase:directClaim ?predicate; rdfs:label ?predicate_label. 
  FILTER((LANG(?predicate_label)) = "en")
  FILTER((((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "en"))) || ((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "")))) || (!(ISLITERAL(?object))))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 500 # Cutting the result stream after the first 500 lines.`;
/* Headers For the API Query */
const headers = { Accept: "application/sparql-results+json" };

/**
 * Function takes the query parameter, requests wikidata for the knowledge graph relating to that query, then returns the trouples corresponding to that query.
 * @param {*} name - name of search query
 * @returns parsedData - {subject, predicate, object} trouples
 */
export const queryWikidataWithSparql = async (name) => {
  let parsedData = [];
  let query = sparqlQueryB + subjects.get(name) + sparqlQueryE;
  let dynamicURL =
    "https://query.wikidata.org/sparql?query=" + encodeURIComponent(query);
  await axios
    .get(dynamicURL, { headers })
    .then(
      ({
        data: {
          results: { bindings },
        },
      }) => {
        for (let i = 0; i < bindings.length; i++) {
          if (bindings[i].predicate_label.value !== "image") {
            parsedData = [
              ...parsedData,
              {
                subject: bindings[i].subjectLabel.value,
                predicate: bindings[i].predicate_label.value,
                object: bindings[i].objectLabel.value,
              },
            ];
          }
        }
      }
    )
    .catch((e) => console.error(e));
  return parsedData.slice(0, 10);
};
