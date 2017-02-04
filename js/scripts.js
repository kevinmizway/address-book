function Contact(first,last) {
    this.firstName = first;
    this.lastName = last;
};

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

$(function() {
    $("#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("#new-first-name").val();
        var inputtedLastName = $("#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $("#Contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.firstName);
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
        });
    });
});