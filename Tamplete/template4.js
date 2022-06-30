module.exports = ({ name, price1, price2, receiptId }) => {
  const today = new Date();
  return `
    <!doctype html>
    <html>
       <head>
       <meta charset="utf-8">
       <title>PDF Result Template</title>
       <style>
       body {
        font-family: "Muli", sans-serif;
      }

      .font-14-bold {
        font-size: 14px;
        font-weight: medium;
        line-height: 20px;
      }

      .font-12-bold {
        font-size: 12px;
        font-weight: medium;
        line-height: 20px;
      }

      .font-12 {
        font-size: 12px;
        line-height: 20px;
      }

      .percent {
        font-size: 10px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
      }

      .item-name {
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
      }

      .item-desc {
        font-size: 10px;
        line-height: 20px;
        color: rgba(0, 0, 0, 0.5);
      }

      .party-address-title {
        font-size: 14px;
        line-height: 20px;
        font-weight: bold;
      }

      .party-name {
        font-size: 12px;
        line-height: 15px;
        font-weight: bold;
      }

      .party-address {
        font-size: 10px;
        line-height: 14px;
      }

      .inv-detail {
        font-size: 12px;
        line-height: 20px;
        font-weight: bold;
      }

      .extra-detail {
        font-size: 10px;
        line-height: 20px;
      }

      .company-address,
      .gst-details,
      .party-address {
        font-size: 12px;
        font-weight: normal;
        line-height: 16px;
      }

      .logo {
        width: 100px;
        height: 100px;
      }

      .company-name {
        font-size: 16px;
        line-height: 20px;
        font-weight: bold;
      }

      .signature {
        height: 61px;
        width: 114px;
      }

      .signature img {
        width: 100%;
      }

      .space-95 {
        width: 95% !important;
        margin: auto;
      }

      .absolute-position {
        position: absolute;
        right: 40px;
      }

      /*column-section*/

      .column-10 {
        width: 10%;
        display: table-cell;
        vertical-align: top;
      }

      .column-20 {
        width: 20%;
        display: table-cell;
        vertical-align: top;
      }

      .column-25 {
        width: 25%;
        display: table-cell;
        vertical-align: top;
      }

      .column-30 {
        width: 30%;
        display: table-cell;
        vertical-align: top;
      }

      .column-33 {
        width: 33.33%;
        display: table-cell;
        vertical-align: top;
      }

      .column-35 {
        width: 35%;
        display: table-cell;
        vertical-align: top;
      }

      .column-40 {
        width: 40%;
        display: table-cell;
        vertical-align: top;
      }

      .column-45 {
        width: 45%;
        display: table-cell;
        vertical-align: top;
      }

      .column-50 {
        width: 50%;
        display: table-cell;
        vertical-align: top;
      }

      .column-55 {
        width: 55%;
        display: table-cell;
        vertical-align: top;
      }

      .column-60 {
        width: 60%;
        display: table-cell;
        vertical-align: top;
      }

      .column-70 {
        width: 70%;
        display: table-cell;
        vertical-align: top;
      }

      .column-75 {
        width: 75%;
        display: table-cell;
        vertical-align: top;
      }

      .column-80 {
        width: 80%;
        display: table-cell;
        vertical-align: top;
      }

      .column-90 {
        width: 80%;
        display: table-cell;
        vertical-align: top;
      }

      .column-100 {
        width: 100%;
        display: table-cell;
        vertical-align: top;
      }

      .container {
        display: table;
        border-collapse: collapse;
        width: 100%;
      }

      /*table display css*/

      .table {
        display: table;
      }

      .row {
        display: table-row;
      }

      .table-cell {
        display: table-cell;
      }

      .table-header {
        display: table-cell;
        height: 30px;
        vertical-align: middle;
        /*padding-left: 5px;*/
        /*padding-right: 5px;*/
        text-align: center;
        font-size: 10px;
        line-height: 20px;
        font-weight: bold;
      }

      .table-row-cell,
      .table-amt-cell {
        display: table-cell;
        height: 30px;
        padding-left: 2px;
        padding-right: 2px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
      }

      .table-charges-cell {
        display: table-cell;
        height: 30px;
        padding-left: 2px;
        padding-right: 2px;
        font-size: 10px;
        line-height: 20px;
        text-align: center;
      }

      .multi-row-header {
        display: table-cell;
        height: 49px;
        vertical-align: middle;
        text-align: center;
        font-size: 10px;
        line-height: 20px;
        font-weight: bold;
      }

      .multi-row-cell {
        display: table-cell;
        height: 49px;
        vertical-align: middle;
        font-size: 10px;
        line-height: 20px;
        text-align: right;
      }

      .hsn .multi-row-cell {
        vertical-align: middle;
      }

      .hsn .table-row-cell {
        vertical-align: middle;
      }

      .table-amt-cell {
        height: 30px;
      }

      .padding-top-3 {
        padding-top: 3px;
      }

      .padding-top-5 {
        padding-top: 5px;
      }

      .padding-right-5 {
        padding-right: 5px;
      }

      .padding-5-exclude-bt {
        padding-top: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }

      .padding-5-exclude-tp {
        padding-bottom: 5px;
        padding-left: 5px;
        padding-right: 5px;
      }

      .padding-5 {
        padding: 5px;
      }

      .padding-bottom-10 {
        padding-bottom: 10px;
      }

      .padding-left-10 {
        padding-left: 10px;
      }

      .padding-top-10 {
        padding-top: 10px;
      }

      .padding-10 {
        padding: 10px;
      }

      .padding-left-30 {
        padding-left: 30px;
      }

      .padding-right-10 {
        padding-right: 10px;
      }

      .padding-right-30 {
        padding-right: 30px;
      }

      /*border-section*/
      .border-top-1 {
        border-top: 1px solid black;
      }

      .border-bottom-1 {
        border-bottom: 1px solid black;
      }

      .border-left-1 {
        border-left: 1px solid black;
      }

      .border-right-1 {
        border-right: 1px solid black;
      }

      .border-1 {
        border: 1px solid black;
      }

      .border-top-3 {
        border-top: 3px solid black;
      }

      .border-bottom-3 {
        border-bottom: 3px solid black;
      }

      .border-bottom-5 {
        border-bottom: 5px solid black;
      }

      .border-bottom-11 {
        border-bottom: 11px solid black;
      }

      .border-exclude-top {
        border-right: 1px solid black;
        border-bottom: 1px solid black;
        border-left: 1px solid black;
      }

      .grey-border-2 {
        border-bottom: 2px solid #ececec;
      }

      .border-top-3 {
        border-top: 3px solid black;
      }

      .grey-border-top-3 {
        border-top: 3px solid #000000;
      }

      .green-border-top-3 {
        border-top: 3px solid #407400;
      }

      .blue-border-top-3 {
        border-top: 3px solid #0b6a9f;
      }

      .violet-border-top-3 {
        border-top: 3px solid #840bb2;
      }

      .pink-border-top-3 {
        border-top: 3px solid #c11111;
      }

      .rich-blue-border-top-3 {
        border-top: 3px solid #5b57ae;
      }

      .gold-border-top-3 {
        border-top: 3px solid #cd9d23;
      }

      .orange-border-top-3 {
        border-top: 3px solid #bf6200;
      }

      .border-bottom-3 {
        border-bottom: 3px solid black;
      }

      .grey-border-bottom-3 {
        border-bottom: 3px solid #000000;
      }

      .green-border-bottom-3 {
        border-bottom: 3px solid #407400;
      }

      .blue-border-bottom-3 {
        border-bottom: 3px solid #0b6a9f;
      }

      .violet-border-bottom-3 {
        border-bottom: 3px solid #840bb2;
      }

      .pink-border-bottom-3 {
        border-bottom: 3px solid #c11111;
      }

      .rich-blue-border-bottom-3 {
        border-bottom: 3px solid #5b57ae;
      }

      .gold-border-bottom-3 {
        border-bottom: 3px solid #cd9d23;
      }

      .orange-border-bottom-3 {
        border-bottom: 3px solid #bf6200;
      }

      .border-bottom-5 {
        border-bottom: 5px solid black;
      }

      .grey-border-11 {
        border-bottom: 11px solid #000000;
      }

      .green-border-11 {
        border-bottom: 11px solid #407400;
      }

      .blue-border-11 {
        border-bottom: 11px solid #0b6a9f;
      }

      .violet-border-11 {
        border-bottom: 11px solid #840bb2;
      }

      .pink-border-11 {
        border-bottom: 11px solid #c11111;
      }

      .rich-blue-border-11 {
        border-bottom: 11px solid #5b57ae;
      }

      .gold-border-11 {
        border-bottom: 11px solid #cd9d23;
      }

      .orange-border-11 {
        border-bottom: 11px solid #bf6200;
      }

      /*height section*/

      .ht-24 {
        height: 24px;
      }

      .ht-25 {
        height: 25px;
      }

      .ht-40 {
        height: 40px;
      }

      .ht-49 {
        height: 49px;
      }

      .ht-81 {
        height: 81px;
      }

      /*widths % section*/
      .width-10 {
        width: 10%;
      }

      .width-20 {
        width: 20%;
      }

      .width-25 {
        width: 25%;
      }

      .width-33 {
        width: 33.33%;
      }

      .width-40 {
        width: 40%;
      }

      .width-45 {
        width: 45%;
      }

      .width-50 {
        width: 50%;
      }

      .width-55 {
        width: 55%;
      }

      .width-75 {
        width: 75%;
      }

      .width-80 {
        width: 80%;
      }

      .width-100 {
        width: 100%;
      }

      /*width px section*/

      .wdt-20 {
        width: 20px;
        max-width: 20px;
      }

      .wdt-30 {
        width: 30px;
      }

      .wdt-59 {
        width: 59px;
      }

      .wdt-65 {
        width: 65px;
      }

      .wdt-71 {
        width: 71px;
      }

      .wdt-78 {
        width: 78px;
      }

      .wdt-79 {
        width: 79px;
      }

      .wdt-80 {
        width: 80px;
      }

      .wdt-86 {
        width: 86px;
      }

      .wdt-91 {
        width: 91px;
      }

      .wdt-180 {
        width: 180px;
      }

      .wdt-103 {
        width: 103px;
      }

      .wdt-140 {
        width: 140px;
      }

      .wdt-153 {
        width: 153px;
      }

      .wdt-195 {
        width: 195px;
      }

      /*utils*/

      .text-center {
        text-align: center;
      }

      .text-left {
        text-align: left;
      }

      .text-right {
        text-align: right;
      }

      .vertical-middle {
        vertical-align: middle;
      }

      .bold {
        font-weight: bold;
      }

      .italic {
        font-style: italic;
      }

      .word-break {
        word-break: break-all;
      }

      /*theme-colors*/

      .grey {
        color: #000000;
      }

      .grey-bg {
        background: #e2e2e2;
      }

      .green {
        color: #407400;
      }

      .green-bg {
        background: #dff0ca;
      }

      .blue {
        color: #0b6a9f;
      }

      .blue-bg {
        background: #cfeaf9;
      }

      .violet {
        color: #840bb2;
      }

      .violet-bg {
        background: #e9ccf4;
      }

      .pink {
        color: #c11111;
      }

      .pink-bg {
        background: #f4cccc;
      }

      .rich-blue {
        color: #5b57ae;
      }

      .rich-blue-bg {
        background: #dbdaf3;
      }

      .gold {
        color: #cd9d23;
      }

      .gold-bg {
        background: #f1e7cf;
      }

      .orange {
        color: #bf6200;
      }

      .orange-bg {
        background: #f9e5cf;
      }

      .grey-background {
        background: #ececec;
      }

      /*margins section*/

      .margin-top-5 {
        margin-top: 5px;
      }

      .margin-top-10 {
        margin-top: 10px;
      }

      .margin-auto {
        margin-left: auto;
        margin-right: auto;
      }

      .margin-left-30 {
        margin-left: 30px;
      }

      .margin-right-30 {
        margin-right: 30px;
      }
       </style>
       </head>
       <body style="background-color: white">
    <div class="main-container">
      <div class="container border_11 grey-border-11">
        <div class="space-95">
          <div class="table width-100">
            <div class="row">
              <div class="column-10 padding-bottom-10 padding-right-10">
                <img
                  class="logo"
                  src="https://storage.googleapis.com/content-flobooks-in/flobooks/company_logo.png"
                />
              </div>
              <div
                class="column-90 padding-bottom-10 text-left vertical-middle"
              >
                <div class="company-name padding-bottom-10 text_color grey">
                  My BillBook
                </div>
                <div class="company-address">
                  #56, 2nd Floor, 12th Main Road, Sector 6, HSR Layout Land
                  Mark:, next to Rasaganga Veg Restaurant, HSR BDA, Bengaluru,
                  Karnataka 560102
                </div>
                <div class="company-address font-12">Karnataka</div>
                <div class="table width-100 gst-details">
                  <div class="row">
                    <div class="table-cell width-10 padding-top-10">
                      <span class="bold">Mobile:</span> 9930261379
                    </div>
                    <div class="table-cell width-50 padding-top-10">
                      <span class="bold">GSTIN:</span> 29AAGDV9438F1ZR
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container grey-bg">
        <div class="space-95">
          <div class="table width-100">
            <div class="row ht-40 font-12">
              <div class="column-33 vertical-middle">
                <div>Invoice Number</div>
                <div>160</div>
              </div>
              <div class="column-33 vertical-middle">
                <div>Invoice Date</div>
                <div>11-06-2020</div>
              </div>
              <div class="column-33 vertical-middle">
                <div>Due Date</div>
                <div>11-07-2020</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container padding-top-10 space-95">
        <div class="row">
          <div
            class="column-33 font-12 border_bottom_3 padding-top-10 grey-border-bottom-3"
          >
            <div class="bold font-12">BILL TO</div>
            <div class="bold">Rakesh Enterprises</div>
            <div>
              Address: 2nd Floor, 12th Main Road, Sector 6,Mysore, Karnataka,
              570001
            </div>
            <div>Place of supply: Karnataka</div>
          </div>
          <div
            class="column-33 font-12 border_bottom_3 padding-top-10 grey-border-bottom-3"
          >
            <div class="bold font-12">SHIP TO</div>
            <div class="bold">Rakesh Enterprises</div>
            <div>
              2nd Floor, 12th Main Road, Sector 6,Mysore, Karnataka, 570001
            </div>
            <div>Karnataka</div>
          </div>
          <div
            class="column-33 font-12 padding-top-10 border_bottom_3 grey-border-bottom-3"
          >
            <div>
              <span class="bold"> PO Bill No: </span>
              <span>1234565</span>
            </div>
            <div>
              <span class="bold"> E-way Bill No: </span>
              <span> E123455 </span>
            </div>
            <div>
              <span class="bold"> Vehicle No: </span>
              <span> KA-00-9H-6573</span>
            </div>
          </div>
        </div>
      </div>

      <div class="container space-95">
        <div class="row border_bottom_3 padding-top-10 grey-border-bottom-3">
          <div class="wdt-140 table-header">ITEMS</div>
          <div class="wdt-59 table-header">HSN</div>
          <div class="wdt-80 table-header">QTY</div>
          <div class="wdt-71 table-header">MRP</div>
          <div class="wdt-86 table-header">RATE/ITEM</div>
          <div class="wdt-78 table-header">DISCOUNT</div>
          <div class="wdt-78 table-header">TAX</div>
          <div class="wdt-91 table-header">AMOUNT</div>
        </div>
        <div class="row grey-border-2">
          <!-- items section -->
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Samsung A30</div>
            <div class="item-desc">Imei - 7654rtt11231</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1234</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">10000.0</div>
          <div class="wdt-86 table-row-cell">10000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">200.0</div>
            <div class="percent">2.0 %</div>
          </div>
          <div class="wdt-79 table-row-cell">
            <div class="amount">490.0</div>
            <div class="percent">5.0 %</div>
          </div>
          <div class="wdt-91 table-row-cell">10290.0</div>
        </div>
        <div class="row grey-border-2">
          <!-- items section -->
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Samsung S10</div>
            <div class="item-desc">Imei - 6654r6t11381</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1236</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">52000.0</div>
          <div class="wdt-86 table-row-cell">52000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">0.0</div>
            <div class="percent">0.0 %</div>
          </div>
          <div class="wdt-79 table-row-cell">
            <div class="amount">2600.0</div>
            <div class="percent">5.0 %</div>
          </div>
          <div class="wdt-91 table-row-cell">54600.0</div>
        </div>
        <div class="row grey-border-2">
          <!-- items section -->
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Samsung A50</div>
            <div class="item-desc">Imei - 9654rtt11341</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1235</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">20000.0</div>
          <div class="wdt-86 table-row-cell">20000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">400.0</div>
            <div class="percent">2.0 %</div>
          </div>
          <div class="wdt-79 table-row-cell">
            <div class="amount">980.0</div>
            <div class="percent">5.0 %</div>
          </div>
          <div class="wdt-91 table-row-cell">20580.0</div>
        </div>
        <div class="row grey-border-2">
          <!-- items section -->
          <div class="wdt-140 table-row-cell text-left">
            <div class="item-name">Samsung A30</div>
            <div class="item-desc">Imei - 7654rtt11231</div>
          </div>
          <div class="wdt-59 table-row-cell word-break">1234</div>
          <div class="wdt-80 table-row-cell">1.0 PCS</div>
          <div class="wdt-71 table-row-cell">10000.0</div>
          <div class="wdt-86 table-row-cell">10000.0</div>
          <div class="wdt-78 table-row-cell">
            <div class="amount">0.0</div>
            <div class="percent">0.0 %</div>
          </div>
          <div class="wdt-79 table-row-cell">
            <div class="amount">500.0</div>
            <div class="percent">5.0 %</div>
          </div>
          <div class="wdt-91 table-row-cell">10500.0</div>
        </div>
        <div class="row">
          <div class="wdt-140 table-row-cell"></div>
          <div class="wdt-59 table-row-cell"></div>
          <div class="wdt-80 table-row-cell"></div>
          <div class="wdt-71 table-row-cell"></div>
          <div class="wdt-86 table-row-cell bold vertical-middle"></div>
          <div class="wdt-78 table-row-cell"></div>
          <div class="wdt-78 table-row-cell vertical-middle"></div>
          <div class="wdt-91 table-row-cell vertical-middle"></div>
        </div>
        <div class="row">
          <div class="wdt-140 table-row-cell"></div>
          <div class="wdt-59 table-row-cell"></div>
          <div class="wdt-80 table-row-cell"></div>
          <div class="wdt-71 table-row-cell"></div>
          <div class="wdt-86 table-row-cell bold vertical-middle"></div>
          <div class="wdt-78 table-row-cell"></div>
          <div class="wdt-78 table-row-cell vertical-middle"></div>
          <div class="wdt-91 table-row-cell vertical-middle"></div>
        </div>
        <div
          class="row border_top_3 border_bottom_3 grey-border-bottom-3 grey-border-top-3"
        >
          <div class="wdt-140 table-row-cell"></div>
          <div class="wdt-59 table-row-cell"></div>
          <div class="wdt-80 table-row-cell">4.0</div>
          <div class="wdt-71 table-row-cell"></div>
          <div class="wdt-86 table-row-cell bold vertical-middle">SUBTOTAL</div>
          <div class="wdt-78 table-row-cell"></div>
          <div class="wdt-78 table-row-cell vertical-middle">4570.0</div>
          <div class="wdt-91 table-row-cell vertical-middle">95970.0</div>
        </div>
      </div>
      <div class="container space-95">
        <div class="row">
          <div class="column-60">
            <div class="table width-100">
              <div class="font-12-bold padding-top-10">BANK DETAILS</div>
              <div class="table width-100 font-12">
                <div class="row">
                  <div class="column-40">Account Number:</div>
                  <div class="column-60">123455667788990</div>
                </div>
                <div class="row">
                  <div class="column-40">IFSC code:</div>
                  <div class="column-60">SBIN0000811</div>
                </div>
                <div class="row">
                  <div class="column-40">Bank &amp; Branch:</div>
                  <div class="column-60">State Bank of India, AVANIGADDA</div>
                </div>
              </div>
            </div>
            <div class="table width-100">
              <div class="row">
                <div class="column-40 padding-top-10">
                  <div class="font-12-bold">Payment QR code</div>
                  <div class="font-12-bold">UPI Id</div>
                  <div class="font-12">pmcares@sbi</div>
                </div>
              </div>
            </div>
            <div class="table width-100">
              <div class="column-100 padding-top-10">
                <div class="font-12-bold">Terms and Conditions</div>
                <div class="font-12">
                  10 days return policy. Damaged items won't be taken back Bill
                  is compulsory for returning items
                </div>
              </div>
            </div>
          </div>
          <div class="column-40">
            <div class="table width-100 font-12">
              <div class="row text-right">
                <div class="column-50 padding-top-10">Taxable Amount :</div>
                <div class="column-50 padding-top-10">
                  <div><span>₹</span> 91400.0</div>
                </div>
              </div>
              <div class="row text-right">
                <div class="column-50">SGST@2.5 :</div>
                <div class="column-50">
                  <div><span>₹</span> 2285.0</div>
                </div>
              </div>
              <div class="row text-right">
                <div class="column-50">CGST@2.5 :</div>
                <div class="column-50">
                  <div><span>₹</span> 2285.0</div>
                </div>
              </div>
              <div class="row text-right bold border-top-1">
                <div class="column-50">GRAND TOTAL</div>
                <div class="column-50">
                  <div><span>₹</span> 95970.0</div>
                </div>
              </div>
              <div class="row text-right border-top-1">
                <div class="column-50">RECEIVED AMOUNT</div>
                <div class="column-50">
                  <div><span>₹</span> 0.0</div>
                </div>
              </div>
              <div class="row text-right border-top-1">
                <div class="column-50">BALANCE AMOUNT</div>
                <div class="column-50">
                  <div><span>₹</span> 95970.0</div>
                </div>
              </div>
              <!-- <div class="row">
                Ninety Five Thousand Nine Hundred Seventy Rupees
              </div> -->
              <div class="row absolute-position padding-top-10">
                <div class="signature">
                  <img
                    src="https://storage.googleapis.com/content-flobooks-in/flobooks/Signature.png"
                  />
                </div>
                <div class="font-12 text-center">Authorised Signature</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <script src="../scripts/theme.js"></script>
       </body>
       </html>
       `;
};
