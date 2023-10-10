const burgerBtn = document.querySelector('.nav__burger')
const closeNavBtn = document.querySelector('.nav__close')
const allNavLinks = document.querySelectorAll('.nav__link')
const nav = document.querySelector('.nav__links')
const navShadow = document.querySelector('.nav__shadow')
const navMobile = document.querySelector('.nav__mobile')
const modalCards = document.querySelectorAll('.modal-card')
const cardActive = document.querySelector('.modal-card.active')

const backThisProjectBtn = document.querySelector('.btn__btp')
const modalCloseBtn = document.querySelector('.btn-close-modal')
const modalSelect = document.querySelector('.modal--select')

const continueBtns = document.querySelectorAll('.btn-continue')
const modalSuccess = document.querySelector('.modal--success')
const btnGotIt = document.querySelector('.btn-got-it')

const selectBtns = document.querySelectorAll('.about__card-btn')

const bookmarkBtn = document.querySelector('.section__header-bookmark')

const showNav = () => {
	burgerBtn.classList.toggle('hide')
	closeNavBtn.classList.toggle('show')
	nav.classList.toggle('show')
	navShadow.classList.toggle('show')
}

const handleModal = num => {
	const active = modalCards[num]
	const activeInput = active.querySelector('input')
	active.classList.add('active')
	activeInput.checked = true
	modalSelect.showModal()
}

const removeActive = () => {
	modalCards.forEach(card => {
		const eachInput = card.querySelector('input')
		eachInput.checked = false
		card.classList.remove('active')
	})
}

burgerBtn.addEventListener('click', showNav)
closeNavBtn.addEventListener('click', showNav)

allNavLinks.forEach(link => {
	link.addEventListener('click', () => {
		burgerBtn.classList.remove('hide')
		closeNavBtn.classList.remove('show')
		nav.classList.remove('show')
		navShadow.classList.remove('show')
	})
})

bookmarkBtn.addEventListener('click', () => {
	const bookmarkText = bookmarkBtn.querySelector('button')
	bookmarkBtn.classList.toggle('bookmarked')

	if (bookmarkBtn.classList.contains('bookmarked')) {
		bookmarkText.textContent = 'Bookmarked'
	} else {
		bookmarkText.textContent = 'Bookmark'
	}
})

backThisProjectBtn.addEventListener('click', () => {
	modalSelect.showModal()
})

modalCloseBtn.addEventListener('click', () => {
	removeActive()
	modalSelect.close()
})

continueBtns.forEach(btn => {
	btn.addEventListener('click', () => {
		modalSuccess.showModal()
	})
})

btnGotIt.addEventListener('click', () => {
	removeActive()
	modalSuccess.close()
})

modalCards.forEach(card => {
	const isDisabled = card.children[0].children[0].hasAttribute('disabled')
	if (!isDisabled) {
		card.addEventListener('click', () => {
			modalCards.forEach(card => {
				card.classList.remove('active')
			})
			card.classList.add('active')
		})
	}
})

selectBtns.forEach(btn => {
	btn.addEventListener('click', e => {
		if (e.target.dataset.id == 0) {
			handleModal(1)
		} else {
			handleModal(2)
		}
	})
})

window.addEventListener('scroll', () => {
	const main = document.querySelector('.main')
	const headerCont = document.querySelector('.header__container')
	const nav = document.querySelector('.nav__mobile-box')
	const navHeight = nav.getBoundingClientRect().height
	const sectionHeaderLogo = document.querySelector('.section__header-logo')
	const logoHeight = sectionHeaderLogo.getBoundingClientRect().height

	if (window.scrollY > main.offsetTop - (navHeight + logoHeight)) {
		headerCont.classList.add('show-on-scroll')
		navShadow.style.top = `84px`
	} else {
		headerCont.classList.remove('show-on-scroll')
		navShadow.style.top = '0'
	}
})
