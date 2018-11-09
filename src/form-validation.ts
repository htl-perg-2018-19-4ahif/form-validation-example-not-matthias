
//
// Variables
//

// Contains booleans, whether the elements are valid or not
let canSubmit: any = {
    validEmail: false,
    validFirstname: false,
    validLastname: false
};



//
// Helper functions
//

/**
 * Set the disabled attribute for an element
 * @param element the specified element
 * @param disabled boolean whether the element should be disabled
 */
const setDisabled = (element: string, disabled: boolean) => {
    $(element).attr('disabled', disabled.toString());
};

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

    canSubmit.validFirstname = (firstname) ? true : false;
};

const checkLastname = () => {
    const email = String($('#lastName').val());

    // Show a warning if lastname is empty
    showIfEmpty('#lastNameMandatory', email);

    canSubmit.validLastname = (email) ? true : false;
};

const checkEmail = () => {
    if ($('#newsletter').is(':checked')) {
        // Show a warning if email is empty
        showIfEmpty('#emailMandatory', String($('#email').val()));

        canSubmit.validEmail = true;
    } else {
        // Hide the warning if the newsletter checkbox is not enabled
        $('#emailMandatory').hide();

        canSubmit.validEmail = true;
    }
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
        setDisabled('#submit', false);
    else
        setDisabled('#submit', true);
};



//
// Events
//
$('#firstName').keyup(() => checkFirstname());

$('#lastName').keyup(() => checkLastname());

$('#email').keyup(() => checkEmail());

$('#newsletter').change(() => checkEmail());

$('#mediaChannelSelect').change(() => checkMediaChannel());
