import { useDrawPoster } from './core';
import * as plugins from './plugins/preset';
useDrawPoster.use(plugins.drawImage());
useDrawPoster.use(plugins.drawImageFit());
useDrawPoster.use(plugins.drawRoundImage());
useDrawPoster.use(plugins.fillRoundRect());
useDrawPoster.use(plugins.roundRect());
useDrawPoster.use(plugins.strokeRoundRect());
useDrawPoster.use(plugins.fillWarpText());
export * from './core';
//# sourceMappingURL=index.js.map