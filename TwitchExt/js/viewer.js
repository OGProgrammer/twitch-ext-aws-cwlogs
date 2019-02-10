function getData() {
    $.get('https://api.coindesk.com/v1/bpi/currentprice.json', function(data){
        $('#content').html(data);
    })
}
$(window).on('load', function () {
    getData();
    window.Twitch.ext.rig.log('...')
    $('#lightTurn').click(function(){
        $('body').toggleClass('dark')
    })
})