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
                  buildHookId: '5ddf88c034b0fde3accc9b24',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gmjt9s2v',
                  apiId: 'c82ae432-89c4-4907-bd86-f8c53f042d1b'
                },
                {
                  buildHookId: '5ddf88c107c9681a533dabd2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-awrwjdci',
                  apiId: '86924a45-cac4-4572-ab50-390ef9c9dcf0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Pistus/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-awrwjdci.netlify.com',
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
