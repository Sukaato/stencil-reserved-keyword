import { initialize } from '@test/core/components';
import type { Plugin } from 'vue';

const toKebabCase = (eventName: string) => {
  return eventName.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g, '$1-$2').toLowerCase();
};

const getHelperFunctions = () => {
  return {
    ael: (el: any, eventName: string, cb: any, opts: any) => el.addEventListener(toKebabCase(eventName), cb, opts),
    rel: (el: any, eventName: string, cb: any, opts: any) => el.removeEventListener(toKebabCase(eventName), cb, opts),
    ce: (eventName: string, opts: any) => new CustomEvent(toKebabCase(eventName), opts),
  };
};

export const TestVue: Plugin = {
  async install() {
    if (typeof document !== 'undefined') {
      document.documentElement.classList.add('test-ce');
    }

    initialize(getHelperFunctions());
  },
};
