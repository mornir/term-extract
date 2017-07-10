angular.module("app", ["chart.js", "ngMaterial", "ngAnimate", "ui.router"])
    .controller('CalCtrl', CalCtrl)
    .controller('AutoCtrl', AutoCtrl)
    .controller('AssCtrl', AssCtrl)
    .config(config);


function config($urlRouterProvider, $stateProvider, ChartJsProvider) {

    var auto = {
        name: 'auto',
        url: '/auto',
        templateUrl: 'auto/auto.html',
        controller: AutoCtrl,
        controllerAs: '$ctrl'
    };

    var assurance = {
        name: 'assurance',
        url: '/assurance',
        templateUrl: 'assurance/assurance.html',
        controller: AssCtrl,
        controllerAs: '$ctrl'
    };

    var materiel = {
        name: 'materiel',
        url: '/materiel',
        templateUrl: 'materiel/materiel.html',
        controller: MaterielCtrl,
        controllerAs: '$ctrl'
    };

    var calculette = {
        name: 'calculette',
        url: '/calculette',
        templateUrl: 'calculette/calculette.html',
        controller: CalCtrl,
        controllerAs: '$ctrl'
    };

    var aproposState = {
        name: 'apropos',
        url: '/apropos',
        templateUrl: 'apropos/apropos.html'
    };

    $stateProvider.state(auto);
    $stateProvider.state(assurance);
    $stateProvider.state(materiel);
    $stateProvider.state(calculette);
    $stateProvider.state(aproposState);
    $urlRouterProvider.otherwise('auto');

    ChartJsProvider.setOptions("global", {
        colors: ["#0000FF", "#ff0000", "#00ff55", "#7b00ff"]
    });

}
