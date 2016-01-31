var app = angular.module('skippTime', []);
var youtubeApiKey = 'AIzaSyCMI8_O4dN8Q28q-_X1LLThi4-B1QMjxoU';
var clientID = '89157465201-1m8t3v3lketegd6v5ivnr7e70kgeju5i.apps.googleusercontent.com';
var clientSecret = 'e19SlC66IOATuDzZmeguigwH';

var answerClass = '.accepted-answer';

//gapi.client.setApiKey(youtubeApiKey);

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
        var query = processQuery($('#search-bar').prop('value'));
        var link = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=" + query + "&relevanceLanguage=en&type=video&key=" + youtubeApiKey;
        $.get(link, function (data) {
            console.log(data);
            $(".result").html(data);
            for (var i in data.items) {
                youtubeLinks[i] = 'https://www.youtube.com/watch?v=' + data.items[i].id.videoId;
            }
            alert("Load was performed");
            console.log(youtubeLinks);
        });
    }
});

function processQuery(text) {
    console.log(text);
    return text;
}


/*var link = "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=photoshop+merge+layers&relevanceLanguage=en&type=video&key=" + youtubeApiKey;*/

// Search for a specified string.
/*function search(link) {
    
};*/