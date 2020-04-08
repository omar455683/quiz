   
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
                          {q:'ما هو جمع هذه الكلمة book',n:'S يضاف الحرف للاسم المفرد لكي يصبح جمعا الا في بعض الحالات الشاذه', options:['book','books','bookes','bookies',],answer:2},

                          {q:'ما هو جمع هذه الكلمة cat',n:'S يضاف الحرف للاسم المفرد لكي يصبح جمعا الا في بعض الحالات الشاذه',options:['cates','cats','caty','cat',],answer:2},
						  
						        {q:'ما هو جمع هذه الكلمة box',n:'es يضاف في نهاية الاسماء لتصبح جمع عندما ينتهي الاسم ب(z,x,ch,sh,ss,s)', options:['boxes','box','boxss','boxs',],answer:1},

                          {q:'ما هو جمع هذه الكلمة bus',n:'es يضاف في نهاية الاسماء لتصبح جمع عندما ينتهي الاسم ب(z,x,ch,sh,ss,s)',options:['buss','buses','bus','bies',],answer:2},
						  
						        {q:'ما هو جمع هذه الكلمة quiz',n:'es يضاف في نهاية الاسماء لتصبح جمع عندما ينتهي الاسم ب(z,x,ch,sh,ss,s)', options:['quiz','quiss','quizzes','quizen',],answer:3},

                          {q:'ما هو جمع هذه الكلمة brush',n:'es يضاف في نهاية الاسماء لتصبح جمع عندما ينتهي الاسم ب(z,x,ch,sh,ss,s)',options:['brush','brushs','brushss','brushes',],answer:4},
						  
						        {q:'ما هو جمع هذه الكلمة watch',n:'es يضاف في نهاية الاسماء لتصبح جمع عندما ينتهي الاسم ب(z,x,ch,sh,ss,s)', options:['watchat','watchs','watches','watch',],answer:3},

                          {q:'ما هو جمع هذه الكلمة calf',n:'عندما ينتهي الاسم ب(fe,f)نحذفهم وننضع(ves)',options:['calves','calfes','calfs','calfss',],answer:1},
						  
						        {q:'ما هو جمع هذه الكلمة elf',n:'عندما ينتهي الاسم ب(fe,f)نحذفهم وننضع(ves)', options:['elvis','elf','elfes','elfs',],answer:1},

                          {q:'ما هو جمع هذه الكلمة half',n:'عندما ينتهي الاسم ب(fe,f)نحذفهم وننضع(ves)',options:['halfs','halves','halfs','half',],answer:2},
						  
						        {q:'ما هو جمع هذه الكلمة wife',n:'عندما ينتهي الاسم ب(fe,f)نحذفهم وننضع(ves)', options:['wifes','wifees','wife','wives',],answer:4},


                          {q:'ما هو جمع هذه الكلمة child',n:'هنالك بعض الاستثنائات في الجمع ولا تتبع قاعدة يجب ان تحفظ كل كلمه لوحدها',options:['childes','childs','children','child',],answer:3},
						  
						        {q:'ما هو جمع هذه الكلمة man',n:'هنالك بعض الاستثنائات في الجمع ولا تتبع قاعدة يجب ان تحفظ كل كلمه لوحدها', options:['man','manes','mans','men',],answer:4},

                          {q:'ما هو جمع هذه الكلمة foot',n:'هنالك بعض الاستثنائات في الجمع ولا تتبع قاعدة يجب ان تحفظ كل كلمه لوحدها',options:['foot','feet','foots','footes',],answer:2},
						  
                          {q:'ما هو جمع هذه الكلمة ox',n:'هنالك بعض الاستثنائات في الجمع ولا تتبع قاعدة يجب ان تحفظ كل كلمه لوحدها',options:['oxen','oxes','oxss','ox',],answer:1}
						  
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

                        quizBox.innerHTML="انتهى الاختبار...استمر بشكل يومي لتحافظ على مهارتك "       
                        op1.style.display="none";
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



