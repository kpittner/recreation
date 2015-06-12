$(document).ready(function() {

  var demoNameAndDate = _.map(myDemos, function(el) {
    return {
       name: el.name,
       date: el.updated_at,
       language: el.language
     }
  });

  var demos = _.template($('#myDemos').html());

  _.each(demoNameAndDate, function(el){
    $('.repos').append(demos(el));
  });



$('.nav-tabs').on('click', 'a', function (el) {
  el.preventDefault();
  var clickedPage = $(this).attr('rel');
  $(clickedPage).siblings().removeClass('active');
  $(clickedPage).addClass('active');
});




  var publicTab = _.map(myEvents, function(el) {
    return {
       type: el.type,
       name: el.actor.login,
       master: el.payload.master_branch,
       link: el.repo.name,
       avatar: el.actor.avatar_url,
       message: el.commits ? el.commits[0].message : "",
       commits: el.commits ? el.commits[0].url : ""
     }
  });

  var publictabs = _.template($('#myPublic').html());

  _.each(publicTab, function(el){
    $('.public').append(publictabs(el));
  });


  $('.nav-tabs').on('click', 'a', function (el) {
    el.preventDefault();
    var clickedPage = $(this).attr('rel');
    $(clickedPage).siblings().removeClass('active');
    $(clickedPage).addClass('active');
  });


});
