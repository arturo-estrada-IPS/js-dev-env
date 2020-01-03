import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    // eslint-disable-next-line no-console
    return console.error(chalk.red(err))
  } else {
    // eslint-disable-next-line no-console
    return console.info(chalk.green('Mock data generated.'));
  }
})
