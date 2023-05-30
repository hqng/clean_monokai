import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the clean_monokai extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'clean_monokai:plugin',
  description: 'A JupyterLab extension. of a neat monokai theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension clean_monokai is activated!');
    const style = 'clean_monokai/index.css';

    manager.register({
      name: 'clean_monokai',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
