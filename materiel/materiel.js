function MaterielCtrl($mdDialog, $window, $mdToast) {

    this.showPrompt = function (ev) {
        var confirm = $mdDialog.prompt()
            .title('Mot de passe')
            .textContent('Entrer le mot de passe')
            .placeholder('mot de passe')
            .ariaLabel('mot de passe')
            .targetEvent(ev)
            .ok('Confirmer')
            .cancel('Annuler');

        $mdDialog.show(confirm).then(function (result) {
            if (result === 'Extract2016') {
                $window.open('https://www.dropbox.com/s/urguo1x3pxldzke/1_Corpus_auto.txt?dl=1', '_self');
            } else {
                $mdToast.showSimple('Mot de passe erroné');
            }
        });
    };


    this.showPrompt2 = function (ev) {
        var confirm = $mdDialog.prompt()
            .title('Mot de passe')
            .textContent('Entrer le mot de passe')
            .placeholder('mot de passe')
            .ariaLabel('mot de passe')
            .targetEvent(ev)
            .ok('Confirmer')
            .cancel('Annuler');

        $mdDialog.show(confirm).then(function (result) {
            if (result === 'Extract2016') {
                $window.open('https://www.dropbox.com/s/lnmw8kdgolrvdus/1_corpus_assurance.txt?dl=1', '_self');
            } else {
                $mdToast.showSimple('Mot de passe erroné');
            }
        });
    };

}
