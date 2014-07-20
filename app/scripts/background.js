'use strict';

// Order by priority. Google limits searches to 32 words, so the further
// down the list, the more likely it will be truncated. Also note the
// url-encoding of the quotes as %22 and spaces as +
var queryStringAddition = '+-%22' + [
    'Taylor+Swift',
    'Financial',
    'Swift+Trans',
    'car+club',
    'cycling',
    'dzire',
    'pokemon',
    'bird',
    'maruti',
    'Mourillon-Swift',
    'Orin+Swift',
    'Wine+Club',
    'Swiftwater+Cellars',
    'Jonathan+Swift',
    'Rotary+Club',
    'Swift+Creek',
    'Suzuki'
].join('%22+-%22') + '%22';

// This event is fired with the user accepts the input in the omnibox.
chrome.omnibox.onInputEntered.addListener(
    function(text) {
        chrome.tabs.update({
            url: 'https://www.google.com/search?q=swift+' + encodeURIComponent(text) + queryStringAddition
        });
    }
);
