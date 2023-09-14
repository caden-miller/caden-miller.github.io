var button_classes = ['home', 'projects', 'info', 'contact'];

$('#home button').click(function(){
    $('#content').attr('data-type', 'home');
});
$('#projects button').click(function(){
    $('#content').attr('data-type', 'projects');
});
$('#info button').click(function(){
    $('#content').attr('data-type', 'info');
});
$('#contact button').click(function(){
    $('#content').attr('data-type', 'contact');
});