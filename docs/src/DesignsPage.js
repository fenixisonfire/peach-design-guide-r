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

import DesignOverviewSection from './sections/DesignOverview';
import DesignAccessibilitySection from './sections/DesignAccessibility';
import DesignColorSection from './sections/DesignColor';
import DesignDataEntrySection from './sections/DesignDataEntry';
import DesignDisplayingDataSection from  './sections/DesignDisplayingData';
import DesignLayoutSection from './sections/DesignLayout';
import DesignLoadingSection from './sections/DesignLoading';
import DesignLocalizationSection from './sections/DesignLocalization';
import DesignMarkupAndStyleSection from './sections/DesignMarkupAndStyle';
import DesignMotionSection from './sections/DesignMotion';
import DesignNavigationSection from './sections/DesignNavigation';
import DesignTypographySection from './sections/DesignTypography';
import DesignVoiceAndToneSection from './sections/DesignVoiceAndTone';

// order matters
/* eslint-disable indent */
const sections = {
  overview: '#overview',
  accessibility: '#accessibility',
  color: '#color',
  dataEntry: '#data-entry',
  displaydata: '#displaydata',
  designlayout: '#designlayout',
  loading: '#loading',
  localization: '#localization',
  markupStyle: '#markup-style',
  motion: '#motion',
  navigation: '#navigation',
  typography: '#typography',
  voiceTone: '#voice-tone',
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

const ComponentsPage = React.createClass({
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
        <NavMain activePage="design" />

        <div ref="main" className="container bs-docs-container">
          <div className="row">
            <div className="col-md-9" role="main">
              {this.renderScrollSpy(sections.overview)}
              <DesignOverviewSection />

              {this.renderScrollSpy(sections.accessibility)}
              <DesignAccessibilitySection />

              {this.renderScrollSpy(sections.color)}
              <DesignColorSection />

              {this.renderScrollSpy(sections.dataEntry)}
              <DesignDataEntrySection />

              {this.renderScrollSpy(sections.displaydata)}
              <DesignDisplayingDataSection />

              {this.renderScrollSpy(sections.designlayout)}
              <DesignLayoutSection />

              {this.renderScrollSpy(sections.loading)}
              <DesignLoadingSection />

              {this.renderScrollSpy(sections.localization)}
              <DesignLocalizationSection />

              {this.renderScrollSpy(sections.markupStyle)}
              <DesignMarkupAndStyleSection />

              {this.renderScrollSpy(sections.motion)}
              <DesignMotionSection />

              {this.renderScrollSpy(sections.navigation)}
              <DesignNavigationSection />

              {this.renderScrollSpy(sections.typography)}
              <DesignTypographySection />

              {this.renderScrollSpy(sections.voiceTone)}
              <DesignVoiceAndToneSection />

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
                    <SubNav href={sections.overview} text="Overview">
                    </SubNav>

                    <SubNav href={sections.accessibility} text="Accessibility">
                    </SubNav>

                    <SubNav href={sections.color} text="Color">
                    </SubNav>

                    <SubNav href={sections.dataEntry} text="Data Entry">
                    </SubNav>

                    <SubNav href={sections.displaydata} text="Displaying Data">
                    </SubNav>

                    <SubNav href={sections.designlayout} text="Layout">
                    </SubNav>

                    <SubNav href={sections.loading} text="Loading">
                    </SubNav>

                    <SubNav href={sections.localization} text="Localization">
                    </SubNav>

                    <SubNav href={sections.markupStyle} text="Markup and Style">
                    </SubNav>

                    <SubNav href={sections.motion} text="Motion">
                    </SubNav>

                    <SubNav href={sections.navigation} text="Navigation">
                    </SubNav>

                    <SubNav href={sections.typography} text="Typography">
                    </SubNav>

                    <SubNav href={sections.voiceTone} text="Voice and Tone">
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

export default ComponentsPage;
