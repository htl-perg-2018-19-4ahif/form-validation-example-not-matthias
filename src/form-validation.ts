
//
// Variables
//

// Contains booleans, whether the elements are valid or not
let canSubmit: any = {
    validEmail: true,
    validFirstname: false,
    validLastname: false
};


//
// Helper functions
//

/**
 * Shows the element when the specified string is empty
 * @param element the html element id or class
 * @param text the string which will be checked
 */
const showIfEmpty = (element: string, text: string) => {
    if (text)
        $(element).hide();
    else
        $(element).show();
};



//
// Event handlers
//
const checkFirstname = () => {
    const firstname = String($('#firstName').val());

    // Show a warning if firstname is empty
    showIfEmpty('#firstNameMandatory', firstname);

    // Update object and check submit
    canSubmit.validFirstname = (firstname) ? true : false;
    checkSubmit();
};

const checkLastname = () => {
    const email = String($('#lastName').val());

    // Show a warning if lastname is empty
    showIfEmpty('#lastNameMandatory', email);

    // Update object and check submit
    canSubmit.validLastname = (email) ? true : false;
    checkSubmit();
};

const checkEmail = () => {
    if ($('#newsletter').is(':checked')) {
        const email = String($('#email').val());

        // Show a warning if email is empty
        showIfEmpty('#emailMandatory', email);

        canSubmit.validEmail = (email) ? true : false;
    } else {
        // Hide the warning if the newsletter checkbox is not enabled
        $('#emailMandatory').hide();

        canSubmit.validEmail = true;
    }

    checkSubmit();
};

const checkMediaChannel = () => {
    // Only show 'otherMediaChannel' if 'Other' selected
    if ($('#mediaChannelSelect').val() === 'Other')
        $('#otherMediaChannel').show();
    else
        $('#otherMediaChannel').hide();
};

const checkSubmit = () => {
    if (canSubmit.validEmail && canSubmit.validFirstname && canSubmit.validLastname)
        $('#submit').prop('disabled', false);
    else
        $('#submit').prop('disabled', true);
};



//
// Events
//
$('#firstName').keyup(() => checkFirstname());

$('#lastName').keyup(() => checkLastname());

$('#email').keyup(() => checkEmail());

$('#newsletter').change(() => checkEmail());

$('#mediaChannelSelect').change(() => checkMediaChannel());
