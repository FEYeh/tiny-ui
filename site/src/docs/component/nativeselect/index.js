import React from 'react';
import createComponentExample from '../../../lib';
import { NativeSelect } from 'tiny-ui/src';

export default createComponentExample({
    componentName: 'nativeselect',
    examples: ['basic', 'size', 'group', 'disabled'],
    dependencies: { NativeSelect },
});