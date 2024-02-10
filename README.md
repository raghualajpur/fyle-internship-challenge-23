# Fyle Frontend Challenge

In this Challenage I have made 3 Component :

####  1.app component (main component)
####  2.repos-crad component
####  3.language component

## App Component (Main Component):

This component serves as the main entry point of your web application.
It utilizes ApiServices to interact with an external API (presumably GitHub's API) to fetch user details and repositories.
The component likely contains logic to handle user interactions, such as selecting the number of repository cards to display per page.
It dynamically manipulates the HTML to render the fetched user details and repositories, potentially paginating them based on user preferences.


## Repos-Card Component:

This component is responsible for rendering individual repository cards.
It receives inputs (presumably repositories) from the main App component.
For each repository, it extracts relevant information (such as name, description, stars, forks, etc.) and displays it within a card layout.
The component may include functionality for users to interact with each repository card, such as clicking for more details or navigating to the repository's page.


## Language Component:

This component focuses on displaying the topics associated with each repository.
It receives topics data, likely from the Repos-Card component.
The component renders the topics in a readable format, such as a list or tags.
Users can potentially interact with the displayed topics, such as filtering repositories based on specific topics of interest.

# Deployed Link :-
  [Go to here](https://gleeful-torrone-b9a507.netlify.app/)




## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment. 

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api. 

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

__Note__ - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements
* Install angular cli [Ref](https://angular.io/cli)
* `npm install` in this repository 

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).