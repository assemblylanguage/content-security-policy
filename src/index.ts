/**
 * Importing and re-exporting the content security policy code.
 */

/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */

import {
  addStyleCSP,
  addScriptCSP,
  addImageCSP,
  addFrameCSP,
  addVideoCSP,
  addAudioCSP,
  addFontCSP,
} from './lib/index';

import {
  addStyleCSPPlugin,
  addScriptCSPPlugin,
  addImageCSPPlugin,
  addFrameCSPPlugin,
  addVideoCSPPlugin,
  addAudioCSPPlugin,
  addFontCSPPlugin,
} from './lib/plugin';

export {
  addStyleCSP,
  addScriptCSP,
  addImageCSP,
  addFrameCSP,
  addVideoCSP,
  addAudioCSP,
  addFontCSP,
};

export const plugins = {
  addStyleCSPPlugin,
  addScriptCSPPlugin,
  addImageCSPPlugin,
  addFrameCSPPlugin,
  addVideoCSPPlugin,
  addAudioCSPPlugin,
  addFontCSPPlugin,
};
