Zhen Chen personal website

Upload index.html, research.html, publications.html, cv.html, sitemap.html, style.css, and theme.js to the ROOT of MAGICzhen.github.io on GitHub. Keep the files together in the same folder. Do not add a .nojekyll file: GitHub Pages must process the Jekyll tags in the HTML.

Edit text by opening an HTML file on GitHub and clicking the pencil icon. Edit colors in style.css. The theme toggle lives in theme.js. Each HTML page starts with YAML front matter so GitHub Pages Jekyll generates the copyright year and site build date in the footer. The date reflects the most recent build, not the last edit to that individual page. sitemap.html automatically lists pages tagged sitemap: true.

The sidebar uses Font Awesome and Academicons stylesheets and needs an internet connection to load the matching icons.

To add a portrait later: upload a picture named portrait.jpg to the same folder, then replace <div class="portrait" aria-label="Zhen Chen initials">ZC</div> on all four HTML pages with <img class="portrait" src="portrait.jpg" alt="Zhen Chen">. Add object-fit:cover; to the .portrait rule in style.css.

To add a CV later: upload cv.pdf and replace the paragraph on cv.html with <p><a href="cv.pdf">Download my CV (PDF)</a></p>.
