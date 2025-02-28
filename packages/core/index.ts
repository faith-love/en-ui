import { makeInstaller } from '@en-ui/utils';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import components from './components';
import '@en-ui/theme/index.css';

library.add(fas);
const installer = makeInstaller(components);
export * from '@en-ui/components';
export default installer;
