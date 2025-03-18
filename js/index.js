// Array of banner image URLs (add as many as you want)
const bannerImages = [
  "https://img.freepik.com/premium-photo/abstract-business-professional-background-banner-design-multipurpose_947814-73141.jpg?w=2000",
  "https://static.vecteezy.com/system/resources/previews/021/017/623/original/professional-modern-banner-business-company-horizontal-background-template-with-layout-text-and-empty-space-for-image-vector.jpg",
  "https://img.freepik.com/premium-vector/professional-banner-with-blue-shapes_1138645-341.jpg",
  "https://s.tmimgcdn.com/scr/800x500/379000/folleto-triptico-empresarial_379084-original.jpg",
  "https://i0.wp.com/graphicyard.com/wp-content/uploads/2018/09/06_Bifold-Brochure_Image-2.jpg?fit=800%2C641&ssl=1",
];

document
  .getElementById("bannerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const bgColor = document.getElementById("bgColor").value;
    const bannerText = document.getElementById("bannerText").value;

    // Update banner
    const banner = document.getElementById("banner");
    banner.style.backgroundColor = bgColor;
    banner.querySelector("h1").textContent = bannerText;

    // Randomly select and update banner images
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    const bannerImage = document.getElementById("bannerImage");
    bannerImage.src = bannerImages[randomIndex];
  });
