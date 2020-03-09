import { UserService } from '../services/user.services';
import { IFilterFilter } from 'angular';

class UserController implements ng.IController {
    static $inject = ['userService', '$state','userUppercaseFilter'];
    users: any;
    usersFiltered: any;
    constructor(public user: UserService,
        public $state: ng.ui.IStateService,
        public userUppercaseFilter: ng.IFilterProvider
        ) {
        this.user.getAll().then((data) => {
            this.users = data.data;
            this.usersFiltered = this.users.filter(
                (user) =>  user.name.includes('a'));

        });

    }
}

export class UserComponent implements ng.IComponentOptions {
    static NAME:string = 'userView';
    controller:any;
    templateUrl:any;
    constructor() {
       this.controller = UserController;
       this.templateUrl = require('./user.html');
    }
}
