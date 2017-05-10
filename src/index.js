require('../vendor/aframe-master.min.js');

window.saveAs = require('../vendor/saveas.js').saveAs;
require('./dragndrop.js');
require('./binarymanager.js');
require('../vendor/OrbitControls.js');

require('./utils.js');
require('./ui2d.js');
require('./experiment-menu-2d');

require('./systems/brush.js');
require('./systems/ui.js');
require('./systems/painter.js');
require('./systems/experiment-menu.js');

require('./components/brush.js');
require('./components/if-no-vr-headset.js');
require('./components/json-model.js');
require('./components/line.js');
require('./components/look-controls-alt.js');
require('./components/orbit-controls.js');
require('./components/paint-controls.js');
require('./components/ui.js');
require('./components/ui-raycaster.js');
require('./components/experiment-menu.js');
require('./components/ptp-drawings.js');

require('./brushes/line.js');
require('./brushes/stamp.js');
require('./brushes/spheres.js');
require('./brushes/cubes.js');
require('./brushes/rainbow.js');
require('./brushes/single-sphere.js');
