// // YOU DO NOT NEED TO EDIT this code. But do take the time to understand what it's doing.
// if (!/(&|\?)username=/.test(window.location.search)) {
//   var newSearch = window.location.search;
//   if (newSearch !== '' & newSearch !== '?') {
//     newSearch += '&';
//   }
//   newSearch += 'username=' + (prompt('What is your name?') || 'anonymous');
//   window.location.search = newSearch;
// }

// // All this is doing is inserting the parse API keys into every $.ajax
// // request that you make so you don't have to.

// // Put your parse application keys here!
// $.ajaxPrefilter(function (settings, _, jqXHR) {
//   jqXHR.setRequestHeader("X-Parse-Application-Id", "PARSE_APP_ID");
//   jqXHR.setRequestHeader("X-Parse-REST-API-Key", "PARSE_API_KEY");
// });
