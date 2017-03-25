import React from 'react';
import AutoAffix from 'react-overlays/lib/AutoAffix';
import Waypoint from 'react-waypoint';

import Nav from '../../src/Nav';
import NavItem from '../../src/NavItem';

import Anchor from './Anchor';
import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import SubNav from './SubNav';
import ReactDOM from 'react-dom'
import ReactSVG from 'react-svg'
import Image from '../../src/Image';

import DataVisOverview from './sections/DataVisOverview';

import DataVisBasic from './sections/DataVisBasic';
import DataVisBasicLine from './sections/DataVisBasicLine';
import DataVisBasicLineM from './sections/DataVisBasicLineM';
import DataVisBasicArea from './sections/DataVisBasicArea';
import DataVisBasicAreaStack from './sections/DataVisBasicAreaStack';
import DataVisBasicBar from './sections/DataVisBasicBar';
import DataVisBasicBarGroup from './sections/DataVisBasicBarGroup';
import DataVisBasicBarStack from './sections/DataVisBasicBarStack';
import DataVisBasicScatter from './sections/DataVisBasicScatter';
import DataVisBasicPie from './sections/DataVisBasicPie';
import DataVisBasicDonut from './sections/DataVisBasicDonut';

import DataVisTooltip from './sections/DataVisTooltip';
import DataVisTooltipLine from './sections/DataVisTooltipLine';
import DataVisTooltipLineM from './sections/DataVisTooltipLineM';
import DataVisTooltipAreaStack from './sections/DataVisTooltipAreaStack';
import DataVisTooltipBar from './sections/DataVisTooltipBar';
import DataVisTooltipBarGroup from './sections/DataVisTooltipBarGroup';
import DataVisTooltipBarStack from './sections/DataVisTooltipBarStack';
import DataVisTooltipScatter from './sections/DataVisTooltipScatter';
import DataVisTooltipPie from './sections/DataVisTooltipPie';


// order matters
/* eslint-disable indent */
const sections = {
  datavisoverview: '#datavisoverview',
  datavisbasic: '#datavisbasic',
    datavisbasicline: '#datavisbasicline',
    datavisbasiclinem: '#datavisbasiclinem',
    datavisbasicarea: '#datavisbasicarea',
    datavisbasicareastack: '#datavisbasicareastack',
    datavisbasicbar: '#datavisbasicbar',
    datavisbasicbargroup: '#datavisbasicbargroup',
    datavisbasicbarstack: '#datavisbasicbarstack',
    datavisbasicscatter: '#datavisbasicscatter',
    datavisbasicpie: '#datavisbasicpie',
    datavisbasicdonut: '#datavisbasicdonut',
  datavistooltip: '#datavistooltip',
    datavistooltipline: '#datavistooltipline',
    datavistooltiplinem: '#datavistooltiplinem',
    datavistooltipareastack: '#datavistooltipareastack',
    datavistooltipbar: '#datavistooltipbar',
    datavistooltipbargroup: '#datavistooltipbargroup',
    datavistooltipbarstack: '#datavistooltipbarstack',
    datavistooltipscatter: '#datavistooltipscatter',
    datavistooltippie: '#datavistooltippie',
};
/* eslint-enable indent */

let ScrollSpy = ({ href, onBefore, onAfter }) => (
  <Waypoint
    onEnter={({ previousPosition }) => (
      previousPosition === Waypoint.above && onBefore(href)
    )}
    onLeave={({ currentPosition }) => (
      currentPosition === Waypoint.above && onAfter(href)
    )}
    topOffset={10}
    bottomOffset={-10}
  />
);

const DatavisPage = React.createClass({
  getInitialState() {
    return {
      activeNavItemHref: null
    };
  },

  getMain() {
    return this.refs.main;
  },

  handleNavItemSelect(key, e) {
    window.location = e.target.href;
  },

  componentDidMount() {
    this.afterSections = {};
    Object.keys(sections).forEach(
      key => this.afterSections[sections[key]] = false
    );

    const { hash } = window.location;
    if (this.afterSections[hash] !== undefined) {
      for (const href of Object.keys(this.afterSections)) {
        this.afterSections[href] = true;

        if (href === hash) {
          this.setActiveNavItem();
          break;
        }
      }
    }
  },

  setActiveNavItem() {
    let activeNavItemHref = null;

    for (const href of Object.keys(this.afterSections)) {
      if (!this.afterSections[href]) {
        break;
      }

      activeNavItemHref = href;
    }

    this.setState({ activeNavItemHref });
  },

  renderScrollSpy(href) {
    return (
      <ScrollSpy
        href={href}
        onBefore={this.onBefore}
        onAfter={this.onAfter}
      />
    );
  },

  onBefore(href) {
    this.afterSections[href] = false;
    this.updateActiveHref();
  },

  onAfter(href) {
    this.afterSections[href] = true;
    this.updateActiveHref();
  },

  updateActiveHref() {
    if (this.updateActiveHrefHandle != null) {
      return;
    }

    this.updateActiveHrefHandle = setTimeout(() => {
      this.updateActiveHrefHandle = null;
      this.setActiveNavItem();
    });
  },

  render() {
    return (
      <div>
        <NavMain activePage="datavis" />

        <div ref="main" className="container bs-docs-container">
          <div className="row">
            <div className="col-md-9" role="main">

              {this.renderScrollSpy(sections.datavisoverview)}
              <DataVisOverview />


              {this.renderScrollSpy(sections.datavisbasic)}
              <DataVisBasic />

              {this.renderScrollSpy(sections.datavisbasicline)}
              <DataVisBasicLine />

              {this.renderScrollSpy(sections.datavisbasiclinem)}
              <DataVisBasicLineM />

              {this.renderScrollSpy(sections.datavisbasicarea)}
              <DataVisBasicArea />

              {this.renderScrollSpy(sections.datavisbasicareastack)}
              <DataVisBasicAreaStack />

              {this.renderScrollSpy(sections.datavisbasicbar)}
              <DataVisBasicBar />

              {this.renderScrollSpy(sections.datavisbasicbargroup)}
              <DataVisBasicBarGroup />

              {this.renderScrollSpy(sections.datavisbasicbarstack)}
              <DataVisBasicBarStack />

              {this.renderScrollSpy(sections.datavisbasicscatter)}
              <DataVisBasicScatter />

              {this.renderScrollSpy(sections.datavisbasicpie)}
              <DataVisBasicPie />

              {this.renderScrollSpy(sections.datavisbasicdonut)}
              <DataVisBasicDonut />


              {this.renderScrollSpy(sections.datavistooltip)}
              <DataVisTooltip />

              {this.renderScrollSpy(sections.datavistooltipline)}
              <DataVisTooltipLine />

              {this.renderScrollSpy(sections.datavistooltiplinem)}
              <DataVisTooltipLineM />

              {this.renderScrollSpy(sections.datavistooltipareastack)}
              <DataVisTooltipAreaStack />

              {this.renderScrollSpy(sections.datavistooltipbar)}
              <DataVisTooltipBar />

              {this.renderScrollSpy(sections.datavistooltipbargroup)}
              <DataVisTooltipBarGroup />

              {this.renderScrollSpy(sections.datavistooltipbarstack)}
              <DataVisTooltipBarStack />

              {this.renderScrollSpy(sections.datavistooltipscatter)}
              <DataVisTooltipScatter />

              {this.renderScrollSpy(sections.datavistooltippie)}
              <DataVisTooltipPie />

            </div>


            <div className="col-md-3 bs-docs-sidebar-holder">
              <AutoAffix
                viewportOffsetTop={20}
                container={this.getMain}
              >
                <div
                  className="bs-docs-sidebar hidden-print"
                  role="complementary"
                >
                  <Nav
                    className="bs-docs-sidenav"
                    activeHref={this.state.activeNavItemHref}
                    onSelect={this.handleNavItemSelect}
                  >

                    <SubNav href={sections.datavisoverview} text="Overview">
                    </SubNav>

                    <SubNav href={sections.datavisbasic} text="Basic Graphs">
                      <NavItem href={sections.datavisbasicline}>Basic Line</NavItem>
                      <NavItem href={sections.datavisbasiclinem}>Basic Line Multiple</NavItem>
                      <NavItem href={sections.datavisbasicarea}>Basic Area</NavItem>
                      <NavItem href={sections.datavisbasicareastack}>Basic Area Stack</NavItem>
                      <NavItem href={sections.datavisbasicbar}>Basic Bar</NavItem>
                      <NavItem href={sections.datavisbasicbargroup}>Basic Bar Group</NavItem>
                      <NavItem href={sections.datavisbasicbarstack}>Basic Bar Stack</NavItem>
                      <NavItem href={sections.datavisbasicscatter}>Basic Scatter</NavItem>
                      <NavItem href={sections.datavisbasicpie}>Basic Pie</NavItem>
                      <NavItem href={sections.datavisbasicdonut}>Basic Donut</NavItem>
                    </SubNav>

                    <SubNav href={sections.datavistooltip} text="Tooltip Graphs">
                      <NavItem href={sections.datavistooltipline}>Tooltip Line</NavItem>
                      <NavItem href={sections.datavistooltiplinem}>Tooltip Line Multiple</NavItem>
                      <NavItem href={sections.datavistooltipareastack}>Tooltip Area Stack</NavItem>
                      <NavItem href={sections.datavistooltipbar}>Tooltip Bar</NavItem>
                      <NavItem href={sections.datavistooltipbargroup}>Tooltip Bar Group</NavItem>
                      <NavItem href={sections.datavistooltipbarstack}>Tooltip Bar Stack</NavItem>
                      <NavItem href={sections.datavistooltipscatter}>Tooltip Scatter</NavItem>
                      <NavItem href={sections.datavistooltippie}>Tooltip Pie</NavItem>
                    </SubNav>


                  </Nav>

                  <a className="back-to-top" href="#top">
                    Back to top
                  </a>
                </div>
              </AutoAffix>
            </div>
          </div>
        </div>
        <PageFooter ref="footer" />
      </div>
    );
  }
});

export default DatavisPage;
