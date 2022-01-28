/**
 * Plugins for humble.
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */

import {
  addStyleCSP,
  addScriptCSP,
  addImageCSP,
  addFrameCSP,
  addVideoCSP,
  addAudioCSP,
  addFontCSP,
} from './index';

/**
 * A plugin wrapper for the `addStyleCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addStyleCSPPlugin(
  humble: any,
) : Promise<void> {
  await addStyleCSP(humble.document);
}

/**
 * A plugin wrapper for the `addScriptCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addScriptCSPPlugin(
  humble: any,
) : Promise<void> {
  await addScriptCSP(humble.document);
}

/**
 * A plugin wrapper for the `addImageCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addImageCSPPlugin(
  humble: any,
) : Promise<void> {
  await addImageCSP(humble.document);
}

/**
 * A plugin wrapper for the `addFrameCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addFrameCSPPlugin(
  humble: any,
) : Promise<void> {
  await addFrameCSP(humble.document);
}

/**
 * A plugin wrapper for the `addVideoCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addVideoCSPPlugin(
  humble: any,
) : Promise<void> {
  await addVideoCSP(humble.document);
}

/**
 * A plugin wrapper for the `addAudioCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addAudioCSPPlugin(
  humble: any,
) : Promise<void> {
  await addAudioCSP(humble.document);
}

/**
 * A plugin wrapper for the `addFontCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
export async function addFontCSPPlugin(
  humble: any,
) : Promise<void> {
  await addFontCSP(humble.document);
}
