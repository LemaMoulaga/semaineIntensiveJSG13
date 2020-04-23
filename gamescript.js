const time = document.querySelector('.time')
const score = document.querySelector('.score')
const clickRate = document.querySelector('.click-rate')
const clickHere =document.querySelector('.click-here')
const restart = document.querySelector('.restart')
let play = false
let clickCount = 0
let timer = 0


clickHere.addEventListener('click', ()=>
{
    clickCount = clickCount + 1
    if(play == false)
    {
        play = true
        const timerIntervall = setInterval(() => 
        {
            timer = timer + 0.1
            time.textContent = `${Math.floor(timer)}`
            clickRate.textContent = `${Math.floor(clickCount/timer) * 25}`
            score.textContent = `${clickCount}`
            if(timer>20)
                clearInterval(timerIntervall)
        }, 100);        
        
    }     
})

restart.addEventListener('click', () =>
{
    play = false
    timer = 0
    clickCount = 0
    time.textContent = ``
    clickRate.textContent = ``
    score.textContent = ''
})


//const carReady = function() 
//{
 //carReady.addEventListener = 'mouseover', function() 
   //     {
     //       $('#animateCar').hover(
       //         function(e)
         //       {
           //         if (mouseover = true)            
             //       $(this).attr("src", "images/voiture.gif")
               //     ($(this).attr("src", "images/voiture.png").style.visibility.none)
                 //   else
                  //  $(this).attr("src", "images/voiture.png")
                  //  ($(this).attr("src", "images/voiture.gif").style.visibility.none)
                //}
                
     //       )
   //     }
        
//} 

