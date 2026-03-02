import {
  camelCase as camelCaseLib,
  snakeCase as snakeCaseLib,
  upperCase,
  upperFirst,
} from 'lodash-es';
import {
  createRandomicGenerator,
  getMajorRandomBool,
  getMinorRandomBool,
  getRandomBool,
  getRandomChoice,
  getRandomFloat,
  getRandomInt,
  shuffle,
} from '../../../shared/lib/random';
import { ALPHABET } from '../config/alphabet';
import { WORDS } from '../config/words';
import type { TimerData } from './model.types';

const getRandomCharGenerator = () => createRandomicGenerator(ALPHABET);

const getRandomWordGenerator = () => createRandomicGenerator(WORDS);

// export const getRandomWord = () => getRandomChoice(random_words_data);
const getRandomWord = getRandomWordGenerator();

const createTimer = (minutes: number, seconds = 0): (() => TimerData) => {
  return () => ({
    seconds,
    minutes,
  });
};

export const getRandomColorHex = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const toStringValue = (value: unknown): string => {
  if (Array.isArray(value)) {
    return `[${value.map(toString).join(', ')}]`;
  }
  if (typeof value === 'object') {
    if (value === null) return `null`;

    return `{ ${Object.entries(value)
      .map(([key, value]) => `${key}: ${toStringValue(value)}`)
      .join(', ')} }`;
  }
  if (typeof value === 'string') {
    return value.includes('"') ? `'${value}'` : `"${value}"`;
  }

  if (value === undefined) {
    return 'undefined';
  }

  return (value as string).toString();
};

const toTag = (value: string) => `<${value}>`;

const snakeCase = (...parts: string[]) => snakeCaseLib(parts.join('_'));

const camelCase = (...parts: string[]) => camelCaseLib(parts.join('_'));

const pascalCase = (...parts: string[]) => upperFirst(camelCaseLib(...parts));

const callStringFunction = (cfg: { name: string; args: string[] }) => {
  return `${cfg.name}(${cfg.args.join()})`;
};

const createStringFunction: QuestionHelpers['createStringFunction'] = (
  cfg,
): string => {
  const constOrLet =
    getMinorRandomBool() && getMinorRandomBool()
      ? 'var'
      : getMinorRandomBool()
        ? 'let'
        : 'const';

  switch (cfg.type) {
    case 'arrow': {
      return `
${constOrLet} ${cfg.name} = (${cfg.args.join()}) => {
${cfg.body}
}
`;
    }
    case 'function-expression': {
      const functionName =
        cfg.expressionName || getRandomChoice(['', cfg.name]);

      return `
${constOrLet} ${cfg.name} = function${
        functionName && ` ${functionName}`
      }(${cfg.args.join()}) {
${cfg.body}
}
`;
    }
    case 'function-declaration': {
      return `
function ${cfg.name}(${cfg.args.join()}) {
${cfg.body}
}
`;
    }
    default: {
      return '';
    }
  }
};

const getRandomHtmlTag = () =>
  createRandomicGenerator([
    'span',
    'button',
    'a',
    'div',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'section',
    'footer',
    'article',
    'strong',
    'dl',
    'dt',
    'label',
    'nav',
    'iframe',
  ]);

const cyrb53 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  // biome-ignore lint/suspicious/noImplicitAnyLet: <explanation>
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 =
    Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^
    Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 =
    Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^
    Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const getHash = (str: string | number) => cyrb53(`${str}`, 100).toString(16);

const createLinearHashIdGenerator = (prefix = 'id') => {
  let num = 0;

  return () => {
    if (num > 99999) {
      num = 0;
    }

    return `${prefix}.${getHash(num++)}`;
  };
};

export const createQuestionHelpers = (): QuestionHelpers => {
  const getRandomChar = getRandomCharGenerator();

  const getAnyValue = () =>
    getRandomChoice([
      getRandomWord,
      getRandomChar,
      () => getRandomInt(0, 100),
      // TODO: add boolean?
    ])();

  const getVarName = () => {
    let varName = getRandomChoice([getRandomWord, getRandomChar])();

    if (getMinorRandomBool()) {
      varName = upperCase(varName);
    }

    if (getMinorRandomBool()) {
      varName = `${varName}${getRandomInt(1, 9)}`;
    }

    return varName;
  };

  const randHelpers: QuestionRandHelpers = {
    word: getRandomWord,
    int: getRandomInt,
    bool: getRandomBool,
    minorBool: getMinorRandomBool,
    majorBool: getMajorRandomBool,
    float: getRandomFloat,
    char: getRandomChar,
    color: getRandomColorHex,
    choice: getRandomChoice,
    shuffle: shuffle,
    htmlTag: getRandomHtmlTag(),
    value: getAnyValue,
    varName: getVarName,
  };

  return {
    ...randHelpers,
    rand: randHelpers,
    id: createLinearHashIdGenerator(),
    timer: createTimer,
    string: toStringValue,
    tag: toTag,
    camelCase: camelCase,
    pascalCase: pascalCase,
    snakeCase: snakeCase,
    value: getAnyValue,
    varName: getVarName,
    createStringFunction,
    callStringFunction,
  };
};
