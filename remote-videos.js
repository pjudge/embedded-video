(function (Drupal, $) {

  'use strict';

  Drupal.behaviors.remote_video_lazyload = {
    attach: function (context, settings) {

      $(document).ready(function() {

        var video_wrapper = $('.remote-video-embed', context);
        // Check to see if video wrapper exists.
        if (video_wrapper.length) {
          // If user clicks on the video wrapper load the video in the iframe.
          video_wrapper.on('click', function(){

            // Pull the video ID and title from the data attributes on the wrapper element.

            // Check to see if it's vimeo or youtube first, then construct iframes appropriately.
            if ($(this).data('vid-src') == 'youtube') {
              $(this).html('<div class="embed-container"><iframe width="640" height="360" src="https://www.youtube.com/embed/' + $(this).data('vid-id') + '?&autoplay=1?" title="' + $(this).data('vid-title') + '" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>');
            }
            else if ($(this).data('vid-src') == 'vimeo') {
              $(this).html('<div class="embed-container"><iframe src="https://player.vimeo.com/video/' + $(this).data('vid-id') + '?&autoplay=1" title="' + $(this).data('vid-title') + '" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe></div>');
            }
          });
        }

      });
    }
  }

}(Drupal, jQuery));
