
addEventListener('load',()=>{
    var puntos = document.querySelectorAll('.points');
    var div = document.querySelectorAll('div');
    var span = document.querySelectorAll('span');
    var p = document.querySelectorAll('p');
    var ESR = [div,span,p];
    var data = [
        {
            "title": "Work",
            "timeframes": {
                "daily": {
                "current": 5,
                "previous": 7
                },
                "weekly": {
                    "current": 32,
                    "previous": 36
                },
                "monthly": {
                    "current": 103,
                    "previous": 128
                }
            }
        },
        {
            "title": "Play",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 2
                },
                "weekly": {
                    "current": 10,
                    "previous": 8
                },
                "monthly": {
                    "current": 23,
                    "previous": 29
                }
            }
        },
        {
            "title": "Study",
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "weekly": {
                    "current": 4,
                    "previous": 7
                },
                "monthly": {
                    "current": 13,
                    "previous": 19
                }
            }
        },
        {
            "title": "Exercise",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 1
                },
                "weekly": {
                    "current": 4,
                    "previous": 5
                },
                "monthly": {
                    "current": 11,
                    "previous": 18
                }
            }
        },
        {
            "title": "Social",
            "timeframes": {
                "daily": {
                    "current": 1,
                    "previous": 3
                },
                "weekly": {
                    "current": 5,
                    "previous": 10
                },
                "monthly": {
                    "current": 21,
                    "previous": 23
                }
            }
        },
        {
            "title": "Self Care",
            "timeframes": {
                "daily": {
                    "current": 0,
                    "previous": 1
                },
                "weekly": {
                    "current": 2,
                    "previous": 2
                },
                "monthly": {
                    "current": 7,
                    "previous": 11
                }
            }
        }
    ] 

    function movil(x){
        x.forEach(element => {
        element.forEach(es => {
            var ar = ''
            ar = es.className
                if (ar.includes('movil')==true){
                
                }else{
                    es.className += ' movil';
                    puntos.forEach(punto => {
                        punto.setAttribute('class','points movil')
                    })
                }    
            
            }) 
        })
    };
    function desk(x){
        x.forEach(element => {
            element.forEach(es => {
                var ar = '';
                var con = 0;
                ar = es.className
                if (ar.includes('movil')==true){
                    con = ar.indexOf('movil');
                    ar = ar.substr(0,con)
                    es.className = ar
                    puntos.forEach(punto => {
                        punto.setAttribute('class','points')
                    })
                }
            }) 
        })
    }

    if (window.innerWidth <= 1038) {
        movil(ESR);
    }else if(window.innerWidth >= 1038){
        desk(ESR)
    }
    
    puntos.forEach(punto => {
        punto.addEventListener('mouseover',()=>{
            punto.setAttribute('fill','#FFFFFF')
        })
        punto.addEventListener('mouseout',()=>{
            punto.setAttribute('fill','hsl(235, 45%, 61%)')
        })
    })
    
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 1038) {
            movil(ESR);
        }else if(window.innerWidth >= 1038){
            desk(ESR)
        }
    })
    
    var hrs = document.querySelectorAll('.hrs')
    var last = document.querySelectorAll('.last')
    var links = document.querySelectorAll('.but')
    
    links.forEach(link => {
        link.addEventListener('click',() => {
            if (link.innerHTML == 'Daily'){
                links.forEach(span => {
                    span.className = 'but';
                })
                link.className = 'Active but';
                let i = 0;
                hrs.forEach(tag => {
                    tag.innerHTML = `${data[i].timeframes.daily.current} hrs`
                    i += 1;
                })
                i=0;
                last.forEach(tag => {
                    tag.innerHTML = `Yesterday - ${data[i].timeframes.daily.previous}hrs`
                    i += 1;
                })
            }else if(link.innerHTML == 'Weekly'){
                links.forEach(span => {
                    span.className = 'but';
                })
                link.className = 'Active but';
                let i = 0;
                hrs.forEach(tag => {
                    tag.innerHTML = `${data[i].timeframes.weekly.current} hrs`;
                    i += 1;
                })
                i=0;
                last.forEach(tag => {
                    tag.innerHTML = `Last Week - ${data[i].timeframes.weekly.previous}hrs`;
                    i += 1;
                })
            }else if(link.innerHTML == 'Monthly'){
                links.forEach(span => {
                    span.className = 'but'
                })
                link.className = 'Active but';
                let i = 0;
                hrs.forEach(tag => {
                    tag.innerHTML = `${data[i].timeframes.monthly.current} hrs`;
                    i += 1;
                })
                i=0;
                last.forEach(tag => {
                    tag.innerHTML = `Last Month - ${data[i].timeframes.monthly.previous}hrs`;
                    i+=1;
                })
            }
        })
    })

})
