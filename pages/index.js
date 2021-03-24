import React from 'react'
import { Header } from "../components/Header";
import { Main } from "../components/Main";
import Head from 'next/head';

const HomePage = () => {
    return (
       <React.Fragment>
         <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <title>ava collins | simplesthing</title>
          <link
          href="https://fonts.googleapis.com/css?family=Modak|Raleway|Sansita:900i&display=swap"
          rel="stylesheet"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          {/* 🚨 REQUIRED: Web Components polyfill to support Edge and Firefox < 63 */}
          <script src="https://unpkg.com/@webcomponents/webcomponentsjs@2.1.3/webcomponents-loader.js"></script>

          {/* <!-- 💁 OPTIONAL: Intersection Observer polyfill for better performance in Safari and IE11 --> */}
          <script src="https://unpkg.com/intersection-observer@0.5.1/intersection-observer.js"></script>

          {/* <!-- 💁 OPTIONAL: Resize Observer polyfill improves resize behavior in non-Chrome browsers --> */}
          <script src="https://unpkg.com/resize-observer-polyfill@1.5.1/dist/ResizeObserver.js"></script>

          {/* <!-- 💁 OPTIONAL: Fullscreen polyfill is required for experimental AR features in Canary --> */}
          {/* <!--<script src="https://unpkg.com/fullscreen-polyfill@1.0.2/dist/fullscreen.polyfill.js"></script>--> */}

          {/* <!-- 💁 OPTIONAL: Include prismatic.js for Magic Leap support --> */}
          {/* <script src="https://unpkg.com/@magicleap/prismatic@0.18.2/prismatic.min.js"></script> */}
          {/* <!-- Loads <model-viewer> for old browsers like IE11: --> */}
          <script
            noModule
            src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
          ></script>
         </Head>
            <Header />
            <Main />
       </React.Fragment>
    )
}

export default HomePage