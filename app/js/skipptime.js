var app = angular.module('skippTime', []);
var youtubeApiKey = 'AIzaSyCMI8_O4dN8Q28q-_X1LLThi4-B1QMjxoU';
//var clientID = '89157465201-1m8t3v3lketegd6v5ivnr7e70kgeju5i.apps.googleusercontent.com';
//var clientSecret = 'e19SlC66IOATuDzZmeguigwH';

var answerClass = '.accepted-answer';

app.controller('mainController', function ($scope) {
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
    $scope.setActiveTab = function (tab) {
        $scope.activeTab = tab;
    };
    $
});

var youtubeLinks = [];
$(document).keypress(function (e) {
    if (e.which == 13) {
        var query = $('#search-bar').prop('value');
        var link = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + query + "&relevanceLanguage=en&type=video&key=" + youtubeApiKey;
        $.get(link, function (data) {
            console.log(data);
            for (var i in data.items) {
                youtubeLinks[i] = '<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + data.items[i].id.videoId + '?autoplay=1" frameborder="0"/>';
                $('.results').html(youtubeLinks[i]);
            }
        });
    }
});

$(document).ready(function () {
    var link = 'http://api.stackexchange.com/2.2/questions?pagesize=50&site=stackoverflow&tagged=excel;table&order=desc&sort=creation&page=1';
    $.get(link, function (data) {
        console.log(data);
    });
});