$.ajax({
  url: 'https://dl.dropbox.com/u/264241/dotjs/'+window.location.host.replace('www.','')+'.js',
  dataType: 'text',
  success: function(d){
    $(function(){ eval(d) });
  },
  error: function(){
    console.log('no dotjs file found for ', window.location.host);
  }
});