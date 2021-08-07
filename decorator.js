function throttle(limit = 0) {
	let flag = true
	return (target, key, descriptor) => {
		let func = descriptor.value
		descriptor.value = async (...args) => {
			if (!flag) return (flag = false)
			try {
				func.apply(this, ...args)
			} catch (error) {
				console.log(error)
			}
			if (!limit) return (flag = true)
			setTimeout(() => {
				flag = true
			}, limit)
		}
	}
}

class TestD {
	@throttle(2000)
	fn() {
		console.log('fn')
	}
}
const testd = new TestD()
setInterval(testd.fn, 50)