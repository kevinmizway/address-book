function Contact(first,last) {
    this.firstName = first;
    this.lastName = last;
    this.addresses = [];
};

function Address(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
};

Contact.prototype.fullName = function() {
    return this.firstName + " " + this.lastName;
};

Address.prototype.fullAddress = function() {
    return this.street + ", " + this.city + ", " + this.state;
}

$(function() {

    $("#add-address").click(function() {

        $("#new-addresses").append('<div class="new-address">'  +          
                                        '<div class="form-group">' +
                                            '<label for="new-street">Street</label>' +
                                            '<input class="form-control new-street" type="text">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-city">City</label>' +
                                            '<input class="form-control new-city" type="text">' +
                                        '</div>' +
                                        '<div class="form-group">' +
                                            '<label for="new-state">State</label>' +
                                            '<input class="form-control new-state" type="text">' +
                                        '</div>' +
                                    '</div>')

    });

    $("#new-contact").submit(function(event) {
        event.preventDefault();

        var inputtedFirstName = $("#new-first-name").val();
        var inputtedLastName = $("#new-last-name").val();

        var newContact = new Contact(inputtedFirstName, inputtedLastName);

        $(".new-address").each(function() {

            var inputtedStreet = $(this).find(".new-street").val();
            var inputtedCity = $(this).find(".new-city").val();
            var inputtedState = $(this).find(".new-state").val();
            var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
            newContact.addresses.push(newAddress);
        });

        $("#Contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

        $(".contact").last().click(function() {
            $("#show-contact").show();
            $("#show-contact h2").text(newContact.fullName());
            $(".first-name").text(newContact.firstName);
            $(".last-name").text(newContact.lastName);
            $("ul#addresses").text("");
            newContact.addresses.forEach(function(address) {
                $("ul#addresses").append("<li>" + address.fullAddress() + "</li>");
            });
        });

        $("#new-first-name").val("");
        $("#new-last-name").val("");
        $(".new-street").val("");
        $(".new-city").val("");
        $(".new-state").val("");
    });
});