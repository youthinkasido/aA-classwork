const util = require('./api_util.js');

class FollowToggle { 
    constructor(el) { 
        this.$el = $(el); // jquery-fys the el, vairable  converts
        this.userId = this.$el.data('user-id'); // grabs user-id from el query
        this.followState = this.$el.data('initial-follow-state'); // grabs follow statefrom el query
        this.render();
        this.handleClick();
    }

    render() {
        this.$el.text(this.followState  ? 'Unfollow!' : 'Follow!'); // looks at button which is $el sets text to its followState
        this.$el.attr('disabled', false);
    }

    handleClick() { // is this async?
         
        const theTing = this;
        
         $(this.$el).on('click', event=>{ // whenever the button is clicked, activate callback
             
            //  theTing.$el.
            util.unSlashFollow(theTing);
         });
        // document.$("myBtn").disabled = true;
     }
}

module.exports = FollowToggle;