{
  "name": "HiFiLiter",
  "description": "Highlight passages and save them",
  "version": "0.1",
  "permissions": [
    //might want to change this to "tabs"
    "activeTab"
  ],

  "background": {
    "scripts": ["hifiChrome.js"],
    "persistent": false
  },

  //needs "default_icon"
  "browser_action": {
    "default_title": "Turn on HiFiLiter"
    "default_icon": {
      "19": "",
      "38": ""
    }
  },

  "manifest_version": 2
}
