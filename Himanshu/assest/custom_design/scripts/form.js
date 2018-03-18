
   var storeDataArr = [];
document.getElementById('submitUserFields').addEventListener('click', function(){
    var userErrorClassName = document.getElementsByClassName('errormsg');
    for(var i=0; i<userErrorClassName.length; i++){
        userErrorClassName[i].style.display = 'none';
    } 
    var userFirstName = document.getElementById('userFirstName').value;
    var userLastName = document.getElementById('userLastName').value;
    var userEmail = document.getElementById('userEmail').value;
    var userPassword = document.getElementById('userPassword').value;
    //localStorage.setItem('names', JSON.stringify(namesArr));  
    if(userFirstName == "" && userLastName == "" && userEmail == "" && userPassword == ""){
        var userErrorClassName = document.getElementsByClassName('errormsg');
            for(var i=0; i<userErrorClassName.length; i++){
                userErrorClassName[i].style.display = 'block';
            }
    }
    else if(document.getElementById('userFirstName').value == ''){
            document.getElementById('errorrFirstName').style.display = 'block';
    }
    else if(document.getElementById('userLastName').value == ''){
            document.getElementById('errorrLastName').style.display = 'block';
    }    
    else if(document.getElementById('userEmail').value == ''){
            document.getElementById('errorrEmail').style.display = 'block';
    }
    else if(document.getElementById('userPassword').value == ''){
            document.getElementById('errorrFirstPassword').style.display = 'block';
        }
    else{
        var userErrorClassName = document.getElementsByClassName('errormsg');
        for(var i=0; i<userErrorClassName.length; i++){
            userErrorClassName[i].style.display = 'none';
        }
        storeDataArr.push(userFirstName, userLastName, userEmail, userPassword)
    console.log(storeDataArr);
    }
});
document.getElementById('clearUserFields').addEventListener('click', function(){
    var clearFieldsValue = document.getElementsByClassName('input-text');
    for(var i=0; i<clearFieldsValue.length; i++){
        clearFieldsValue[i].value = '';
    }
    var userErrorClassName = document.getElementsByClassName('errormsg');
    for(var i=0; i<userErrorClassName.length; i++){
        userErrorClassName[i].style.display = 'none';
    }
});

console.log('himanshu');