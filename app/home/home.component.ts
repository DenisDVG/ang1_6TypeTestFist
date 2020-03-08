class HomeController implements ng.IController {
    welcome:string='HomeController parent for HomeMyController';
    count: number;
    addCount(e): void {
        e.stopPropagation();
        this.count++;
    }
    clearCount(): void {
        // e.stopPropagation(); этот метод вынесен сразу в темплейт
        this.count = 0;
    }
    onClearCountBind = function() {
        alert("событие переданое в родительский контроллер");
    };
    clickDivCount(): void {
        this.count++;
    }
    constructor() {
        this.count = 0;
    }
}

export class HomeComponent implements ng.IComponentOptions {
    static NAME: string = 'homeView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = HomeController;
        this.templateUrl = require('./home.html');
    }
}
