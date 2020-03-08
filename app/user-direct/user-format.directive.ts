export class UserFormat implements ng.IDirective 
{
    static NAME: string = 'userFormat';
    restrict = 'E'; // by defalte
    template = 'Templ:  {{ ::customerInfo.name }}  <input ng-model="customerInfo.name"></button>'; // привязано к имени переменной во внешн скоупе
    scope = {
        customerInfo: '=info'
    };

    static factory(): ng.IDirectiveFactory {
        const directive = () => new UserFormat();
        directive.$inject = [];
        return directive;
    }
}