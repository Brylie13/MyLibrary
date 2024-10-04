$(document).ready(function () {
    // Display current day at the top
    $('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

    // Update time block colors based on the current time
    function updateTimeBlocks() {
        var currentHour = moment().hour();

        $('.time-block').each(function () {
            var blockHour = parseInt($(this).attr('id').split('-')[1]);

            if (blockHour < currentHour) {
                $(this).addClass('past');
            } else if (blockHour === currentHour) {
                $(this).removeClass('past');
                $(this).addClass('present');
            } else {
                $(this).removeClass('past present');
                $(this).addClass('future');
            }
        });
    }

    // Save event to local storage
    $('.saveBtn').on('click', function () {
        var timeBlock = $(this).parent();
        var hourId = timeBlock.attr('id');
        var eventText = timeBlock.find('textarea').val();

        localStorage.setItem(hourId, eventText);
    });

    // Load saved events from local storage
    function loadEvents() {
        $('.time-block').each(function () {
            var hourId = $(this).attr('id');
            var savedEvent = localStorage.getItem(hourId);

            if (savedEvent) {
                $(this).find('textarea').val(savedEvent);
            }
        });
    }

    // Initialize page
    updateTimeBlocks();
    loadEvents();

    // Update time blocks every 5 minutes
    setInterval(updateTimeBlocks, 300000); // 300000ms = 5 minutes
});
