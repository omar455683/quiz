   
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
                          {q:'to',n:'الى',options:['حزين','ساعه','الى','وقت',],answer:3},

                          {q:'good',n:'جيد',options:['ساعه','كرة','ثانيه','جيد',],answer:4},
						  
						        {q:'be',n:'يكون', options:['ملعب','شخص','شهر','يكون',],answer:4},

                          {q:'time',n:'وقت',options:['ليلة','ساعه','وقت','كرسي',],answer:3},
						  
						        {q:'of',n:'من', options:['من','يلعب','شهر','لون',],answer:1},

                          {q:'new',n:'جديد',options:['اسبوع','جديد','ليلة','ينام',],answer:2},
						  
						        {q:'have',n:'يمتلك', options:['صباح','اخضر','يمتلك','اليوم',],answer:3},

                          {q:'person',n:'شخص',options:['شخص','ساعه','ظهيرة','احمر',],answer:1},
						  
						        {q:'in',n:'في', options:['في','جميل','صادق','وقت',],answer:1},

                          {q:'first',n:'اول',options:['مرحبا','شهد','اول','ثانيه',],answer:3},
						  
						        {q:'do',n:'يفعل', options:['يفعل','باع','شهر','زعيم',],answer:1},


                          {q:'say',n:'يقول',options:['اين','يقول','ليلة','اكل',],answer:2},
						  
						        {q:'way',n:'طريق', options:['ذهب','اسبوع','طريق','فصل',],answer:3},

                          {q:'for',n:'لِ',options:['دقيقه','لِ','كيف','وقت',],answer:2},
						  
                          {q:'last',n:'الماضي',options:['الماضي','ساعه','الان','منتصف الليل',],answer:1}
						  
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



