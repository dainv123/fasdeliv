import config from "./../config";

export default function TheFooter() {
  return (
    <footer>
      <a href="#" >{config.copyRightLabel} (<b>{config.email}</b>)</a>
    </footer>
  )
}
