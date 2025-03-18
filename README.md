Outreachy Banner Customizer
A web application that allows users to customize a banner with dynamic text, background colors, and random images. Built with HTML, Tailwind CSS, and JavaScript, this project includes unit tests using Jest to ensure good functionality.

Table of Contents
Features (#features)

Technologies (#technologies)

Installation (#installation)

Usage (#usage)

Testing (#testing)

File Structure (#file-structure)

Contributing (#contributing)

License (#license)

Features
Customizable Banner: Update banner text and background color through a user-friendly form.

Random Image Selection: Automatically cycles through an array of banner images on each update.

Responsive Design: Styled with Tailwind CSS for a clean and modern look across devices.

Unit Tested: Comprehensive test suite using Jest to validate functionality.

Technologies
HTML: Structure and markup of the application.

Tailwind CSS: Utility-first CSS framework for styling.

JavaScript: Core logic for banner customization and event handling.

Jest: Testing framework with jsdom for DOM-based unit tests.

Installation
Clone the repository:
bash
git clone: https://github.com/AustinRexi/bannercustomization.git
Navigate to the project directory:
bash

cd outreachy

Install dependencies:
bash

npm install

Open index.html in a browser to view the app, or run tests (see Testing (#testing)).

Usage
Open index.html in a web browser.

Use the "Customize Your Banner" form to:
Select a background color using the color picker.

Enter custom text in the text input field.

Click "Update Banner" to apply changes and see a random image from the predefined set.

Testing
The project includes a comprehensive test suite to ensure reliability:
Run tests with:
bash

npm run test

Tests cover:
Background color updates.

Text content changes.

Random image selection.

Form submission behavior.

URL validation for banner images.

Requirements: Jest and jest-environment-jsdom must be installed (included in devDependencies).
File Structure

outreachy/pages/
├── index.html # Main HTML file with structure and form
├── js/
│ └── index.js # JavaScript logic for banner customization
├── index.test.js # Jest unit tests
├── package.json # Project metadata and dependencies
└── README.md # Project documentation

Contributing
Contributions are welcome! To contribute:
Fork the repository.

Create a feature branch (git checkout -b feature-name).

Commit your changes (git commit -m "Add feature").

Push to the branch (git push origin feature-name).

Open a pull request.

Please ensure all tests pass and adhere to the existing code style.
License
This project is licensed under the ISC License. See the package.json for details.
