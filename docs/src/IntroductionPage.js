import React from 'react';

import CodeExample from './CodeExample';
import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';

const IntroductionPage = React.createClass({
  render() {
    return (
      <div>
        <NavMain activePage="overview" />

        <div className="container bs-docs-container">
          <div className="row">
            <div className="col-md-9" role="main">
              <div className="bs-docs-section">
                <p className="lead">
                  <br></br>
                  Overview
                </p>

                <p>
                The Platform for Enhanced Analytics and Computational Healthcare (PEACH) is a hub for digital innovation in healthcare.
                PEACH encompasses multiple projects and themes, which aim to tackle the various problems in eHealth.
                <br></br>
                To tie the different strands of the platform together, we have committed to a common design language.
                This website will outline its philosophies, guidelines and components. When creating new PEACH applications, please ensure that you follow the guidance in the relevant sections.
                </p>

                <h2></h2>

                <p>
                We strongly promote the reuse of common components - this encourages a consistent look, feel and meaning across applications. We envisage that some sections of this site will be constantly updated as new components are added to different applications.
                To add these updates, please submit a pull request incorporating the novel content.
                </p>





              </div>
            </div>
          </div>
        </div>
        <PageFooter />
      </div>
    );
  }
});

export default IntroductionPage;
