import React from 'react';

import Anchor from '../Anchor';
import PropTable from '../PropTable';
import ReactPlayground from '../ReactPlayground';
import Samples from '../Samples';

export default function DesignLocalizationSection() {
  return (
    <div className="bs-docs-section">
      <h1 className="page-header">
        <Anchor id="localization">Localization</Anchor>
      </h1>

      <h3><Anchor id="localization-intro">Introduction</Anchor></h3>
      <p>“Internationalization (i18n) is the process of designing a software application so that it can potentially be adapted to various languages and regions without engineering changes. Localization (l10n) is the process of adapting internationalized software for a specific region or language by adding locale-specific components and translating text.”</p>

    </div>
  );
}
