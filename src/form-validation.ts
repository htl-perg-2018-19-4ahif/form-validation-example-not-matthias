/**
 * Set the disabled attribute for an element
 * @param element the specified element
 * @param disabled boolean whether the element should be disabled
 */
const setDisabled = (element: string, disabled: boolean) => {
    $(element).attr('disabled', disabled.toString());
};

/**
 * Shows the element when the text is empty
 * @param element the html element (id or class)
 * @param text the string which will be checked
 */
const showIfEmpty = (element: string, text: string) => {
    if (text)
        $(element).hide();
    else
        $(element).show();
};


let firstname: string = '';
let lastname: string = '';
let email: string = '';
let mediaChannel: string = '';
let otherMedia: string = '';

$('#firstName').keyup(() => {
    firstname = String($('#firstName').val());
    showIfEmpty('#firstNameMandatory', firstname);
});

$('#lastName').keyup(() => {
    lastname = String($('#lastName').val());
    showIfEmpty('#lastNameMandatory', lastname);
});

$('#email').keyup(() => {
    email = String($('#email').val());

    // If someone wants the newsletter, they must specify an email
    if ($('#newsletter').prop('checked'))
        showIfEmpty('#emailMandatory', email);
});

$('#newsletter').change(() => {
    // If someone wants the newsletter, they must specify an email
    if ($('#newsletter').is(':checked')) {
        showIfEmpty('#emailMandatory', String($('#email').val()));
    } else {
        $('#emailMandatory').hide();
    }
});


$('#mediaChannelSelect').change(() => {
    // Only show 'otherMediaChannel' if 'Other' selected
    if ($('#mediaChannelSelect').val() === 'Other')
        $('#otherMediaChannel').show();
    else
        $('#otherMediaChannel').hide();
});
