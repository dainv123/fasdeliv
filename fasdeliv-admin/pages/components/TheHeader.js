import config from "./../config";

export default function TheHeader() {
  return (
    <div>
      <h1 className="title">
        {config.siteTitle} <a href="#">{config.siteName}</a>
      </h1>
      <p className="description">{config.siteDescription}</p>
    </div>
  )
}
