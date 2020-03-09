export class UserUppercaseFilter
{
    static NAME: string = 'userUppercase';
    static factory() {
        var factoryFunction = ($filter: ng.IFilterService) => {
            var angularUppercase = $filter('uppercase');
            return (input: string, uppercase: boolean) => {
                if(uppercase)
                {
                    input = angularUppercase(input);
                }
                return input;
            };
        };
        factoryFunction.$inject = ['$filter'];
        return factoryFunction;
    }
}