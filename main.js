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



<!--separation//////////////////////////////////-->

  var organ = _.map(myOrgs, function(el) {
    return {
      avatar: el.avatar_url
    }
  });

  var myOrganizations = _.template($('#myOrganizations').html());

  _.each(organ, function(el){
    $('.organizations').append(myOrganizations(el));
  });

});
