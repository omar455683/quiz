   
   var ul=document.getElementById('ul');
   var btn=document.getElementById('button');
   var scoreCard=document.getElementById('scoreCard');
   var quizBox=document.getElementById('questionBox');
     var nooty=document.getElementById('nootyBox');
  var op1=document.getElementById('op1');
  var op2=document.getElementById('op2');
  var op3=document.getElementById('op3');
  var op4=document.getElementById('op4');

      var app={
                questions:[
                          {q:'ما هو اختصار جملة I am',n:'Iَm',options:['i am','Iam',' Iَm ','I am' ,],answer:3},

                          {q:'ما هو اختصار جملة it will',n:'كلمتا  shall و will لهمت نفس الاختصار فاصله علوية ثم ll',options:['itَll','IT II','it wll','it will',],answer:1},
						  
						        {q:'ما هو اختصار جملة you are',n:'youَre', options:['you ar','youَre','you are','youare',],answer:2},

                          {q:'ما هو اختصار جملة you would',n:'كلممتا  would و  had  لديهما نفس الاختصار فاصلة علوية ثم حرف d',options:['youَd','you would','yould','youwould',],answer:1},
						  
						        {q:'ما هواخنتصار جملة she has ',n:'كلمتا is و has لديهما نفس لاختصار فاصله علوية ثم حرف s', options:['shehas','she as','she has','sheَs',],answer:4},

                          {q:'ما هو اختصار جملة we have',n:'weَve',options:['weَh','weَve','we have','wehave',],answer:2},
						  
						        {q:'ما هواختصار جملة we had',n:'كلممتا  would و  had  لديهما نفس الاختصار فاصلة علوية ثم حرف d', options:['weَd','wead','we had','wehad',],answer:1},

                          {q:'ما هو اختصار جملة I have',n:'Iَve',options:['Ihave','I have','Iَve','Iَh',],answer:3},
						  
						        {q:'ما هو اختصار جملة I shall ',n:'كلمتا  shall و will لهمت نفس الاختصار فاصله علوية ثم ll', options:['I shall ','Iَsh ','Iَll ','Ishall ',],answer:3},

                          {q:'ما هو اختصار جملة it has',n:'كلمتا is و has لديهما نفس لاختصار فاصله علوية ثم حرف s ',options:['ithas','itَas','it has','itَs',],answer:4},
						  
						        {q:'ما هو اختصار جملة we are',n:'weَre', options:['weَre','we are','weare','wee',],answer:1},


                          {q:'ما هو اختصار جملة we had',n:'كلممتا  would و  had  لديهما نفس الاختصار فاصلة علوية ثم حرف d',options:[' we ad',' weَd',' weَad',' we had',],answer:2},
						  
						        {q:'ما هو اختصار جملة he would',n:'كلممتا  would و  had  لديهما نفس الاختصار فاصلة علوية ثم حرف d', options:['held','heَd','hewould','he would',],answer:2},

                          {q:'ما هو اختصار جملة he is',n:'كلمتا is و has لديهما نفس لاختصار فاصله علوية ثم حرف s',options:['heis','heَs','he is','hs',],answer:2},
						  
                          {q:'ما هواختصار كلمة can not',n:'canَt',options:['cannot','canot','canَt','can not',],answer:3}
						  
                          ],

  index:0,
                load:function(){
                	   if(this.index<=this.questions.length-1){
                        quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q; 						
                        op1.innerHTML=this.questions[this.index].options[0];
                        op2.innerHTML=this.questions[this.index].options[1];
                        op3.innerHTML=this.questions[this.index].options[2];
                        op4.innerHTML=this.questions[this.index].options[3];
                           this.scoreCard();
                        }
                        else{

                        quizBox.innerHTML="انتهى الاختبار...استمر بشكل يومي لتحافظ على مهاراتك وتزيدها"       
                        op1.innerHTML="عشرة دقائق من الممارسة اليومية تكفي لاحتراف اللغة... اضغط على زر المشاركة وشارك الفائدة مع من تحب"
                        op2.style.display="none";
                        op3.style.display="none";
                        op4.style.display="none";
                        btn.style.display="none";
                        }
                },
                 next:function(){
                    this.index++;
                    this.load();
                 },
                check:function(ele){
                   
                         var id=ele.id.split('');
                         
                         if(id[id.length-1]==this.questions[this.index].answer){
                         	this.score++;
                         	ele.className="correct";
                         	ele.innerHTML="احسنت";
                         	this.scoreCard();
                         }
                         else{
                         	ele.className="wrong";
                         	ele.innerHTML=this.questions[this.index].n; 
                         }
                },
                notClickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="none";
                       }
                },

                clickAble:function(){
                       for(let i=0;i<ul.children.length;i++){
                       	    ul.children[i].style.pointerEvents="auto";
                       	    ul.children[i].className=''

                       }
                },
                score:0,
                scoreCard:function(){
                	scoreCard.innerHTML=this.score+" من "+this.questions.length;
                }
 
           }

           window.onload=app.load();

           function button(ele){
           	     app.check(ele);
           	     app.notClickAble();
           }

         function  next(){
              app.next();
              app.clickAble();
         } 



