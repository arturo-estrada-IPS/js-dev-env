/* eslint-disable no-console */
import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from './../webpack.config.prod';

process.env.NODE_ENV = 'production';
console.info(chalk.blue('Generating minified bundle for production.'))

webpack(webpackConfig).run((err, stats) => {
  if (err) {
    console.error(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    console.error(chalk.red('😭 Webpack has found the following errors'));
    return jsonStats.errors.map(error => console.error(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.warn(chalk.yellow('🤔 Webpack has the following warnings'));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }

  console.log(`Webpack stats: ${stats}`);
  console.info(chalk.green('Your app has been build for production and written to /dist 😊.'));

  return 0;
});
