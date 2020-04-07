   
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

						  

	
   


          {q:'اي من الكلمات التالية تأتي بمعنى - سيارته ?',n:'نستخدم ضمير الملكيه عند الحديث عن مذكر لا نوجه له الكلامhis',options:['his car','her car','our car','my car',],answer:1},

   {q:'ترجم هذه الكلمة - كتابي?',n:'استخدم ضمير الملكية my عندما اتحدث عن شيء أملكه انا',options:['her book','my book','our book','his book',],answer:2},

   {q:'اي من الكلمات التالية تأتي بمعنى - كلبهم ?',n:'استخدم ضمير الملكية their عندما اتحدث عن شيء يملكه اكثر من شحص',options:['our dog','my dog','his dog','their dog',],answer:4},

   {q:'ترجم هذه الكلمة - she took my pen?',n:'استخدم ضمير الملكية my عندما اتحدث عن شيء أملكه انا  ',options:['هي أخذت كتابها','هي أخذت كتابي','هي أخذت كتابهم','هي أخذت كتابه',],answer:2},

   {q:'ترجم هذه الجملة-انا اكلت شطيرته ?',n:'نستخدم ضمير الملكيه عند الحديث عن مذكر لا نوجه له الكلام his',options:['I ate his sandwich','I ate her sandwich','I ate my sandwich','I ate our sandwich',],answer:1},

   {q:'ترجم جمله - معلمنا?',n:'يستخدم ضمير الملكيه our عندما نتحدث عن شيء نملكه نحن',options:['my teacher','his teacher','their teacher','our teacher',],answer:4},

   {q:'ما معنى كلمة - مدونتي?',n:'نستخدم ضمير الملكية my عندما اتحدث عن شيء أملكه انا',options:['my blog','our blog','her blog','its blog',],answer:1},

   {q:'معنى كلمة - القطة تأكل طعامها?',n:'نستخم ضمير الملكيه its عندما نتحدث عن شيء غير عاقل',options:['the cat eats his food','the cat eats my food','the cat eats its food','the cat eats her food',],answer:3},

   {q:'her school ?',n:'ضمير ملكيه يعود على مؤنث her ',options:['مدرستي','مدرستها','مدرستنا','مدرستهم',],answer:2},
   
    {q:'my ring ?',n:'الضمير my يعود على شيء امتلكه انا',options:['خاتمنا','خاتمه','خاتمي','خاتمها',],answer:3},

          {q:'their bag ?',n:'استخدم ضمير الملكية their عندما اتحدث عن شيء يملكه اكثر من شحص',options:['حقيبتهم','حقيبتي','حقيبتها','حقيبتنا',],answer:1},

   {q:'her phone ?',n:'ضمير ملكيه يعود على مؤنث her',options:['هاتفي','هاتفنا','هاتفها','هاتفهم',],answer:3},

   {q:'كرسينا ?',n:'يستخدم ضمير الملكيه our عندما نتحدث عن شيء نملكه نحن',options:['our chair','my chair','her chair','its chair',],answer:1},

   {q:'my friend ?',n:'نستخدم ضمير الملكية my عندما اتحدث عن شيء أملكه انا',options:['صديقنا','صديقها','صديقهم','صديقي',],answer:4},

   {q:'أخاك ?',n:'your يستخدم ضمير للملكة للحديث عن شيء يملكه الشخص الذي تتحدث معه',options:['my brother','your brother','our brother','his brother},answer:2}

					   



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



