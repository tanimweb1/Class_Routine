// Save and load data from localStorage
document.addEventListener("DOMContentLoaded", () => {
  const subjects = document.querySelectorAll(".subject-card");

  subjects.forEach((subject, sIndex) => {
    const inputs = subject.querySelectorAll("input");

    inputs.forEach((input, iIndex) => {
      const key = `subject_${sIndex}_input_${iIndex}`;

      // Load saved values
      const saved = localStorage.getItem(key);
      if (input.type === "checkbox") {
        input.checked = saved === "true";
      } else if (saved) {
        input.value = saved;
      }

      // Save on change
      input.addEventListener("input", () => {
        if (input.type === "checkbox") {
          localStorage.setItem(key, input.checked);
        } else {
          localStorage.setItem(key, input.value);
        }
      });
    });
  });
});
