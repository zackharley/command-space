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

        /*var query = $('#search-bar').prop('value');
        var link = 'http://api.stackexchange.com/2.2/search/advanced?order=desc&sort=relevance&q=' + parseQueries(query) + '&site=stackoverflow';
        $.get(link, function (data) {
            console.log(data);
            $.ajax({
                url: data.items[0].link,
                dataType: 'text',
                success: function (data) {
                    var elements = $("<div>").html(data)[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
                    for (var i = 0; i < elements.length; i++) {
                        var theText = elements[i].firstChild.nodeValue;
                        $('.results').html(elements);
                    }
                }
            });
        });*/
    }
});

function parseQueries(query) {
    query = query.toString().trim().split(' ').join(';') + ';';
    console.log(query)
    return query;
}

$(document).ready(function() {
    self.resizeTo(500, 500);
});