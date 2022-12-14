function strings(base) {
  return base;
}

function concatenate(base) {
  let newSent = " Now I have concatenated this sentence to the prior one.";
  let cat = base.concat(newSent);
  return cat;
}

function templateLiterals(base) {
  let newSent = `Now I have concatenated this sentence to the prior one.`;
  let tempLit = `${base}${newSent}`;
  return tempLit;
}

export { strings, concatenate, templateLiterals };
