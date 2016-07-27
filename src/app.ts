
import "hello";

if (__DEVELOPMENT__) {
  __webpack_public_path__ = "http://localhost:8080/assets/";
}

if (module.hot) {
    module.hot.decline();
}
