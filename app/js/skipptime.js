var app = angular.module('skippTime', []);

app.controller('mainController', function($scope){
  $scope.activeTab = 'Video';
  $scope.manualData = [
    {
      'Tags': ['Python', 'Raise', 'Exception'],
      'Link': 'https://docs.python.org/2/tutorial/errors.html#raising-exceptions'
    }
  ];
  $scope.forumData = [
    {
      'Tags': ['Python', 'Raise', 'Exception'],
      'Link': 'http://stackoverflow.com/questions/13052991/proper-way-to-raise-exception-in-python'
    }
  ];
  $scope.videoData = [
    {
      'Tags': ['Python', 'Raise', 'Exception'],
      'Link': 'https://www.youtube.com/watch?v=AXREU-nells'
    }
  ];
  $scope.setActiveTab = function(tab){
    $scope.activeTab = tab;
  };
  $
});
