   
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
                          {q:'ما هي الترجمة الصحيحة لكلمة -خمسة ',n:'من الرقم صفر الى الرقم اثنا عشر تاتي مجردة',options:['fifty','fifteen','fifth','five',],answer:4},

                          {q:'ما هي الترجمة الصحيحة لكلمة -اربعة عشر',n:'الارقام ما بين ثلاثة عشر وتسعة عشر تنتهي ب teen',options:['forty','fourteenth','four','fourteen',],answer:4},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة-الرابع',n:'الترتيب من الثالث فما فوق ينتهي ب th باستثناء ببعض الحالات', options:['fourth','fourteenth','four','fourteen',],answer:1},

                          {q:'ما هي الترجمة الصحيحة لكلمة -الاول',n:'first',options:['one','first','eleven','oneth',],answer:2},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة-عشرون',n:'ارقام العشرات من عشرين الى تسعين تنتهي بy', options:['twenty','two','second','twelve',],answer:1},

                          {q:'ما هي الترجمة الصحيحة لكلمة -سته',n:'من الرقم صفر الى الرقم اثنا عشر تاتي مجردة',options:['sixth','six','sixteen','sixty',],answer:2},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة-اربعين',n:'ارقام العشرات من عشرين الى تسعين تنتهي بy', options:['forty','fourteenth','four','fourteen',],answer:1},

                          {q:'ما هي الترجمة الصحيحة لكلمة -ستة عشر',n:'الارقام ما بين ثلاثة عشر وتسعة عشر تنتهي ب teen',options:['sixth','six','sixteen','sixty',],answer:3},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة -السادس عشر',n:'الترتيب من الثالث فما فوق ينتهي ب th باستثناء ببعض الحالات', options:['sixth','six','sixteenth','sixty',],answer:3},

                          {q:'ما هي الترجمة الصحيحة لكلمة -ستون',n:'ارقام العشرات من عشرين الى تسعين تنتهي بy',options:['sixth','six','sixteen','sixty',],answer:4},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة -احد عشر',n:'eleven', options:['one','first','eleven','oneth',],answer:3},


                          {q:'ما هي الترجمة الصحيحة لكلمة -خمسون',n:'ارقام العشرات من عشرين الى تسعين تنتهي بy',options:['fifty','fifteen','fifth','five',],answer:1},
						  
						        {q:'ما هي الترجمة الصحيحة لكلمة -تسعون',n:'ارقام العشرات من عشرين الى تسعين تنتهي بy', options:['nineteen','nineteenth','ninety','nine',],answer:3},

                          {q:'ما هي الترجمة الصحيحة لكلمة-اثنان',n:'من الرقم صفر الى الرقم اثنا عشر تاتي مجردة',options:['twenty','two','second','twelve',],answer:2},
						  
                          {q:'ما هي الترجمة الصحيحة لكلمة -اربعة',n:'من الرقم صفر الى الرقم اثنا عشر تاتي مجردة',options:['forty','fourteenth','four','fourteen',],answer:3}
						  
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



