  //Custom DIV scroll tracking
  (function(history){

    if (!window.jQuery) {
        return;
    }

    // configuration
    var divScrollInitiator = 'content-wrapper';
    var divToMeasure = 'content';

    var $scrollInitiator = $('#' + divScrollInitiator);

        console.log($scrollInitiator.length);

    // Checks to see if dataLayer has been initialized outside of library, if not
    // then intializes dataLayer
    dataLayer = window.dataLayer || [];

    // Passes window threshold value to variable threshold
    var threshold = arguments[1];
    // Passes milestones array to variable milestones
    // expecting i.e. [[25, "low engagement"], [50, "medium engagement"], [75, "high engagement"])
    var milestones = arguments[2];

    // The previous lower bound is set to 0 so data is not sent with no activity
    var pastMilestone = 0;

    // Initialize our timeoutID
    var timeoutID;

    // Function called to concatinize milestone value with milestone label to push
    // to dataLayer
    function formatLabel(i) {
        return milestones[i].toString() + "%";
    }

    // setup the math functions
    var deepestScroll = 0, max = Math.max, _round = Math.round;

    // Called if user passes into new milestone and is there beyond the threshold time limit
    function pushMilestone(index) {
        // Calls formatLabel function to create label to push to dataLayer
        var label = formatLabel(index);

        // Push data to dataLayer
        dataLayer.push({
          "event": "scroll-milestone",
          "milestone": label
        });
    }

    // Whenever user scrolls, we fire this lengthly function to see if user past a milestone and
    // if yes then push that data to dataLayer
    
    $('#' + divScrollInitiator).scroll(function() {
    
        var currY = $(this).scrollTop();
        var postHeight = $(this).height();
        var scrollHeight = $('#content').height();
        
        // Current percentual position
        var scrollDepth = (currY / (scrollHeight - postHeight)) * 100;

        // Counter for while loop
        var count = milestones.length;

        // Loops through each milestone to find is user has past new milestone
        while(count) {

            // Decrease counter by 1
            count--;

            // Checks to see if current scrollDepth is over Milestone
            if(_round(scrollDepth) >= milestones[count] && deepestScroll < milestones[count]) {
                
                currentMilestone = deepestScroll = milestones[count];
                
                // Checks to see if currentMilestone is different than pastMilestone
                if(currentMilestone != pastMilestone) {

                    // Makes pastMilestone equal to currentMilestone
                    pastMilestone = currentMilestone;

                    // Make index value equal to count
                    var index = count;

                    //Clears threshold timer if still in progress
                    window.clearTimeout(timeoutID);

                    // Start threshold timer to push to dataLayer in user stays in milestone
                    timeoutID = window.setTimeout(pushMilestone(index), threshold);

                }

                // Terminate while loop
                count = 0;
            }

        }

    });

    // Used to reset milestones when the SPA page changes.

    const pushState = history.pushState;
    history.pushState = function(state) {
        if (typeof history.onpushstate == "function") {
            history.onpushstate({state: state});
        }
        // reset milestones
        pastMilestone = 0;
        deepestScroll = 0;
        return pushState.apply(history, arguments);
    }

 })(window.history, 2000, [0, 25, 50, 75, 100]);
  