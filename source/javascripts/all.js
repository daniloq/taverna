//= require 'moment'
//= require 'OpeningHours'
//= require 'instafeed'
//= require_self

$(function() {

    $.getJSON('/tests/multipleWeeks_version.json', function(data) {
        if (data) {
            $('.openingHours').openingHours({
                json: data,
                lang: 'ro',
                daysForm: 'normal',
                weekPeriods: true
            });
        }
    });

});
