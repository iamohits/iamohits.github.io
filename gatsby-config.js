module.exports = {
  siteMetadata: {
    title: `IAMohit`,
    description: `Mohit Shrivastava is an Indian Software Engineer, with 1st-class MCA. I have an extreme passion of working with everything which involves development, automation & engineering.`,
    author: `@mohit5783`,
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: '/custom/',
        https: true,
        www: false,
        SymLinksIfOwnerMatch: true,
        host: 'iamohit.com',
        redirect: [
          'RewriteRule ^not-existing-url/?$ /existing-url [R=301,L,NE]',
          {
            from: 'http://iamohit.com',
            to: 'https://iamohit.com',
          },
          {
            from: 'http://www.iamohit.com',
            to: 'https://iamohit.com',
          },
          {
            from: 'https://www.iamohit.com',
            to: 'https://iamohit.com',
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-apiserver",
      options: {
        // Type prefix of entities from server
        typePrefix: "internal__",

        SameSite: "None",
        // The url, this should be the endpoint you are attempting to pull data from
        //answers?order=desc&sort=votes&site=stackoverflow&filter=!Fcb(AXxRvigECiH0*bMY1K)8Wi&key=8mt9qlAuTSwQ3aql7APN3Q((
        url: `https://api.stackexchange.com/2.2/users/3796048/answers?order=desc&sort=votes&site=stackoverflow&filter=!Fcb(AXxRvigECiH0*bMY1K)8Wi&key=8mt9qlAuTSwQ3aql7APN3Q((`,

        method: "get",

        headers: {
          "Content-Type": "application/json"
        },

        // Request body
        data: {},

        // Name of the data to be downloaded.  Will show in graphQL or be saved to a file
        // using this name. i.e. posts.json
        name: `soposts`,

        // Nested level of entities in response object, example: `data.posts`
        //entityLevel: `data.soposts`,

        // Define schemaType to normalize blank values
        // example:
        // const postType = {
        //   "items": [
        //     {
        //       "owner": {
        //         "reputation": 12848,
        //         "user_id": 3796048,
        //         "user_type": "registered",
        //         "accept_rate": 88,
        //         "profile_image": "https://i.stack.imgur.com/s49Fs.png?s=128&g=1",
        //         "display_name": "Mohit Shrivastava",
        //         "link": "https://stackoverflow.com/users/3796048/mohit-shrivastava"
        //       },
        //       "is_accepted": false,
        //       "score": 56,
        //       "last_activity_date": 1573632133,
        //       "last_edit_date": 1592644375,
        //       "creation_date": 1443667628,
        //       "answer_id": 32878668,
        //       "question_id": 32878549,
        //       "title": "What&#39;s with the dollar sign ($&quot;string&quot;)",
        //       "body": "<blockquote>\n<p><a href=\"https://msdn.microsoft.com/en-us/library/dn961160.aspx\" rel=\"noreferrer\">String Interpolation</a></p>\n<p>is a concept that languages like Perl have had for quite a while, and\nnow we’ll get this ability in C# as well. In String Interpolation, we\nsimply prefix the string with a $ (much like we use the @ for verbatim\nstrings).  Then, we simply surround the expressions we want to\ninterpolate with curly braces (i.e. { and }):</p>\n</blockquote>\n<p>It looks a lot like the String.Format() placeholders, but instead of an index, it is the expression itself inside the curly braces.  In fact, it shouldn’t be a surprise that it looks like String.Format() because that’s really all it is – syntactical sugar that the compiler treats like String.Format() behind the scenes.</p>\n<p>A great part is, the compiler now maintains the placeholders for you so you don’t have to worry about indexing the right argument because you simply place it right there in the string.</p>\n<p>C# string interpolation is a method of <strong>concatenating,formatting and manipulating</strong> strings. This feature was introduced in C# 6.0. Using string interpolation, we can use objects and expressions as a part of the <a href=\"https://www.c-sharpcorner.com/article/understanding-string-interpolation-in-c-sharp/\" rel=\"noreferrer\">string interpolation</a> operation.</p>\n<p>Syntax of string interpolation starts with a ‘$’ symbol and expressions are defined within a bracket {} using the following syntax.</p>\n<pre><code>{&lt;interpolatedExpression&gt;[,&lt;alignment&gt;][:&lt;formatString&gt;]}  \n</code></pre>\n<p>Where:</p>\n<ul>\n<li><strong>interpolatedExpression</strong> - The expression that produces a result to be formatted</li>\n<li><strong>alignment</strong> - The constant expression whose value defines the minimum number of characters in the string representation of the\nresult of the interpolated expression. If positive, the string\nrepresentation is right-aligned; if negative, it's left-aligned.</li>\n<li><strong>formatString</strong> - A format string that is supported by the type of the expression result.</li>\n</ul>\n<p>The following code example concatenates a string where an object, author as a part of the string interpolation.</p>\n<pre><code>string author = &quot;Mohit&quot;;  \nstring hello = $&quot;Hello {author} !&quot;;  \nConsole.WriteLine(hello);  // Hello Mohit !\n</code></pre>\n<p>Read more on <a href=\"http://geekswithblogs.net/BlackRabbitCoder/archive/2015/03/26/c.net-little-wonders-string-interpolation-in-c-6.aspx\" rel=\"noreferrer\">C#/.NET Little Wonders: String Interpolation in C# 6</a></p>\n"
        //     },
        //   ]
        // },
        // schemaType: postType,

        // Request parameters
        // Only available from version 2.1.0
        params: {
          per_page: 1
        },

        // Simple authentication, optional
        // auth: {
        //   username: "myusername",
        //   password: "supersecretpassword1234"
        // },
        // enable disk caching
        allowCache: false,
        // if allowCache is true, then the cache will be purged after the
        // specified amount of time
        maxCacheDurationSeconds: 60 * 60 * 24,

        // Advanced authentication for Auth0
        // Only available from version 2.1.0
        // auth0Config: {
        //   method: "POST",
        //   url: "https://MyAuth0Domain/oauth/token",
        //   headers: { "content-type": "application/json" },
        //   data: {
        //     grant_type: "password",
        //     username: "myusername",
        //     password: "PassAWordHere",
        //     audience: "Auth0APIAudience",
        //     scope: "openid",
        //     client_id: "AUTH0_CLIENT_ID",
        //     client_secret: "AUTH0_SECRET"
        //   },
        //   json: true
        // },

        // Optional payload key name if your api returns your payload in a different key
        // Default will use the full response from the http request of the url
        payloadKey: `items`,

        // Optionally save the JSON data to a file locally
        // Default is false
        localSave: true,

        //  Required folder path where the data should be saved if using localSave option
        //  This folder must already exist
        path: `${__dirname}/src/content/`,

        // Optionally include some output when building
        // Default is false
        verboseOutput: false, // For debugging purposes

        // Optionally skip creating nodes in graphQL.  Use this if you only want
        // The data to be saved locally
        // Default is false
        skipCreateNode: true, // skip import to graphQL, only use if localSave is all you want

        // Optionally re-source data when it changes and
        // `gatsby develop` is running.
        // Requires `ENABLE_GATSBY_REFRESH_ENDPOINT=true`.
        // See https://www.gatsbyjs.org/docs/environment-variables/#reserved-environment-variables
        // Default is false
        enableDevRefresh: true,

        // Optionally override key used to re-source data
        // when `gatsby develop` is running.
        // Requires `enableDevRefresh: true`.
        // See setting directly above this one.
        // See also https://github.com/gatsbyjs/gatsby/issues/14653
        // Default is `id`
        refreshId: `id`,

        // Pass an array containing any number of the entity configuration properties (except verbose, auth0Config),
        // any not specified are defaulted to the general properties that are specified
        // Only available from version 2.1.0
        // entitiesArray: [
        //   {
        //     url: `https://api.stackexchange.com/2.2/users/3796048/tags/c%23%20php/top-answers?pagesize=20&order=desc&sort=activity&site=stackoverflow&key=8mt9qlAuTSwQ3aql7APN3Q((&filter=!-*f(6t0WW)1e`,
        //     method: "get",
        //     headers: {
        //       "Content-Type": "application/json"
        //     },
        //     name: `posts`,
        //     // optional paging
        //     calculateNextPage: (curUrl, response, context) => {
        //       let page = 2
        //       if (context.page) {
        //         page = context.page + 1
        //       }
        //       context.page = page
        //       const url = `http://yourapi.com/api/v1/posts?page=${page}`
        //       const hasNext = response.data.length >= 100
        //       return { url, hasNext }
        //     }   
        //   }
        // ]
      }
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg'],
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `IAMohit`,
        short_name: `mohit`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/iamohit.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
