const rosaenlgPug = require('rosaenlg');

  export const verbaliseSentences = async (lists) => {
    const res = rosaenlgPug.renderFile('tuto.pug', {
      language: 'en_US',
      lists: lists,
      cache: true,
    });
    return res;
  }