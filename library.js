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

//function below creates the div and inputs to collect the data
function addbook(){ 
    //These initial lines of codes prevents adding a new book with filling and submitting the previous ones details
    let check = document.querySelectorAll('.disp');
    let sub = document.querySelectorAll('.fixate');
    if(check.length>=1){
        let subs = Array.from(sub);
        let checkwell = document.querySelectorAll('.biden');
        for(let i = 0;i<check.length;i++){                        
            console.log(checkwell);
                if(checkwell[i] !== undefined){
                    if(!checkwell[i].value){
                        alert('fill the current card')
                        return;
                    }
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
    label.classList.add('labile');
    let submitbtn = document.createElement('button');
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
        required:true
    })
    Object.assign(author,{
        type:"text",
        placeholder:"author",
        required:true
    })

    Object.assign(pages,{
        type:"number",
        placeholder:"pages"
    })
    Object.assign(read,{
        id: 'chckbx',
        type:"checkbox"
    })
    Object.assign(submitbtn,{
        className: 'intake'
    })
    label.innerText = 'Have you read this?';
    
    div.append(title, author, pages,label,read,submitbtn);
    container.appendChild(div);
    
    
    submitbtn.addEventListener('click', function(){  
        accept(div,title,author,pages,read);              
    });
}
let name;


function accept(div,title,author,pages,read){
    let whats = title.value;
    let whos = author.value;
    let whens = pages.value;
    let whys = read.checked;
    if(whos == ''){
        whos = 'unknown'
    }
    if(whens == ''){
        whens = 'unknown'
    }
    
    name = new book(whats,whos,whens,whys);
    library.push(name);


    //To remove the form elements and create the card displaying details
    while(div.firstChild){
        div.removeChild(div.firstChild);
    }
    let head = document.createElement('h1');
    let middle = document.createElement('h2');
    let below = document.createElement('h2');
    var end = document. createElement('h2');
    end.classList.add('endo');
    let del = document.createElement('button');
    let readstat = document.createElement('button');

    Object.assign(head,{
        className: 'header',
        innerText :whats
    })
    Object.assign(middle,{
        className: 'middle',
        innerText : `Author: ${whos}`
    })
    Object.assign(below,{
        className: 'below',
        innerText : `Pages: ${whens}`
    })
    
    
    if(whys == true){
        whys = 'Read';
    }else{
        whys = 'Not read yet'
    }
    end.innerText = whys; 
    
 
    Object.assign(del,{
        className:'remove',
        innerText:'delete'
    })
    Object.assign(readstat,{
        className:'reading',
        innerText: 'Change read status'
    })

    div.append(head,middle,below,end,del,readstat);
    
    //This removes the div/card when clicked
    del.addEventListener('click',function(){
        container.removeChild(div);        
        //To remove it from the array loop through the array and check for the current title
        for(let i = 0;i<library.length;i++){
            if(library[i].title == whats){
                library.splice(i,1);
            }
        }
        
    });

    //This changes the read status when the buttion is clicked
    readstat.addEventListener('click', function(){
        if(end.innerText == 'Read'){
            end.innerText = 'Not Read Yet'
            //To be updating this information in the storage array
            for(let i = 0;i<library.length;i++){
                if(library[i].title == whats){
                    library[i].read = false
                }
            }
        }else{
            end.innerText = 'Read';
            //To be updating this information in the storage array
            for(let i = 0;i<library.length;i++){
                if(library[i].title == whats){
                    library[i].read = true
                }
            }
        }        
    })
}


const btn = document.querySelector('.btn');
btn.addEventListener('click',addbook);
