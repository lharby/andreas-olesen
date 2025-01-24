#### 09.01.25
- Add stacking in mobile view - DONE
- Change responsive widths for pages (100%, 50%, 30%) - DONE
- Create page of projects which we will fetch via ajax and inject under a 'Work', navigation. - DONE

#### 12.01.25
- Try and generate minified css with a style import (node) - DONE
- Hide all content then use fade-in class after ajax complete. - DONE

#### 14.01.25
- Add a grid layout for both tagged posts as well as a page. - DONE
- Add every conceivable post type for testing
- Use grid layout for work pages - DONE
- Check for analytics (not Google)
   - https://plausible.io/plausible.io
   - Matomo
   - https://piwik.pro/pricing/
   - https://umami.is/pricing
   - https://ackee.electerious.com/
   - https://www.tinybird.co/pricing
   - Check if Simply offer it
   - Comparisons: https://conversionbridgewp.com/platforms/

#### 15.01.25
- Order for building files
   - Run `bun run build:styles` - generates css file from scss imports - DONE
   - Run `bun run build` - inlines JS to html template - DONE
   - Run `bun run injectcss` create a string replace method and run via node. - DONE
   - See if this can all be run via a watch command ?
- Issue with Tumblr template (not valid HTML, handlebars, moustache etc). - DONE
- Get ajax content for index page (create post tagged index-page)
- Do something sexy with the nav (a la Tina Frank)
- Build lightbox for images - IN PROGRESS
   - Lightbox get images via ajax instead of string replace
   - Add scrolllock when lightbox open (and remove when closed)

#### 23.01.25
- Check on transpiling to a single JS file and inject that. 
- Remove server files from `/public_html/`

#### Questions
- Content for index page? 
- Always show landing page?
- Screenshot and describe format for work pages (work-oblique), hide from navigation. This has to be authored in 'work-navigation' file, to use in the sub-nav
- Add folder on website to use for document links `('/public_html/documents')`
- Test other types of media, page layout etc. 