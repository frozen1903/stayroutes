// Yapılandırılmış veri (schema.org) için <script type="application/ld+json">.
// Next.js önerisine uygun olarak "<" karakteri kaçışlanır.
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
      }}
    />
  )
}
