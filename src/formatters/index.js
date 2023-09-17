import plain from './plain.js';
import stylish from './stylish.js';

const getFormat = (tree, formatName) => {
  switch(formatName) {
    case 'plain':
      return plain(tree);
    case 'stylish':
      return stylish(tree);
    case 'json':
      return JSON.stringify(tree);
    default:
      return '';
  };
};
export default getFormat;
