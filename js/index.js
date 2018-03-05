// UI theme toggle (adds .dark-ui class to .page-layer). 
// View projection toggle doesn't use JS - it relies on the :checked psuedo class

$('#toggle-ui').click(function() {
  $('.page-layer').toggleClass( "dark-ui" )
});

// SVGInjector2 for insertion of SVG icon assets

(function(window, document){
    // Options
    var injectorOptions = {
      evalScripts: 'once',
      spritesheetURL: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/436544/mui-assets.svg',
      spriteClassIdName: 'icon-'
    };
    // Setup the injector
    var injector = new SVGInjector(injectorOptions);
    // inject single svg
    injector.inject(document.querySelectorAll('svg[data-src]'));
    // inject svgs from spritesheets
    injector.inject(document.querySelectorAll('svg[class^=icon-]'));
  })(window, document);