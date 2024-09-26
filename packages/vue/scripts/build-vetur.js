import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const JsonDocs = require('@test/docs');
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import { kebabCase } from 'change-case';

const generateTags = () => {
  const tagsObject = {};

  JsonDocs.components.forEach(component => {
    tagsObject[component.tag] = {
      description: component.docs,
      attributes: component.props.map(prop => kebabCase(prop.name)),
    };
  });

  writeFileSync('./dist/vetur/tags.json', JSON.stringify(tagsObject, null, 2));
};

const generateAttributes = () => {
  const attributesObject = {};

  JsonDocs.components.forEach(component => {
    component.props.forEach(prop => {
      attributesObject[`${component.tag}/${kebabCase(prop.name)}`] = {
        type: prop.type,
        description: prop.docs,
        options: prop.values.filter(option => option.value !== undefined).map(option => option.value),
      };
    });
  });

  writeFileSync('./dist/vetur/attributes.json', JSON.stringify(attributesObject, null, 2));
};

const main = async () => {
  if (!existsSync('./dist/vetur')) {
    mkdirSync('./dist/vetur');
  }
  generateTags();
  generateAttributes();
};

main();
