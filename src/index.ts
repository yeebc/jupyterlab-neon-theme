
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the @datalayer-jupyter/jupyterlab-theme-winter extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: '@yeebc/jupyterlab_neon_theme:plugin',
  requires: [IThemeManager],
  autoStart: true,
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension @datalayer-jupyter/jupyterlab-theme-winter is activated!');
    const style = '@yeebc/jupyterlab_neon_theme/index.css';
    manager.register({
      name: 'JupyterLab Neon Night',
      isLight: false,
      themeScrollbars: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default extension;
