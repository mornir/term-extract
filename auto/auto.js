function AutoCtrl() {

    /* BAR */

    var RefIndexLabels = ['TaaS', 'Acrolinx', 'Velingua', 'MultiTerm Extract'];
    var RefIndex = [
    [2.7, 2.7, 2.7],
    [31.6, 32.2, 31.9],
    [22.4, 23.7, 23],
    [19.9, 18.1, 19],
  ];

    var RefAcroLabels = ['TaaS', 'Velingua', 'MultiTerm Extract'];
    var RefAcro = [
    [0.3, 0.3, 0.3],
    [44.2, 45.9, 45.1],
    [39.9, 35.5, 37.7]
  ];

    var RefVelLabels = ['TaaS', 'Acrolinx', 'MultiTerm Extract'];
    var RefVel = [
    [0.2, 0.2, 0.2],
    [50, 52.7, 51.3],
    [30.9, 26.6, 28.6]
  ];

    var RefExtractLabels = ['TaaS', 'Acrolinx', 'Velingua'];
    var RefExtract = [
    [7.9, 6.9, 7.4],
    [33.8, 45.5, 37.3],
    [26.6, 30.9, 28.6]
  ];

    this.barReferences = [{
        name: 'Index',
        series: RefIndexLabels,
        data: RefIndex
    }, {
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
        name: 'Index',
        series: RefIndexLabels,
        data: RefIndex
    };

    this.labels = ['Précision', 'Rappel', "FMesure"];

    this.options = {
        legend: {
            display: true
        }
    };


    /* LINE */

    var RefIndex2 = [
    [0, 2, 1, 6.4],
    [100, 70, 68, 46.5],
    [60, 30, 27, 24.5],
    [0, 9.8, 16.2, 24.2]
  ];

    var RefAcro2 = [
    [0, 0, 0, 0.2],
    [60, 58, 52, 46.3],
    [0, 13.7, 19.4, 36.4]
  ];

    var RefVel2 = [
    [0, 0, 0, 0.3],
    [90, 76, 68, 64.8],
    [10, 17.6, 21.4, 29.3]
  ];

    var RefExtract2 = [
    [10, 9.6, 9.8, 6.8],
    [100, 92, 86, 78.7],
    [50, 40, 39, 27]
  ];

    var RefFusionLabels = ['Velingua', 'Acrolinx', 'MultiTerm Extract'];

    var RefFusion2 = [
    [50, 38, 38, 24.5],
    [90, 76, 63, 53.6],
    [0, 14, 19, 27.6]
  ];

    this.lineReferences = [{
        name: 'Index',
        series2: RefIndexLabels,
        data2: RefIndex2
    }, {
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
        name: 'Index',
        series2: RefIndexLabels,
        data2: RefIndex2
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
