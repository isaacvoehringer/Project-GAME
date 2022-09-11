// console.log('hi')



function newPlayableCharacter(x, y) {
    const element = newImage('./assets.brownietheelf.jpeg')
    element.style.zIndex = 1;

 

    move(element).withArrowKeys(x, y)

    return {
        element: element
    }
}
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'right'){
                x-=1
            }
            if(direction === 'up'){
                y+=1
            }
            if(direction === 'left'){
                x+=1
            }
            if(direction === 'down'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'left'
            }
            if(e.key === 'ArrowUp'){
                direction = 'up'
            }
            if(e.key === 'ArrowRight'){
                direction = 'right'
            }
            if(e.key === 'ArrowDown'){
                direction = 'down'
            }
            callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}