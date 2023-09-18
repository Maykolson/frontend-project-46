import yaml from 'js-yaml';

const parse = (data, extname) => {
  switch (extname) {
    case 'json':
      return JSON.parse(data);
    case 'yml':
    case 'yaml':
      return yaml.load(data);
    default:
      return `${extname} is wrong format.`;
  }
};
export default parse;
