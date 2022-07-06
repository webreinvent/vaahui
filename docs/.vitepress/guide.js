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
            {text: 'Alert', link: '/guide/vaahui/alert'},
            {text: 'Button', link: '/guide/vaahui/button'},
            {text: 'Dropdown', link: '/guide/vaahui/dropdown'},
            {text: 'VhTree.vue', link: '/guide/vaahui/tree'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}
