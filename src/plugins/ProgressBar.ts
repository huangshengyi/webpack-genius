import { PluginHandle } from './PluginHandle';
import { WebpackPluginInstance } from 'webpack';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import chalk from 'chalk';

export class ProgressBar extends PluginHandle {
  collect(): WebpackPluginInstance[] {
    return [
      new ProgressBarPlugin({
        format: '[:bar] ' + chalk.green.bold(':percent') + ' (:elapsed seconds) :msg',
        width: 30,
        summary: false,
      }),
    ];
  }
}
