import { createGlobalStyle } from "styled-components";
import bentonsansregular from "./fonts/bentonsansregular.otf";
import bentonsansblack from "./fonts/bentonsansblack.otf";
import bentonsansbook from "./fonts/bentonsansbook.otf";
import bentonsansmedium from "./fonts/bentonsansmedium.otf";
import bentonsansbold from "./fonts/bentonsansbold.otf";

const GlobalStyle = createGlobalStyle`
 @font-face {
    font-family: regular;
    src: local('bentonsansregular'),  url(${bentonsansregular});
}
@font-face {
    font-family: black;
    src: local('bentonsansblack'),  url(${bentonsansblack});
}
@font-face {
    font-family: book;
    src: local('bentonsansbook'),  url(${bentonsansbook});
}
@font-face {
    font-family: medium;
    src: local('bentonsansmedium'),  url(${bentonsansmedium});
}
@font-face {
    font-family: bold;
    src: local('bentonsansbold'),  url(${bentonsansbold});
}
  body {
    margin: 0;
    padding: 0;
    font-family: regular;
  }
`;

export default GlobalStyle;
