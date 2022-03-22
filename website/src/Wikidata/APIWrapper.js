const axios = require("axios");

const sparqlQuery = `SELECT ?subject ?subjectLabel ?predicate ?predicate_label ?object ?objectLabel
WHERE {
  ?subject ?predicate ?object; wdt:P31 wd:Q5; wdt:P106 wd:Q937857.
  VALUES ?subject { wd:Q21621995 wd:Q11571 wd:Q615 }
  ?x wikibase:directClaim ?predicate; rdfs:label ?predicate_label. 
  FILTER((LANG(?predicate_label)) = "en")
  FILTER((((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "en"))) || ((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "")))) || (!(ISLITERAL(?object))))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 500 # Cutting the result stream after the first 500 lines.`;
const wikidataUrl =
  "https://query.wikidata.org/sparql?query=" + encodeURIComponent(sparqlQuery);
const headers = { Accept: "application/sparql-results+json" };

export const queryWikidataWithSparql = async () => {
  let parsedData = [];
  await axios
    .get(wikidataUrl, { headers })
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
