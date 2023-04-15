// All this is doing is inserting the parse API keys into every $.ajax
// request that you make so you don't have to.

// Put your parse application keys here!
$.ajaxPrefilter(function (settings, _, jqXHR) {
  jqXHR.setRequestHeader('Authorization', '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');
});

// Put your campus prefix here
window.CAMPUS = 'rfp';