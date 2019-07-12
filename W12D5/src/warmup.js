
const partyHeader = document.getElementById('party'); // this is tag id

export const htmlGenerator = (string, htmlElement) => {
    let wrapper = document.createElement('p'); // creates a p tag
    wrapper.innerHTML = string; // <p> THIS IS A TEST </p>

    if (htmlElement.children.length !== 0) {
        htmlElement.innerHTML = "";
        htmlElement.appendChild(wrapper);
    } else {
        htmlElement.appendChild(wrapper);
    }
};

// htmlGenerator('Party Time.', partyHeader);

htmlGenerator('I < 3 Vanilla DOM manipulation' , partyHeader);



// The desired behavior of this function is the input string will be converted into a <p> 
// tag and then appended to the input HTML Element