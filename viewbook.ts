function onpageload(){
    let book1 = JSON.parse(window.localStorage.getItem('book'));
    document.getElementById('price').innerHTML=book1[1];
    document.getElementById('name1').innerHTML=book1[0];
    document.getElementById('img').setAttribute('src',book1[2]);  
    let state = JSON.parse(window.localStorage.getItem('loginstatus'));
    if(state){
        let id = JSON.parse(window.localStorage.getItem('loginid'));
        let userdetails = JSON.parse(window.localStorage.getItem(id));
        document.getElementById('usersignup').innerHTML=userdetails[2];
        document.getElementById('usersignup').setAttribute('data-target','');
        document.getElementById('userlogin').innerHTML='Sign Out';
        document.getElementById('userlogin').setAttribute('data-target','');
        document.getElementById('userlogin').setAttribute('onclick','signout()');
    }
} 
function booklist(n:number){
    window.localStorage.setItem('listno',JSON.stringify(n));
    window.open('booklist.html','_self');
}
function addcart(){

    let state = JSON.parse(window.localStorage.getItem('loginstatus'));

    if(state){
        if(window.localStorage.getItem('chart')===null){
            let chart=[];
            window.localStorage.setItem('chart',JSON.stringify(chart));
        }
        let c = 0;
        let book1 = JSON.parse(window.localStorage.getItem('book'));
        let chart = JSON.parse(window.localStorage.getItem('chart'));
        let item = [book1[0],1,book1[1],book1[1]];
        for(var i in chart){
            if(chart[i][0]===item[0]){
                chart[i][1] ++;
                chart[i][3] = parseInt(chart[i][3])+parseInt(item[2]);
                c = 1;
            }
        }
        if(c==0)
            chart.push(item);
        window.localStorage.setItem('chart',JSON.stringify(chart));
        window.open('cart.html','_self');
    }
    else{
        alert('You must first Login to Buy the BookS');
    }
}
function backProduct(){
    window.open('booklist.html','_self');
}
function signup(){

    let e=true,u=true,p=true,n=true;
    let emaill = (<HTMLInputElement>document.getElementById('email')).value;
    let user = (<HTMLInputElement>document.getElementById('uname')).value;
    let num = (<HTMLInputElement>document.getElementById('num')).value;
    let pass = (<HTMLInputElement>document.getElementById('pass')).value;
    let name = (<HTMLInputElement>document.getElementById('name')).value;
  
    let epattern = /@gmail.com/i;
    if(!(epattern.test(emaill))){
        alert('InValid Email Id (Must be specified as @gmail.com)');
        e=false;
    }
  
    let ppattern = new RegExp("(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])");
    if(!(ppattern.test(pass))){
        alert('InValid Password (Must contain [A-Z],[a-z],[0-9])');
        p=false;
    }
    
    let upattern = new RegExp("(?=.*[^A-Z])(?=.*[^a-z])");
    if(upattern.test(user)){
        alert('InValid User Name (Only Alpha character Allowed)')
        u=false;
    }
  
    let npatter = new RegExp("(?=.*[^0-9])");
    if(num.length!=10){
        alert('Phone No. must contain 10 digit');
        n=false;
    }
  
    if(e && p && u && n){
        if(!(window.localStorage.getItem(user)===null)){
            alert('Already there is an account created with this user id . you can either change or login');
        }
        else{
            window.localStorage.setItem("loginstatus",JSON.stringify(true));
            window.localStorage.setItem("loginid",JSON.stringify(user));
            let item = [user,pass,name,emaill,num];
            window.localStorage.setItem(user,JSON.stringify(item));
            window.open('viewbook.html','_self');
        }
    }
  }
  function signout(){
    window.localStorage.setItem('loginstatus',JSON.stringify(false));
    document.getElementById('userlogin').innerHTML='Login';
    document.getElementById('userlogin').setAttribute('data-target','#login');
    document.getElementById('userlogin').removeAttribute('onclick');
    document.getElementById('usersignup').innerHTML='Sign Up';
    document.getElementById('usersignup').setAttribute('data-target','#sign');
  }
  function login(){
    let user = (<HTMLInputElement>document.getElementById('luname')).value;
    let pass = (<HTMLInputElement>document.getElementById('lpass')).value;
    if(window.localStorage.getItem(user)===null){
        alert('There is no such account from this user name. You can create new Account!');
    }
    else{
        let details = JSON.parse(window.localStorage.getItem(user));
        if(details[1]==pass){
            window.localStorage.setItem("loginstatus",JSON.stringify(true));
            window.localStorage.setItem("loginid",JSON.stringify(user));
            window.open('viewbook.html','_self');
        }
        else{
            alert('InValid Password')
        }
    }
  }
function viewchart(){
    let state = JSON.parse(window.localStorage.getItem('loginstatus'));

    if(state){
        window.open('cart.html','_self');
    }
    else{
        alert('You must first Login to Buy the BookS');
    }
}