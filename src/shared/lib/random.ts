import { shuffle as shuffleLib } from 'lodash-es';

export const createLinearGenerator = <T extends unknown[] | string>(
  dataset: T,
) => {
  let counter = 0;
  return (): T[0] => {
    if (counter === dataset.length) {
      counter = 0;
    }
    return dataset[counter++];
  };
};

export const createRandomicGenerator = <T extends unknown[] | string>(
  datasetRaw: T,
) => {
  const dataset = Array.isArray(datasetRaw) ? datasetRaw : datasetRaw.split('');
  const size = dataset.length - 1;
  const set = new Set();
  return (): T[0] => {
    if (set.size - 1 === size) {
      set.clear();
    }
    let i = getRandomInt(0, size);
    while (set.has(i)) {
      i = getRandomInt(0, size);
    }
    set.add(i);
    return dataset[i];
  };
};

export const getRandomFloat = <T extends number = number>(
  min = 0,
  max = 1,
): T => (Math.random() * (max - min) + min) as T;

export const getRandomInt = <T extends number = number>(min = 0, max = 1): T =>
  min === max ? (min as T) : (Math.round(getRandomFloat(min, max)) as T);

export const getRandomChoice = <T>(arr: T[]): T =>
  arr[getRandomInt(0, arr.length - 1)];

export const getRandomSizeArray = (min = 0, max = 10) =>
  Array(getRandomInt(min, max)).fill(null);

export const getRandomBool = () => getRandomInt(0, 1) === 1;

export const getMajorRandomBool = () => {
  return getRandomInt(0, 10) <= 6;
};

export const getMinorRandomBool = () => {
  return !getMajorRandomBool();
};

export const shuffle = <T>(arr: T[]): T[] => shuffleLib(arr);

export const getFrequencyValue = (frequency: number) => {
  // return getRandomInt(0, 1000) >= 1000 - Math.round(frequency * 1000);
  return Math.random() < frequency;
};
