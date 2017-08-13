# speed-reader
Read documents at lightning speed. A simple Preact app.
*This is an app to help you read text quickly.* You can read much faster when you only see one word at a time. This removes the need to scan lines of text, which slows your brain down way more than you think.

[View the project](https://speed-reader-preact.herokuapp.com)

![Screenshot of the Speed Reader app in action](https://github.com/danlaush/speed-reader/blob/master/docs/speed-reader.gif)

##  Using the app

Copy and paste some an article you find on the web into the text box. Use the slider in the middle of the screen to adjust the speed at which words are shown to you. You can use the slider to go backwards if you missed something!

*KNOWN BUG:* Dragging the slider from the starting position can cause the words to not progress. Start by clicking/tapping somewhere else along the slider, and then drag the slider from there to adjust.

## Initial code setup

Thanks for wanting to try this out!

```
git clone https://github.com/danlaush/speed-reader.git
cd speed-reader
npm install
npm install -g preact-cli
npm run dev
```

## About tools

This project used the [Preact CLI](https://github.com/developit/preact-cli) to get off the ground, as I'd never used Preact and have only poked around in React. It requires installing `preact-cli` globally.

## Future features

This is a work in progress and is currently in the prototype phase. Potential extensions:

- Share a URL to the app, and it opens with the URL's article text already loaded -- great for mobile
- Make a browser extension - one-click speed reading
- Make the progress bar interactive - drag it like a video
- Make the speed slider behave like a controller joystick (this was the idea that got me into this project)
    - Snaps back to the middle (zero WPM) when you let go
    - Pushes back (resistance) at the high end of the scale

## Side note

There are a ton of apps and services already out there that do this. This idea started with seeing a GIF posted to Facebook illustrating the idea of reading quickly one word at a time, and I started building without looking into competitors. 
