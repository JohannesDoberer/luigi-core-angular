Luigi.setConfig({
  navigation: {
    validWebcomponentUrls: ['.*'],
    nodes: () => [
      {
        pathSegment: 'home',
        label: 'Home',
        icon: 'home',
        viewUrl: '/sampleapp.html#/home',
        children: [
          {
            pathSegment: 'sample1',
            label: 'First',
            icon: 'nutrition-activity',
            viewUrl: '/sampleapp.html#/sample1'
          },
          {
            pathSegment: 'sample2',
            label: 'Second',
            icon: 'paper-plane',
            viewUrl: '/sampleapp.html#/sample2'
          },
          {
            pathSegment: 'mywebcomponent',
            label: 'My Web Component',
            viewUrl: '/assets/wrapper.js',
            webcomponent: true
          },
          // {
          //   pathSegment: 'test2',
          //   label: 'test2',
          //   icon: '',
          //   viewUrl: '/assets/my-element.js',
          //   webcomponent: {
          //     selfRegistered: true,
          //     type: 'module'
          //   }
          // },
          {
            category: { label: 'Links', icon: 'cloud' },
            label: 'Luigi Project',
            externalLink: {
              url: 'https://luigi-project.io/'
            }
          },
          {
            category: 'Links',
            label: 'Angular',
            externalLink: {
              url: 'https://angular.io/'
            }
          }
        ]
      }
    ]
  },
  settings: {
    header: {
      title: 'Luigi Angular App',
      logo: '/logo.svg'
    },
    responsiveNavigation: 'simpleMobileOnly'
  }
});
