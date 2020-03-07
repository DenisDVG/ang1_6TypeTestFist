class HomeMyController implements ng.IController {
    welcome:string='hello My ng';
    count: number;
    addCount(e){
        e.stopPropagation();
        this.count++;
    }
    clearCount(){
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

export class HomeMyComponent implements ng.IComponentOptions {
    static NAME: string = 'homeMyView';
    controller: any;
    templateUrl: any;
    constructor() {
        this.controller = HomeMyController;
        this.templateUrl = require('./home-my.html');
    }
}
