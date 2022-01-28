"use strict";
/**
 * Unit tests on the Content Security Policy modifier functionality.
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
/* eslint-disable import/extensions */
/* eslint-disable prefer-destructuring */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
const ava_1 = require("ava");
const jsdom_1 = require("jsdom");
const index_1 = require("./index");
ava_1.default('addStyleCSP() => Adds a Content Security Policy to the document to block '
    + 'styles.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <head></head>
        <body></body>
      </html>
    `;
    const document = new jsdom_1.JSDOM(html).window.document;
    index_1.addStyleCSP(document);
    const cspMetaElement = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    const testResult = cspMetaElement
        .getAttribute('content')
        .includes('style-src none');
    t.is(testResult, true);
}));
ava_1.default('addScriptCSP() => Adds a Content Security Policy to the document to block '
    + 'scripts.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <head></head>
        <body></body>
      </html>
    `;
    const document = new jsdom_1.JSDOM(html).window.document;
    index_1.addScriptCSP(document);
    const cspMetaElement = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    const testResult = cspMetaElement
        .getAttribute('content')
        .includes('script-src none');
    t.is(testResult, true);
}));
ava_1.default('addContentSecurityPolicyBlock() => Adds a Content Security Policy to the '
    + 'document to block styles and scripts.', (t) => __awaiter(void 0, void 0, void 0, function* () {
    const html = `
      <html>
        <head></head>
        <body></body>
      </html>
    `;
    const document = new jsdom_1.JSDOM(html).window.document;
    index_1.addContentSecurityPolicyBlock(document, 'style-src');
    index_1.addContentSecurityPolicyBlock(document, 'script-src');
    const cspMetaElement = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    const testResult = true
        && cspMetaElement
            .getAttribute('content')
            .includes('style-src none')
        && cspMetaElement
            .getAttribute('content')
            .includes('script-src none');
    t.is(testResult, true);
}));
//# sourceMappingURL=tests.js.map