class DOMNodeCollection{  
    constructor(array) {
         this.array = array // array consists of html elements
    }; // [ ]
    
    html(string) { //get all the data back from the query this has been called on. this may contain a query that has 1 or more html tags
        if (string){ // if a string is passed in, add that to the innermost tag of the query?
            for (let i = 0; i < this.array.length; i++){
                 this.array[i].innerHTML = string
            }
        } else {    
 
           return this.array[0].innerHTML // does innerHTML belong to DOMnodecollection?
        }
    }; 
    
    empty() {
        for (let i = 0; i < this.array.length; i++) {
            this.array[i].innerHTML = "";
        }
    };

    append(att) { // append the outerHTML of each element in the arg to the innerHTML of each element in the DOMNodeCollection
        if (typeof (att) === 'string') {
            this.array[0].innerHTML += att
        }
        if (typeof (att) === 'array') {
            let newarr = new DOMNodeCollection(att);
            this.array.push(newarr)
        }
        if (typeof (att) === 'object' &&
            !(typeof (att) === 'string')) {
            this.array[0].appendChild(att);
        }
    }

        attr(key, value) {
            for ( i = 0; i < this.array.length; i++) {
                this.array[i].setAttributes(key, value);
            }
        };
            
};



/* <div class="outer">
    <div class="middle">
        <div class="inner">
            I am in the innermost div!
    </div>
    </div>
</div>

    <script>
        const outerDiv = document.querySelector('.outer');
  outerDiv.addEventListener('click', function (e) {
            alert('CLICKED!');
        });
</script> */


// DOMNodeCollection


// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }




module.exports = DOMNodeCollection;