// console.log('hi')
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom) {
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
        }
        
        setInterval(moveCharacter, 1)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            // callback(direction)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            // callback(direction)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

function newPlayableCharacter(x, y) {
    const element = newImage('./assets/brownietheelf.jpeg')
    element.style.zIndex = 1;

 

    move(element).withArrowKeys(x, y)

    return {
        element: element
    }
}
function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}
function newNonPlayableCharacter(x, y) {
    let element = newImage('./assets/defender.jpeg')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        element.src = './assets/defender.jpeg'
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}

function newNonPlayableOffense(x, y) {
    let element = newImage('./assets/blocker.jpeg')
    element.style.zIndex = 1;
    
    let direction = null;

    function moveCharacter() {
        if (direction === 'west') {
            x -= 1
        }
        if (direction === 'north') {
            y += 1
        }
        if (direction === 'east') {
            x += 1
        }
        if (direction === 'south') {
            y -= 1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    setInterval(moveCharacter, 1)

    async function walkEast(time) {
        direction = 'east'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        element.src = './assets/defender.jpeg'
    }

    return {
        element: element,
        walkWest: walkWest,
        walkNorth: walkNorth,
        walkEast: walkEast,
        walkSouth: walkSouth,
        stop: stop
    }
}
function sleep(time){
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })  
}


const player = newPlayableCharacter(200, 300)
const def1 = newNonPlayableCharacter(400, 500)
const def2 = newNonPlayableCharacter(400, 400)
const def3 = newNonPlayableCharacter(400, 300)
const def4 = newNonPlayableCharacter(400, 200)

const blocker1 = newNonPlayableOffense(250, 500)
const blocker2 = newNonPlayableOffense(250, 400)
const blocker3 = newNonPlayableOffense(250, 200)
// let touchdown = document.querySelector(".endzone")

// touchdown.addEventListener()

// var el

$(document).ready(function() {
    var el = $("#endzone").position();
    var	x = el.left;
    var	y = el.top;
    $("#endzone").append("("+ x + " , " + y + ")");	
    console.log('position')			
});
$(document).ready(function() {
    var el2 = $("player").position();
    var	f = el.left;
    var	g = el.top;
    $("player").append("("+ f + " , " + g + ")");
    console.log(position)				
});

// let touchdown(){
//     if x === f {console.log('touchdown')}
// }


async function movedef1(){
    await def1.walkEast(300)
    await def1.walkSouth(600)
    await def1.walkEast(200)
    await def1.walkSouth(200)
    await def1.walkWest(700)
    await def1.walkNorth(800)
    await movedef1()
}

movedef1()

function HitTest(Rectangle r1, Rectangle r2) returns boolean
{
    return ((r1.X + r1.Width >= r2.X) and (r1.X <= r2.X + r2.Width) and (r1.Y + r1.Height >= r2.Y) and (r1.Y <= r2.Y + r2.Height));
}