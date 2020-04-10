   
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
                          {q:'angry',n:'غاضب',options:['قلق','هادئ','غاضب','بائس',],answer:3},

                          {q:'annoyed',n:'منزعج',options:['قلق','حزين','بائس','منزعج',],answer:4},
						  
						        {q:'calm',n:'هادئ', options:['مسترخ','مرهق','حزين','هادئ',],answer:4},

                          {q:'excited',n:'متحمس',options:['غاضب','بائس','متحمس','مسترخ',],answer:3},
						  
						        {q:'happy',n:'سعيد', options:['سعيد','يلعب','متعب','حزين',],answer:1},

                          {q:'pleased',n:'مسرور',options:['مندهش','مسرور','مسترخ','هادئ',],answer:2},
						  
						        {q:'relaxed',n:'مسترخ', options:['حزين','متعب','مسترخ','بائس',],answer:3},

                          {q:'tired',n:'متعب',options:['متعب','قلق','مندهش','غاضب',],answer:1},
						  
						        {q:'worried',n:'قلق', options:['قلق','بائس','صادق','حزين',],answer:1},

                          {q:'surprised',n:'مندهش',options:['غاضب','متحمس','مندهش','ثانيه',],answer:3},
						  
						        {q:'sad',n:'حزين', options:['حزين','متحمس','مندهش','بائس',],answer:1},


                          {q:'stressed',n:'مرهق',options:['منزعج','مرهق','مسترخ','قلق',],answer:2},
						  
						        {q:'bored',n:'ضجر', options:['متعب','غاضب','ضجر','منزعج',],answer:3},

                          {q:'depressed',n:'مكتئب',options:['منزعج','مكتئب','متعب','بائس',],answer:2},
						  
                          {q:'miserable',n:'بائس',options:['بائس','غاضب','مسترخ','قلق',],answer:1}
						  
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



