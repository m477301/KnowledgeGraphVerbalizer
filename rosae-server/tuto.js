import rosaenlgPug from "rosaenlg";

export const verbaliseSentences = async (lists) => {
  const res = rosaenlgPug.renderFile("tuto.pug", {
    language: "en_US",
    knowledgeGraphs: lists,
    cache: true,
  });
  return res;
};
