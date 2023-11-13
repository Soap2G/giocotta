import React, { Component } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default class Captcha extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light', // Set a default theme
      key: Date.now() // Initialize key
    };
  }

  componentDidMount() {
    this.updateTheme();
    this.observer = new MutationObserver(() => {
      this.updateTheme();
    });
    this.observer.observe(document.body, { attributeFilter: ['data-theme'] });
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  updateTheme = () => {
    const themenow = document.body.getAttribute('data-theme');
    const newTheme = themenow === 'dark' ? 'dark' : 'light';
    if (newTheme !== this.state.theme) {
      this.setState({ 
        theme: newTheme,
        key: Date.now() // Update key to force re-render
      });
    }
  };

  render() {
    return (
      <ReCAPTCHA
        key={this.state.key} // Use state.key here
        sitekey="6Lf1Hg0pAAAAAODPOSjuedVCp7L13STk0kX878qk"
        onChange={this.props.handleCaptchaChange}
        theme={this.state.theme}
      />
    );
  }
}
