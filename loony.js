   
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
                          {q:'white',n:'ابيض',options:['بني','احمر','اسود','ابيض',],answer:4},

                          {q:'black',n:'اسود',options:['رصاصي','بني فاتح','اسود','ارجواني',],answer:3},
						  
						        {q:'red',n:'احمر', options:['اسود','احمر','اخضر لامع','بني فاتح',],answer:2},

                          {q:'green',n:'اخضر',options:['ازرق داكن','برتقالي','احمر','اخضر',],answer:4},
						  
						        {q:'blue',n:'ازرق', options:['ازرق','ارجواني','اخضر لامع','ازرق غامق',],answer:1},

                          {q:'yellow',n:'اصفر',options:['احمر','اخضر','ازرق داكن','اصفر',],answer:4},
						  
						        {q:'orange',n:'برتقالي', options:['ازرق','بني فاتح','برتقالي','بني',],answer:3},

                          {q:'pink',n:'وردي',options:['وردي','احمر','ازرق','بني',],answer:1},
						  
						        {q:'brown',n:'بني', options:['وردي','احمر','ازرق','بني',],answer:4},

                          {q:'grey',n:'رمادي/رصاصي',options:['ازرق داكن','ازرق','برتقالي','رمادي/رصاصي',],answer:4},
						  
						        {q:'purple',n:'ارجواني', options:['ارجواني','وردي','اخضر لامع','اخضر',],answer:1},


                          {q:'navy blue',n:'ازرق داكن',options:['وردي','رصاصي','ازرق داكن','اخضر لامع',],answer:3},
						  
						        {q:'bright green',n:'اخضر لامع', options:['اخضر لامع','ارجواني','اخضر','وردي',],answer:1},

                          {q:'dark blue',n:'ازرق غامق',options:['اصفر','ازرق غامق','رصاصي','اخضر',],answer:2},
						  
                          {q:'light brown',n:'بني فاتح',options:['اصفر','ازرق غامق','بني فاتح','اخضر',],answer:3}
						  
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



