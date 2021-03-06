# Music History Part 3

## Instructions

Time to make Music History into a single page application. Before you begin please [review the sample code](https://github.com/nashville-software-school/front-end-milestones/blob/master/3-single-page-applications/resources/SP_JS_SINGLE_PAGE_APPLICATIONS.md) I provided in JavaScript 103 about building a simple SPA.

1. In the navigation bar, make sure you have two links labeled "List Music", and "Add Music".
2. Add a DOM element that contains some input fields for the user to enter in the name of a song, the artist for the song, and the album. You do not need to enclose them in a `<form>` element because we're not actually submitting this form anywhere.
3. Add a `<button>` element at the bottom of the input fields labeled "Add".
4. The input fields and the add button make up the *Add Music View*.
5. The existing view - the combination of the filter form and the song list - will be referred to as the *List Music View*.
6. The *Add Music View* should not appear when the user first visits your page. The song list with the corresponding filter form should be visible.
7. When the user clicks on "Add Music" in the navigation bar, the *List Music View* should be hidden, and the *Add Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a0cf17f7b)).
8. When the user clicks on "List Music" in the navigation bar, the *Add Music View* should be hidden, and the *List Music View* should be shown ([see example wireframe](https://moqups.com/chortlehoort/1E8LJX7r/p:a8d99d401)).
9. Once the user fills out the song form and clicks the add button, you should collect all values from the input fields, add the song to your array of songs, and update the song list in the DOM.

## Merging

Remember to merge the `version-3` branch back into `master` when you're done.