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

$('#firstName').keydown(() => {
    firstname = String($('#firstName').val());
    showIfEmpty('#firstNameMandatory', firstname);
});

$('#lastName').keydown(() => {
    lastname = String($('#lastName').val());
    showIfEmpty('#lastNameMandatory', lastname);
});

$('#email').keydown(() => {
    email = String($('#email').val());

    if ($('#newsletter').prop('checked'))
        showIfEmpty('#email', email);
});

$('#mediaChannelSelect').change(() => {
    console.log('mediaChannelSelect');
});

$('#otherMediaChannel').change(() => {
    console.log('otherMediaChannel');
});

