function CalCtrl() {

    this.bruit = 0;
    this.silence = 0;
    this.correct = 0;
    this.total = 0;
    this.totalRef = 0;
    this.precision = 0;
    this.rappel = 0;
    this.Fmesure = 0;

    this.perf = function () {

        this.bruit = (this.total - this.correct);
        this.silence = (this.totalRef - this.correct);

        var precision = (this.correct / (this.correct + this.bruit)) * 100;
        this.precision = precision.toFixed(1) + ' %';

        var rappel = (this.correct / (this.correct + this.silence)) * 100;
        this.rappel = rappel.toFixed(1) + ' %';

        var Fmesure = (2 * precision * rappel) / (precision + rappel);
        this.Fmesure = Fmesure.toFixed(1) + ' %';

    };
}
