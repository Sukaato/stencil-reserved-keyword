import { setPlatformHelpers } from '@stencil/core';

type PlatformHelpers = Parameters<typeof setPlatformHelpers>[0];

export const initialize = (helpers: PlatformHelpers): void => {
    setPlatformHelpers(helpers);
};

export default initialize;
