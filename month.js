   
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
                          {q:'january',n:'كانون الثاني - يناير',options:['تشرين الاول - اكتوبر','كانون الثاني - يناير','ايار - مايو','نيسان - ابريل',],answer:2},

                          {q:'march',n:'اذار - مارس',options:['شباط - فبراير','اب - اغسطس','اذار - مارس','تشرين الاول - اكتوبر',],answer:3},
						  
						        {q:'june',n:'حزيران - يونيو ', options:['شباط - فبراير','تشرين الاول - اكتوبر','كانون الثاني - يناير','حزيران - يونيو',],answer:4},

                          {q:'sunday',n:'الاحد',options:['الاحد','الخميس','الاثنين','السبت',],answer:1},
						  
						        {q:'friday',n:'الجمعة', options:['الاثنين','السبت','الاحد','الجمعة',],answer:4},

                          {q:'february',n:'شباط - فبراير',options:['كانون الثاني - يناير','شباط - فبراير','تشرين الاول - اكتوبر','اب - اغسطس',],answer:2},
						  
						        {q:'thursday',n:'الخميس', options:['الخميس','السبت','الاثنين','الاحد',],answer:1},

                          {q:'October',n:'تشرين الاول - اكتوبر',options:['نيسان - ابريل','شباط - فبراير','حزيران - يونيو','تشرين الاول - اكتوبر',],answer:4},
						  
						        {q:'saturday',n:'السبت', options:['الاحد','السبت','الخميس','الجمعة',],answer:2},

                          {q:'May',n:'ايار - مايو',options:['ايار - مايو','كانون الثاني - يناير',' اب - اغسطس','حزيران - يونيو',],answer:1},
						  
						        {q:'April',n:'نيسان - ابريل', options:['تشرين الاول - اكتوبر','نيسان - ابريل','اب - اغسطس','حزيران - يونيو',],answer:2},


                          {q:'Monday',n:'الاثنين',options:['السبت','الخميس','الاحد','الاثنين',],answer:4},
						  
						        {q:'August',n:' اب - اغسطس', options:['كانون الثاني - يناير','اذار - مارس',' اب - اغسطس','حزيران - يونيو',],answer:3},

                          {q:'Tuesday',n:'الثلاثاء',options:['الثلاثاء','الاحد','الاثنين','السبت',],answer:1},
						  
                          {q:'December',n:'كانون الاول - ديسمبر',options:['اب - اغسطس','كانون الثاني - يناير','كانون الاول - ديسمبر','نيسان - ابريل',],answer:3}
						  
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



