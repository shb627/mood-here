document.addEventListener("DOMContentLoaded", () => {
  const profileInput = document.getElementById("profileInput");
  const profilePreview = document.getElementById("profilePreview");

  profileInput.addEventListener("change", function () {
    const file = this.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);
    profilePreview.src = imageUrl;
  });
});
