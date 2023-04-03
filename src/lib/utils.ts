export function getScrollPercent(
	scrollY = document.body.scrollTop,
	biggerHeight = document.body.scrollHeight,
	smallerHeight = self.innerHeight
) {
	return (scrollY / (biggerHeight - smallerHeight)) * 100;
}
