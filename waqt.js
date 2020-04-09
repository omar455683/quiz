   
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
                          {q:'clock',n:'معنى الكلمة -ساعة-',options:['دقيقه','ساعه','ثانيه','وقت',],answer:2},

                          {q:'second',n:'معنى الكلمة -ثانيه-',options:['ساعه','وقت','ثانيه','دقيقه',],answer:3},
						  
						        {q:'year',n:'معنى الكلمة -سنة-', options:['ساعه','اسبوع','شهر','سنة',],answer:4},

                          {q:'night',n:'معنى الكلمة -ليله-',options:['ليلة','ساعه','اسبوع','شهر',],answer:1},
						  
						        {q:'season',n:'معنى الالكلمة -فصل-', options:['خريف','اسبوع','شهر','فصل',],answer:4},

                          {q:'midnight',n:'معنى الكلمة -منتصف الليل-',options:['اسبوع','منتصف الليل','ليلة','ساعه',],answer:2},
						  
						        {q:'morning',n:'معنى الكلمة -صباح-', options:['صباح','ليلة','ساعه','ظهيرة',],answer:1},

                          {q:'afternoon',n:'معنى الكلمة -بعد الظهر-',options:['ثانية','ساعه','ظهيرة','بعد الظهر',],answer:4},
						  
						        {q:'hour',n:'معنى الكلمة - ساعة-', options:['دقيقه','ساعه','ثانيه','وقت',],answer:2},

                          {q:'day',n:'معنى الكلمة -يوم-',options:['يوم','دقيقه','ساعه','ثانيه',],answer:1},
						  
						        {q:'week',n:'معنى الكلمة -اسبوع-', options:['خريف','اسبوع','شهر','فصل',],answer:2},


                          {q:'watch',n:'معنى الكلمة -ساعة يد-',options:['اسبوع','منتصف الليل','ليلة','ساعة يد',],answer:4},
						  
						        {q:'month',n:'معنى الكلمة -شهر-', options:['خريف','اسبوع','شهر','فصل',],answer:3},

                          {q:'minute',n:'معنى الكلمة -دقيقة',options:['دقيقه','ساعه','ثانيه','وقت',],answer:1},
						  
                          {q:'noon',n:'معنى الكلمة -ظهيرة',options:['ليلة','ساعه','ظهيرة','منتصف الليل',],answer:3}
						  
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



