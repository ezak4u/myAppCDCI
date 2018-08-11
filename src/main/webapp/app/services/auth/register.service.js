(function () {
    'use strict';

    angular
        .module('jhipsterCdApp')
        .factory('Register', Register);

    Register.$inject = ['$resource'];

    function Register ($resource) {
        return $resource('api/register', {}, {});
    }
})();
