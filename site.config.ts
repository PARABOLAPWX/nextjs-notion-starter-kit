import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'c24f95ab00ac405a819b89a09285a916',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'MY blog',
  domain: 'https://chemical-tote-c1f.notion.site/Halfrose-Home-c24f95ab00ac405a819b89a09285a916',
  author: 'HalfRose',

  // open graph metadata (optional)
  description: 'web',

  // social usernames (optional)
//   twitter: 'transitive_bs',
//   github: 'transitive-bullshit',
//   linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
navigationStyle: 'default'
//   navigationStyle: 'custom',
//   navigationLinks: [
//     {
//       title: 'About',
//       pageId: '752b0f1070f5426e95a549bcd1971dfa'
//     },
//     {
//       title: 'Contact',
//       pageId: 'bba2770aa69b44bdbdeb432ecc6d2f9a'
//     }
//   ]
})
