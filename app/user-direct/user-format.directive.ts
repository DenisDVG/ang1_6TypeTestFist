export class UserFormat implements ng.IDirective 
{
    static NAME: string = 'userFormat';
    restrict = 'E'; // by defalte
    template = 'Templ: <span>{{ ::customerInfo.name }}</span>  <input ng-model="customerInfo.name"></button>'; // привязано к имени переменной во внешн скоупе
    scope = {
        customerInfo: '=info'
    };

    link: ng.IDirectiveLinkFn = (scope: ng.IScope,
        element: ng.IAugmentedJQuery,
        attrs: ng.IAttributes, ) => {
        var spanElem = element.find('span');
        spanElem[0].addEventListener("click", function () {
            this.remove();
        });
    };

    static factory(): ng.IDirectiveFactory {
        const directive = () => new UserFormat();
        directive.$inject = [];
        return directive;
    }
}