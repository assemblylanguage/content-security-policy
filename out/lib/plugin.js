"use strict";
/**
 * Plugins for humble.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addFontCSPPlugin = exports.addAudioCSPPlugin = exports.addVideoCSPPlugin = exports.addFrameCSPPlugin = exports.addImageCSPPlugin = exports.addScriptCSPPlugin = exports.addStyleCSPPlugin = void 0;
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
const index_1 = require("./index");
/**
 * A plugin wrapper for the `addStyleCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addStyleCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addStyleCSP(humble.document);
    });
}
exports.addStyleCSPPlugin = addStyleCSPPlugin;
/**
 * A plugin wrapper for the `addScriptCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addScriptCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addScriptCSP(humble.document);
    });
}
exports.addScriptCSPPlugin = addScriptCSPPlugin;
/**
 * A plugin wrapper for the `addImageCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addImageCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addImageCSP(humble.document);
    });
}
exports.addImageCSPPlugin = addImageCSPPlugin;
/**
 * A plugin wrapper for the `addFrameCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addFrameCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addFrameCSP(humble.document);
    });
}
exports.addFrameCSPPlugin = addFrameCSPPlugin;
/**
 * A plugin wrapper for the `addVideoCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addVideoCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addVideoCSP(humble.document);
    });
}
exports.addVideoCSPPlugin = addVideoCSPPlugin;
/**
 * A plugin wrapper for the `addAudioCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addAudioCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addAudioCSP(humble.document);
    });
}
exports.addAudioCSPPlugin = addAudioCSPPlugin;
/**
 * A plugin wrapper for the `addFontCSP` function.
 *
 * @param humble a Humble object that will be modified in place.
 */
function addFontCSPPlugin(humble) {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.addFontCSP(humble.document);
    });
}
exports.addFontCSPPlugin = addFontCSPPlugin;
//# sourceMappingURL=plugin.js.map