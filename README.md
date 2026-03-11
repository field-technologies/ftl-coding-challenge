## Getting Started

Please spend 1 hour or less on this project, and push your changes along the way to keep track.

First, FORK this repository. That will give us a starting time.

Then get the development server to run, and open [http://localhost:3000](http://localhost:3000) and see the form instructions.

## Getting going

Once you've got through the first part, let's get to the interesting bits. You likely won't get through all of these, but I have them here to see what you can get to in an hour.

### Validation

* Add basic form validation, including:
    * Name inputs are required
    * Email input is required AND a valid email format
    * Phone number input is required AND a valid format (don't overthink it, don't have to cover all possible cases)
How you display the form validation is up to you - extra points for good UX

> Congratulations btw - you've just done about 80% of web development

### Testing

* Add a playwright test that validates that all inputs (including the new requested ones) are present
* Add a playwhright test that enters the data in all the inputs and validates that the data shows up in the new page.