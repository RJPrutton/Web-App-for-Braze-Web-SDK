// This script waits until the page is fully loaded before running the code inside
document.addEventListener('DOMContentLoaded', function() {

    // Select the button element
    var button = document.querySelector('button');

    // Add an event listener for the 'click' event
    button.addEventListener('click', function() {

        // Display an alert when the button is clicked
        alert('Button clicked!');
    });
});