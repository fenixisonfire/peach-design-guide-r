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



global.CodeMirror = CodeMirror;

Root.assetBaseUrl = window.ASSET_BASE_URL;
Root.propData = window.PROP_DATA;

ReactDOM.render(
  <Router history={browserHistory} children={routes} />,
  document
);
