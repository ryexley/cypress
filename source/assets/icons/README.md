## Icon management

Using the [IcoMoon app](https://icomoon.io/app) to manage icons in SVG format. Follow the steps below if icons ever need to be added or removed:

* Browse to the [IcoMoon app](https://icomoon.io/app).
* Click the "Import Icons" button to open the configuration file for the icons currently selected for the app (this file is called `selection.json` and can be found in the `icomoon` folder in the same directory as this README). When you've opened that file in the app, it should show all of the icons currently selected for the app.
* Add or remove any icons as desired.
* Download the updated collection from the app in SVG/PNG format, and save the extracted archive into the `icomoon` folder.
* In the `demo.html` file that comes with the updated collection, extract the `svg` element in it to the `/source/partials/icons.hbs` template.
* Use the icons
