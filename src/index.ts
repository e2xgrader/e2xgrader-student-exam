import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { ISettingRegistry } from '@jupyterlab/settingregistry';

/**
 * Initialization data for the @e2xgrader/student-exam extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: '@e2xgrader/student-exam:plugin',
  description: 'A JupyterLab extension to activate e2xgrader student exam mode',
  autoStart: true,
  optional: [ISettingRegistry],
  activate: (app: JupyterFrontEnd, settingRegistry: ISettingRegistry | null) => {
    console.log('JupyterLab extension @e2xgrader/student-exam is activated!');

    if (settingRegistry) {
      settingRegistry
        .load(plugin.id)
        .then(settings => {
          console.log('@e2xgrader/student-exam settings loaded:', settings.composite);
        })
        .catch(reason => {
          console.error('Failed to load settings for @e2xgrader/student-exam.', reason);
        });
    }
  }
};

export default plugin;
