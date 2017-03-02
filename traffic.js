var App = angular.module('drag-and-drop', ['ngAnimate', 'ngDragDrop']);//('app',[ngDraggable]);//

App.controller('oneCtrl', function($scope) {


  $scope.list1 = [
    { 'title': makeid(),'drag': true },
    { 'title': makevowel(), 'drag': true },
    { 'title': makefavorites(), 'drag': true },
    { 'title': makevowel(),'drag': true },
    { 'title': makefavorites(), 'drag': true }
  ];
});


function makeid()
{
    var text = "";
    var possible = "BCDFGHJKLMNPQRSTVWXZ";

    for( var i=0; i < 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makevowel()
{
    var text = "";
    var possible = "AEIOUY";

    for( var i=0; i < 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function makefavorites()
{
    var text = "";
    var possible = "XZL";

    for( var i=0; i < 1; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}