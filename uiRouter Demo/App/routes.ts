((): void => {

    angular
        .module('app')
        .config(config);

    //config.$inject = ['$stateProvider'];
    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config(
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider): void {
        $stateProvider.state('app', {
            url: '/app',
            views: {
                'navigation': {
                    templateUrl: 'App/view/navigation.html'
                },
                'content': {
                    templateUrl: 'App/view/content.html',
                   
                }
                
            }
        });
        $stateProvider.state('app.home', {
            url: '/home',
            templateUrl: 'App/view/contentPartials/home.html'
        });
        $stateProvider.state('app.contact', {
            url: '/contact',
            templateUrl: 'App/view/contentPartials/contactus.html'

        });
        $stateProvider.state('app.about', {
            url: '/about',
            templateUrl: 'App/view/contentPartials/aboutus.html'
        });

        $urlRouterProvider.otherwise('/app/home');
    }
})();