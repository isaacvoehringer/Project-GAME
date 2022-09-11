function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.body.append(image)
    return image
}
function newPlayableCharacter(x, y) {
    const element = newImage('./ass')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/green-character/static.gif`
        }
        if (direction === 'west') {
            element.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/green-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}