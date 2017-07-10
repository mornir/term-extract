function AssCtrl() {

    /* BAR */

    var RefAcroLabels = ['TaaS', 'Velingua', 'MultiTerm Extract'];
    var RefAcro = [
    [1.4, 0.8, 1],
    [59.1, 52.1, 55.4],
    [19.2, 17.5, 22.2]
  ];

    var RefVelLabels = ['TaaS', 'Acrolinx', 'MultiTerm Extract'];
    var RefVel = [
    [1.3, 0.8, 1],
    [52.1, 59.1, 55.4],
    [20.5, 32.1, 25]
  ];

    var RefExtractLabels = ['TaaS', 'Acrolinx', 'Velingua'];
    var RefExtract = [
    [28.1, 11.6, 16.4],
    [27, 20.3, 23.2],
    [32.1, 20.5, 25]
  ];

    this.barReferences = [{
        name: 'Acrolinx',
        series: RefAcroLabels,
        data: RefAcro
    }, {
        name: 'Velingua',
        series: RefVelLabels,
        data: RefVel
    }, {
        name: 'MultiTerm Extract',
        series: RefExtractLabels,
        data: RefExtract
    }];

    this.ref = {
        name: 'Acrolinx',
        series: RefAcroLabels,
        data: RefAcro
    };

    this.labels = ['Précision', 'Rappel', "FMesure"];

    this.options = {
        legend: {
            display: true
        }
    };


    /* LINE */

    var RefAcro2 = [
    [0, 0, 0, 1.2],
    [90, 82, 73, 68],
    [30, 42, 52.5, 23.3]
  ];

    var RefVel2 = [
    [0, 2, 2, 1.4],
    [90, 87, 76, 54.2],
    [30, 42.3, 51, 28.6]
  ];

    var RefExtract2 = [
    [30, 23.1, 27.5, 28.5],
    [90, 66, 67.3, 40.7],
    [90, 62.7, 55.4, 43.3]
  ];

    var RefFusionLabels = ['Velingua', 'Acrolinx', 'MultiTerm Extract'];

    var RefFusion2 = [
    [70, 58, 50, 36.1],
    [60, 82, 77, 49.3],
    [30, 40, 49, 21.4]
  ];

    this.lineReferences = [{
        name: 'Acrolinx',
        series2: RefAcroLabels,
        data2: RefAcro2
    }, {
        name: 'Velingua',
        series2: RefVelLabels,
        data2: RefVel2
    }, {
        name: 'MultiTerm Extract',
        series2: RefExtractLabels,
        data2: RefExtract2
    }, {
        name: 'Fusion',
        series2: RefFusionLabels,
        data2: RefFusion2
    }];

    this.ref2 = {
        name: 'Acrolinx',
        series2: RefAcroLabels,
        data2: RefAcro2
    };


    this.labels2 = ["10", "50", "100", "1000"];

    this.datasetOverride = [{
        yAxisID: 'y-axis-1'
    }];
    this.options2 = {
        legend: {
            display: true
        },
        elements: {
            line: {
                fill: false
            }
        },
        scales: {
            yAxes: [
                {
                    id: 'y-axis-1',
                    type: 'linear',
                    display: true,
                    position: 'left'
        }
      ]
        }
    };
}
