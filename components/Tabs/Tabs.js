
class TabLink {
  constructor(element) {
    // Assign this.element to the passed in DOM element
    // this.element;
    this.element = element;
    // Get the custom data attribute on the Link
    // this.data;
    this.data = this.element.dataset.tab;
    
    // Using the custom data attribute get the associated Item element
    // this.itemElement;
    this.itemElement = document.querySelector(`.tabs-item[data-tab ='${this.data}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    // this.tabItem;
    this.tabItem = new TabItem(this.itemElement);
    
    // Add a click event listener on this instance, calling the select method on click

    this.element.addEventListener('click',() => this.select());
    
  };

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');


    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(function(currentValue){
      currentValue.classList.remove('tabs-link-selected');
    })
    // Add a class named "tabs-link-selected" to this link
    // this.element;
    this.element.classList.add('tabs-link-selected');
    // Call the select method on the item associated with this link

    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    // Assign this.element to the passed in element
    // this.element;
  this.element = element;
 
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    console.log(items);
    // Remove the class "tabs-item-selected" from each element
    items.forEach(function(currentValue){
      currentValue.classList.remove('tabs-item-selected');
    })
    // Add a class named "tabs-item-selected" to this element
    //this.element;
    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach(function(currentValue) {return new TabLink(currentValue)});

class Button{
  constructor(element){
    this.element = element;
    this.btnNum = element.dataset.num;
   
    this.numImgs = document.querySelectorAll('.img-box').length;
    console.log(this.numImgs);
    this.counter = 1;
    this.current = document.querySelector(`.img-box[data-num ='${this.btnNum}']`);
    console.log(this.current);
    this.nextImg = new Scroller(this.current);

    this.element.addEventListener('click',() => this.scroll());
  }
  scroll(){
    
    if(this.counter >= this.numImgs){
      this.counter = 1;
    }
    else{
      this.counter++
      console.log(this.counter);
    }
    
    this.current = document.querySelector(`.img-box[data-num ='${this.counter}']`);
    this.nextImg = new Scroller(this.current);

    this.nextImg.select();
   console.log(this.current);
    
  }
}
class Scroller{
  constructor(element){
  this.element = element;
  this.data = this.element.dataset.num;


  }

  select(){
    const imgs = document.querySelectorAll('.img-box');

    imgs.forEach(function(currentValue){
      currentValue.classList.remove('image-display');
     
      currentValue.classList.add('image-nodisplay');
      if(currentValue.dataset.pos == 'curr'){
        currentValue.dataset.pos = 'prev';
      }
      else if(
        currentValue.dataset.pos == 'prev'
      ){
        currentValue.dataset.pos ='na'
      }
      else{
        currentValue.dataset.pos = 'curr'
      }
    })

    this.element.classList.remove('image-nodisplay');
    this.element.classList.add('image-display');

    
  }
}

class Lbutton{
  constructor(element){
    this.element = element;
    this.element.addEventListener('click',() => this.scroll_back());
  }
  scroll_back(){
    const imgs = document.querySelectorAll('.img-box');

    imgs.forEach(function(currentValue){
      currentValue.classList.remove('image-display');
      currentValue.classList.remove('image-nodisplay');
      if(currentValue.dataset.pos ==='curr'){
        currentValue.dataset.pos ='na';
        currentValue.classList.add('image-nodisplay');
      }
      else if(currentValue.dataset.pos =='prev'){
        currentValue.dataset.pos = 'curr';
        currentValue.classList.add('image-display');
        
      }
      else{
        currentValue.dataset.pos = 'prev';
        currentValue.classList.add('image-nodisplay');
      }
    });

  }

  
}

const btnz = new Button(document.querySelector('.carousel-btn'));
const lbtnz = new Lbutton(document.querySelector('.carousel-btn-left'));
