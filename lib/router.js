Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('eventList', {path: '/'});
  this.route('generatorScript', {path: '/gen_script'});
});