// import { SparqlClient } from "sparql-http-client";
const axios = require("axios");

const endpointUrl = "https://query.wikidata.org/sparql";
const sparqlQuery = `SELECT ?subject ?subjectLabel ?predicate ?predicate_label ?object ?objectLabel
WHERE {
  ?subject ?predicate ?object; wdt:P31 wd:Q5; wdt:P106 wd:Q937857.
  VALUES ?subject { wd:Q21621995 wd:Q11571 wd:Q615 }
  ?x wikibase:directClaim ?predicate; rdfs:label ?predicate_label. 
  FILTER((LANG(?predicate_label)) = "en")
  FILTER((((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "en"))) || ((ISLITERAL(?object)) && (LANGMATCHES(LANG(?object), "")))) || (!(ISLITERAL(?object))))
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
} LIMIT 500 # Cutting the result stream after the first 500 lines.`;
const url =
  "https://query.wikidata.org/sparql?query=" + encodeURIComponent(sparqlQuery);
const headers = { Accept: "application/sparql-results+json" };

export const queryWikidataWithSparql = async () => {
  await axios
    .get(url, { headers })
    .then((response) => {
      console.log(response);
      return true;
    })
    .catch((e) => console.error(e));
  return false;
};
