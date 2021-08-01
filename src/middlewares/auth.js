export default function auth(router) {
  const isAuth = localStorage.getItem("token");
  if (isAuth) {
    return true;
  } else {
    router.push({ name: "home" });
    return false;
  }
}
