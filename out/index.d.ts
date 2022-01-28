/**
 * Importing and re-exporting the content security policy code.
 */
import { addStyleCSP, addScriptCSP, addImageCSP, addFrameCSP, addVideoCSP, addAudioCSP, addFontCSP } from './lib/index';
import { addStyleCSPPlugin, addScriptCSPPlugin, addImageCSPPlugin, addFrameCSPPlugin, addVideoCSPPlugin, addAudioCSPPlugin, addFontCSPPlugin } from './lib/plugin';
export { addStyleCSP, addScriptCSP, addImageCSP, addFrameCSP, addVideoCSP, addAudioCSP, addFontCSP, };
export declare const plugins: {
    addStyleCSPPlugin: typeof addStyleCSPPlugin;
    addScriptCSPPlugin: typeof addScriptCSPPlugin;
    addImageCSPPlugin: typeof addImageCSPPlugin;
    addFrameCSPPlugin: typeof addFrameCSPPlugin;
    addVideoCSPPlugin: typeof addVideoCSPPlugin;
    addAudioCSPPlugin: typeof addAudioCSPPlugin;
    addFontCSPPlugin: typeof addFontCSPPlugin;
};
//# sourceMappingURL=index.d.ts.map