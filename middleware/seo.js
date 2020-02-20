export default function(req, res, next) {
  const shouldRedirect = ![
    '/mediation-numerique',
    '/employeurs',
    '/_loading/sse'
  ].includes(req.url)
  if (req.url === '/') {
    res.writeHead(301, { Location: '/employeurs' })
    res.end()
  } else if (shouldRedirect) {
    res.writeHead(301, { Location: `https://pix.fr${req.url}` })
    res.end()
  } else {
    next()
  }
}
