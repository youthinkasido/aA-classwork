const FollowToggle = require('./follow_toggle')

$(/* this is the document ready */
    /* do this once the document is ready */ function () {
    $('.follow-toggle').each(function (index) { //find every html element with the follow-toggle class and make a new follow toggle instance
        new FollowToggle(this /* currently literally '<li>' */);
    });
 }
);






