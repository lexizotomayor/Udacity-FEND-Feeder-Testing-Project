/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */

    // Suite for RSS Feeds
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */

        // Checks if all feeds are defined and not empty
        it('are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */

        // Checks if all URLs are defined and not empty
        it('have non-empty urls', () => {
            allFeeds.forEach((feed) => {
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe('');
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

        // Checks if feeds have names and are not empty
        it('have non-empty names', () => {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe('');
            });
        });
    });


    /* TODO: Write a new test suite named "The menu" */

    // This suite tests if menu is hidden by default and ensures it changes visibility when clicked.
    describe('The menu', () => {
        let body = $('body');

        it('is hidden by default', () => {
            expect(body.hasClass('menu-hidden')).toBe(true);
        });

       it('changes visibility when icon is clicked', () => {
            $('.menu-icon-link').trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').trigger('click');
            expect(body.hasClass('menu-hidden')).toBe(true);
       });
    });

    // Suite to test 'Initial Entries'
    describe('Initial Entries', () => {

        // Jasmine has to know loadFeed is done before running
        beforeEach((done) => {
            loadFeed(0, () => {
                done();
            });
        });

        it('has at least one entry', () => {
            expect($('.feed .entry').length).toBeGreaterThanOrEqual(1);//
        });
    });

    /* TODO: Write a new test suite named "New Feed Selection" */


    describe('New Feed Selection', () => {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        let feed;
        //It loads feed, stores value of feed, then loads another feed, then does the test
        beforeEach((done) => {
            loadFeed(0, () => {
                feed = $('.feed').html();
                loadFeed(1,() => {
                    done();
                });
            });
        });

        it('changes content', () => {
            expect(feed).not.toEqual($('.feed').html());
        });
    });
});
