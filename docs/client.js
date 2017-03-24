import CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/jsx/jsx';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import 'bootstrap/less/bootstrap.less';

import './assets/docs.css';
import './assets/style.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/solarized.css';
import './assets/CodeMirror.css';

import './assets/carousel.png';
import './assets/logo.png';
import './assets/favicon.ico';
import './assets/thumbnail.png';
import './assets/thumbnaildiv.png';
import './assets/TheresaKnott_castle.svg';
import './assets/peachlogowhite.svg';

import './assets/design/img-clarity.svg'
import './assets/design/img-efficiency.svg'
import './assets/design/img-consistency.svg'
import './assets/design/img-beauty.svg'

import './assets/design/img-messaging.svg'
import './assets/design/img-differentiation.svg'
import './assets/design/img-hierarchy.svg'
import './assets/design/img-accessibility.svg'

import './assets/design/de1.png'
import './assets/design/de2.png'
import './assets/design/de3.png'
import './assets/design/de4.png'
import './assets/design/de5.png'
import './assets/design/de6.png'
import './assets/design/de7.png'
import './assets/design/de8.png'
import './assets/design/de9.png'
import './assets/design/de10.png'
import './assets/design/de11.png'
import './assets/design/de12.png'
import './assets/design/de13.png'
import './assets/design/de14.png'
import './assets/design/de15.png'

import './assets/design/img-table.svg'
import './assets/design/img-tree-grid.svg'
import './assets/design/img-tile.svg'
import './assets/design/img-interactive-card.svg'
import './assets/design/img-discussion-feed.svg'
import './assets/design/img-activity-feed.svg'

import './assets/design/img-record-layout.svg'
import './assets/design/img-workspace-layout.svg'
import './assets/design/img-reference-layout.svg'
import './assets/design/img-table-layout.svg'
import './assets/design/img-board-layout.svg'
import './assets/design/img-master-detail-1.svg'
import './assets/design/img-master-detail-2.svg'
import './assets/design/img-master-detail-3.svg'

import './assets/design/img-loading-card.svg'
import './assets/design/img-loading-lazy.svg'
import './assets/design/img-loading-list.svg'
import './assets/design/img-loading-modal.svg'
import './assets/design/img-loading-record.svg'
import './assets/design/img-loading-page.svg'
import './assets/design/img-stencils.svg'
import './assets/design/img-stencil-record.svg'
import './assets/design/img-stencil-table.svg'

import './assets/design/localization-menu-english.png'
import './assets/design/localization-menu-french.png'
import './assets/design/localization-button-done-english.png'
import './assets/design/localization-button-done-portuguese.png'
import './assets/design/t1.png'
import './assets/design/t2.png'
import './assets/design/localization-anchor-english.png'
import './assets/design/localization-anchor-japanese.png'

import './assets/design/house.png'

import './assets/design/img-timing.svg'
import './assets/design/img-elevation.svg'
import './assets/design/img-effects.svg'
import './assets/design/img-enter-exit.svg'
import './assets/design/img-emphasis.svg'
import './assets/design/img-transitional.svg'
import './assets/design/img-personality.svg'
import './assets/design/img-elevation-perspective.svg'
import './assets/design/g1.png'

import './assets/design/img-tabs.svg'
import './assets/design/img-tabs-global.svg'
import './assets/design/img-tabs-scoped.svg'
import './assets/design/img-tabs-nesting.svg'
import './assets/design/img-tree.svg'
import './assets/design/img-breadcrumbs.svg'
import './assets/design/img-breadcrumbs-truncate.svg'
import './assets/design/img-modal-sections.svg'
import './assets/design/img-modal-width.svg'

import './assets/design/img-font-scale.svg'



//D3 placeholder. 
import './assets/d3placeholder.png'


global.CodeMirror = CodeMirror;

Root.assetBaseUrl = window.ASSET_BASE_URL;
Root.propData = window.PROP_DATA;

ReactDOM.render(
  <Router history={browserHistory} children={routes} />,
  document
);
