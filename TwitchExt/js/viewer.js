function getData() {
    $.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(data){
        $('body').html(data);
    })
}
$(window).on('load', function () {
    getData();
    window.Twitch.ext.rig.log('...')
})