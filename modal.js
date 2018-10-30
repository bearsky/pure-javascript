var myModal = new Modal({
    content: 'Howdy',
    maxWidth: 600
});

(function() {
  this.Modal = function() {
    this.closeButton = null;
    this.modal = null;
    this.overlay = null;

    var defaults = {
       className: 'fade-and-drop',
       closeButton: true,
       content: "",
       maxWidth: 600,
       minWidth: 280,
       overlay: true
     }

   if (arguments[0] && typeof arguments[0] === "object") {
     this.options = extendDefaults(defaults, arguments[0]);
   }
 }

  Modal.prototype.open = function() {
    // open code goes here
  }

  // Utility method to extend defaults with user options
  function extendDefaults(source, properties) {
   var property;
   for (property in properties) {
     if (properties.hasOwnProperty(property)) {
       source[property] = properties[property];
     }
   }
   return source;
  }

}());


  var cvvRegexp = /^[0-9]{3,4}$/;