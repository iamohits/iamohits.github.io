/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
    const headComponents = getHeadComponents()
    const styleHeadComponents = headComponents.filter((component) => component.type === 'style')
    const nonStyleHeadComponents = headComponents.filter((component) => component.type !== 'style')
    replaceHeadComponents([nonStyleHeadComponents, styleHeadComponents])
}