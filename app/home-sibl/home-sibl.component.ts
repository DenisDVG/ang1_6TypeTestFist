class HomeSiblController implements ng.IController {
    welcome:string='HomeSiblController Sibling for HomeMyController';
    count: number;
    addCount(e): void {
        e.stopPropagation();
        this.count++;
    }
    clearCount(): void {
        // e.stopPropagation(); этот метод вынесен сразу в темплейт
        this.count = 0;
    }
    clickDivCount(): void {
        this.count++;
    }
    constructor() {
        this.count = 0;
    }
}

export class HomeSiblComponent implements ng.IComponentOptions {
    static NAME: string = 'homeSiblView';
    bindings: any;
    controller: any;
    templateUrl: any;
    constructor() {
        // this.bindings = {
        //     count : '=',
        // };
        this.controller = HomeSiblController;
        this.templateUrl = require('./home-sibl.html');
    }
}
