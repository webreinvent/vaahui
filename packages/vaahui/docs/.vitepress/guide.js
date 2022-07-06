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
        ]
    },
    {
        text: 'Element Plus',
        link: '/guide/element-plus/',
        children: [
            {text: 'Button', link: '/guide/element-plus/button'},
        ]
    },

];

module.exports ={
    sidebar:sidebar,
}
