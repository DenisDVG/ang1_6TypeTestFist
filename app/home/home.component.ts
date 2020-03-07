class HomeController implements ng.IController {
    welcome:string='hello ng';
    count: number;
    addCount(e){
        e.stopPropagation();
        this.count++;
    }
    clearCount(e){
        // e.stopPropagation(); этот метод вынесен сразу в темплейт
        this.count = 0;
    }
    clickDivCount(){
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
