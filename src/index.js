// @flow
import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class Iubenda extends PureComponent {
  componentDidMount() {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.innerHTML =
      '!function(e,t){var n=function(){var e=t.createElement("script"),n=t.getElementsByTagName("script")[0];e.src="https://cdn.iubenda.com/iubenda.js",n.parentNode.insertBefore(e,n)};e.addEventListener?e.addEventListener("load",n,!1):e.attachEvent?e.attachEvent("onload",n):e.onload=n}(window,document);';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    const { id, styling, children, type } = this.props;
    const styleTypes = {
      nostyle: "iubenda-nostyle no-brand iubenda-embed",
      black: "iubenda-black no-brand iubenda-embed",
      white: "iubenda-white no-brand iubenda-embed"
    };
    const makeUrl = (prId, prType) => {
      if (prType === "cookie") {
        return `https://www.iubenda.com/privacy-policy/${prId}/cookie-policy`;
      }
      if (prType === "privacy") {
        return `https://www.iubenda.com/privacy-policy/${prId}`;
      }
      return `https://www.iubenda.com/${prType}/${prId}`;
    };

    return (
      <a href={makeUrl(id, type)} className={styleTypes[styling]}>
        {children}
      </a>
    );
  }
}

Iubenda.propTypes = {
  id: PropTypes.string.isRequired,
  styling: PropTypes.string,
  children: PropTypes.node,
  type: PropTypes.string
};

Iubenda.defaultProps = {
  styling: "nostyle",
  children: "Privacy Policy",
  type: "privacy"
};
