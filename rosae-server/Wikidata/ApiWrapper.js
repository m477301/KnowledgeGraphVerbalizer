import axios from "axios";

const subjects = new Map();
subjects.set("Messi", `wd:Q615`);
subjects.set("Ronaldo", `wd:Q11571`);
subjects.set("Mbappe", `wd:Q21621995`);

//  wd:Q21621995

const sparqlQueryB = `SELECT ?subject ?subjectLabel ?predicate ?predicate_label ?object ?objectLabel
WHERE {
  ?subject ?predicate ?object; wdt:P31 wd:Q5; wdt:P106 wd:Q937857.
  VALUES ?subject { `;

const sparqlQueryE = ` }
  ?x wikibase:directClaim ?predicate; rdfs:label ?predicate_label. 
  FILTER((LANG(?predicate_label)) = "en")
  FILTER((((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "en"))) || ((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "")))) || (!(ISLITERAL(?object))))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 500 # Cutting the result stream after the first 500 lines.`;
const headers = { Accept: "application/sparql-results+json" };

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
  return parsedData.slice(0, 5);
};
