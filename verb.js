   
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
                          {q:'ما هو تصريفات كلمة beat',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['beat beat beat','beat beat beaten','beat bet bet','beat beated beated',],answer:2},

                          {q:'ما هو تصريفات كلمة become',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['become becomed becomed','become become become','become became become','become become becume',],answer:3},
						  
						        {q:'ما هو تصريفات كلمة begin',n:'هذه الكلمة شاذة التصريف ويجب حفظها', options:['begin began begun','begin begined begined','begin begeen begeen','begin begn begn',],answer:1},

                          {q:'ما هو تصريفات كلمة break',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['break break break','break breaked breaked','break breakn breakn','break broke broken',],answer:4},
						  
						        {q:'ما هو تصريفات كلمة build',n:'هذه الكلمة شاذة التصريف ويجب حفظها', options:['build built built','build build build','build builded builded','build buold buald',],answer:1},

                          {q:'ما هو تصريفات كلمة buy',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['buy buy buy','buy buyed buyed','buy bought bought','buy buy bought',],answer:3},
						  
						        {q:'ما هو تصريفات كلمة catch',n:'هذه الكلمة شاذة التصريف ويجب حفظها', options:['catch caught caught','catch catched catched','catch catch caught','catch catch catch',],answer:1},

                          {q:'ما هو تصريفات كلمة choose',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['choose chose chose ','choose chose chosen','choose choose choose','choose choosed choosed',],answer:2},
						  
						        {q:'ما هو تصريفات كلمة come',n:'هذه الكلمة شاذة التصريف ويجب حفظها', options:['come come come','come came come','come comed comed','come came comen',],answer:2},

                          {q:'ما هو تصريفات كلمة do ',n:'هذه الكلمة شاذة التصريف ويجب حفظها',options:['do did done','do do do','do do done','do do doed',],answer:1},
						  
						        {q:'ما هو تصريفات كلمة cut',n:'هذه الكلمة شاذة التصريف ولا يتغير شكلها ويجب حفظها', options:['cut cut cut','cut cot cat','cut cuted cuted','cut cutt cuten',],answer:1},


                          {q:'ما هو تصريفات كلمة dream',n:'هذه الكلمة شاذة التصريف ويضاف لها في النهاية حرف t',options:['dream dreom dreum','dream dreamed dreamed','dream dreamt dreamt','dream dreghm dreghm',],answer:3},
						  
						        {q:'ما هو تصريفات كلمة drink',n:'هذه الكلمة شاذة التصريف ويتبدل بها الحرف قبل الاخير', options:['drink drink drink','drink drank drunk','drink drinked drinked','drink drinck drinck',],answer:2},

                          {q:'ما هو تصريفات كلمة cost',n:'هذه الكلمة شاذة التصريف ولا يتغير شكلها ويجب حفظها',options:['cost costed costed','cost cost cost','cost costt costt','cost cast cust',],answer:2},
						  
                          {q:'ما هو تصريفات كلمة burn ',n:'هذه الكلمة شاذة التصريف ويضاف لها في النهاية حرف t',options:['burn burnt burnt','burn barn born','burn burned burned',' burn burn burn',],answer:1}
						  
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



