var n;
var pricelist=[['350','450','550','650','750','850','300','400','500','600','700','800'],
               ['350','450','550','650','750','850','300','400','500','600','700','800'],
               ['350','450','550','650','750','850','300','400','500','600','700','800']];

var namelist=[['Angular 2 Cookbook','Angular Expert','Angular Book','Angular-Theory To Practice',
                'Become Ninja with Angular','AngularJS','Angular Ng-Book','AngularJS',
                'SSD with Angular','ng-book on Angular','Pro Angular','ASP.NET Core'],
              ['Python Cookbook','Learning Python','Think Python','Introducing Python',
                'Head First Python','Python Pocket Reference','High Performance Python','Python for Beginnier',
                'Guide to Python','Python Crash Course','Python Tricks','Dive Into Python 3'],
              ['SQL-The Complete Reference','Learning SQL','Introduction to SQL','SQL',
                'Oracle SQL','Introducing MsSQL','Learning Spark SQl','SQL Bible',
                'Beginning PL/SQL','SQL Server Guide','MySQL','SQL for MySQL']];

var imglist  =  [['images/angular1.jpg','images/angular2.jpg','images/angular3.jpg','images/angular4.jpg',
                  'images/angular5.jpg','images/angular6.jpg','images/angular7.jpg','images/angular8.jpg',
                  'images/angular9.jpg','images/angular10.jpg','images/angular11.jpg','images/angular12.jpg'],
                 ['images/python1.jpg','images/python2.jpg','images/python3.jpg','images/python4.jpg',
                  'images/python5.jpg','images/python6.jpg','images/python7.jpg','images/python8.jpg',
                  'images/python9.jpg','images/python10.jpg','images/python11.jpg','images/python12.jpg'],
                 ['images/sql1.jpg','images/sql2.jpg','images/sql3.jpg','images/sql4.jpg',
                  'images/sql5.jpg','images/sql6.jpg','images/sql7.jpg','images/sql8.jpg',
                  'images/sql9.jpg','images/sql10.jpg','images/sql11.jpg','images/sql12.jpg']];
function onpageload(){ 
    n = parseInt(JSON.parse(window.localStorage.getItem('listno')))
    display(n);
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
function display(n1:number){
    let tag = document.getElementById('booklist');
    let img = tag.getElementsByTagName('img');
    let span = tag.getElementsByTagName('span');
    for(var i=0;i<12;i++){
        img[i].setAttribute('src',imglist[n1][i]);
        span[i].innerHTML=namelist[n1][i];
    }
    n = n1;
}
function view(n2:number){
    let viewb = [namelist[n][n2],pricelist[n][n2],imglist[n][n2]];
    window.localStorage.setItem('book',JSON.stringify(viewb));
    window.localStorage.setItem('listno',JSON.stringify(n));
    window.open('viewbook.html','_self');
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
          window.open('booklist.html','_self');
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
          window.open('booklist.html','_self');
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