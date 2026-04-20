window.addEventListener("load", () => {
  const swBusiness = new Swiper(".sw-business", {
    slidesPerview: 1,
    // slide 간의 간격(gap)
    // spaceBetween:20,
    breakPoints: {
      //640 ~ 1023

      640: {
        slidesPerview: 2,
      },
      // 1024px 이후
      1024: {
        slidesPerview: 3,
      },
    },
  });
});
