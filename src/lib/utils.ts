export function getScrollPercent(
	scrollY = document.body.scrollTop,
	biggerHeight = document.body.scrollHeight,
	smallerHeight = self.innerHeight
) {
	return (scrollY / (biggerHeight - smallerHeight)) * 100;
}

export const particlesOptions = {
	composition: 'source-over',
	count: 150,
	speed: 4.5,
	parallax: 1,
	direction: 0,
	xVariance: 2,
	yVariance: 2,
	rotate: true,
	rotation: 1,
	alphaSpeed: 2,
	alphaVariance: 1,
	minAlpha: 0,
	maxAlpha: 0.5,
	minSize: 2,
	maxSize: 20,
	style: 'stroke',
	bounce: false,
	drift: 0,
	glow: 0,
	twinkle: false,
	color: ['#ffffff'],
	shape: 'circle',
	imageUrl: ''
};
