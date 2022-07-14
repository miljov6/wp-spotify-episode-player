// !!!! - DO NOT MODIFY - !!!!
// THIS FILE IS DEPLOYED AUTOMATICALLY BY MATTv2.
//
//  Deployment info:
//    Updated at:     2021-04-01T16:14:40+00:00
//    Cause:          Manual deployment.
//    Deployment ID:  121331
//    Project:        339
//    Environment:    741 - master
//    MD5:            5f64ba6cb76fbcd82773489d51785bf1
//    Signature:      eyJpdiI6IlJreWNqZjMwcUkxVHZzcm9GaGNhR3c9PSIsInZhbHVlIjoiWnZTbVNSVE9vYzZMYjV4VkdnTUtqU0s5Mm9RV1VHZXFEdjg3RkI5NGVUR2VHRkZrVjRHSnpKWVBrYWRTSHJqUzA1Sk14c2hKTFd5ZDhRSFBLUWFublV2MU5acDhSaVp6N0hoRWt6QTBLK2w4aXJ1bVRJVmNoWmVmc1lXYnpmaEJ5YUFUM1ZieCtnVHVmZEQ0bmM1T1VTVEVEQ2REMnF1aldad3JTbjE1SFgzNktiTWRhaG1aN1dMRFBaRGwzOURuenByNm5hZVRCa29EMkJJamJxOWVFV2Z1UmdOam5uR1RJekI2OEN5aDh5WTNIbkd3M3hJWXlBYTdvUzViZ2FBVWwyWlJwaFlHSUNUOXpnZHBVTWRhbEVDakRsYXVYSDFpZGwyUStIc2NTUmV4RTF0ZUpxNGdcL2NUOSs1U09wc2NcL2p0c3l0cGFCS3JsY0FWZ2ZMWisycmJ1QnhcL1FtenoxTWZxVXRwRGtxa3lKRGR1c0w5UW8wMVwvWWJjZHI1Ym9WRlwvS29FWHkyaFhWQVwvNTI0XC9NRjROd2c9PSIsIm1hYyI6ImVkNzhmZDk0ZDNkNjM0M2U0NDY4Mzk0M2UyODlhYThiZDk5OGE4MGM1MWJmMzMxNTYwZDI5MzAyYzkxYzQ1ZDMifQ==
$(function() {
  var config = {
    qrCode: '#QrCode',
    printButton: '#PrintGiftCard',
    giftCardCode: '#GiftCardDigits'
  };

  var $qrCode = $(config.qrCode);
  // eslint-disable-next-line no-new
  new QRCode($qrCode[0], {
    text: $qrCode.attr('data-identifier'),
    width: 120,
    height: 120,
    imageAltText: theme.strings.qrImageAlt
  });

  $(config.printButton).on('click', function() {
    window.print();
  });

  $(config.giftCardCode).on('focus', this.select);
});
