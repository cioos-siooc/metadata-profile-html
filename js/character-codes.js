$(document).ready(function(){

    $('#characterSetCode').load("codes/characterSetCode.html");
    $('#roleCode').load("codes/roleCode.html");
    $('#dateTypeCode').load("codes/dateTypeCode.html");
    $('#referenceSytemTypeCode').load("codes/referenceSytemTypeCode.html");
    $('#scopeCode').load("codes/scopeCode.html");
    $('#progressCode').load("codes/progressCode.html");
    $('#spatialRepresentationTypeCode').load("codes/spatialRepresentationTypeCode.html");
    $('#topicCategoryCode').load("codes/topicCategoryCode.html");
    $('#restrictionCode').load("codes/restrictionCode.html");
    $('#maintenanceFrequencyCode').load("codes/maintenanceFrequencyCode.html");
    $('#eventTypeCode').load("codes/eventTypeCode.html");
    $('#operationTypeCode').load("codes/operationTypeCode.html");
    $('#languageCode').load("codes/languageCode.html");
    $('#countryCode').load("codes/countryCode.html");

    $('#characterSetCode, #roleCode, #dateTypeCode, #referenceSytemTypeCode, #scopeCode, #progressCode, #spatialRepresentationTypeCode, #topicCategoryCode, #restrictionCode, #maintenanceFrequencyCode, #eventTypeCode, #operationTypeCode, #languageCode, #countryCode').popup({
        transition: 'all 0.1s'
    });

    // Tooltip
    $('.tooltip-definition').simpleTooltip();

});