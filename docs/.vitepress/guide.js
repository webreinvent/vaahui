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
            {text: 'Button', link: '/guide/vaahui/button'},
            {text: 'Dropdown', link: '/guide/vaahui/dropdown'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}
