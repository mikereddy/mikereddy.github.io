app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
     	name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    },
        {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    },
        {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    }
    ];
  
    $scope.extras = [
    {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    },
        {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    },
        {
      name: 'Pizza',
      description: 'delicious',
      price: 2.00
    }
    ];

}]);