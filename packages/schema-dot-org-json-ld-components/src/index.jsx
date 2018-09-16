// @flow

import React from 'react';
import {Context} from '@randy.tarampi/schema-dot-org-types/lib/context';
type PropTypes = {markup: Context};

export default function JsonLd({markup} : PropTypes) {
    return <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(markup)}}>
    </script>
}