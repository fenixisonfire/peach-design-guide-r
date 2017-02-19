import React from 'react';
import ReactDOM from 'react-dom';

import NavMain from './NavMain';
import PageFooter from './PageFooter';
import Grid from '../../src/Grid';
import Alert from '../../src/Alert';
import Glyphicon from '../../src/Glyphicon';
import Label from '../../src/Label';

import Sidebar from '../../src';
import MaterialTitlePanel from './material_title_panel';
import SidebarContent from './sidebar_content';

import Image from '../../src/Image';

export default class HomePage extends React.Component {
  render() {

    return (

      <div>
        <NavMain activePage="home" />

        <main className="bs-docs-masthead" id="content" role="main">
          <div className="container">
            <Image src="./../assets/peachlogowhite.svg" rounded />
            <br></br>
            <br></br>
            <p className="lead">DESIGN GUIDE</p>
          </div>
        </main>

        <PageFooter />
      </div>
    );
  }
}
