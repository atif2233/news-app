in this video first i add the title of our app in index.html 
<title>NewsMonkey - Get your daily dose of news for free</title>

after that i add content in meta tag of our index.html for seo(search engine optimization)
<meta
      name="description"
      content="NewsMonkey is best news app which can be used to grab quick daily news bites.
      if you are intrested in news , weather news , politics news , and sport news so then newsmonkey is for you"
    />

then i add bootstrap css link and script link in index.html

after that i make component's folder in src folder (i make every component in this component folder) 

then i make component name = Navbar in components folder then write class based component and then add navbar code from boostrap 

after this i add navbar component in app.js component to render navbar.js 
<div>
    <Navbar/>
</div>

then i make navitem component in components folder and add it to the app.js 
<div>
    <Navbar/>
    <Navitem/>
</div>