import { h } from "preact";
import habitat from "preact-habitat";

import App from "./components/app";

export default class WppWidget {
  constructor() {
    const _habitat = habitat(App);

    _habitat.render({
      selector: 'body',
      clean: true
    });
  }
}


