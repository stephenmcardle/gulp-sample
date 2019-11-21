# Gulp Sample

This sample app uses gulp to compile and minify .scss files. The .scss files have been copied directly from Bootstrap@4.3.1 and be found in the scss directory of this application.

## Versions Used
```
$ node --version
v10.15.3

$ npm --version
6.4.1

$ gulp --version
CLI version: 2.2.0
Local version: 4.0.2

```

## Running the app

1. Clone or download this repository.
2. cd into the repository, e.g.

> `$ cd Desktop/gulp-sample`

3. Run npm install

> `$ npm install`

4. Run npm start. This runs the server on port 3000.

> `$ npm start`

5. Go to "localhost:3000/instruments.html" in your web browser. The page should be unstyled.

6. Run gulp command. This will automatically run the default task defined in gulpfile.js

> `$ gulp`

7. Now refresh the instruments page and you should see the bootstrap styling take effect.


### Using gulp watch

Gulp can automatically track files and watch for changes. The watch task defined at the bottom of gulpfile.js watches the scss directory and runs the 'default' task when a change is detected. To use this feature:

1. Run npm start

> `$ npm start`

2. Go to "localhost:3000/gulp-watch-test.html" in your web browser.

3. Run gulp watch

> `$ gulp watch`

4. Create a new file in the 'scss' directory. Call it 'test.scss'

5. Add some SASS code to the file and save it.

```
p {
    color: red;
}
```

6. Now refresh the page and you should see that the paragraph has changed to the color red. This shows that the .scss code was automatically compiled into the main.min.css file used by this HTML page.

#### Notes

Gulp can also be used to minify .js files (and perform many, many other tasks), but that is not within the scope of this sample app.

#### Resources

https://gulpjs.com/docs/en/getting-started/quick-start
