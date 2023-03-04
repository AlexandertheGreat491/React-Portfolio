# React-Portfolio

## Table of Contents

Please use this table of contents to navigate this README.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Description

A portfolio utilizing React to showcase my web development work.

- What was your motivation?

My motivation was to create a portfolio of my web development work utilizing React, so that I could have a portfolio that I could improve over time and have more contorl of how the app is affected when I make changes to it in the future, as well as demonstrating my overall proficiency in React.

- What did you learn?

I learned that JSX is similar to HTML, but in many ways very different in how it can be styled especially if any components are designed to be rendered conditionally. I learned that many aspects of Bootstrap work in ways in JSX that are very similar to HTML, but the syntax is different and that one component can be styled without affecting the other components. Additionally, I learned that deploying a React app to GitHub Pages is very complex after I encountered technical difficulties that were significant enough prevent me from deploying the app to GitHub Pages and having to resort to deploying the app to Heroku instead of GitHub Pages.

## Installation

Please utilize the following steps to install and deploy the app.

Step 1: Create a folder where you want the app to reside on your local computer.

Step 2: Create a repository on GitHub and use the `git clone` command to clone the repository to the folder that you just created.

Step 3: Run the command `npx create-react-app <name of your app>` to create a development version of the app.

Step 4: Then copy the src folder from the [Public Repository](https://github.com/AlexandertheGreat491/React-Portfolio.git) and make any needed changes to the package.json.

Step 5: Save, then add, then commit to your repository.

Step 6: If you want to deploy the app utilizing GitHub Pages first add a homepage field to your package.json `"homepage": "https://myusername.github.io/my-app"`then run `npm install --save gh-pages` then modify the scripts to include `"predeploy": "npm run build", "deploy": "gh-pages -d build"` then save, add, and commit and run `npm run build`.

Step 7: If step 6 does not work you may need to change the second of the two scripts that you just added to your package.json `"deploy": "gh-pages -b main -d build"`.

Step 8: Alternatively, if you want to deploy the app using Heroku run `heroku login` then run `heroku create`. Then run the command `git push heroku main` and once the build has succeeded go to your Heroku dashboard and select the app.

Step 9: Before beginning this step make sure that your GitHub account is linked to your Heroku account. Click on the Deploy tab and then click on GitHub. Then begin typing the name of your repository and then you should be able to select it from a list, then click connect. Also, make sure to enable automatic deployments from your main branch! Now when you go back to your repository in your browser and hit the refresh button you should see your new Heroku app under Environments on the right hand side of the screen. Now the app is deployed and you can continue to modify it as needed!

## Usage

The app can be used locally by running the `git clone` command to clone the [Public Repository](https://github.com/AlexandertheGreat491/React-Portfolio.git) and then running the command `npm start`. Please visiti the link to the [deployed application](https://blooming-spire-21092.herokuapp.com/) to utilize the deployed version of the application. The app can be utlized once deployed by following the Installation instructions above.

The following screenshots give an idea for how the app can be used.

           
![screenshot1](https://user-images.githubusercontent.com/64184203/189713518-d50107db-0616-4d53-bf30-e834e960b950.jpg)

![screenshot2](https://user-images.githubusercontent.com/64184203/189713707-8f2ae7a3-4af9-4ece-a492-c0ea69bea547.jpg)

![screenshot3](https://user-images.githubusercontent.com/64184203/189713791-40485b9a-b3ca-4859-a462-72e7939ffcad.jpg)

![screenshot4](https://user-images.githubusercontent.com/64184203/189713832-f2e04cab-8c31-4ef2-8c16-c7b9f36bdb15.jpg)

![screenshot5](https://user-images.githubusercontent.com/64184203/189713870-7c5b3871-2cd0-4375-b579-3fc08e3bb479.jpg)


## Credits

Collaborators:

[Alex Van Dyke](https://github.com/AlexandertheGreat491)

Sources:

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#aa-flexbox-properties)

[Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

[Basic Concepts of flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#the_flex_container)

[Bootstrap Cards](https://getbootstrap.com/docs/4.1/components/card/)

[Create React App](https://github.com/facebook/create-react-app)

[CSS Layout](https://www.w3schools.com/css/css_float.asp)

[CSS Rounded Corners](https://www.w3schools.com/css/css3_borders.asp)

[CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

[Deployement](https://create-react-app.dev/docs/deployment/#github-pages)

[DOM Elements](https://reactjs.org/docs/dom-elements.html#style)

[Font Awesome](https://react-icons.github.io/react-icons/icons?name=fa)

[freeCodeCamp](https://www.freecodecamp.org/news/react-background-image-tutorial-how-to-set-backgroundimage-with-inline-css-style/)

[Grouping Multiple CSS Selectors](https://www.thoughtco.com/grouping-multiple-css-selectors-3467065)

[Highlight The Active Navigation Bar Link Using NavLink in React](https://staceycarrillo.medium.com/highlight-the-active-navigation-bar-link-using-navlink-in-react-d44f5d8bf997)

[How to Delete a Git Branch Both Locally and Remotely](https://www.freecodecamp.org/news/how-to-delete-a-git-branch-both-locally-and-remotely/)

[How to move an entire dive element up x pixels](https://stackoverflow.com/questions/7152550/how-to-move-an-entire-div-element-up-x-pixels)

[How to add comments to JSX](https://www.educative.io/answers/how-to-add-comments-in-jsx)

[How to Create the Copyright Symbol in HTML](https://careerkarma.com/blog/html-copyright-symbol/#:~:text=You%20can%20create%20an%20HTML,character%20onto%20the%20web%20page.)

[How to add multiple attributes to a react element? duplicate](https://stackoverflow.com/questions/34846352/how-to-add-multiple-style-attributes-to-a-react-element)

[How to Align Labels Next to Inputs](https://www.w3docs.com/snippets/html/how-to-align-labels-next-to-inputs.html)

[How to create a bullet list with no bullets in HTML](https://www.computerhope.com/issues/ch001704.htm#:~:text=HTML%20example,removes%20any%20bullet%20or%20number.)

[HTML Lists](https://www.w3schools.com/html/html_lists.asp)

[Pixels to Ems Conversion](https://www.w3schools.com/tags/ref_pxtoemconversion.asp)

[justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html)

[:root](https://developer.mozilla.org/en-US/docs/Web/CSS/:root)

[React Docs](https://reactjs.org/docs/getting-started.html)

[react-router-dom](https://www.npmjs.com/package/react-router-dom)

[react-dom](https://www.npmjs.com/package/react-dom)

[react-scripts](https://www.npmjs.com/package/react-scripts)

[react-icons](https://react-icons.github.io/react-icons/)

[@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)

[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)

[width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)

## License

[Link to license](./LICENSE)
