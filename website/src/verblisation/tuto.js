const rosaenlgPug = require('rosaenlg');

let knowedgeGraphs = [
  {
      "subject" : 'Eiffel Tower',
      "verb" : 'is a',
      "object" : 'place'
  },
  {
      "subject" : 'Eiffel Tower',
      "verb" : 'is located in',
      "object" : 'Paris'
  },
  {
      "subject" : 'Paris',
      "verb" : 'is a',
      "object" : 'City'
  }
];

const res = rosaenlgPug.renderFile('tuto.pug', {
  language: 'en_US',
  knowedgeGraphs: knowedgeGraphs,
  cache: true,
});
console.log(res);