import { kebabToCamelCase } from '../utils';
import { ClassDescription } from './id-classes/class-interfaces';
import idClasses from './id-classes/id-classes';

const emptyDescription: ClassDescription = {
  category: 'unknonCategory',
  isAcceptable: false,
  title: 'emptyTitle',
  desc: 'emptyDesctiption',
  examples: 'no examples',
  preparingRules: [],
};

export const getDescriptionByClassName = (className: string) => {
  const classNameParts: string[] = className.split('__');
  const SHORT_NAME_INDEX: number = 1;
  const shortName: string = classNameParts[SHORT_NAME_INDEX];
  const cameledName: string = kebabToCamelCase(shortName);

  const description: ClassDescription = idClasses[cameledName] || emptyDescription;

  return description;
};
