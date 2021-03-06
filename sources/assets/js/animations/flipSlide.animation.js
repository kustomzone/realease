export default function (container) {
	const releases		= container.querySelectorAll('.release')
	const { length }	= releases
	const last			= length - 1

	function flipSlideAnimation (current = last) {
		requestAnimationFrame(() => {
			releases.forEach((release, index) => {
				release.classList.toggle('flip', current === index)
				release.style.order = current > index
					? length + index - current
					: index - current
			})

			container.style.transform = `translateY(-${releases[current].clientHeight}px)`
			container.classList.remove('translate')
			requestAnimationFrame(() => container.classList.add('translate'))
			setTimeout(() => flipSlideAnimation(current === 0 ? last : current - 1), 10000)
		})
	}

	setTimeout(flipSlideAnimation, 2000)
}
