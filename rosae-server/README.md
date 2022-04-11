## command to tuto.pug file.
`mixin predicate` and `mixin object` set the predicate and object.
`mixin name` set the name(object) to form a sentences shows the name of the subject at the start.
`mixin knowledgeGraph_refexpr(obj, params)`instead to output with only the subject itself, it can also output the subject as "this person" and "His/Her".
`mixin printKnowedgeGraph`Print all the lines.
Use `- let knowledgeGraph = knowledgeGraphs[0]`to set the `knowledgeGraph` to the input knowedge graph.
Prnt the name(subject) at the start `p #[+name] .` with a ".".
Use `each knowledgeGraphELT in knowledgeGraphs`
`- knowledgeGraph = knowledgeGraphELT` loop all the information take in.
`#[+printKnowedgeGraph]` to print out the sentences