export default function GTMBody() {
  return (
    <div dangerouslySetInnerHTML={{ '__html': html }} />
  )
}

const html = `
  <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5P8JFL4"
  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
  `
