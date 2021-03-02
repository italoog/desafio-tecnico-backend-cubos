/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const db = './src/database/db.json';

export const readRule = (): any => {
  const content = fs.readFileSync(db, 'utf-8');
  return JSON.parse(content);
};

export const writeRule = (content: any): void => {
  const correntContent = readRule();
  correntContent.push(content);
  const update = JSON.stringify(correntContent);
  fs.writeFileSync(db, update, 'utf-8');
};

export const deleteRule = (id: string): void => {
  const correntContent = readRule();
  const selectedItem = correntContent.findIndex((item: any) => item.id === id);
  correntContent.splice(selectedItem, 1);
};

export const findRule = (day: any): any => {
  const correntContent = readRule();
  const selectedItem = correntContent.findIndex(
    (item: any) => item.day === day,
  );
  return selectedItem;
};
