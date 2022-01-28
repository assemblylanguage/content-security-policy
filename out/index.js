"use strict";
/**
 * Importing and re-exporting the content security policy code.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugins = exports.addFontCSP = exports.addAudioCSP = exports.addVideoCSP = exports.addFrameCSP = exports.addImageCSP = exports.addScriptCSP = exports.addStyleCSP = void 0;
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
const index_1 = require("./lib/index");
Object.defineProperty(exports, "addStyleCSP", { enumerable: true, get: function () { return index_1.addStyleCSP; } });
Object.defineProperty(exports, "addScriptCSP", { enumerable: true, get: function () { return index_1.addScriptCSP; } });
Object.defineProperty(exports, "addImageCSP", { enumerable: true, get: function () { return index_1.addImageCSP; } });
Object.defineProperty(exports, "addFrameCSP", { enumerable: true, get: function () { return index_1.addFrameCSP; } });
Object.defineProperty(exports, "addVideoCSP", { enumerable: true, get: function () { return index_1.addVideoCSP; } });
Object.defineProperty(exports, "addAudioCSP", { enumerable: true, get: function () { return index_1.addAudioCSP; } });
Object.defineProperty(exports, "addFontCSP", { enumerable: true, get: function () { return index_1.addFontCSP; } });
const plugin_1 = require("./lib/plugin");
exports.plugins = {
    addStyleCSPPlugin: plugin_1.addStyleCSPPlugin,
    addScriptCSPPlugin: plugin_1.addScriptCSPPlugin,
    addImageCSPPlugin: plugin_1.addImageCSPPlugin,
    addFrameCSPPlugin: plugin_1.addFrameCSPPlugin,
    addVideoCSPPlugin: plugin_1.addVideoCSPPlugin,
    addAudioCSPPlugin: plugin_1.addAudioCSPPlugin,
    addFontCSPPlugin: plugin_1.addFontCSPPlugin,
};
//# sourceMappingURL=index.js.map