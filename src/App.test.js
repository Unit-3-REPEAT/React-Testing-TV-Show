import React from 'react';
import {render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow';

//Jest mocks allow you to mock a function and fake it. 
//For example if you are using uuid librabry you can't hardcode the id because it's always going to change
//jest creates a placeholder function you have a control over
//they get called in place of the function actually running the application

//they are also used for async API requests
//we are not making real requests over again


//Test needs to render the App
//click on the drop


//mock the function fetchShow and pass in the endpoint coming from line 5
jest.mock('./api/fetchShow');
console.log(mockFetchShow);

const episodeData = {
    id: 2993,
    name: "Stranger Things",
    runtime: 60,
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/200/501942.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg",
    },
    summary:
      "<p>A love letter to the '80s classics that captivated a generation, <b>Stranger Things</b> is set in 1983 Indiana, where a young boy vanishes into thin air. As friends, family and local police search for answers, they are drawn into an extraordinary mystery involving top-secret government experiments, terrifying supernatural forces and one very strange little girl.</p>",
    _embedded: {
      episodes: [
        {
          id: 553946,
          name: "Chapter One: The Vanishing of Will Byers",
          season: 1,
          number: 1,
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
          },
        },
        {
          id: 909340,
          name: "Chapter One: MADMAX",
          season: 2,
          number: 1,
          runtime: 60,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/132/331976.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/132/331976.jpg",
          },
        },
        {
          id: 1576469,
          name: "Chapter One: Suzie, Do You Copy?",
          season: 3,
          number: 1,
          runtime: 51,
          image: {
            medium:
              "http://static.tvmaze.com/uploads/images/medium_landscape/204/510098.jpg",
            original:
              "http://static.tvmaze.com/uploads/images/original_untouched/204/510098.jpg",
          },
        },
      ],
    },
  }

  //test1
test('check if App renders', () => {
    render(<App />);
})

//test2

test('renders data after API is called', () => {
    //mock the resolved value just once so that we can reuse the
    //mocked function in other tests

    mockFetchShow.mockResolvedValueOnce(episodeData);

    const {queryByPlaceholderText} = render(<App />);

    userEvent.click(queryByPlaceholderText(/"Select an option"/i));
    //mockFetchShow is being called and will resolve with episodessData
})




