const APIUtil = {

    unSlashFollow: function (ctx){
        event.preventDefault(); // stops the click from happening or page refreshing?

        ctx.$el.attr('disabled', true);

        $.ajax({ //makes a request to the server without reloading the page

            url: `/users/${ctx.userId}/follow`, // sending the request
            method: ctx.followState ? 'delete' : 'post',
            dataType: 'json',
            success: function () { // result is json here.

                ctx.followState = !ctx.followState;
                ctx.render();

            },
            error: function (error) {
                alert(error);
            },
        });
    }
}

module.exports = APIUtil;