const wrapperProjects = document.querySelector(".projects__wrapper");
const carouselProjects = document.querySelector(".carousel__projects");
const arrowBtnsProjects = document.querySelectorAll(".projects__wrapper i");
const firstCardWidthProjects = carouselProjects.querySelector(".project").offsetWidth;
const carouselChildrenProjects = [...carouselProjects.children];

let isDraggingProjects = false, startXProjects, startScrollLeftProjects, timeoutIdProjects;

let cardPerViewProjects = Math.round(carouselProjects.offsetWidth / firstCardWidthProjects);

carouselChildrenProjects.slice(-cardPerViewProjects).reverse().forEach(card => {
  carouselProjects.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrenProjects.slice(0, cardPerViewProjects).forEach(card => {
  carouselProjects.insertAdjacentHTML("beforeend", card.outerHTML);
});

arrowBtnsProjects.forEach(btn => {
  btn.addEventListener("click", () => {
    carouselProjects.scrollLeft += btn.id === "left" ? -firstCardWidthProjects : firstCardWidthProjects;
  });
});

const dragStartProjects = (e) => {
  isDraggingProjects = true;
  carouselProjects.classList.add("dragging");
  startXProjects = e.pageX;
  startScrollLeftProjects = carouselProjects.scrollLeft;
}

const draggingProjects = (e) => {
  if (!isDraggingProjects) return;
  carouselProjects.scrollLeft = startScrollLeftProjects = (e.pageX - startXProjects);
}

const dragStopProjects = (e) => {
  isDraggingProjects = false;
  carouselProjects.classList.remove("dragging");
}

const autoPlayProjects = () => {
  if (window.innerWidth < 800) return;
  timeoutIdProjects = setTimeout(() => carouselProjects.scrollLeft += firstCardWidthProjects, 7500);
}
autoPlayProjects();

const infiniteScrollProjects = () => {
  if (carouselProjects.scrollLeft === 0) {
    carouselProjects.classList.add("no-transition");
    carouselProjects.scrollLeft = carouselProjects.scrollWidth - (2 * carouselProjects.offsetWidth);
    carouselProjects.classList.remove("no-transition");
  } else if (Math.ceil(carouselProjects.scrollLeft) === carouselProjects.scrollWidth - carouselProjects.offsetWidth) {
    carouselProjects.classList.add("no-transition");
    carouselProjects.scrollLeft = carouselProjects.offsetWidth;
    carouselProjects.classList.remove("no-transition");
  }

  clearTimeout(timeoutIdProjects);
  if (!wrapperProjects.matches(":hover")) autoPlayProjects();
}

carouselProjects.addEventListener("mousedown", dragStartProjects);
carouselProjects.addEventListener("mousemove", draggingProjects);
document.addEventListener("mouseup", dragStopProjects);
carouselProjects.addEventListener("scroll", infiniteScrollProjects);
wrapperProjects.addEventListener("mouseenter", () => clearTimeout(timeoutIdProjects));
wrapperProjects.addEventListener("mouseleave", autoPlayProjects);
