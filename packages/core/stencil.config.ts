import type { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { vueOutputTarget } from '@stencil/vue-output-target';

const componentCorePackage = '@test/core';

export const config: Config = {
  namespace: 'test',
  globalScript: './src/global.ts',
  enableCache: true,
  transformAliasedImportPaths: true,
  buildEs5: 'prod',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
    {
      type: 'docs-json',
      file: '../docs/core.json',
    },
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/CheeseGrinder/poppy-ui/tree/main/packages/core/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-hydrate-script',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      copy: [
        {
          src: '../assets/custom-elements',
          dest: 'components',
          warn: true,
        },
      ],
      includeGlobalScripts: false,
    },
    vueOutputTarget({
      componentCorePackage: componentCorePackage,
      proxiesFile: '../vue/src/proxies.ts',
      includeImportCustomElements: true,
      includeDefineCustomElements: false,
      includePolyfills: false,
    }),
  ],
  bundles: [{ components: ['my-component'] }],
};
