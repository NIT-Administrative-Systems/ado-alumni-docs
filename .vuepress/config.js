module.exports = {
    title: 'ADO Alumni Docs',
    description: '.',
    dest: '.build/docs',
    base: '/ADO-Alumni-Docs/',
    head: [
        ['link', { href: 'https://common.northwestern.edu/v8/icons/favicon-16.png', rel: 'icon', sizes: '16x16', type: 'image/png' }],
        ['link', { href: 'https://common.northwestern.edu/v8/icons/favicon-32.png', rel: 'icon', sizes: '32x32', type: 'image/png' }],
    ],
    plugins: [
        ['@vuepress/search', {
          searchMaxSuggestions: 10
        }]
    ],

    themeConfig: {
        repo: 'NIT-Administrative-Systems/ado-alumni-docs',
        docsDir: '',
        docsBranch: 'main',
        editLinks: true,
        editLinkText: 'Edit Page',
        lastUpdated: true,

        sidebar: [{
                title: 'Introduction',
                collapsable: false,
                children: [
                    ['/', 'Overview'],
                    'roles-responsibilities',
                    'tools',

                ],
            },
            // {
            //     title: 'Infrastructure',
            //     collapsable: false,
            //     children: [
            //         'databases',

            //     ].map(file => 'infrastructure/' + file),
            // },
            // {
            //     title: 'Infrastructure as Code',
            //     collapsable: false,
            //     children: [
            //         'terraform-concepts',
            //         'as-tf-modules',
            //         'example-tf',
            //         'available-modules',
            //         'state-buckets',
            //         'tf-import',
            //         'tf-upgrading',
            //         'faq',
            //     ].map(file => 'iac/' + file),
            // },
            // {
            //     title: 'CI & CD',
            //     collapsable: false,
            //     children: [
            //         'jenkins',
            //         'shared-libs',
            //         'jenkins-ecs-agent'
            //     ].map(file => 'ci-cd/' + file),
            // },
            // {
            //     title: 'Application Development',
            //     collapsable: false,
            //     children: [
            //         'principles',
            //         'app-patterns',
            //         'libraries',
            //     ].map(file => 'development/' + file),
            // },            
            // {
            //     title: 'GitHub',
            //     collapsable: false,
            //     children: [
            //         'settings-permissions',
            //         'repo-layout',
            //         'workflow',
            //         'policies',
            //     ].map(file => 'github/' + file),
            // },
        ],
    },
}