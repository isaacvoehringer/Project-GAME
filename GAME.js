// fundamental position function
function move(element) {
    element.style.position = 'absolute'
    //track and react to player movement
let player1 = document.getElementById('player')

function updateRectCoor(){
        var playerRect = player1.getBoundingClientRect();
console.log(playerRect.top, playerRect.right, playerRect.bottom, playerRect.left);
if (playerRect.left > 1200) {touchdown()}
if (playerRect.left < 123) {saftey()}
if (playerRect.top > 695 || playerRect.top < 90){outOfBounds()}
    }
    //posittioning and moving characters with tracking and react function attached to player
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
        // arrow key movement of player

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
       
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
    
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}

// functions to create and position characters

function newPlayableCharacter(x, y) {
    let element = newImage('./assets/brownietheelf.jpeg')
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
// alllow automated player movement
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
        await sleep(time)
        stop()
    }

    async function walkNorth(time) {
        direction = 'north'
        await sleep(time)
        stop()
    }

    async function walkWest(time) {
        direction = 'west'
        await sleep(time)
        stop()
    }

    async function walkSouth(time) {
        direction = 'south'
        await sleep(time)
        stop()
    }

    function stop() {
        direction = null
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

//creating characters

let player = newPlayableCharacter(200, 300)
const def1 = newNonPlayableCharacter(328, 500)
const def2 = newNonPlayableCharacter(328, 400)
const def3 = newNonPlayableCharacter(328, 300)
const def4 = newNonPlayableCharacter(328, 200)

const blocker1 = newNonPlayableOffense(250, 500)
const blocker2 = newNonPlayableOffense(250, 400)
const blocker3 = newNonPlayableOffense(250, 250)

function touchdown(){

let img = document.getElementById('win');
    img.style.visibility = 'visible';
    let btn = document.getElementById('reset'); 
   

}

function saftey(){
    let img = document.getElementById('safety');
    img.style.visibility = 'visible';
}

function outOfBounds(){
    let img = document.getElementById('out');
    img.style.visibility = 'visible';
}


//automation of non-playable characters

async function movedef1(){

    await def1.walkEast(2600)
    await def1.walkNorth(200)
    await def1.walkSouth(200)
    await def1.walkWest(2600)
    await movedef1()
}
movedef1()

async function movedef2(){
    await def2.walkEast(2600)
    await def2.walkNorth(200)
    await def2.walkSouth(200)
    await def2.walkWest(2600)
    await movedef2()
}
movedef2()

async function movedef3(){
    await def3.walkEast(2600)
    await def3.walkSouth(200)
    await def3.walkNorth(200)
    await def3.walkWest(2600)
    await movedef3()
}
movedef3()

async function movedef4(){
    await def4.walkEast(2600)
    await def4.walkSouth(200)
    await def4.walkNorth(200)
    await def4.walkWest(2600)
    await movedef4()
}
movedef4()

async function moveblocker1(){
    await blocker1.walkEast(2600)
    await blocker1.walkNorth(200)
    await blocker1.walkSouth(200)
    await blocker1.walkWest(2600)
    await moveblocker1()
}
moveblocker1()

async function moveblocker2(){
    await blocker2.walkEast(2600)
    await blocker2.walkNorth(200)
    await blocker2.walkSouth(200)
    await blocker2.walkWest(2600)
    await moveblocker2()
}
moveblocker2()

async function moveblocker3(){
    await blocker3.walkEast(2600)
    await blocker3.walkSouth(200)
    await blocker3.walkNorth(200)
    await blocker3.walkWest(2600)
    await moveblocker3()
}
moveblocker3()

//reset buttons to allow game to be replayed with user reloading browser manually

let btn = document.getElementById('reset'); 
    btn.addEventListener("click", function() {
        window.location.reload();
   })

let safetybtn = document.getElementById('safetybtn'); 
    safetybtn.addEventListener("click", function() {
        window.location.reload()
    })
 
let outbtn = document.getElementById('outbtn'); 
    outbtn.addEventListener("click", function() {
        window.location.reload()
    })
    
// prevent arrow keys from scrolling the window which disrupts game play

window.addEventListener("keydown", function(e) {
    if(["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].indexOf(e.code) > -1) {
        e.preventDefault();
    }
}, false);
