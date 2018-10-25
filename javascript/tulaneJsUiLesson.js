{
    const randomColor = () => `#${Math.floor(256**3*Math.random()).toString('16')}`
    randomColor.help = `Returns a random hex-formatted color that can be used with a css style`

    const randomlyChangeColors = (el, frequency) => {
        setInterval(() => el.style.color = randomColor(), frequency)
    }
    randomlyChangeColors.help = `Change the color of the element to a random color every frequency milliseconds`

    const setCoordinates = (el, top, left) =>  {
        Object.assign(el.style, {top: `${top}px`, left: `${left}px`})
    }
    setCoordinates.help = `set the top and left css style of the element to the given values`

    const randomCoordinates = (radius=1) => {
        const angle = 2*Math.PI*Math.random()
        return [
            radius*Math.cos(angle),
            radius*Math.sin(angle)
        ].map(Math.floor)
    }
    randomCoordinates.help = `Generate a pair of random coordinates on a circle of the given radius centered at 0,0`
    
    const runAwayFromMouse = (el) => {
        Object.assign(el.style, {position: `relative`, transition: `top .5s, left .5s`})
        let top = 0
        let left = 0
        setCoordinates(el, top, left)
        const moveRandomly = () => {
            const delta = randomCoordinates(200)
            left += delta[0]
            top += delta[1]
            setCoordinates(el, top, left)
        }
        el.addEventListener(`mousemove`, moveRandomly)
    }
    runAwayFromMouse.help = `Given an element, move it away in a random direction whenever the mouse passes over it`

    const shuffle = function * (arr) {
        const arrCopy = [...arr]
        for(let length = arr.length; length-1 >= 0; length -= 1) {
            const randomIndex = Math.floor(length * Math.random())
            const [itemAtIndex] = arrCopy.splice(randomIndex, 1)
            yield itemAtIndex
        }
    }
    shuffle.help = `Return an iterator with the elements of the given array shuffled using the Fisher-Yates shuffle algorithm`

    const anagram = str => [...shuffle(str)].join('')
    anagram.help = `Generate an anagram of all characters in a string`

    const showDocs = () => {
        const docs = Object.entries( window._tulaneJsUiLesson )
            .map(([fnName, fn]) => {
                const signature = /^(.*?\))/.exec(fn.toString())[1]
                return `_tulaneJsUiLesson.${fnName}${signature}\n\t${fn.help}`
            })
        console.group(`tulaneJsUiLesson docs`)
        console.log(`
Lesson helpers javascript is now loaded, you can find and edit it in the "lessonHelpers.js" file.
Usage:

${docs.join('\n\n')}
        `)
        console.groupEnd()
    }
    showDocs.help = `Show documentation including this message`

    window._tulaneJsUiLesson = {
        randomColor,
        randomlyChangeColors,
        setCoordinates,
        randomCoordinates,
        runAwayFromMouse,
        shuffle,
        anagram,
        showDocs,
    }

    showDocs()
}
