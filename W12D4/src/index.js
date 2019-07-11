const DOMNodeCollection = require('./dom_node_collection.js')

console.log("testtest");
// let domNode = new DOMNodeCollection(nodesArr); //needed?
// a = $('div')
// b
//  $('div')
window.$l = function (selector) { // create the ability to query html, find an element
   
    if ( selector instanceof HTMLElement) { //checks to see if argument is an html el
        console.log('html!')
        let arr = [];
        arr.push(selector);
        let domcoll = new DOMNodeCollection(arr);
        return domcoll;
    
    } else {
        let nodes = document.querySelectorAll(selector);
        let nodesArr = Array.prototype.slice.call(nodes);
        return new DOMNodeCollection(nodesArr);
    }

    // <div>
    // <li> </li>
    //hello
    //</div>
    // 
    
  
};


// querySelectorAll()  /// used to get static NodeList// Nodelist consists of a list of all nodes in a document