let email = document.getElementById('email');
let name= document.getElementById('nameinput');
let last_name = document.getElementById('last');
let nomber =document.getElementById('num');
let Gender = document.getElementById('Gender');
let groups = document.getElementById('groups');
let clubs = document.getElementById ('clubs');
let emailRe = /^\w+\.\w+@ofppt.ma$/i;
let nameRe = /^[a-z]{1,30}$/i;
let numRe = /^(05|06|07)\d{8}$/;
var valid1,valid2,valid3,valid4,valid5,valid6,valid7;
document.getElementById("email").addEventListener("keyup",function(){
    if(emailRe.test(document.getElementById('email').value)==false){
        document.getElementById('emailerror').classList.add('show');
        document.getElementById('email').classList.add('invalid');
        document.getElementById('email').classList.remove('valid');
        valid1 = false;
    }else{
        document.getElementById('emailerror').classList.remove('show');
        document.getElementById('email').classList.add('valid');
        document.getElementById('email').classList.remove('invalid');
        valid1 = true;
    }
});
document.getElementById('nameinput').addEventListener("keyup",function(){
    if(nameRe.test(document.getElementById('nameinput').value)==false){
        document.getElementById('nerror').classList.add('show');
        document.getElementById('nameinput').classList.add('invalid');
        document.getElementById('nameinput').classList.remove('valid');
        valid2 = false;
    
    }else{
        document.getElementById('nerror').classList.remove('show');
        document.getElementById('nameinput').classList.add('valid');
        document.getElementById('nameinput').classList.remove('invalid')
        valid2 = true;
    }
});
document.getElementById('last').addEventListener("keyup",function(){
    if(nameRe.test(document.getElementById('last').value)==false){
        document.getElementById('lasterror').classList.add('show');
        document.getElementById('last').classList.add('invalid');
        document.getElementById('last').classList.remove('valid');
        valid3 = false;
    }else{
        document.getElementById('lasterror').classList.remove('show');
        document.getElementById('last').classList.add('valid');
        document.getElementById('last').classList.remove('invalid');
        valid3 = true;
    }
})
document.getElementById('num').addEventListener("keyup",function(){
    if(numRe.test(document.getElementById('num').value)==false){
        validationResul= false
        document.getElementById('phoneerror').classList.add('show');
        document.getElementById('num').classList.add('invalid');
        document.getElementById('num').classList.remove('valid')
        valid4 = false;
    }else{
        document.getElementById('phoneerror').classList.remove('show');
        document.getElementById('num').classList.add('valid');
        document.getElementById('num').classList.remove('invalid')
        valid4 = true;
    }
})
document.getElementById("Gender").onchange = function(){
    if(document.querySelector('[name=Gender]:checked')==null){
        validationResul=false
        document.getElementById('gendererror').classList.add('show');
        Gender.classList.add('invalid');
        Gender.classList.remove('valid');
        valid5 = false;
    }else{
        document.getElementById('gendererror').classList.remove('show');
        Gender.classList.add('valid');
        Gender.classList.remove('invalid');
        valid5 = true;
    }
}

document.getElementById('groups').addEventListener('change',function(){
    if(document.querySelector('[name=Groups]:checked')==null){
        document.getElementById('grouperror').classList.add('show');
        groups.classList.add('invalid');
        groups.classList.remove('valid');
        valid6= false;
    }else{
        document.getElementById('grouperror').classList.remove('show');
        groups.classList.add('valid');
        groups.classList.remove('invalid');
        valid6= true; 
    }
})

document.getElementById("clubs").addEventListener('change',function(){
    if(document.querySelectorAll(".clubs:checked").length==0 || document.querySelectorAll(".clubs:checked").length>3){
        document.getElementById('cluberror').classList.add('show');
        clubs.classList.add('invalid');
        clubs.classList.remove('valid');
        valid7 = false;
    }else{
        document.getElementById('cluberror').classList.remove('show');
        clubs.classList.add('valid');
        clubs.classList.remove('invalid');
        valid7 = true;
    }
})
document.getElementById('side').addEventListener('submit',function(event){
    validetotal = valid1 && valid2 && valid3 && valid4 && valid5 && valid6 && valid7;
    if(!validetotal){
        event.preventDefault();
    }
})
