export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6024538d0d6fb850ad4b563d',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-p7ncza9e',
                  apiId: 'c48c5f42-1cd0-4a24-bce2-60ba74ed29e0'
                },
                {
                  buildHookId: '6024538ddd687845bce831c3',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-dj24r5es',
                  apiId: '58e01a4a-0a9e-4727-be8a-fefaf96c4408'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/2ten/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-dj24r5es.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
