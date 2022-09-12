// console.log('hi')
function move(element) {
    element.style.position = 'fixed'

    function updateRectCoor(){
        var playerRect = player1.getBoundingClientRect();
console.log(playerRect.top, playerRect.right, playerRect.bottom, playerRect.left);
if (playerRect.left > 680) {touchdown()}
    }
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
                x-=1;
                updateRectCoor();
              
            }
            if(direction === 'north'){
                y+=1;
                updateRectCoor();
               
            }
            if(direction === 'east'){
                x+=1;
                updateRectCoor();
               
            }
            if(direction === 'south'){
                y-=1;
                updateRectCoor();
               
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
    element.id = 'player';

 

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
        // element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        // element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        // element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        // element.src = './assets/defender.jpeg'
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
        // element.src = './assets/defender.jpeg'
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
const def1 = newNonPlayableCharacter(328, 500)
const def2 = newNonPlayableCharacter(328, 400)
const def3 = newNonPlayableCharacter(328, 300)
const def4 = newNonPlayableCharacter(328, 200)

const blocker1 = newNonPlayableOffense(250, 500)
const blocker2 = newNonPlayableOffense(250, 400)
const blocker3 = newNonPlayableOffense(250, 250)
// let touchdown = document.querySelector(".endzone")

// touchdown.addEventListener()

// var el

// $(document).ready(function() {
//     var el = $("#endzone").position();
//     var	x = el.left;
//     var	y = el.top;
//     $("#endzone").append("("+ x + " , " + y + ")");	
//     console.log('position')	
//     return x		
// });
// $(document).ready(function() {
//     var el2 = $("player").position();
//     var	f = el.left;
//     var	g = el.top;
//     $("player").append("("+ f + " , " + g + ")");
//     console.log(position)
//     return f				
// });

function touchdown(){
//    var celebration = document.createElement(<p>THE BROWNS WIN THE SUPER BOWL!!!</p>);
//    document.append('celebration') 
document.getElementsByTagName('div').style.visibility = "hidden";
   console.log('touchdown')
}

let endzone = document.getElementById('endzone')

var rect = endzone.getBoundingClientRect();
console.log(rect.top, rect.right, rect.bottom, rect.left);
let player1 = document.getElementById('player')

var playerRect = player1.getBoundingClientRect();
console.log(playerRect.top, playerRect.right, playerRect.bottom, playerRect.left);

touchdown()
// console.log(playerRect.left)
console.log(player)

async function movedef1(){

    await def1.walkEast(800)
    await def1.walkNorth(200)
    await def1.walkSouth(200)
    await def1.walkWest(800)
    await movedef1()
}
movedef1()

async function movedef2(){
    await def2.walkEast(800)
    await def2.walkNorth(200)
    await def2.walkSouth(200)
    await def2.walkWest(800)
    await movedef2()
}
movedef2()

async function movedef3(){
    await def3.walkEast(800)
    await def3.walkSouth(200)
    await def3.walkNorth(200)
    await def3.walkWest(800)
    await movedef3()
}
movedef3()

async function movedef4(){
    await def4.walkEast(800)
    await def4.walkSouth(200)
    await def4.walkNorth(200)
    await def4.walkWest(800)
    await movedef4()
}
movedef4()

async function moveblocker1(){
    await blocker1.walkEast(800)
    await blocker1.walkNorth(200)
    await blocker1.walkSouth(200)
    await blocker1.walkWest(800)
    await moveblocker1()
}
moveblocker1()

async function moveblocker2(){
    await blocker2.walkEast(800)
    await blocker2.walkNorth(200)
    await blocker2.walkSouth(200)
    await blocker2.walkWest(800)
    await moveblocker2()
}
moveblocker2()

async function moveblocker3(){
    await blocker3.walkEast(800)
    await blocker3.walkSouth(200)
    await blocker3.walkNorth(200)
    await blocker3.walkWest(800)
    await moveblocker3()
}
moveblocker3()
// function HitTest(Rectangle r1, Rectangle r2) returns boolean
// {
//     return ((r1.X + r1.Width >= r2.X) and (r1.X <= r2.X + r2.Width) and (r1.Y + r1.Height >= r2.Y) and (r1.Y <= r2.Y + r2.Height));
// }