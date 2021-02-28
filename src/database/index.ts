/* eslint-disable @typescript-eslint/no-explicit-any */
import fs from 'fs';

const db = './src/database/db.json';

export const read = (): any => {
  const content = fs.readFileSync(db, 'utf-8');
  return JSON.parse(content);
};

export const write = (content: any): void => {
  const correntContent = read();
  correntContent.push(content);
  const update = JSON.stringify(correntContent);
  fs.writeFileSync(db, update, 'utf-8');
};

export const deleteRule = (id: string): void => {
  const correntContent = read();
  const selectedItem = correntContent.findIndex((item: any) => item.id === id);
  correntContent.splice(selectedItem, 1);
};

export const find = (day: any): any => {
  const correntContent = read();
  const selectedItem = correntContent.findIndex(
    (item: any) => item.day === day,
  );
  return selectedItem;
};
