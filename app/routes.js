const errorLoading = (err) => {
  console.error('Dynamic page loading failed', err); // eslint-disable-line no-console
};

const loadModule = (comMod) => (componentModule) => {
  comMod(null, componentModule.default);
};

export default function createRoutes() {

  return [
      {
       path: '/',
       name: 'home',
       getComponent(nextState, comMod) {
         import('containers/Home')
           .then(loadModule(comMod))
           .catch(errorLoading);
       },
     },
     {
      path: '/Admin',
      name: 'admin',
      getComponent(nextState, comMod) {
        import('containers/Admin')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
     {
      path: '/ForumPage',
      name: 'forumpage',
      getComponent(nextState, comMod) {
        import('containers/ForumPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
    {
     path: '/Channels',
     name: 'Channels',
     getComponent(nextState, comMod) {
       import('containers/Channels')
         .then(loadModule(comMod))
         .catch(errorLoading);
     },
   },
   {
    path: '/Users',
    name: 'Users',
    getComponent(nextState, comMod) {
      import('containers/Users')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
   },
   {
    path: '/Search',
    name: 'Search',
    getComponent(nextState, comMod) {
      import('containers/Search')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
   },
   {
    path: '/Details/:slug',
    name: 'details',
    getComponent(nextState, comMod) {
      import('containers/Details')
        .then(loadModule(comMod))
        .catch(errorLoading);
    },
  },
  {
   path: '/Replies/:slug',
   name: 'replies',
   getComponent(nextState, comMod) {
     import('containers/Replies')
       .then(loadModule(comMod))
       .catch(errorLoading);
   },
 },
     {
      path: '*',
      name: 'notfound',
      getComponent(nextState, comMod) {
        import('containers/NotFoundPage')
          .then(loadModule(comMod))
          .catch(errorLoading);
      },
    },
  ];
}
