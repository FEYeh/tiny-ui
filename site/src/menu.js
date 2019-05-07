import { lazy } from 'react';

const GUIDE_MENU = [{
    title: 'Tiny UI Introduction',
    route: 'introduction',
    component: lazy(() => import('./docs/guide/introduction')),
}, {
    title: 'Get Started',
    route: 'get-started',
    component: lazy(() => import('./docs/guide/get-started')),
}, {
    title: 'Customise Theme',
    route: 'customise-theme',
    component: lazy(() => import('./docs/guide/customise-theme')),
}, {
    title: 'Use in create-react-app',
    route: 'use-with-create-react-app',
    component: lazy(() => import('./docs/guide/use-react-app')),
}, {
    title: 'Change Log',
    route: 'change-log',
    component: lazy(() => import('./docs/guide/change-log')),
}, {
    title: 'FAQ',
    route: 'faq',
    component: lazy(() => import('./docs/guide/faq')),
}];

const COMPONENT_MENU = [{
    title: 'Foundation',
    children: [{
        title: 'Color',
        route: 'color',
        component: lazy(() => import('./docs/foundation/color')),
    }, {
        title: 'Icon',
        route: 'icon',
    }, {
        title: 'Typography',
        route: 'typography',
    }],
}, {
    title: 'Layout',
    children: [{
        title: 'Grid',
        route: 'grid',
    }, {
        title: 'Layout',
        route: 'layout',
    }],
}, {
    title: 'Data Display',
    children: [{
        title: 'Avatar',
        route: 'avatar',
        component: lazy(() => import('./docs/component/avatar')),
    }, {
        title: 'Badge',
        route: 'badge',
        component: lazy(() => import('./docs/component/badge')),
    }, {
        title: 'Button',
        route: 'button',
        component: lazy(() => import('./docs/component/button')),
    }, {
        title: 'Countdown',
        route: 'countdown',
        component: lazy(() => import('./docs/component/countdown')),
    }, {
        title: 'Flip',
        route: 'flip',
        component: lazy(() => import('./docs/component/flip')),
    }, {
        title: 'Progress',
        route: 'progress',
        component: lazy(() => import('./docs/component/progress')),
    }],
}, {
    title: 'Form Item',
    children: [{
        title: 'Form',
        route: 'form',
    }, {
        title: 'Checkbox',
        route: 'checkbox',
        component: lazy(() => import('./docs/component/checkbox')),
    }, {
        title: 'Native Select',
        route: 'native-select',
        component: lazy(() => import('./docs/component/native-select')),
    }, {
        title: 'Radio',
        route: 'radio',
        component: lazy(() => import('./docs/component/radio')),
    }, {
        title: 'Switch',
        route: 'switch',
        component: lazy(() => import('./docs/component/switch')),
    }, {
        title: 'Textarea',
        route: 'textarea',
        component: lazy(() => import('./docs/component/textarea')),
    }],
}, {
    title: 'Feedback',
    children: [{
        title: 'Alert',
        route: 'alert',
        component: lazy(() => import('./docs/component/alert')),
    }, {
        title: 'Modal',
        route: 'modal',
        component: lazy(() => import('./docs/component/modal')),
    }, {
        title: 'Popover',
        route: 'popover',
        component: lazy(() => import('./docs/component/popover')),
    }],
}, {
    title: 'Miscellany',
    children: [{
        title: 'Divider',
        route: 'divider',
        component: lazy(() => import('./docs/component/divider')),
    }],
}];

export {
    GUIDE_MENU,
    COMPONENT_MENU,
};
