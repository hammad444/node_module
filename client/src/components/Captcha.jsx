import SliderCaptcha from '@react-slider-captcha/react';

function verifiedCallback(token) {
  console.log('Captcha token: ' + token);
}

function Captcha() {
  return (
    <SliderCaptcha
      create="https://example.com/captcha/create"
      verify="https://example.com/captcha/verify"
      callback={verifiedCallback}
    />
  );
}

export default Captcha