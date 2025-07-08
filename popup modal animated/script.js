const section = document.querySelector("section"),
      hireBtn = section.querySelector("#hireBtn"),
      closeBtn = section.querySelectorAll("#closeBtn");

      hireBtn.addEventListener("click", () => {
          section.classList.add("show");
      });

      closeBtn.forEach(cBtn => {
        cBtn.addEventListener("click", () => {
            section.classList.remove("show");
        });
      });