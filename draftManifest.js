{
  "name": "HiFiLiter",
  "description": "Highlight passages and save them",
  "version": "0.1",
  "content_scripts": [
    {
      "matches": ["http://www.google.com/*"],
      "css": ["mystyles.css"],
      "js": ["jquery.js", "myscript.js"]
    }
  ],
  "permissions": [
    //might want to change this to "tabs"
    "activeTab",
    "http://*.nytimes.com/",
    "http://www.washingtonpost.com/"
  ],

  "background": {
    "scripts": ["hifiChrome.js"],
    "persistent": false
  },

  //needs "default_icon"
  "browser_action": {
    "default_title": "Turn on HiFiLiter"
    "default_icon": {
      "19": "hfl_ico_19.jpg",
      "38": "hfl_ico_38.jpg"
    }
  },

  "manifest_version": 2
}
