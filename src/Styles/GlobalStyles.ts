import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    body {
    
    .App {
  text-align: center;
}


.App-logo {
  height: 40vmin;
  pointer-events: none;
  
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}
       
    }

    .App-link {
    color: #b8ffc3;
    }

    @keyframes App-logo-spin {
    from {
    transform: rotate(0deg);
    }
    to {
    transform: rotate(360deg);
    }
}
    
`;