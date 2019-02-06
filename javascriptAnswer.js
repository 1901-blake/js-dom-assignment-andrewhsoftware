/* -----------------------------------------------------------------------------------
 PART II

 Part II will focus on Javascript's ability to manipulate the DOM.
 Use the provided index.html
 -----------------------------------------------------------------------------------

 1. USA
 Define function getUSA()
 Find the html element that contains "USA".
 Print that element's contents.
 */
function getUSA() {
    const spanElements = document.getElementsByTagName('span');
    let foundElement = '';
    
    for (const key in spanElements) {
        if (spanElements[key].innerText === 'USA') {
            foundElement = spanElements[key];
        }
    }

    return foundElement.innerText;
}
console.log(getUSA());
  
/*  2. Sales
 Define function getPeopleInSales()
 Print the names of all the people in the sales department. */

function getPeopleInSales() {
    const tableElements = document.getElementsByTagName('td');
    let names = [];

    for (const key in tdElements) {
        if(tableElements[key].innerText === 'Sales') {
            const previousElement = tdElements[key].previousElementSibling;
            names.push(previousElement.innerText);
        }
    }
    return names;
}
console.log(getPeopleInSales());
  
/*  3. Click Here
 Define function getAnchorChildren()
Find all anchor elements with a <span> child.
 Print the contents of <span> */

function getAnchorChildren() {
    const anchorElements = document.getElementsByTagName('a');
    let spanChildrenArray1 = [];
    let spanChildrenArray2 = [];

    for (const key in anchorElements) {
        if (anchorElements[key].hasChildNodes) {
           if (anchorElements[key].firstChild !== null) {
               spanChildrenArray1.push(anchorElements[key].getElementsByTagName('span'));
           }
        }
    }

    for (const key in spanChildrenArray1) {
       if (spanChildrenArray1[key].length === 1) {
           spanChildrenArray2.push(spanChildrenArray1[key].item(0).innerText);
       }
    }

    return spanChildrenArray2;
}
console.log(getAnchorChildren());
  
/*  4. Hobbies
 Define function getHobbies()
 Find all checked options in the 'skills' select element.
 Print the value and the contents. */

function getHobbies() {
    const optionsArray = [];
    let temporaryHold = document.getElementsByTagName('select');
    let selectArray = document.getElementsByTagName('select');

    for (let i = 0; i < selectArray.length; i++) {
        if (selectArray[i].name === 'hobbies') {
            temporaryHold = selectArray[i];
        }
    }

    for (let i = 0; i< temporaryHold.children.length; i++) {
        if (temporaryHold.children.item(i).getAttribute('selected')) {
            optionsArray.push(temporaryHold.children.item(i).innerText);
        }
    }

    return optionsArray;
}
console.log(getHobbies());
  
/*  5. Custom Attribute
 Define function getCustomAttribute()
 Find all elements with "data-customAttr" attribute
 Print the value of the attribute.
 Print the element that has the attribute. */

function getCustomAttribute() {
    let elementtAttributes = [];

    elementtAttributes = document.querySelectorAll('[data-customAttr]');
    
    elementtAttributes.forEach((value) => {
        console.log(value, value.innerText);
    })
}
customAttribute();

/*  6. Sum Event
 NOTE: Write unobtrusive Javascript
Regarding these elements:
	<input id="num1" class="nums" type="text"/>
 	<input id="num2" class="nums" type="text"/>
 	<h3>Sum: <span id="sum"></span></h3>

 Define onchange event handler.
 Add <input> element values.
 Put the sum in the <span> element.
 If values cannot be added, put "Cannot add" in the <span> element */

function onChange() {
    const inputForNum1 = document.querySelector('#num1');
    const inputForNum2 = document.querySelector('#num2');
    const sumValue = document.querySelector('#sum');

    let number1 = inputForNum1.value, number2 = inputForNum2.value, sum;

   if (isNaN(number1) || isNaN(number2)) {
    sumValue.innerText = 'Cannot Add';
   } else if (number1 === '' || number2 === '') {
    sumValue.innerText = 'Cannot Add';
   } else {
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);
       sum = num1 + num2;
       sumValue.innerText = sum;
   }
}
document.addEventListener("change", this.onChange);


 /* 7. Skills Event
 NOTE: Write unobtrusive Javascript
 When user selects a skill, create an alert with a message similar to:
 	"Are you sure CSS is one of your skills?"
 NOTE: no alert should appear when user deselects a skill. */

function skillsEvent() {
    const skillsSelected = document.getElementsByName('skills')[0];
    skillsSelected.addEventListener('change', function() {
        alert(`Are you sure ${skillsSelected.value} is one of your skills?`);
    });
}
skillsEvent();

/*  8. Favorite Color Event
 NOTE: Write unobtrusive Javascript
 NOTE: This is regarding the favoriteColor radio buttons.
 When a user selects a color, create an alert with a message similar to:
 	"So you like green more than blue now?"
 In this example, green is the new value and blue is the old value.
 Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor */

function favoriteColorEvent() {
    const color = document.getElementsByName('favoriteColor');
    let oldColor = 'white', newColor;
    color.forEach((element) => {
        element.addEventListener('change', function() {
            alert(`So you like ${element.value} more than ${oldColor} now?`);
            oldColor = element.value
            newColor = element.value;
            document.getElementsByTagName('body').item(0).style.backgroundColor = newColor;
        });
    });
}
favoriteColorEvent();

/*  9. Show/Hide Event
 NOTE: Write unobtrusive Javascript
 When user hovers over an employees name:
 	Hide the name if shown.
 	Show the name if hidden. */

function ShowAndHideEvent() {
    const employees = document.getElementsByClassName('empName');

    for (let i = 0; i < employees.length; i++) {
        employees[i].addEventListener('mouseover', function() {
            if (employees[i].style.color === 'black') {
                employees[i].style.color = 'transparent';
            } else {
                employees[i].style.color = 'black';
            }
        })
    }
}
ShowAndHideEvent();

 /* 10. Current Time
 Regarding this element:
 	<h5 id="currentTime"></h5>
 Show the current time in this element in this format: 9:05:23 AM
 The time should be accurate to the second without having to reload the page. */

function currentTime() {
    const timeElement = document.getElementById('currentTime');

    timeElement.innerHTML = new Date().toLocaleTimeString('en-us', 100);
}
currentTime();

/*  11. Delay
 Regarding this element:
	<p id="helloWorld">Hello, World!</p>
 Three seconds after a user clicks on this element, change the text to a random color. */

function changeText() {
    const parameterElement = document.getElementById('helloWorld');

    parameterElement.addEventListener('click', () => {
        setTimeout(() => {
            parameterElement.style.color = "#"+((1<<24)*Math.random()|0).toString(16);
        }, 3000);
    });
}
changeText();

 /* 12. Walk the DOM
 Define function walkTheDOM(node, func)
 This function should traverse every node in the DOM. Use recursion.
 On each node, call func(node). */

function walkTheDOM(node, func) {
    func(node);

    for (const childNode of node.children) {
        walkTheDOM(childNode, func);
    }
    
}
walkTheDOM(document, (node) =>  {
    console.log('Walking the DOM:', node);
})
