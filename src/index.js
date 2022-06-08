import "./input.css";
function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('../img/', true, /\.js$/));
