let center = document.querySelector("#center");

center.addEventListener("mousemove", function (dets) {
  let recLocationVal = center.getBoundingClientRect();
  let insideRect = dets.clientX - recLocationVal.left;

  if (insideRect < recLocationVal.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      recLocationVal.width / 2,
      255,
      0,
      insideRect
    );
    gsap.to(center, {
      backgroundColor: `rgb(${redColor},0, 0)`,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
        recLocationVal.width / 2,
        recLocationVal.width,
        0,
        255,
        insideRect
      );
      gsap.to(center, {
        backgroundColor: `rgb(0, 0,${blueColor})`,
        ease: Power4
      });
  }
});

center.addEventListener("mousemove", function (dets) {
  let recLocationVal = center.getBoundingClientRect();
  let insideRect = dets.clientX - recLocationVal.left;

  if (insideRect < recLocationVal.width / 2) {
    let redColor = gsap.utils.mapRange(
      0,
      recLocationVal.width / 2,
      255,
      0,
      insideRect
    );
    gsap.to(center, {
      backgroundColor: `rgb(${redColor},0, 0)`,
    });
  } else {
    let blueColor = gsap.utils.mapRange(
        recLocationVal.width / 2,
        recLocationVal.width,
        0,
        255,
        insideRect
      );
      gsap.to(center, {
        backgroundColor: `rgb(0, 0,${blueColor})`,
        ease: Power4
      });
  }
});

center.addEventListener("mouseleave", function (){
    gsap.to(center, {
        backgroundColor: "#fff",
        ease: Power4
      });
})