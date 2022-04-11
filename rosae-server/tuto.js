import rosaenlgPug from "rosaenlg";

export const verbaliseSentences = async (lists) => {
  const res = rosaenlgPug.renderFile("tuto.pug", {        //load the pug file to get the verbalisation
    language: "en_US",
    knowledgeGraphs: lists,
    cache: true,
  });
  return res;                                             //return the verbalisation
};
