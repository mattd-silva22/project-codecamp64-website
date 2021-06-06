const cardContainer = document.querySelector('#cards-container')


const getVideoThumb = videoLink => {

    // https://www.youtube.com/watch?v=Wras1X6rBrc
    // https://youtu.be/pQN-pnXPaVg

    

    let link =  videoLink.replace("https://youtu.be/",'')
        
      
    
    let thumb ='http://i.ytimg.com/vi/'+link+'/maxresdefault.jpg'
       return thumb

      
}



const addCourseCard = (videolink,title,time,price)=>{

    let card = document.createElement('div')
    card.classList.add('card')

    let img = getVideoThumb(videolink)

    if(!price) price = 'gratuito'

    card.innerHTML = `
    <a href="${videolink}" target="_blank">
    <div class="card-img">
    <img src="${img}" alt=""> 
    </div>
    
    <div class="card-content">
    <p class="card-text" >
       ${title}
    </p>
    <div class="card-info">
       <P class="card-border card-time">
           ${time}
       <p class="card-border card-price"  >
           ${price}
       </p>
    </div>
    </div>
    </a>
    `

    cardContainer.append(card)
    
}

addCourseCard('https://youtu.be/pQN-pnXPaVg', 'Curso completo HTML5','2 HORAS')
addCourseCard('https://youtu.be/1Rs2ND1ryYc' , 'Curso completo CSS3' , '6 horas' )
addCourseCard('https://youtu.be/rfscVS0vtbw' , 'Curso completo Python 3 ' , '4.5 horas')
addCourseCard('https://youtu.be/srvUrASNj0s' , 'Curso desing  web resposivo ' , '4 horas')
addCourseCard('https://youtu.be/KJgsSFOSQv0' , 'curso programação em C' , '3.5 horas')




