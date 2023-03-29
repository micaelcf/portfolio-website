import cloud from './assets/cloud.svg';

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
	speed: 2,
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

export const cloudParticlesOptions = {
	composition: 'source-over',
	count: 10,
	speed: 1,
	parallax: 0.8,
	direction: -90,
	xVariance: 2,
	yVariance: 2,
	rotate: false,
	rotation: 1,
	alphaSpeed: 0,
	alphaVariance: 0,
	minAlpha: 0.45,
	maxAlpha: 0.65,
	minSize: 20,
	maxSize: 80,
	style: 'fill',
	bounce: false,
	drift: 0,
	glow: 0,
	twinkle: false,
	color: ['white'],
	shape: 'image',
	imageUrl: cloud
};
