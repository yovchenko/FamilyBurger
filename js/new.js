function loaded () {
    var wrapper = document.getElementById('body');
    var myScroll = new IScroll(wrapper,{
    bounceEasing: {
    style: 'cubic-bezier(0,0,1,1)',
    fn: function (k) { return k; }
    }
    });
}
