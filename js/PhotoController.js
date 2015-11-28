angular.module('demo1', ['bootstrapLightbox']);

angular.module('app').controller('GalleryCtrl', function ($scope, Lightbox) {



// app.controller('PhotoController', ['$scope', function($scope) {
  
  // Appetizer data.
  $scope.images = [
    {
      large: 'img/photography/minato-mirai-large-1.jpg',
      small: 'img/photography/minato-mirai-large-1.jpg'
    },
    {
      large: 'img/photography/minato-mirai-large-2.jpg',
      small: 'img/photography/minato-mirai-small-2.jpg'
    },
    {
      large: 'img/photography/minato-mirai-small-3.jpg',
      small: 'img/photography/minato-mirai-small-3.jpg'
    },
    {
      large: 'img/photography/minato-mirai-small-4.jpg',
      small: 'img/photography/minato-mirai-small-4.jpg'
    },
    {
      large: 'img/photography/minato-mirai-small-5.jpg',
      small: 'img/photography/minato-mirai-small-5.jpg'
    }
  ];

  $scope.enoshima = [
    {
      large: 'img/photography/enoshima-large-1.jpg',
      small: 'img/photography/enoshima-small-1.jpg'
    },
    {
      large: 'img/photography/enoshima-large-6.jpg',
      small: 'img/photography/enoshima-small-6.jpg'
    },
    {
      large: 'img/photography/enoshima-large-3.jpg',
      small: 'img/photography/enoshima-small-3.jpg'
    },
    {
      large: 'img/photography/enoshima-large-4.jpg',
      small: 'img/photography/enoshima-small-4.jpg'
    },
    {
      large: 'img/photography/enoshima-large-5.jpg',
      small: 'img/photography/enoshima-small-5.jpg'
    },
    {
      large: 'img/photography/enoshima-large-2.jpg',
      small: 'img/photography/enoshima-small-2.jpg'
    }
  ];

  $scope.tachikawa = [
    {
      large: 'img/photography/showa-kinen-kouen-large-1.jpg',
      small: 'img/photography/showa-kinen-kouen-small-1.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-9.jpg',
      small: 'img/photography/showa-kinen-kouen-small-9.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-3.jpg',
      small: 'img/photography/showa-kinen-kouen-small-3.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-4.jpg',
      small: 'img/photography/showa-kinen-kouen-small-4.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-10.jpg',
      small: 'img/photography/showa-kinen-kouen-small-10.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-6.jpg',
      small: 'img/photography/showa-kinen-kouen-small-6.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-7.jpg',
      small: 'img/photography/showa-kinen-kouen-small-7.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-8.jpg',
      small: 'img/photography/showa-kinen-kouen-small-8.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-2.jpg',
      small: 'img/photography/showa-kinen-kouen-small-2.jpg'
    },
    {
      large: 'img/photography/showa-kinen-kouen-large-5.jpg',
      small: 'img/photography/showa-kinen-kouen-small-5.jpg'
    }
  ];

$scope.illumination = [
    {
      large: 'img/photography/illumination-large-1.jpg',
      small: 'img/photography/illumination-small-1.jpg'
    },
    {
      large: 'img/photography/illumination-large-9.jpg',
      small: 'img/photography/illumination-small-9.jpg'
    },
    {
      large: 'img/photography/illumination-large-3.jpg',
      small: 'img/photography/illumination-small-3.jpg'
    },
    {
      large: 'img/photography/illumination-large-4.jpg',
      small: 'img/photography/illumination-small-4.jpg'
    },
    {
      large: 'img/photography/illumination-large-10.jpg',
      small: 'img/photography/illumination-small-10.jpg'
    },
    {
      large: 'img/photography/illumination-large-6.jpg',
      small: 'img/photography/illumination-small-6.jpg'
    },
    {
      large: 'img/photography/illumination-large-7.jpg',
      small: 'img/photography/illumination-small-7.jpg'
    },
    {
      large: 'img/photography/illumination-large-8.jpg',
      small: 'img/photography/illumination-small-8.jpg'
    },
    {
      large: 'img/photography/illumination-large-2.jpg',
      small: 'img/photography/illumination-small-2.jpg'
    },
    {
      large: 'img/photography/illumination-large-5.jpg',
      small: 'img/photography/illumination-small-5.jpg'
    }
  ];
  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

});