const fs = require('fs');

const content = fs.readFileSync('midhula_farm_hut.html', 'utf8');

// Find SPECIES_DATA
const sStart = content.indexOf('const SPECIES_DATA = [');
const sEnd = content.indexOf('];', sStart);
const speciesText = content.substring(sStart, sEnd + 2);

// Replace the huge base64 strings with clean local paths
const cleanedSpecies = speciesText.replace(/image:\s*'data:image\/jpeg;base64,[^']+'/g, (match) => {
  return "image: ''";
});

// Find COMPATIBILITY logic
const cStart = content.indexOf('const COMPATIBILITY_RULES = {') !== -1 ? content.indexOf('const COMPATIBILITY_RULES = {') : content.indexOf('const evaluateCompatibility');
const cEnd = content.indexOf('function evaluateCompatibility', cStart) !== -1 ? content.indexOf('function evaluateCompatibility', cStart) : content.indexOf('const updateBagUI', cStart);
const compatText = content.substring(cStart, cEnd);

fs.writeFileSync('src/data/raw_extracted.js', cleanedSpecies + '\n\n' + compatText);
console.log('Successfully saved raw_extracted.js');
