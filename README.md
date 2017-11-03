# WebHare photos folder

## Install

Install with NPM:

```
npm install git://github.com/wouterhendriks/webwerf-wh-photos.git
```

Load the package in your site profile:

```
<loadpackage module="webwerf-wh-photos" scopenamespace="http://www.mydomain.com/webwerf-wh-photos/" />
```

Replace `www.mydomain.com` with your site's primary namespace.

Import in JavaScript (.es file):

```
import * as dompack from 'dompack';
import { setupWebwerfPhotos } from 'webwerf-wh-photos';

dompack.onDomReady(() => {
  setupWebwerfPhotos();
});
```

Add default CSS (.scss file):

```
@import '~webwerf-wh-photos/src/photos';

@at-root {
  @include webwerf-wh-photos;
}
```

You can overwrite the CSS to set your own styling.

After reloading site profiles you can add a folder of type `http://www.mydomain.com/webwerf-wh-photos/`. This folder automatically creates an index file (you should protect it) and lets you add photos to it by creating new files in the folder.
