```

____    __    ____  ___       __      .__   __.  __    __  .___________.
\   \  /  \  /   / /   \     |  |     |  \ |  | |  |  |  | |           |
 \   \/    \/   / /  ^  \    |  |     |   \|  | |  |  |  | `---|  |----`
  \            / /  /_\  \   |  |     |  . `  | |  |  |  |     |  |     
   \    /\    / /  _____  \  |  `----.|  |\   | |  `--'  |     |  |     
    \__/  \__/ /__/     \__\ |_______||__| \__|  \______/      |__|     


```

## A React App to show customer data

## Usage

Clone the repository to your local machine, navigate to it via the command line and then:
```npm install```
```npm start```

Then visit ```http://localhost:3000/``` in your browser!

## Approach

I started by attempting to add a new column of data from the JSON to the table in order to establish how to get customer data visualised. I also improved the presentation of some of the already-visible data, making the personality traits more readable.

I then expanded the functionality of the table by adding the ability to expand or contract the table by ten records at a time. I used state to have the App component reload when a variable representing the amount of visible records was changed. Given more time, I would have liked to implement an option to add user-selected columns to the table so that users could personalise their experience.

I used react-bootstrap and react-icons to improve the look and feel of the page, as well as a couple of fonts from Google Fonts. I used Recharts, a library for data visualisation, to add charts to the page. These charts are using mock data rather than the actual JSON, but could be configured to use data from other sources.

## TODOs and known issues:

* I would have liked to refactor the App component into smaller sub components- for instance, CustomerRow. It currently has more responsibilities than I would like.
* I have used React's shallow rendering for testing, but I'm very new to testing in React! As such I think this could have been tested more thoroughly. This is an area I hope to learn more about.
* I think the App would benefit from the ability to sort records in ascending or descending order based on any column that would support that (income, name, etc.)
* I would also like to add a feature that dynamically changes the pie charts to represent a single customer's data if that customer's row is clicked on.

## Tech

* React.js
* Node.js
* react-bootstrap
* react-icons (FontAwesome)
* Recharts
* Google Fonts
