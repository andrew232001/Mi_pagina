function cardLun(dom) {
	const lbtn = dom.querySelector(".lbtn");
	const rbtn = dom.querySelector(".rbtn");
	const move = dom.querySelector(".card-list");
	const cards = dom.querySelectorAll(".card");
	let idx = 1;

	function getR() {
		idx++;
		if (idx === 9) {
			idx = 2;
			move.style.transition = "none";
			move.style.transform = `translateX(-${1 * 260}px)`;
			document.documentElement.offsetHeight;
			move.style.transition = ".4s all";
			move.style.transform = `translateX(-${idx * 260}px)`;
		} else {
			move.style.transform = `translateX(-${idx * 260}px)`;
		}
		dom.querySelector(".active").classList.remove("active");
		cards[idx + 1].classList.add("active");
	}
	function getL() {
		idx--;
		if (idx < 0) {
			idx = cards.length - 6;
			move.style.transition = "none";
			move.style.transform = `translateX(-${(cards.length - 4) * 260}px)`;
			document.documentElement.offsetHeight;
			move.style.transition = ".4s all";
			move.style.transform = `translateX(-${idx * 260}px)`;
		} else {
			move.style.transform = `translateX(-${idx * 260}px)`;
		}
		dom.querySelector(".active").classList.remove("active");
		cards[idx + 1].classList.add("active");
	}

	rbtn.addEventListener("click", getR);
	lbtn.addEventListener("click", getL);
	move.addEventListener("click", (e) => {
		if (e.target.tagName === "LI") {
			idx = Number(e.target.dataset.cid);
			if (idx === 9) {
				idx = 2;
				move.style.transition = "none";
				move.style.transform = `translateX(-${1 * 260}px)`;
				document.documentElement.offsetHeight;
				move.style.transition = ".4s all";
			} else if (idx < 0) {
				idx = cards.length - 6;
				move.style.transition = "none";
				move.style.transform = `translateX(-${(cards.length - 4) * 260}px)`;
				document.documentElement.offsetHeight;
				move.style.transition = ".4s all";
			}
			move.style.transform = `translateX(-${idx * 260}px)`;
			move.querySelector(".active").classList.remove("active");
			cards[idx + 1].classList.add("active");
		}
	});
	let timer = setInterval(getR, 2000);
	dom.addEventListener("mouseenter", () => clearInterval(timer));
	dom.addEventListener("mouseleave", () => (timer = setInterval(getR, 2000)));
}
cardLun(document.querySelector(".carousel"));
