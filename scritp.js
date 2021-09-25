var img1 =  document.getElementById('vulcano')
var img2 = document.getElementById('lake')
var img3 = document.getElementById('desert')
var b = document.querySelector('body')

img1.addEventListener('mouseenter', into)
img1.addEventListener('mouseout', out)
img2.addEventListener('mouseenter', into2)
img2.addEventListener('mouseout', out2)
img3.addEventListener('mouseenter', into3)
img3.addEventListener('mouseout', out3)

function into() {
	b.setAttribute('class', 'gradient1')
	img1.setAttribute('class', 'zoom')
}

function out() {
	b.setAttribute('class', 'exit1')
}

function into2() {
	b.setAttribute('class', 'gradient2')
	img2.setAttribute('class', 'zoom2')
}

function out2() {
	b.setAttribute('class', 'exit2')
}

function into3() {
	b.setAttribute('class' ,'gradient3')
	img3.setAttribute('class', 'zoom3')
}

function out3() {
	b.setAttribute('class' ,'exit3')
}