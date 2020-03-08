import { UserService } from '../services/user.services';

class UserController implements ng.IController {
      static $inject = ['userService','$state', '$scope'];
      users: any;
        constructor(public user:UserService, 
            public $state:ng.ui.IStateService, 
            public $scope: ng.IScope) {
           this.user.getAll().then((data)=> {
               this.users = data.data;
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
