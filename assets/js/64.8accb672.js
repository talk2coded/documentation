(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{432:function(t,s,a){"use strict";a.r(s);var e=a(9),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"integrate-a-relevant-search-bar-to-your-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-a-relevant-search-bar-to-your-documentation"}},[t._v("#")]),t._v(" Integrate a relevant search bar to your documentation")]),t._v(" "),a("p",[t._v("You might have noticed the search bar in this documentation.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tuto-searchbar-for-docs/vuepress-searchbar-demo.gif",alt:"MeiliSearch docs search bar demo"}})]),t._v(" "),a("p",[t._v("And you are probably wanting the same for your own documentation!")]),t._v(" "),a("p",[t._v("This tutorial will guide you through the step of building a relevant and powerful search bar for your documentation 🚀")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#run-a-meilisearch-instance"}},[t._v("Run a MeiliSearch Instance")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#scrap-your-content"}},[t._v("Scrap your content")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#integrate-the-search-bar"}},[t._v("Integrate the Search Bar")])])]),t._v(" "),a("h2",{attrs:{id:"run-a-meilisearch-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-meilisearch-instance"}},[t._v("#")]),t._v(" Run a MeiliSearch Instance")]),t._v(" "),a("p",[t._v("First of all, you need your documentation content to be scraped and pushed into a MeiliSearch instance.")]),t._v(" "),a("p",[t._v("You can install and run MeiliSearch on your machine using "),a("code",[t._v("curl")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -L https://install.meilisearch.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sh")]),t._v("\n$ ./meilisearch --master-key"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("myMasterKey\n")])])]),a("p",[t._v("There are "),a("RouterLink",{attrs:{to:"/guides/introduction/quick_start_guide.html#download-and-launch"}},[t._v("other ways to install MeiliSearch")]),t._v(".")],1),t._v(" "),a("p",[t._v("MeiliSearch is open-source and can run either on you server or on any cloud provider.")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("The host URL and the API key you will provide in the next steps correspond to the credentials of this MeiliSearch instance."),a("br"),t._v("\nIn the example above, the host URL is "),a("code",[t._v("http://localhost:7700")]),t._v(" and the API key is "),a("code",[t._v("myMasterKey")]),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"scrap-your-content"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scrap-your-content"}},[t._v("#")]),t._v(" Scrap your Content")]),t._v(" "),a("p",[t._v("The Meili team provides and maintains a "),a("a",{attrs:{href:"https://github.com/meilisearch/docs-scraper",target:"_blank",rel:"noopener noreferrer"}},[t._v("scraper tool"),a("OutboundLink")],1),t._v(" to automatically read the content of your website and store it into an index in MeiliSearch.")]),t._v(" "),a("h3",{attrs:{id:"configuration-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-file"}},[t._v("#")]),t._v(" Configuration File")]),t._v(" "),a("p",[t._v("The scraper tool needs a configuration file to know what content you want to scrape, this is done by providing selectors (e.g. the HTML tag).")]),t._v(" "),a("p",[t._v("Here is an example of a basic configuration file:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"index_uid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"start_urls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.example.com/doc/"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sitemap_urls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.example.com/sitemap.xml"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"stop_urls"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selectors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl0"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-lvl0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Documentation"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl1"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"selector"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-lvl1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"global"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"default_value"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Chapter"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl2"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content .docs-lvl2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl3"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content .docs-lvl3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl4"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content .docs-lvl4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl5"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content .docs-lvl5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"lvl6"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content .docs-lvl6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".docs-content p, .docs-content li"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("index_uid")]),t._v(" field is the index identifier in your MeiliSearch instance in which your website content is stored. The scraping tool will create a new index if it does not exist.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("docs-content")]),t._v(" class is the main container of the textual content in this example. Most of the time, this tag is a "),a("code",[t._v("<main>")]),t._v(" or an "),a("code",[t._v("<article>")]),t._v(" HTML element.")]),t._v(" "),a("p",[a("code",[t._v("lvlX")]),t._v(" selectors should use the standard title tags like "),a("code",[t._v("h1")]),t._v(", "),a("code",[t._v("h2")]),t._v(", "),a("code",[t._v("h3")]),t._v(", etc. You can also use static classes. Set a unique "),a("code",[t._v("id")]),t._v(" or "),a("code",[t._v("name")]),t._v(" attribute to these elements.")]),t._v(" "),a("p",[t._v("Every searchable "),a("code",[t._v("lvl")]),t._v(" elements outside this main documentation container (for instance, in a sidebar) must be "),a("code",[t._v("global")]),t._v(" selectors. They will be globally picked up and injected to every document built from your page.")]),t._v(" "),a("p",[t._v("If you use Vuepress for your documentation, you can check out the "),a("a",{attrs:{href:"https://github.com/meilisearch/documentation/blob/master/.vuepress/docs-scraper/docs-scraper.config.json",target:"_blank",rel:"noopener noreferrer"}},[t._v("configuration file"),a("OutboundLink")],1),t._v(" we use in production."),a("br"),t._v("\nIn our case, the main container is "),a("code",[t._v("theme-default-content")]),t._v(" and the selector the titles and sub-titles are "),a("code",[t._v("h1")]),t._v(", "),a("code",[t._v("h2")]),t._v("...")]),t._v(" "),a("h3",{attrs:{id:"run-the-scraper"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-the-scraper"}},[t._v("#")]),t._v(" Run the Scraper")]),t._v(" "),a("p",[t._v("You can run the scraper with Docker. With our local MeiliSearch instance set up at "),a("RouterLink",{attrs:{to:"/resources/howtos/search_bar_for_docs.html#run-a-meilisearch-instance"}},[t._v("the first step")]),t._v(", we run:")],1),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ docker run -t --rm "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --network"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILISEARCH_HOST_URL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http://localhost:7700'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("MEILISEARCH_API_KEY")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myMasterKey'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("absolute-path-to-your-config-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":/docs-scraper/config.json "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    getmeili/docs-scraper:latest pipenv run ./docs_scraper config.json\n")])])]),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("If you don't want to use Docker, here are "),a("a",{attrs:{href:"https://github.com/meilisearch/docs-scraper#installation-and-usage",target:"_blank",rel:"noopener noreferrer"}},[t._v("other ways to run the scraper"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("p",[a("code",[t._v("<absolute-path-to-your-config-file>")]),t._v(" should be the "),a("strong",[t._v("absolute")]),t._v(" path of your configuration file defined at "),a("RouterLink",{attrs:{to:"/resources/howtos/search_bar_for_docs.html#configuration-file"}},[t._v("the previous step")]),t._v(".")],1),t._v(" "),a("p",[t._v("The API key you must provide should have the permissions to add documents into your MeiliSearch instance. In a production environment, we recommend providing the private key instead of the master key, as it is safer and it has enough permissions to perform such requests."),a("br"),t._v(" "),a("em",[t._v("More about "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[t._v("MeiliSearch authentication")]),t._v(".")],1)]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("We recommend running the scraper at each new deployment of your documentation, "),a("a",{attrs:{href:"https://github.com/meilisearch/documentation/blob/master/.github/workflows/gh-pages-scraping.yml",target:"_blank",rel:"noopener noreferrer"}},[t._v("as we do for the MeiliSearch's one"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"integrate-the-search-bar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#integrate-the-search-bar"}},[t._v("#")]),t._v(" Integrate the Search Bar")]),t._v(" "),a("p",[t._v("If your documentation is not a Vuepress application, you can directly go to "),a("a",{attrs:{href:"#for-all-kinds-of-documentation"}},[t._v("this section")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"for-a-vuepress-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-a-vuepress-documentation"}},[t._v("#")]),t._v(" For a Vuepress Documentation")]),t._v(" "),a("p",[t._v("If you use Vuepress for your documentation, we provide a "),a("a",{attrs:{href:"https://github.com/meilisearch/vuepress-plugin-meilisearch",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuepress plugin"),a("OutboundLink")],1),t._v(". This plugin is used in production in the MeiliSearch documentation.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tuto-searchbar-for-docs/vuepress-plugin-example.png",alt:"Vuepress plugin example"}})]),t._v(" "),a("p",[t._v("In your Vuepress project:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" vuepress-plugin-meilisearch\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" vuepress-plugin-meilisearch\n")])])]),a("p",[t._v("In your "),a("code",[t._v("config.js")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"vuepress-plugin-meilisearch"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hostUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-meilisearch-host-url>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"apiKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"<your-meilisearch-api-key>"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"indexUid"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"docs"')]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("hostUrl")]),t._v(" and the "),a("code",[t._v("apiKey")]),t._v(" fields are the credentials of the MeiliSearch instance. Following on from this tutorial, they are respectively "),a("code",[t._v("http://localhost:7700")]),t._v(" and "),a("code",[t._v("myMasterKey")]),t._v("."),a("br"),t._v(" "),a("code",[t._v("indexUid")]),t._v(" is the index identifier in your MeiliSearch instance in which your website content is stored. It has been defined in the "),a("RouterLink",{attrs:{to:"/resources/howtos/search_bar_for_docs.html#configuration-file"}},[t._v("config file")]),t._v(".")],1),t._v(" "),a("p",[t._v("These three fields are mandatory, but more "),a("a",{attrs:{href:"https://github.com/meilisearch/vuepress-plugin-meilisearch#customization",target:"_blank",rel:"noopener noreferrer"}},[t._v("optional fields are available"),a("OutboundLink")],1),t._v(" to customize your search bar.")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("Since the configuration file is public, we strongly recommend providing the MeiliSearch public key in a production environment, which is enough to perform search requests."),a("br"),t._v("\nRead more about "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[t._v("MeiliSearch authentication")]),t._v(".")],1)]),t._v(" "),a("h3",{attrs:{id:"for-all-kinds-of-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#for-all-kinds-of-documentation"}},[t._v("#")]),t._v(" For All Kinds of Documentation")]),t._v(" "),a("p",[t._v("If you don't use Vuepress for your documentation, we provide a "),a("a",{attrs:{href:"https://github.com/meilisearch/docs-searchbar.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("front-end SDK"),a("OutboundLink")],1),t._v(" to integrate a powerful and relevant search bar to any documentation website.")]),t._v(" "),a("p",[a("img",{attrs:{src:"/tuto-searchbar-for-docs/docs-searchbar-example.png",alt:"docs-searchbar.js example"}})]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token doctype"}},[t._v("<!DOCTYPE html>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("link")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rel")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("stylesheet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("href")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/docs-searchbar.js@{version}/dist/cdn/docs-searchbar.min.css"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("search-bar-input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://cdn.jsdelivr.net/npm/docs-searchbar.js@{version}/dist/cdn/docs-searchbar.min.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("docsSearchBar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        hostUrl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<your-meilisearch-host-url>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        apiKey"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<your-meilisearch-api-key>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        indexUid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'docs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        inputSelector"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#search-bar-input'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        debug"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Set debug to true if you want to inspect the dropdown")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("The "),a("code",[t._v("hostUrl")]),t._v(" and the "),a("code",[t._v("apiKey")]),t._v(" fields are the credentials of the MeiliSearch instance. Following on from this tutorial, they are respectively "),a("code",[t._v("http://localhost:7700")]),t._v(" and "),a("code",[t._v("myMasterKey")]),t._v("."),a("br"),t._v(" "),a("code",[t._v("indexUid")]),t._v(" is the index identifier in your MeiliSearch instance in which your website content is stored. It has been defined in the "),a("RouterLink",{attrs:{to:"/resources/howtos/search_bar_for_docs.html#configuration-file"}},[t._v("config file")]),t._v("."),a("br"),t._v(" "),a("code",[t._v("inputSelector")]),t._v(" is the "),a("code",[t._v("id")]),t._v(" attribute of the HTML search input tag.")],1),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("We strongly recommend providing the MeiliSearch public key in a production environment, which is enough to perform search requests."),a("br"),t._v("\nRead more about "),a("RouterLink",{attrs:{to:"/guides/advanced_guides/authentication.html"}},[t._v("MeiliSearch authentication")]),t._v(".")],1)]),t._v(" "),a("p",[t._v("The default behavior of this library fits perfectly for a documentation search bar, but you might need "),a("a",{attrs:{href:"https://github.com/meilisearch/docs-searchbar.js#customization",target:"_blank",rel:"noopener noreferrer"}},[t._v("some customizations"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block note"},[a("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),a("p",[t._v("For more concrete examples, you can check out this "),a("a",{attrs:{href:"https://github.com/meilisearch/docs-searchbar.js/blob/master/scripts/playground.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("basic HTML file"),a("OutboundLink")],1),t._v(" or "),a("a",{attrs:{href:"https://github.com/meilisearch/vuepress-plugin-meilisearch/blob/master/MeiliSearchBox.vue",target:"_blank",rel:"noopener noreferrer"}},[t._v("this more advanced Vue file"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("h2",{attrs:{id:"what-s-next"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-s-next"}},[t._v("#")]),t._v(" What's next?")]),t._v(" "),a("p",[t._v("At this point you should have a working search engine on your website, congrats! 🎉"),a("br"),t._v("\nYou can check "),a("RouterLink",{attrs:{to:"/resources/tutorials/running_production.html"}},[t._v("this tutorial")]),t._v(" if you now want to run MeiliSearch in production!")],1)])}),[],!1,null,null,null);s.default=n.exports}}]);