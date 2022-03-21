let library  = [];
const book = function(title,author,pages,read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info =  function(){
            return title +' by '+ author + ', '+pages+' ,'+read;
    }
}
const container = document.querySelector('.container');
let submitbtn;
let click = 0; 

//function below creates the div and inputs to collect the data
function addbook(){
    
    //These initial lines of codes prevents adding a new book with filling and submitting the previous ones details
    let check = document.querySelectorAll('.disp');
    if(check){
        for(let i = 0;i<check.length;i++){
            let checkwell = document.querySelectorAll('.biden');        
            if(!checkwell[i].value){
                alert('fill the current card')
                return;
            }else if( click < i+1 ){
                alert('submit the current card');
                return
            }
        }
    }

    let div = document.createElement('div');
    div.classList.add('disp');
    let title = document.createElement('input');
    let author = document.createElement('input');
    let pages = document.createElement('input');
    let read = document.createElement('input');
    let label = document.createElement('label');
    submitbtn = document.createElement('button');
    submitbtn.innerText= 'Submit';
    submitbtn.classList.add('fixate');
    title.classList.add('intake','biden');
    author.classList.add('intake');
    pages.classList.add('intake');
    read.classList.add('read');

    //To set the input's attributes
    Object.assign(title,{
        type:"text",
        placeholder:"title",
    })
    Object.assign(author,{
        type:"text",
        placeholder:"author"
    })

    Object.assign(pages,{
        type:"number",
        placeholder:"pages"
    })
    Object.assign(read,{
        type:"checkbox",
        value:"yes"
    })
    label.innerText = 'Have you read this?';

    div.append(title, author, pages,label,read,submitbtn);
    container.appendChild(div);
    submitbtn.addEventListener('click', function(){
        
        accept(title,author,pages,read);
        click = click+1;
        console.log(click);
    });
    
}
addbook();


submitbtn = document.querySelectorAll('.fixate');
/* submitbtn.addEventListener('click', accept); */
let name;

function accept(title,author,pages,read){
    let whats = title.value;
    let whos = author.value;
    let whens = pages.value;
    let whys = read.value
    name = new book(whats,whos,whens,whys);
    alert(name.info());
    library.push(name)
}


const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2');
btn.addEventListener('click',addbook);





