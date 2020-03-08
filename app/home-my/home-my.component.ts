class HomeMyController implements ng.IController {
    welcome:string='HomeMyController Child for HomeController';
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

export class HomeMyComponent implements ng.IComponentOptions {
    static NAME: string = 'homeMyView';
    bindings: any;
    controller: any;
    templateUrl: any;
    constructor() {
        this.bindings = {
            count : '=',
        };
        this.controller = HomeMyController;
        this.templateUrl = require('./home-my.html');
    }
}
