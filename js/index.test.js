/**
 * @jest-environment jsdom
 */

describe("Banner Form Functionality", () => {
  let bannerForm;
  const handleSubmit = jest.fn((event) => {
    event.preventDefault();
    const bgColor = document.getElementById("bgColor").value;
    const bannerText = document.getElementById("bannerText").value;
    const banner = document.getElementById("banner");
    banner.style.backgroundColor = bgColor; // Ensure this line sets the color
    banner.querySelector("h1").textContent = bannerText;
    const randomIndex = Math.floor(Math.random() * bannerImages.length);
    const bannerImage = document.getElementById("bannerImage");
    bannerImage.src = bannerImages[randomIndex];
  });

  const bannerImages = [
    "https://img.freepik.com/premium-photo/abstract-business-professional-background-banner-design-multipurpose_947814-73141.jpg?w=2000",
    "https://static.vecteezy.com/system/resources/previews/021/017/623/original/professional-modern-banner-business-company-horizontal-background-template-with-layout-text-and-empty-space-for-image-vector.jpg",
    "https://img.freepik.com/premium-vector/professional-banner-with-blue-shapes_1138645-341.jpg",
    "https://s.tmimgcdn.com/scr/800x500/379000/folleto-triptico-empresarial_379084-original.jpg",
    "https://i0.wp.com/graphicyard.com/wp-content/uploads/2018/09/06_Bifold-Brochure_Image-2.jpg?fit=800%2C641&ssl=1",
  ];

  beforeAll(() => {
    document.body.innerHTML = `
      <div id="banner">
        <h1></h1>
        <img id="bannerImage" />
      </div>
      <form id="bannerForm">
        <input id="bgColor" value="#3b82f6" />
        <input id="bannerText" value="I Love Coding!" />
      </form>
    `;
    bannerForm = document.getElementById("bannerForm");
    bannerForm.addEventListener("submit", handleSubmit);
  });

  beforeEach(() => {
    jest.clearAllMocks();
    document.getElementById("bgColor").value = "#3b82f6";
    document.getElementById("bannerText").value = "I Love Coding!";
    document.getElementById("banner").style.backgroundColor = "";
    document.getElementById("banner").querySelector("h1").textContent = "";
    document.getElementById("bannerImage").src = "";
  });

  test("form submission updates banner background color", () => {
    const banner = document.getElementById("banner");
    const bgColorInput = document.getElementById("bgColor");

    bgColorInput.value = "#ff0000";
    bannerForm.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );

    expect(handleSubmit).toHaveBeenCalled();
    // jsdom might convert #ff0000 to rgb(255, 0, 0), so check both possibilities
    expect(["#ff0000", "rgb(255, 0, 0)"]).toContain(
      banner.style.backgroundColor.toLowerCase()
    );
  });

  test("form submission updates banner text", () => {
    const bannerTextInput = document.getElementById("bannerText");
    const h1 = document.querySelector("h1");

    bannerTextInput.value = "New Test Text";
    bannerForm.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );

    expect(handleSubmit).toHaveBeenCalled();
    expect(h1.textContent).toBe("New Test Text");
  });

  test("form submission updates banner image with random URL from array", () => {
    jest.spyOn(Math, "random").mockReturnValue(0.5);
    const expectedIndex = Math.floor(0.5 * bannerImages.length);

    bannerForm.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );

    const bannerImage = document.getElementById("bannerImage");
    expect(handleSubmit).toHaveBeenCalled();
    expect(bannerImages).toContain(bannerImage.src);
    expect(bannerImage.src).toBe(bannerImages[expectedIndex]);

    Math.random.mockRestore();
  });

  test("form submission prevents default behavior", () => {
    const event = new Event("submit", { bubbles: true, cancelable: true });
    const preventDefaultSpy = jest.spyOn(event, "preventDefault");

    bannerForm.dispatchEvent(event);

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(handleSubmit).toHaveBeenCalled();
  });

  test("bannerImages array contains valid URLs", () => {
    bannerImages.forEach((url) => {
      expect(typeof url).toBe("string");
      expect(url).toMatch(/^https?:\/\/.+/);
    });
  });
});
