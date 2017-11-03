import './photos.scss';

import * as dompack from 'dompack';

import $ from 'jquery';
require('chocolat');
import Hammer from 'hammerjs';

export function setupWebwerfPhotos(options) {
  if (!dompack.qS('.webwerf-wh-photos'))
    return;

  $('.chocolat-parent').Chocolat({ enableZoom: false,
                                   separator2: ' / ',
                                 });

  let chocolatInstance = $('.chocolat-parent').Chocolat().data('chocolat');

  $('.chocolat-image').click(function() {
    const hammerTime = new Hammer($('.chocolat-wrapper .chocolat-img').get(0));

    hammerTime.on('swipe', function(ev) {
      if (ev.deltaX > 0)
        chocolatInstance.api().prev();
      else
        chocolatInstance.api().next();
    });
  });
}
