import Pipeline from "./pipeline";

var pipeline = new Pipeline;

import aliases from "./transformers/aliases";
pipeline.addAliases(aliases);

var transform = pipeline.transform.bind(pipeline);
transform.fromAst = pipeline.transformFromAst.bind(pipeline);
transform.pipeline = pipeline;
export default transform;
