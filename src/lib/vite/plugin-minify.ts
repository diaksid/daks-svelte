import type { Plugin } from 'vite';
import { minify, type Options } from 'html-minifier-terser';

const minification: Options = {
  collapseBooleanAttributes: true,
  collapseInlineTagWhitespace: true,
  collapseWhitespace: true,
  decodeEntities: true,
  minifyCSS: true,
  minifyJS: true,
  minifyURLs: true,
  //preserveLineBreaks: true,
  removeAttributeQuotes: true,
  //removeComments: true,
  removeOptionalTags: true,
  removeRedundantAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeTagWhitespace: true,
  useShortDoctype: true
};

export default (options?: Options): Plugin => ({
  name: 'vite-plugin-minify',
  enforce: 'post',
  apply: 'build',
  transformIndexHtml: async (html: string) =>
    await minify(html, {
      ...minification,
      ...options
    })
});
