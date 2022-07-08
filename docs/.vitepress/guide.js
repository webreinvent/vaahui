let sidebar;

sidebar = [
    {
        text: 'Introduction',
        link: '/guide/index.md',

    },
    {
        text: 'VaahUI',
        link: '/guide/vaahui/',
        children: [
            {text: 'Accordion', link: '/guide/vaahui/accordion'},
            {text: 'Alert', link: '/guide/vaahui/alert'},
            {text: 'Avatar', link: '/guide/vaahui/avatar'},
            {text: 'Button', link: '/guide/vaahui/button'},
            {text: 'Drawer', link: '/guide/vaahui/drawer'},
            {text: 'Dropdown', link: '/guide/vaahui/dropdown'},
            {text: 'Pop Confirm', link: '/guide/vaahui/pop-confirm'},
            {text: 'VhTree', link: '/guide/vaahui/tree'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}
